/**
 * Data formatter - rename/customise keyname and values as you require, even nested keys and nested values can be defined.
 * 
 * @param {object} obj - data to be formateted
 * @param {string} formatter - key:valuePath, each key value is separated by comma
 * @example "alterName:key" or "alterName:nested.key" or "nested.alterName:key" or "nested.alterName:nested.key"
 * @param {object} options
 * @param {object} options.error - default true, returns error content if any key or value is not found 
 * @param {object} options.oldData - default true, returns object 
 * @returns {object} return modified object along with the provided object
 * 
 * @example
 * const payload = {
    id: "some-id",
    data: {
        theme: "dark"
    },
    portion: {
        id: "portion-id",
        data: {
            name: "section-wrapper"
        }
    }
};
 * const a = dataFormatter(payload, "pid:id,theme:data.theme,prtn.id:portion.id,prtn.name:portion.data.name,something:block", { oldData: false });
 * 
 * console.log(a);
 * output:
 * {
  pid: 'some-id',
  theme: 'dark',
  prtn: { id: 'portion-id', name: 'section' },
  ERRORS: { block: 'not found' }
}
 */
function dataFormatter(obj = {}, formatter = "", options = {}) {
    const { error = true, oldData = true } = options;
    const alterNames = String(formatter).split(",");
    const newData = {};
    const errors = {};

    if (!Object.keys(obj).length) {
        newData["OLD_DATA"] = obj;
        newData["ERRORS"] = "data/object cannot be empty.";
        return newData;
    }

    function getNestedValue(d, k) {
        const keys = String(k).split(".");
        if (!keys.length) return null;
        else return keys.reduce((p, c) => {
            if (Object(p).hasOwnProperty(c)) return p[c];
            errors[c] = "not found";
            return null;
        }, d);
    }

    alterNames.forEach(an => {
        const key = String(an).split(":")[0];
        let value = String(an).split(":")[1];

        if (key.split(".").length === 1) {
            value = getNestedValue(obj, String(an).split(":")[1]);
            if (value) newData[key] = value;
        } else {
            const nestedKeys = String(key).split(".");

            // * Nested key's data mapping
            const nestedKeysData = dataFormatter(obj, `${nestedKeys.slice(1).join(".")}:${value}`, { error: false, oldData: false });

            // * Nested key's data check
            if (Object(newData).hasOwnProperty(nestedKeys[0])) {
                newData[nestedKeys[0]] = { ...newData[nestedKeys[0]], ...nestedKeysData };
            } else newData[nestedKeys[0]] = nestedKeysData;
        }
    });

    if (oldData) newData["OLD_DATA"] = obj;
    if (error && Object.keys(errors).length) newData["ERRORS"] = errors;

    return newData;
}

module.exports = dataFormatter;