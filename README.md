# ez.js

<div id="badges">
 <img alt="npm" src="https://img.shields.io/npm/dm/@bhairesh/ez.js">
</div>

The `ez.js` library exported as cjs, esm and umd modules.

## Installation

Using npm:
```shell
npm i -g @bhairesh/ez.js
npm i @bhairesh/ez.js
```

Imports:
```js
// Load the package.
const ezjs = require("@bhairesh/ez.js");

// or

import ezjs from "@bhairesh/ez.js";
```

## Why ez.js?

`ez.js` makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.

## Functions

<dl>
<dt><a href="#addDelEleFromArray">addDelEleFromArray(arr, ele, remEle:)</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#arrayIntoChunks">arrayIntoChunks(arr, n)</a> ⇒ <code>Array</code></dt>
<dd><p>Convert an array into given chunk(s).</p></dd>
<dt><a href="#camelCase">camelCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Converts each word's first letter into uppercase.</p></dd>
<dt><a href="#compareObject">compareObject(obj1, obj2)</a> ⇒ <code>boolean</code></dt>
<dd><p>This method compares both key and value of given objects. This even works for nested objects.</p></dd>
<dt><a href="#toNumber">toNumber(s)</a> ⇒ <code>number</code></dt>
<dd><p>Converts given string formatted value into number.</p></dd>
<dt><a href="#strToNum">strToNum(data, str)</a> ⇒ <code>Array</code> | <code>object</code></dt>
<dd><p>Checks the provided array or an object's string formatted value into number.</p></dd>
<dt><a href="#createTable">createTable(tableData)</a> ⇒</dt>
<dd><p>Creates table with custom data.</p></dd>
<dt><a href="#currencyFormatter">currencyFormatter(val, options)</a> ⇒ <code>string</code></dt>
<dd><p>Converts number into formatted currency value.</p></dd>
<dt><a href="#dataFormatter">dataFormatter(obj, formatter, options)</a> ⇒ <code>object</code></dt>
<dd><p>Data formatter - rename/customise keyname and values as you require, even nested keys and nested values can be defined.</p></dd>
<dt><a href="#dateDiff">dateDiff(from, to)</a> ⇒ <code>Object</code></dt>
<dd><p>Calculates the difference between provided two dates.</p></dd>
<dt><a href="#generateRandomString">generateRandomString(length)</a> ⇒ <code>string</code></dt>
<dd><p>Generate random string of 13(default) characters, which includes all uppercase alphabets, lowercase alphabets, and 0-9 numbers.</p></dd>
<dt><a href="#getDiffInHrs">getDiffInHrs(from, to)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the difference between provided two dates.</p></dd>
<dt><a href="#getNestedValue">getNestedValue(d, k)</a> ⇒ <code>any</code></dt>
<dd><p>Get nested value from the given object.</p></dd>
<dt><a href="#hasOwnProperty">hasOwnProperty(obj, keys, returnType)</a> ⇒ <code>string</code> | <code>boolean</code></dt>
<dd><p>Determines whether an object has a property with the specified name.</p></dd>
<dt><a href="#isEmpty">isEmpty(data)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check's the provided input is valid.</p></dd>
<dt><a href="#isStrHasSpecialChar">isStrHasSpecialChar(str, pattern)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check's the special characters in the provided string.</p></dd>
<dt><a href="#objectToQueryParams">objectToQueryParams(o)</a></dt>
<dd></dd>
<dt><a href="#printPretty">printPretty(obj)</a></dt>
<dd></dd>
<dt><a href="#removeEmptyProperty">removeEmptyProperty(obj)</a></dt>
<dd><p>Removes all the key's for which the value is empty.</p></dd>
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
<dt><a href="#sortObjectByMultipleKeys">sortObjectByMultipleKeys(arr, keys)</a> ⇒ <code>object</code></dt>
<dd><p>Sort array of objects by key(s)</p></dd>
<dt><a href="#uniqueArrayOfObjects">uniqueArrayOfObjects(arr)</a> ⇒</dt>
<dd><p>Compares all the objects(both key and value) in the given array and returns the unique array.</p></dd>
<dt><a href="#addDelEleFromArray">addDelEleFromArray(arr, ele, remEle:)</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#arrayIntoChunks">arrayIntoChunks(arr, n)</a> ⇒ <code>Array</code></dt>
<dd><p>Convert an array into given chunk(s).</p></dd>
<dt><a href="#camelCase">camelCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Converts each word's first letter into uppercase.</p></dd>
<dt><a href="#compareObject">compareObject(obj1, obj2)</a> ⇒ <code>boolean</code></dt>
<dd><p>This method compares both key and value of given objects. This even works for nested objects.</p></dd>
<dt><a href="#toNumber">toNumber(s)</a> ⇒ <code>number</code></dt>
<dd><p>Converts given string formatted value into number.</p></dd>
<dt><a href="#strToNum">strToNum(data, str)</a> ⇒ <code>Array</code> | <code>object</code></dt>
<dd><p>Checks the provided array or an object's string formatted value into number.</p></dd>
<dt><a href="#createTable">createTable(tableData)</a> ⇒</dt>
<dd><p>Creates table with custom data.</p></dd>
<dt><a href="#currencyFormatter">currencyFormatter(val, options)</a> ⇒ <code>string</code></dt>
<dd><p>Converts number into formatted currency value.</p></dd>
<dt><a href="#dataFormatter">dataFormatter(obj, formatter, options)</a> ⇒ <code>object</code></dt>
<dd><p>Data formatter - rename/customise keyname and values as you require, even nested keys and nested values can be defined.</p></dd>
<dt><a href="#dateDiff">dateDiff(from, to)</a> ⇒ <code>Object</code></dt>
<dd><p>Calculates the difference between provided two dates.</p></dd>
<dt><a href="#generateRandomString">generateRandomString(length)</a> ⇒ <code>string</code></dt>
<dd><p>Generate random string of 13(default) characters, which includes all uppercase alphabets, lowercase alphabets, and 0-9 numbers.</p></dd>
<dt><a href="#getDiffInHrs">getDiffInHrs(from, to)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the difference between provided two dates.</p></dd>
<dt><a href="#getNestedValue">getNestedValue(d, k)</a> ⇒ <code>any</code></dt>
<dd><p>Get nested value from the given object.</p></dd>
<dt><a href="#hasOwnProperty">hasOwnProperty(obj, keys, returnType)</a> ⇒ <code>string</code> | <code>boolean</code></dt>
<dd><p>Determines whether an object has a property with the specified name.</p></dd>
<dt><a href="#isEmpty">isEmpty(data)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check's the provided input is valid.</p></dd>
<dt><a href="#isStrHasSpecialChar">isStrHasSpecialChar(str, pattern)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check's the special characters in the provided string.</p></dd>
<dt><a href="#mergeObjects">mergeObjects(obj1, obj2)</a> ⇒ <code>object</code></dt>
<dd><p>Uses deep merge way to merge objects.</p></dd>
<dt><a href="#objectToQueryParams">objectToQueryParams(o)</a></dt>
<dd></dd>
<dt><a href="#printPretty">printPretty(obj)</a></dt>
<dd></dd>
<dt><a href="#removeEmptyProperty">removeEmptyProperty(obj)</a></dt>
<dd><p>Removes all the key's for which the value is empty.</p></dd>
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
<dt><a href="#sortObjectByMultipleKeys">sortObjectByMultipleKeys(arr, keys)</a> ⇒ <code>object</code></dt>
<dd><p>Sort array of objects by key(s)</p></dd>
<dt><a href="#uniqueArrayOfObjects">uniqueArrayOfObjects(arr)</a> ⇒</dt>
<dd><p>Compares all the objects(both key and value) in the given array and returns the unique array.</p></dd>
</dl>

<a name="addDelEleFromArray"></a>

## addDelEleFromArray(arr, ele, remEle:) ⇒ <code>Array</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| ele | <code>any</code> | <p>element to be added</p> |
| remEle: | <code>any</code> | <p>element to be deleted</p> |

<a name="arrayIntoChunks"></a>

## arrayIntoChunks(arr, n) ⇒ <code>Array</code>
<p>Convert an array into given chunk(s).</p>

**Kind**: global function  
**Summary**: Convert an array into given chunk(s).  
**Returns**: <code>Array</code> - <p>Array of array[s].</p>  
**Output**: [[1,2],[3,4],[5,6]]  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;any&gt;</code> | <p>Any type of array</p> |
| n | <code>number</code> | <p>Number of chunks</p> |

**Example**  
```js
arrayIntoChunks([1,2,3,4,5,6], 3);
```
<a name="camelCase"></a>

## camelCase(str) ⇒ <code>string</code>
<p>Converts each word's first letter into uppercase.</p>

**Kind**: global function  
**Summary**: Converts each word's first letter into uppercase.  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

<a name="compareObject"></a>

## compareObject(obj1, obj2) ⇒ <code>boolean</code>
<p>This method compares both key and value of given objects. This even works for nested objects.</p>

**Kind**: global function  
**Summary**: This method compares both key and value of given objects.  

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
<p>Converts given string formatted value into number.</p>

**Kind**: global function  
**Summary**: Converts given string formatted value into number.  

| Param | Type |
| --- | --- |
| s | <code>string</code> | 

**Example**  
```js
console.log(toNumber("-23.32"))
```
<a name="strToNum"></a>

## strToNum(data, str) ⇒ <code>Array</code> \| <code>object</code>
<p>Checks the provided array or an object's string formatted value into number.</p>

**Kind**: global function  
**Summary**: Checks the provided array or an object's string formatted value into number.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array</code> \| <code>Object</code> | <p>required</p> |
| str | <code>string</code> | <p>key names separated by comma (optional)</p> |

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
<p>Creates table with custom data.</p>

**Kind**: global function  
**Summary**: Creates table with custom data.  
**Returns**: <p>[object HTMLArrayElement]</p>  

| Param | Type | Description |
| --- | --- | --- |
| tableData | <code>object</code> |  |
| tableData.data | <code>Array.&lt;Object&gt;</code> | <p>Array of objects</p> |
| tableData.fields | <code>Array.&lt;string&gt;</code> | <p>Fields to be shown</p> |
| tableData.fieldTitles | <code>Array.&lt;string&gt;</code> | <p>Field Names</p> |
| tableData.tableProps | <code>object</code> | <p>Field Names</p> |
| tableData.tableProps.id | <code>string</code> | <p>Table id</p> |
| tableData.tableProps.classList | <code>Array.&lt;string&gt;</code> | <p>Table custom class list</p> |
| tableData.tableProps.style | <code>Array.&lt;string&gt;</code> | <p>Table custom styles</p> |

<a name="currencyFormatter"></a>

## currencyFormatter(val, options) ⇒ <code>string</code>
<p>Converts number into formatted currency value.</p>

**Kind**: global function  
**Summary**: Converts number into formatted currency value.  
**Returns**: <code>string</code> - <p>formatted value.</p>  
**Link**: Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Number</code> | <p>Integer value</p> |
| options | <code>Intl.NumberFormatOptions</code> | <p>An object with some or all of the properties of Intl.NumberFormatOptions</p> |

**Example**  
```js
console.log(currencyFormatter(1234567890.1997)); // ₹1,23,45,67,890.20console.log(currencyFormatter(1234567890, {locales: "en-US", currency: "USD", maximumFractionDigits: 0})); // $1,234,567,890
```
<a name="dataFormatter"></a>

## dataFormatter(obj, formatter, options) ⇒ <code>object</code>
<p>Data formatter - rename/customise keyname and values as you require, even nested keys and nested values can be defined.</p>

**Kind**: global function  
**Summary**: Data formatter - rename/customise keyname and values as you require, even nested keys and nested values can be defined.  
**Returns**: <code>object</code> - <p>return modified object along with the provided object</p>  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | <p>data to be formateted</p> |
| formatter | <code>string</code> | <p>key:valuePath, each key value is separated by comma</p> |
| options | <code>object</code> |  |
| options.error | <code>object</code> | <p>default true, returns error content if any key or value is not found</p> |
| options.oldData | <code>object</code> | <p>default true, returns object</p> |

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
<p>Calculates the difference between provided two dates.</p>

**Kind**: global function  
**Summary**: Calculates the difference between provided two dates.  

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
<p>Generate random string of 13(default) characters, which includes all uppercase alphabets, lowercase alphabets, and 0-9 numbers.</p>

**Kind**: global function  
**Summary**: Generate random string of 13(default) characters, which includes all uppercase alphabets, lowercase alphabets, and 0-9 numbers.  
**Default**: <code>13</code>  

| Param | Type | Default |
| --- | --- | --- |
| length | <code>number</code> | <code>13</code> | 

<a name="getDiffInHrs"></a>

## getDiffInHrs(from, to) ⇒ <code>number</code>
<p>Calculates the difference between provided two dates.</p>

**Kind**: global function  
**Summary**: Calculates the difference between provided two dates.  
**Returns**: <code>number</code> - <p>difference in hours.</p>  

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
<p>Get nested value from the given object.</p>

**Kind**: global function  
**Summary**: Get nested value from the given object.  
**Returns**: <code>any</code> - <p>value, If nothing found null will be returned.</p>  

| Param | Type | Description |
| --- | --- | --- |
| d | <code>object</code> |  |
| k | <code>string</code> | <p>key name separated by dot character</p> |

**Example**  
```js
const data = {
    pid: 'some-id',
    portions: { name: 'section' }
}console.log(getNestedKeyValue(data, "portions.name")); // 'section'
```
<a name="hasOwnProperty"></a>

## hasOwnProperty(obj, keys, returnType) ⇒ <code>string</code> \| <code>boolean</code>
<p>Determines whether an object has a property with the specified name.</p>

**Kind**: global function  
**Summary**: Determines whether an object has a property with the specified name.  
**Default**: <code>false</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>object</code> |  |  |
| keys | <code>string</code> |  | <p>seperated by comma</p> |
| returnType | <code>boolean</code> | <code>false</code> |  |

**Example**  
```js
console.log(hasOwnProperty({'a':1, 'b':2, 'c':3}, "a,d"));
```
<a name="isEmpty"></a>

## isEmpty(data) ⇒ <code>boolean</code>
<p>Check's the provided input is valid.</p>

**Kind**: global function  
**Summary**: Check's the provided input is valid.  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 

<a name="isStrHasSpecialChar"></a>

## isStrHasSpecialChar(str, pattern) ⇒ <code>boolean</code>
<p>Check's the special characters in the provided string.</p>

**Kind**: global function  
**Summary**: Check's the special characters in the provided string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  |  |
| pattern | <code>string</code> | <code>&quot;&lt;&gt;@!#$%^&amp;*()_+[]{}?:;|&#x27;\&quot;\\,./~&#x60;-&#x3D;&quot;</code> | <p>regexp pattern.</p> |

**Example**  
```js
console.log(isStrHasSpecialChar("hello h@rry"));
```
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
| obj | <p>accepts only object</p> |

**Example**  
```js
let obj = { id: "PS10140", sdid: "SD13112", disableCrud: "false", newQueryParameter: "true" };printPretty(obj);
```
<a name="removeEmptyProperty"></a>

## removeEmptyProperty(obj)
<p>Removes all the key's for which the value is empty.</p>

**Kind**: global function  
**Summary**: Removes all the key's for which the value is empty.  

| Param | Type |
| --- | --- |
| obj | <code>object</code> | 

<a name="reverseStr"></a>

## reverseStr(str:)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| str: | <code>string</code> | <p>string without space</p> |

<a name="reverseEachWordInSentence"></a>

## reverseEachWordInSentence(sentence:)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sentence: | <code>string</code> | <p>pass a sentence.</p> |

<a name="reverseSentence"></a>

## reverseSentence(sentence)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sentence | <code>string</code> | <p>pass a sentence.</p> |

<a name="shortenString"></a>

## shortenString(str, len)
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  |  |
| len | <code>number</code> | <code>50</code> | <p>default is 50</p> |

<a name="shuffleString"></a>

## shuffleString()
**Kind**: global function  

| Type | Description |
| --- | --- |
| <code>string</code> | <p>str</p> |

<a name="sortObjectByKey"></a>

## sortObjectByKey(obj, key, ord)
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>Array</code> \| <code>Objects</code> |  |  |
| key | <code>string</code> |  |  |
| ord | <code>Number</code> | <code>1</code> | <p>: 1 = Ascending(Default), -1 = Descending</p> |

<a name="sortObjectByMultipleKeys"></a>

## sortObjectByMultipleKeys(arr, keys) ⇒ <code>object</code>
<p>Sort array of objects by key(s)</p>

**Kind**: global function  
**Summary**: <p>Sort array of objects by key(s)</p>.  
**Returns**: <code>object</code> - <p>Sorted array of objects.</p>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> | <p>Array of Objects</p> |
| keys | <code>Array.&lt;String&gt;</code> | <p>Key's to be sorted. [pass hyphen(-) in front of string to order in descending]</p> |

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
<p>Compares all the objects(both key and value) in the given array and returns the unique array.</p>

**Kind**: global function  
**Summary**: Compares all the objects(both key and value) in the given array and returns the unique array.  
**Returns**: <p>unique array of object(s).</p>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> | <p>An array of objects.</p> |

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
<a name="addDelEleFromArray"></a>

## addDelEleFromArray(arr, ele, remEle:) ⇒ <code>Array</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| ele | <code>any</code> | <p>element to be added</p> |
| remEle: | <code>any</code> | <p>element to be deleted</p> |

<a name="arrayIntoChunks"></a>

## arrayIntoChunks(arr, n) ⇒ <code>Array</code>
<p>Convert an array into given chunk(s).</p>

**Kind**: global function  
**Summary**: Convert an array into given chunk(s).  
**Returns**: <code>Array</code> - <p>Array of array[s].</p>  
**Output**: [[1,2],[3,4],[5,6]]  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;any&gt;</code> | <p>Any type of array</p> |
| n | <code>number</code> | <p>Number of chunks</p> |

**Example**  
```js
arrayIntoChunks([1,2,3,4,5,6], 3);
```
<a name="camelCase"></a>

## camelCase(str) ⇒ <code>string</code>
<p>Converts each word's first letter into uppercase.</p>

**Kind**: global function  
**Summary**: Converts each word's first letter into uppercase.  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

<a name="compareObject"></a>

## compareObject(obj1, obj2) ⇒ <code>boolean</code>
<p>This method compares both key and value of given objects. This even works for nested objects.</p>

**Kind**: global function  
**Summary**: This method compares both key and value of given objects.  

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
<p>Converts given string formatted value into number.</p>

**Kind**: global function  
**Summary**: Converts given string formatted value into number.  

| Param | Type |
| --- | --- |
| s | <code>string</code> | 

**Example**  
```js
console.log(toNumber("-23.32"))
```
<a name="strToNum"></a>

## strToNum(data, str) ⇒ <code>Array</code> \| <code>object</code>
<p>Checks the provided array or an object's string formatted value into number.</p>

**Kind**: global function  
**Summary**: Checks the provided array or an object's string formatted value into number.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array</code> \| <code>Object</code> | <p>required</p> |
| str | <code>string</code> | <p>key names separated by comma (optional)</p> |

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
<p>Creates table with custom data.</p>

**Kind**: global function  
**Summary**: Creates table with custom data.  
**Returns**: <p>[object HTMLArrayElement]</p>  

| Param | Type | Description |
| --- | --- | --- |
| tableData | <code>object</code> |  |
| tableData.data | <code>Array.&lt;Object&gt;</code> | <p>Array of objects</p> |
| tableData.fields | <code>Array.&lt;string&gt;</code> | <p>Fields to be shown</p> |
| tableData.fieldTitles | <code>Array.&lt;string&gt;</code> | <p>Field Names</p> |
| tableData.tableProps | <code>object</code> | <p>Field Names</p> |
| tableData.tableProps.id | <code>string</code> | <p>Table id</p> |
| tableData.tableProps.classList | <code>Array.&lt;string&gt;</code> | <p>Table custom class list</p> |
| tableData.tableProps.style | <code>Array.&lt;string&gt;</code> | <p>Table custom styles</p> |

<a name="currencyFormatter"></a>

## currencyFormatter(val, options) ⇒ <code>string</code>
<p>Converts number into formatted currency value.</p>

**Kind**: global function  
**Summary**: Converts number into formatted currency value.  
**Returns**: <code>string</code> - <p>formatted value.</p>  
**Link**: Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Number</code> | <p>Integer value</p> |
| options | <code>Intl.NumberFormatOptions</code> | <p>An object with some or all of the properties of Intl.NumberFormatOptions</p> |

**Example**  
```js
console.log(currencyFormatter(1234567890.1997)); // ₹1,23,45,67,890.20console.log(currencyFormatter(1234567890, {locales: "en-US", currency: "USD", maximumFractionDigits: 0})); // $1,234,567,890
```
<a name="dataFormatter"></a>

## dataFormatter(obj, formatter, options) ⇒ <code>object</code>
<p>Data formatter - rename/customise keyname and values as you require, even nested keys and nested values can be defined.</p>

**Kind**: global function  
**Summary**: Data formatter - rename/customise keyname and values as you require, even nested keys and nested values can be defined.  
**Returns**: <code>object</code> - <p>return modified object along with the provided object</p>  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | <p>data to be formateted</p> |
| formatter | <code>string</code> | <p>key:valuePath, each key value is separated by comma</p> |
| options | <code>object</code> |  |
| options.error | <code>object</code> | <p>default true, returns error content if any key or value is not found</p> |
| options.oldData | <code>object</code> | <p>default true, returns object</p> |

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
<p>Calculates the difference between provided two dates.</p>

**Kind**: global function  
**Summary**: Calculates the difference between provided two dates.  

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
<p>Generate random string of 13(default) characters, which includes all uppercase alphabets, lowercase alphabets, and 0-9 numbers.</p>

**Kind**: global function  
**Summary**: Generate random string of 13(default) characters, which includes all uppercase alphabets, lowercase alphabets, and 0-9 numbers.  
**Default**: <code>13</code>  

| Param | Type | Default |
| --- | --- | --- |
| length | <code>number</code> | <code>13</code> | 

<a name="getDiffInHrs"></a>

## getDiffInHrs(from, to) ⇒ <code>number</code>
<p>Calculates the difference between provided two dates.</p>

**Kind**: global function  
**Summary**: Calculates the difference between provided two dates.  
**Returns**: <code>number</code> - <p>difference in hours.</p>  

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
<p>Get nested value from the given object.</p>

**Kind**: global function  
**Summary**: Get nested value from the given object.  
**Returns**: <code>any</code> - <p>value, If nothing found null will be returned.</p>  

| Param | Type | Description |
| --- | --- | --- |
| d | <code>object</code> |  |
| k | <code>string</code> | <p>key name separated by dot character</p> |

**Example**  
```js
const data = {
    pid: 'some-id',
    portions: { name: 'section' }
}console.log(getNestedKeyValue(data, "portions.name")); // 'section'
```
<a name="hasOwnProperty"></a>

## hasOwnProperty(obj, keys, returnType) ⇒ <code>string</code> \| <code>boolean</code>
<p>Determines whether an object has a property with the specified name.</p>

**Kind**: global function  
**Summary**: Determines whether an object has a property with the specified name.  
**Default**: <code>false</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>object</code> |  |  |
| keys | <code>string</code> |  | <p>seperated by comma</p> |
| returnType | <code>boolean</code> | <code>false</code> |  |

**Example**  
```js
console.log(hasOwnProperty({'a':1, 'b':2, 'c':3}, "a,d"));
```
<a name="isEmpty"></a>

## isEmpty(data) ⇒ <code>boolean</code>
<p>Check's the provided input is valid.</p>

**Kind**: global function  
**Summary**: Check's the provided input is valid.  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 

<a name="isStrHasSpecialChar"></a>

## isStrHasSpecialChar(str, pattern) ⇒ <code>boolean</code>
<p>Check's the special characters in the provided string.</p>

**Kind**: global function  
**Summary**: Check's the special characters in the provided string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  |  |
| pattern | <code>string</code> | <code>&quot;&lt;&gt;@!#$%^&amp;*()_+[]{}?:;|&#x27;\&quot;\\,./~&#x60;-&#x3D;&quot;</code> | <p>regexp pattern.</p> |

**Example**  
```js
console.log(isStrHasSpecialChar("hello h@rry"));
```
<a name="mergeObjects"></a>

## mergeObjects(obj1, obj2) ⇒ <code>object</code>
<p>Uses deep merge way to merge objects.</p>

**Kind**: global function  
**Summary**: Uses deep merge way to merge objects.  
**Returns**: <code>object</code> - <p>merged object</p>  

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
| obj | <p>accepts only object</p> |

**Example**  
```js
let obj = { id: "PS10140", sdid: "SD13112", disableCrud: "false", newQueryParameter: "true" };printPretty(obj);
```
<a name="removeEmptyProperty"></a>

## removeEmptyProperty(obj)
<p>Removes all the key's for which the value is empty.</p>

**Kind**: global function  
**Summary**: Removes all the key's for which the value is empty.  

| Param | Type |
| --- | --- |
| obj | <code>object</code> | 

<a name="reverseStr"></a>

## reverseStr(str:)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| str: | <code>string</code> | <p>string without space</p> |

<a name="reverseEachWordInSentence"></a>

## reverseEachWordInSentence(sentence:)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sentence: | <code>string</code> | <p>pass a sentence.</p> |

<a name="reverseSentence"></a>

## reverseSentence(sentence)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sentence | <code>string</code> | <p>pass a sentence.</p> |

<a name="shortenString"></a>

## shortenString(str, len)
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  |  |
| len | <code>number</code> | <code>50</code> | <p>default is 50</p> |

<a name="shuffleString"></a>

## shuffleString()
**Kind**: global function  

| Type | Description |
| --- | --- |
| <code>string</code> | <p>str</p> |

<a name="sortObjectByKey"></a>

## sortObjectByKey(obj, key, ord)
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>Array</code> \| <code>Objects</code> |  |  |
| key | <code>string</code> |  |  |
| ord | <code>Number</code> | <code>1</code> | <p>: 1 = Ascending(Default), -1 = Descending</p> |

<a name="sortObjectByMultipleKeys"></a>

## sortObjectByMultipleKeys(arr, keys) ⇒ <code>object</code>
<p>Sort array of objects by key(s)</p>

**Kind**: global function  
**Summary**: <p>Sort array of objects by key(s)</p>.  
**Returns**: <code>object</code> - <p>Sorted array of objects.</p>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> | <p>Array of Objects</p> |
| keys | <code>Array.&lt;String&gt;</code> | <p>Key's to be sorted. [pass hyphen(-) in front of string to order in descending]</p> |

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
<p>Compares all the objects(both key and value) in the given array and returns the unique array.</p>

**Kind**: global function  
**Summary**: Compares all the objects(both key and value) in the given array and returns the unique array.  
**Returns**: <p>unique array of object(s).</p>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> | <p>An array of objects.</p> |

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
