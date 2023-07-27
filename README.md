''  
## Functions

<dl>
<dt><a href="#addDelEleFromArray">addDelEleFromArray(arr, ele, remEle:)</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#arrayIntoChunks">arrayIntoChunks(arr, n)</a> ⇒ <code>Array</code></dt>
<dd><p>Convert an array into given chunk(s).</p>
</dd>
<dt><a href="#camelCase">camelCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Converts each word&#39;s first letter into uppercase.</p>
</dd>
<dt><a href="#compareObject">compareObject(obj1, obj2)</a> ⇒ <code>boolean</code></dt>
<dd><p>This method compares both key and value of given objects. This even works for nested objects.</p>
</dd>
<dt><a href="#toNumber">toNumber(s)</a> ⇒ <code>number</code></dt>
<dd><p>Converts given string formatted value into number.</p>
</dd>
<dt><a href="#strToNum">strToNum(data, str)</a> ⇒ <code>Array</code> | <code>object</code></dt>
<dd><p>Checks the provided array or an object&#39;s string formatted value into number.</p>
</dd>
<dt><a href="#createTable">createTable(tableData)</a> ⇒</dt>
<dd><p>Creates table with custom data.</p>
</dd>
<dt><a href="#currencyFormatter">currencyFormatter(val, options)</a> ⇒ <code>string</code></dt>
<dd><p>Converts number into formatted currency value.</p>
</dd>
<dt><a href="#dataFormatter">dataFormatter(obj, formatter, options)</a> ⇒ <code>object</code></dt>
<dd><p>Data formatter - rename/customise keyname and values as you require, even nested keys and nested values can be defined.</p>
</dd>
<dt><a href="#dateDiff">dateDiff(from, to)</a> ⇒ <code>Object</code></dt>
<dd><p>Calculates the difference between provided two dates.</p>
</dd>
<dt><a href="#generateRandomString">generateRandomString(length)</a> ⇒ <code>string</code></dt>
<dd><p>Generate random string of 13(default) characters, which includes all uppercase alphabets, lowercase alphabets, and 0-9 numbers.</p>
</dd>
<dt><a href="#getDiffInHrs">getDiffInHrs(from, to)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the difference between provided two dates.</p>
</dd>
<dt><a href="#getNestedValue">getNestedValue(d, k)</a> ⇒ <code>any</code></dt>
<dd><p>Get nested value from the given object.</p>
</dd>
<dt><a href="#hasOwnProperty">hasOwnProperty(obj, keys, returnType)</a> ⇒ <code>string</code> | <code>boolean</code></dt>
<dd><p>Determines whether an object has a property with the specified name.</p>
</dd>
<dt><a href="#isEmpty">isEmpty(data)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check&#39;s the provided input is valid.</p>
</dd>
<dt><a href="#isStrHasSpecialChar">isStrHasSpecialChar(str, pattern)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check&#39;s the special characters in the provided string.</p>
</dd>
<dt><a href="#mergeObjects">mergeObjects(obj1, obj2)</a> ⇒ <code>object</code></dt>
<dd><p>Uses deep merge way to merge objects.</p>
</dd>
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

<a name="addDelEleFromArray"></a>

## addDelEleFromArray(arr, ele, remEle:) ⇒ <code>Array</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| ele | <code>any</code> | element to be added |
| remEle: | <code>any</code> | element to be deleted |

<a name="arrayIntoChunks"></a>

## arrayIntoChunks(arr, n) ⇒ <code>Array</code>
Convert an array into given chunk(s).

**Kind**: global function  
**Returns**: <code>Array</code> - Array of array[s].  
**Output**: [[1,2],[3,4],[5,6]]  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;any&gt;</code> | Any type of array |
| n | <code>number</code> | Number of chunks |

**Example**  
```js
arrayIntoChunks([1,2,3,4,5,6], 3);
```
<a name="camelCase"></a>

## camelCase(str) ⇒ <code>string</code>
Converts each word's first letter into uppercase.

**Kind**: global function  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

<a name="compareObject"></a>

## compareObject(obj1, obj2) ⇒ <code>boolean</code>
This method compares both key and value of given objects. This even works for nested objects.

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj1 | <code>object</code> | 
| obj2 | <code>object</code> | 

**Example**  
```js
compareObject({a: 2}, {a: 2}); // true
```
**Example**  
```js
compareObject({a: 2}, {a: 23}); // false
```
**Example**  
```js
compareObject({a: {b: 2}}, {a: {b: 2}}); // true
```
<a name="toNumber"></a>

## toNumber(s) ⇒ <code>number</code>
Converts given string formatted value into number.

**Kind**: global function  

| Param | Type |
| --- | --- |
| s | <code>string</code> | 

**Example**  
```js
console.log(toNumber("-23.32"))
```
<a name="strToNum"></a>

## strToNum(data, str) ⇒ <code>Array</code> \| <code>object</code>
Checks the provided array or an object's string formatted value into number.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array</code> \| <code>Object</code> | required |
| str | <code>string</code> | key names separated by comma (optional) |

**Example**  
```js
strToNum(["3","4",3,"7",8])
```
**Example**  
```js
strToNum({ a:2, b:"4", c:"5" }, "c,b")
```
<a name="createTable"></a>

## createTable(tableData) ⇒
Creates table with custom data.

**Kind**: global function  
**Returns**: [object HTMLArrayElement]  

| Param | Type | Description |
| --- | --- | --- |
| tableData | <code>object</code> |  |
| tableData.data | <code>Array.&lt;Object&gt;</code> | Array of objects |
| tableData.fields | <code>Array.&lt;string&gt;</code> | Fields to be shown |
| tableData.fieldTitles | <code>Array.&lt;string&gt;</code> | Field Names |
| tableData.tableProps | <code>object</code> | Field Names |
| tableData.tableProps.id | <code>string</code> | Table id |
| tableData.tableProps.classList | <code>Array.&lt;string&gt;</code> | Table custom class list |
| tableData.tableProps.style | <code>Array.&lt;string&gt;</code> | Table custom styles |

<a name="currencyFormatter"></a>

## currencyFormatter(val, options) ⇒ <code>string</code>
Converts number into formatted currency value.

**Kind**: global function  
**Returns**: <code>string</code> - formatted value.  
**Link**: Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Number</code> | Integer value |
| options | <code>Intl.NumberFormatOptions</code> | An object with some or all of the properties of Intl.NumberFormatOptions |

**Example**  
```js
console.log(currencyFormatter(1234567890.1997)); // ₹1,23,45,67,890.20
console.log(currencyFormatter(1234567890, {locales: "en-US", currency: "USD", maximumFractionDigits: 0})); // $1,234,567,890
```
<a name="dataFormatter"></a>

## dataFormatter(obj, formatter, options) ⇒ <code>object</code>
Data formatter - rename/customise keyname and values as you require, even nested keys and nested values can be defined.

**Kind**: global function  
**Returns**: <code>object</code> - return modified object along with the provided object  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | data to be formateted |
| formatter | <code>string</code> | key:valuePath, each key value is separated by comma |
| options | <code>object</code> |  |
| options.error | <code>object</code> | default true, returns error content if any key or value is not found |
| options.oldData | <code>object</code> | default true, returns object |

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
};const a = dataFormatter(payload, "pid:id,theme:data.theme,prtn.id:portion.id,prtn.name:portion.data.name,something:block", { oldData: false });console.log(a);output:{
  pid: 'some-id',
  theme: 'dark',
  prtn: { id: 'portion-id', name: 'section' },
  ERRORS: { block: 'not found' }
}
```
<a name="dateDiff"></a>

## dateDiff(from, to) ⇒ <code>Object</code>
Calculates the difference between provided two dates.

**Kind**: global function  

| Param | Type |
| --- | --- |
| from | <code>Date</code> | 
| to | <code>Date</code> | 

**Example**  
```js
console.log(getDateDifference(new Date("12/12/2012"), new Date()));
```
<a name="generateRandomString"></a>

## generateRandomString(length) ⇒ <code>string</code>
Generate random string of 13(default) characters, which includes all uppercase alphabets, lowercase alphabets, and 0-9 numbers.

**Kind**: global function  
**Default**: <code>13</code>  

| Param | Type | Default |
| --- | --- | --- |
| length | <code>number</code> | <code>13</code> | 

<a name="getDiffInHrs"></a>

## getDiffInHrs(from, to) ⇒ <code>number</code>
Calculates the difference between provided two dates.

**Kind**: global function  
**Returns**: <code>number</code> - difference in hours.  

| Param | Type |
| --- | --- |
| from | <code>Date</code> | 
| to | <code>Date</code> | 

**Example**  
```js
console.log(getDiffInHrs(new Date("12/12/2012"), new Date()));
```
<a name="getNestedValue"></a>

## getNestedValue(d, k) ⇒ <code>any</code>
Get nested value from the given object.

**Kind**: global function  
**Returns**: <code>any</code> - value, If nothing found null will be returned.  

| Param | Type | Description |
| --- | --- | --- |
| d | <code>object</code> |  |
| k | <code>string</code> | key name separated by dot character |

**Example**  
```js
const data = {
    pid: 'some-id',
    portions: { name: 'section' }
}console.log(getNestedKeyValue(data, "portions.name")); // 'section'
```
<a name="hasOwnProperty"></a>

## hasOwnProperty(obj, keys, returnType) ⇒ <code>string</code> \| <code>boolean</code>
Determines whether an object has a property with the specified name.

**Kind**: global function  
**Default**: <code>false</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>object</code> |  |  |
| keys | <code>string</code> |  | seperated by comma |
| returnType | <code>boolean</code> | <code>false</code> |  |

**Example**  
```js
console.log(hasOwnProperty({'a':1, 'b':2, 'c':3}, "a,d"));
```
<a name="isEmpty"></a>

## isEmpty(data) ⇒ <code>boolean</code>
Check's the provided input is valid.

**Kind**: global function  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 

<a name="isStrHasSpecialChar"></a>

## isStrHasSpecialChar(str, pattern) ⇒ <code>boolean</code>
Check's the special characters in the provided string.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  |  |
| pattern | <code>string</code> | <code>&quot;&lt;&gt;@!#$%^&amp;*()_+[]{}?:;|&#x27;\&quot;\\,./~&#x60;-&#x3D;&quot;</code> | regexp pattern. |

**Example**  
```js
console.log(isStrHasSpecialChar("hello h@rry"));
```
<a name="mergeObjects"></a>

## mergeObjects(obj1, obj2) ⇒ <code>object</code>
Uses deep merge way to merge objects.

**Kind**: global function  
**Returns**: <code>object</code> - merged object  

| Param | Type |
| --- | --- |
| obj1 | <code>object</code> | 
| obj2 | <code>object</code> | 

<a name="objectToQueryParams"></a>

## objectToQueryParams(o)
**Kind**: global function  

| Param | Type |
| --- | --- |
| o | <code>object</code> | 

<a name="printPretty"></a>

## printPretty(obj)
**Kind**: global function  

| Param | Description |
| --- | --- |
| obj | accepts only object |

**Example**  
```js
let obj = { id: "PS10140", sdid: "SD13112", disableCrud: "false", newQueryParameter: "true" };
printPretty(obj);
```
<a name="removeEmptyProperty"></a>

## removeEmptyProperty(obj)
Removes all the key's for which the value is empty.

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>object</code> | 

<a name="reverseStr"></a>

## reverseStr(str:)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| str: | <code>string</code> | string without space |

<a name="reverseEachWordInSentence"></a>

## reverseEachWordInSentence(sentence:)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sentence: | <code>string</code> | pass a sentence. |

<a name="reverseSentence"></a>

## reverseSentence(sentence)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sentence | <code>string</code> | pass a sentence. |

<a name="shortenString"></a>

## shortenString(str, len)
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  |  |
| len | <code>number</code> | <code>50</code> | default is 50 |

<a name="shuffleString"></a>

## shuffleString()
**Kind**: global function  

| Type | Description |
| --- | --- |
| <code>string</code> | str |

<a name="sortObjectByKey"></a>

## sortObjectByKey(obj, key, ord)
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>Array</code> \| <code>Objects</code> |  |  |
| key | <code>string</code> |  |  |
| ord | <code>Number</code> | <code>1</code> | : 1 = Ascending(Default), -1 = Descending |

<a name="sortObjectByMultipleKeys"></a>

## sortObjectByMultipleKeys(arr, keys) ⇒
Sort array of objects by key(s)

**Kind**: global function  
**Returns**: Sorted array of objects.  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> | Array of Objects |
| keys | <code>Array.&lt;String&gt;</code> | Key's to be sorted. [pass hyphen(-) in front of string to order in descending] |

**Example**  
```js
sortObjectByMultipleKeys(object, ["name", "-date"])
```
**Example**  
```js
sortObjectByMultipleKeys(object, ["-name", "date"])
```
<a name="uniqueArrayOfObjects"></a>

## uniqueArrayOfObjects(arr) ⇒
Compares all the objects(both key and value) in the given array and returns the unique array.

**Kind**: global function  
**Returns**: unique array of object(s).  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> | An array of objects. |

**Example**  
```js
uniqueArrayOfObjects([{a: 2}, {a: 2}]); // [{"a":  2}]
```
**Example**  
```js
uniqueArrayOfObjects([{a: {b: 2}}, {a: {b: 2}}]); // [{"a": {"b": 2}}]
```
**Example**  
```js
uniqueArrayOfObjects([{a: 2}, {a: 2, b: 3}]); // [{a: 2}, {a: 2, b: 3}]
```
