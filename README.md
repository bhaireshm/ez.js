### Document

[Link](https://bhaireshm.github.io/ez.js/global.html)

## Functions

<dl>
<dt><a href="#arrayIntoChunks">arrayIntoChunks(arr, n)</a> ⇒</dt>
<dd><p>Convert an array into given chunk(s).</p>
</dd>
<dt><a href="#camelCase">camelCase(str)</a></dt>
<dd></dd>
<dt><a href="#compareObject">compareObject(obj1, obj2)</a> ⇒</dt>
<dd><p>This method compares both key and value of given objects. This even works for nested objects.</p>
</dd>
<dt><a href="#toNumber">toNumber(s)</a> ⇒</dt>
<dd></dd>
<dt><a href="#strToNum">strToNum(data, str)</a> ⇒</dt>
<dd></dd>
<dt><a href="#dataFormatter">dataFormatter(obj, formatter, options)</a> ⇒</dt>
<dd><p>Data formatter - rename/customise keyname and values as you require, even nested keys and nested values can be defined.</p>
</dd>
<dt><a href="#dateDiff">dateDiff(from, to)</a></dt>
<dd></dd>
<dt><a href="#generateRandomString">generateRandomString(length)</a></dt>
<dd></dd>
<dt><a href="#getDiffInHrs">getDiffInHrs(from, to)</a></dt>
<dd></dd>
<dt><a href="#getNestedValue">getNestedValue(d, k)</a> ⇒</dt>
<dd><p>Get nested value from the given object.</p>
</dd>
<dt><a href="#hasOwnProperty">hasOwnProperty(obj, keys)</a></dt>
<dd></dd>
<dt><a href="#isEmpty">isEmpty(data)</a></dt>
<dd></dd>
<dt><a href="#isStrHasSpecialChar">isStrHasSpecialChar(str, pattern)</a></dt>
<dd></dd>
<dt><a href="#mergeObjects">mergeObjects(obj1, obj2)</a> ⇒</dt>
<dd></dd>
<dt><a href="#objectToQueryParams">objectToQueryParams(o)</a></dt>
<dd></dd>
<dt><a href="#printPretty">printPretty(obj)</a></dt>
<dd></dd>
<dt><a href="#removeEmptyProperty">removeEmptyProperty(obj)</a></dt>
<dd><p>Removes all the key&#39;s for which the value is empty.</p>
</dd>
<dt><a href="#reverseStr">reverseStr(str:)</a></dt>
<dd></dd>
<dt><a href="#reverseEachWordInSentence">reverseEachWordInSentence(sentence:)</a></dt>
<dd></dd>
<dt><a href="#reverseSentence">reverseSentence(sentence)</a></dt>
<dd></dd>
<dt><a href="#shortenString">shortenString(str, len)</a></dt>
<dd></dd>
<dt><a href="#shuffleString">shuffleString()</a></dt>
<dd></dd>
<dt><a href="#sortObjectByKey">sortObjectByKey(obj, key, ord)</a></dt>
<dd></dd>
<dt><a href="#sortObjectByMultipleKeys">sortObjectByMultipleKeys(arr, keys)</a> ⇒</dt>
<dd><p>Sort array of objects by key(s)</p>
</dd>
<dt><a href="#uniqueArrayOfObjects">uniqueArrayOfObjects(arr)</a> ⇒</dt>
<dd><p>Compares all the objects(both key and value) in the given array and returns the unique array.</p>
</dd>
</dl>

<a name="arrayIntoChunks"></a>

## arrayIntoChunks(arr, n) ⇒

Convert an array into given chunk(s).

**Kind**: global function  
**Returns**: Array of array[s].  
**Output**: [[1,2],[3,4],[5,6]]

| Param | Type                           | Description       |
| ----- | ------------------------------ | ----------------- |
| arr   | <code>Array.&lt;any&gt;</code> | Any type of array |
| n     | <code>number</code>            | Number of chunks  |

**Example**

```js
arrayIntoChunks([1, 2, 3, 4, 5, 6], 3);
```

<a name="camelCase"></a>

## camelCase(str)

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| str   | <code>string</code> |

<a name="compareObject"></a>

## compareObject(obj1, obj2) ⇒

This method compares both key and value of given objects. This even works for nested objects.

**Kind**: global function  
**Returns**: boolean

| Param | Type                |
| ----- | ------------------- |
| obj1  | <code>Object</code> |
| obj2  | <code>Object</code> |

**Example**

```js
compareObject({ a: 2 }, { a: 2 }); // true
```

**Example**

```js
compareObject({ a: 2 }, { a: 23 }); // false
```

**Example**

```js
compareObject({ a: { b: 2 } }, { a: { b: 2 } }); // true
```

<a name="toNumber"></a>

## toNumber(s) ⇒

**Kind**: global function  
**Returns**: number

| Param | Type                |
| ----- | ------------------- |
| s     | <code>string</code> |

**Example**

```js
console.log(toNumber("-23.32"));
```

<a name="strToNum"></a>

## strToNum(data, str) ⇒

**Kind**: global function  
**Returns**: array or object

| Param | Type                                      | Description                             |
| ----- | ----------------------------------------- | --------------------------------------- |
| data  | <code>Array</code> \| <code>Object</code> | required                                |
| str   | <code>string</code>                       | key names separated by comma (optional) |

**Example**

```js
strToNum(["3", "4", 3, "7", 8]);
```

**Example**

```js
strToNum({ a: 2, b: "4", c: "5" }, "c,b");
```

<a name="dataFormatter"></a>

## dataFormatter(obj, formatter, options) ⇒

Data formatter - rename/customise keyname and values as you require, even nested keys and nested values can be defined.

**Kind**: global function  
**Returns**: return modified object along with the provided object

| Param           | Type                | Description                                                          |
| --------------- | ------------------- | -------------------------------------------------------------------- |
| obj             | <code>object</code> | data to be formateted                                                |
| formatter       | <code>string</code> | key:valuePath, each key value is separated by comma                  |
| options         | <code>object</code> |                                                                      |
| options.error   | <code>object</code> | default true, returns error content if any key or value is not found |
| options.oldData | <code>object</code> | default true, returns object                                         |

**Example**

```js
"alterName:key" or "alterName:nested.key" or "nested.alterName:key" or "nested.alterName:nested.key"
```

**Example**

```js
const payload = {
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
const a = dataFormatter(payload, "pid:id,theme:data.theme,prtn.id:portion.id,prtn.name:portion.data.name,something:block", { oldData: false });

console.log(a);
output:
{
  pid: 'some-id',
  theme: 'dark',
  prtn: { id: 'portion-id', name: 'section' },
  ERRORS: { block: 'not found' }
}
```

<a name="dateDiff"></a>

## dateDiff(from, to)

**Kind**: global function

| Param | Type              |
| ----- | ----------------- |
| from  | <code>Date</code> |
| to    | <code>Date</code> |

<a name="generateRandomString"></a>

## generateRandomString(length)

**Kind**: global function

| Param  | Type                | Default         | Description   |
| ------ | ------------------- | --------------- | ------------- |
| length | <code>number</code> | <code>13</code> | default is 13 |

<a name="getDiffInHrs"></a>

## getDiffInHrs(from, to)

**Kind**: global function

| Param | Type              |
| ----- | ----------------- |
| from  | <code>Date</code> |
| to    | <code>Date</code> |

<a name="getNestedValue"></a>

## getNestedValue(d, k) ⇒

Get nested value from the given object.

**Kind**: global function  
**Returns**: value, If nothing found null will be returned.

| Param | Type                | Description                         |
| ----- | ------------------- | ----------------------------------- |
| d     | <code>object</code> |                                     |
| k     | <code>string</code> | key name separated by dot character |

**Example**

```js
const data = {
  pid: "some-id",
  portions: { name: "section" },
};
console.log(getNestedKeyValue(data, "portions.name")); // 'section'
```

<a name="hasOwnProperty"></a>

## hasOwnProperty(obj, keys)

**Kind**: global function

| Param | Type                | Description                                                                                      |
| ----- | ------------------- | ------------------------------------------------------------------------------------------------ |
| obj   | <code>Object</code> |                                                                                                  |
| keys  | <code>string</code> | : keys seperated by comma Example : console.log( hasOwnProperty({'a':1, 'b':2, 'c':3}, "a,d") ); |

<a name="isEmpty"></a>

## isEmpty(data)

**Kind**: global function

| Param | Description         |
| ----- | ------------------- |
| data  | any datatype value. |

<a name="isStrHasSpecialChar"></a>

## isStrHasSpecialChar(str, pattern)

**Kind**: global function

| Param   | Type                | Default                                       | Description                                   |
| ------- | ------------------- | --------------------------------------------- | --------------------------------------------- | --------------- |
| str     | <code>string</code> |                                               |                                               |
| pattern | <code>string</code> | <code>&quot;&lt;&gt;@!#$%^&amp;\*()\_+[]{}?:; | &#x27;\&quot;\\,./~&#x60;-&#x3D;&quot;</code> | regexp pattern. |

**Example**

```js
console.log(isStrHasSpecialChar("hello h@rry"));
```

<a name="mergeObjects"></a>

## mergeObjects(obj1, obj2) ⇒

**Kind**: global function  
**Returns**: merged object

| Param | Type                |
| ----- | ------------------- |
| obj1  | <code>Object</code> |
| obj2  | <code>Object</code> |

<a name="objectToQueryParams"></a>

## objectToQueryParams(o)

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| o     | <code>Object</code> |

<a name="printPretty"></a>

## printPretty(obj)

**Kind**: global function

| Param | Description         |
| ----- | ------------------- |
| obj   | accepts only object |

**Example**

```js
let obj = { id: "PS10140", sdid: "SD13112", disableCrud: "false", newQueryParameter: "true" };
printPretty(obj);
```

<a name="removeEmptyProperty"></a>

## removeEmptyProperty(obj)

Removes all the key's for which the value is empty.

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| obj   | <code>Object</code> |

<a name="reverseStr"></a>

## reverseStr(str:)

**Kind**: global function

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| str:  | <code>string</code> | string without space |

<a name="reverseEachWordInSentence"></a>

## reverseEachWordInSentence(sentence:)

**Kind**: global function

| Param     | Type                | Description      |
| --------- | ------------------- | ---------------- |
| sentence: | <code>string</code> | pass a sentence. |

<a name="reverseSentence"></a>

## reverseSentence(sentence)

**Kind**: global function

| Param    | Type                | Description      |
| -------- | ------------------- | ---------------- |
| sentence | <code>string</code> | pass a sentence. |

<a name="shortenString"></a>

## shortenString(str, len)

**Kind**: global function

| Param | Type                | Default         | Description   |
| ----- | ------------------- | --------------- | ------------- |
| str   | <code>string</code> |                 |               |
| len   | <code>number</code> | <code>50</code> | default is 50 |

<a name="shuffleString"></a>

## shuffleString()

**Kind**: global function

| Type                | Description |
| ------------------- | ----------- |
| <code>string</code> | str         |

<a name="sortObjectByKey"></a>

## sortObjectByKey(obj, key, ord)

**Kind**: global function

| Param | Type                                       | Default        | Description                               |
| ----- | ------------------------------------------ | -------------- | ----------------------------------------- |
| obj   | <code>Array</code> \| <code>Objects</code> |                |                                           |
| key   | <code>string</code>                        |                |                                           |
| ord   | <code>Number</code>                        | <code>1</code> | : 1 = Ascending(Default), -1 = Descending |

<a name="sortObjectByMultipleKeys"></a>

## sortObjectByMultipleKeys(arr, keys) ⇒

Sort array of objects by key(s)

**Kind**: global function  
**Returns**: Sorted array of objects.

| Param | Type                              | Description                                                                    |
| ----- | --------------------------------- | ------------------------------------------------------------------------------ |
| arr   | <code>Array.&lt;Object&gt;</code> | Array of Objects                                                               |
| keys  | <code>Array.&lt;String&gt;</code> | Key's to be sorted. [pass hyphen(-) in front of string to order in descending] |

**Example**

```js
sortObjectByMultipleKeys(object, ["name", "-date"]);
```

**Example**

```js
sortObjectByMultipleKeys(object, ["-name", "date"]);
```

<a name="uniqueArrayOfObjects"></a>

## uniqueArrayOfObjects(arr) ⇒

Compares all the objects(both key and value) in the given array and returns the unique array.

**Kind**: global function  
**Returns**: unique array of object(s).

| Param | Type                              | Description          |
| ----- | --------------------------------- | -------------------- |
| arr   | <code>Array.&lt;Object&gt;</code> | An array of objects. |

**Example**

```js
uniqueArrayOfObjects([{ a: 2 }, { a: 2 }]); // [{"a":  2}]
```

**Example**

```js
uniqueArrayOfObjects([{ a: { b: 2 } }, { a: { b: 2 } }]); // [{"a": {"b": 2}}]
```

**Example**

```js
uniqueArrayOfObjects([{ a: 2 }, { a: 2, b: 3 }]); // [{a: 2}, {a: 2, b: 3}]
```
