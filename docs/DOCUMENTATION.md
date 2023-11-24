
## Constants

<dl>
<dt><del><a href="#addDelEleFromArray">addDelEleFromArray</a> ⇒ <code>Array</code></del></dt>
<dd><p>Add or remove an element from an array.</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#add2Matrix">add2Matrix(matrices)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>Calculates the sum of corresponding elements from an array of matrices.
Note: The function assumes all matrices have the same dimensions.</p></dd>
<dt><a href="#dataFormatter">dataFormatter()</a></dt>
<dd><p>TODO: Listed below</p>
<ul>
<li>Schema based modification</li>
<li>New key-value pair insertion</li>
</ul></dd>
<dt><a href="#dateDiff">dateDiff(from, to)</a> ⇒ <code>Object</code></dt>
<dd><p>Calculates the difference between two provided dates and returns the result in various formats.</p></dd>
<dt><a href="#generateRandomString">generateRandomString([length])</a> ⇒ <code>string</code></dt>
<dd><p>Generate a random string of characters.</p></dd>
<dt><a href="#getDates">getDates(startDate, endDate)</a> ⇒ <code>Array.&lt;Date&gt;</code></dt>
<dd><p>Returns all the dates between the start date and end date, including both.</p></dd>
<dt><a href="#getDiffInHrs">getDiffInHrs(from, to)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the difference in hours between two provided dates.</p></dd>
<dt><a href="#getUniqueArray">getUniqueArray(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns a new array with only the unique elements from the input array.</p></dd>
<dt><a href="#hasOwnProperty">hasOwnProperty(obj, keys, [returnType])</a> ⇒ <code>string</code> | <code>boolean</code></dt>
<dd><p>Determines whether an object has a property with the specified name.</p></dd>
<dt><a href="#isStr">isStr(str)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if <code>str</code> is a <code>String</code> type.</p></dd>
<dt><a href="#isStrHasSpecialChar">isStrHasSpecialChar(str, pattern)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check's the special characters in the provided string.</p></dd>
<dt><a href="#isURLValid">isURLValid(url)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a given string is a valid URL.</p></dd>
<dt><a href="#mergeObjects">mergeObjects(obj1, obj2)</a> ⇒ <code>object</code></dt>
<dd><p>Uses deep merge way to merge objects.</p></dd>
<dt><a href="#modifyArray">modifyArray(arr, ele, remEle:)</a> ⇒ <code>Array</code></dt>
<dd><p>Add or remove an element from an array.</p></dd>
<dt><a href="#objectToQueryParams">objectToQueryParams(o)</a> ⇒ <code>string</code></dt>
<dd><p>Converts an object into a query string format.</p></dd>
<dt><a href="#printPretty">printPretty(obj)</a> ⇒ <code>void</code></dt>
<dd><p>Prints the properties of an object in a formatted way.</p></dd>
<dt><a href="#removeEmptyProperty">removeEmptyProperty(out)</a> ⇒ <code>object</code></dt>
<dd><p>Removes all the keys from an object for which the value is empty.</p></dd>
<dt><a href="#reverseStr">reverseStr(str)</a> ⇒ <code>string</code></dt>
<dd><p>Reverses a given string.</p></dd>
<dt><a href="#reverseEachWordInSentence">reverseEachWordInSentence(sentence)</a> ⇒ <code>string</code></dt>
<dd><p>Reverses each word in a sentence.</p></dd>
<dt><a href="#reverseSentence">reverseSentence(sentence)</a> ⇒ <code>string</code></dt>
<dd><p>Reverses the order of words in a sentence.</p></dd>
<dt><a href="#shortenString">shortenString(str, len)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#shuffleString">shuffleString(str)</a> ⇒ <code>string</code></dt>
<dd><p>Shuffles the characters of a given string and returns the shuffled string.</p></dd>
<dt><a href="#sortObjectByKey">sortObjectByKey(arr, key, order)</a> ⇒ <code>Array</code></dt>
<dd><p>Sorts an array of objects based on a specified key in ascending or descending order.</p></dd>
<dt><a href="#sortObjectByMultipleKeys">sortObjectByMultipleKeys(arr, keys)</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Sorts an array of objects based on multiple keys.</p></dd>
<dt><a href="#toPascalCase">toPascalCase(str, [removeSpecialChars])</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to PascalCase format.</p></dd>
<dt><a href="#uniqueArrayOfObjects">uniqueArrayOfObjects(arr)</a> ⇒ <code>Array.&lt;object&gt;</code></dt>
<dd><p>Compares all the objects (both key and value) in the given array and returns the unique array.</p></dd>
</dl>

<a name="addDelEleFromArray"></a>

## ~~addDelEleFromArray ⇒ <code>Array</code>~~
***Deprecated***

<p>Add or remove an element from an array.</p>

**Kind**: global constant  
**Summary**: Add or remove an element from an array.  
**Note**: use `modifyArray` instead  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| ele | <code>any</code> | <p>element to be added</p> |
| remEle: | <code>any</code> | <p>element to be deleted</p> |

<a name="add2Matrix"></a>

## add2Matrix(matrices) ⇒ <code>Array.&lt;number&gt;</code>
<p>Calculates the sum of corresponding elements from an array of matrices.
Note: The function assumes all matrices have the same dimensions.</p>

**Kind**: global function  
**Summary**: Calculates the sum of corresponding elements from an array of matrices.  
**Returns**: <code>Array.&lt;number&gt;</code> - <p>An array containing the sum of corresponding elements from all matrices.</p>  

| Param | Type | Description |
| --- | --- | --- |
| matrices | <code>Array.&lt;Array.&lt;Array.&lt;number&gt;&gt;&gt;</code> | <p>An array of matrices where each matrix is a 2D array of numbers.</p> |

<a name="dataFormatter"></a>

## dataFormatter()
<p>TODO: Listed below</p>
<ul>
<li>Schema based modification</li>
<li>New key-value pair insertion</li>
</ul>

**Kind**: global function  
**Summary**: <p>TODO: Listed below</p>
<ul>
<li>Schema based modification</li>
<li>New key-value pair insertion</li>
</ul>.  
<a name="dateDiff"></a>

## dateDiff(from, to) ⇒ <code>Object</code>
<p>Calculates the difference between two provided dates and returns the result in various formats.</p>

**Kind**: global function  
**Summary**: Calculates the difference between two provided dates and returns the result in various formats.  
**Returns**: <code>Object</code> - <ul>
<li>An object containing the short and full string representations of the difference, as well as the individual calculated values.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>Date</code> | <p>The starting date.</p> |
| to | <code>Date</code> | <p>The ending date.</p> |

**Example**  
```js
console.log(dateDiff(new Date("12/12/2012"), new Date()));// Output{  "short": "3885d 15h 39m",  "full": "3885 day(s) 15 hours, 39 minutes",  "days": 3885,  "hours": 15,  "minutes": 39}
```
<a name="generateRandomString"></a>

## generateRandomString([length]) ⇒ <code>string</code>
<p>Generate a random string of characters.</p>

**Kind**: global function  
**Summary**: Generate a random string of characters.  
**Returns**: <code>string</code> - <ul>
<li>The randomly generated string.</li>
</ul>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [length] | <code>number</code> | <code>13</code> | <p>The desired length of the random string. Default is 13.</p> |

<a name="getDates"></a>

## getDates(startDate, endDate) ⇒ <code>Array.&lt;Date&gt;</code>
<p>Returns all the dates between the start date and end date, including both.</p>

**Kind**: global function  
**Summary**: Returns all the dates between the start date and end date, including both.  
**Returns**: <code>Array.&lt;Date&gt;</code> - <ul>
<li>An array of all the dates between the start and end dates, including both.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| startDate | <code>Date</code> | <p>The start date.</p> |
| endDate | <code>Date</code> | <p>The end date.</p> |

**Example**  
```js
// Example usage:getDates(new Date("07-07-2023"), new Date("07-10-2023"));// Expected output:// [//   "2023-07-06T18:30:00.000Z",//   "2023-07-07T18:30:00.000Z",//   "2023-07-08T18:30:00.000Z",//   "2023-07-09T18:30:00.000Z"// ]
```
<a name="getDiffInHrs"></a>

## getDiffInHrs(from, to) ⇒ <code>number</code>
<p>Calculates the difference in hours between two provided dates.</p>

**Kind**: global function  
**Summary**: Calculates the difference in hours between two provided dates.  
**Returns**: <code>number</code> - <p>The difference in hours between the two dates.</p>  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>Date</code> | <p>The starting date.</p> |
| to | <code>Date</code> | <p>The ending date.</p> |

**Example**  
```js
console.log(getDiffInHrs(new Date("12/12/2012"), new Date()));
```
<a name="getUniqueArray"></a>

## getUniqueArray(arr) ⇒ <code>Array</code>
<p>Returns a new array with only the unique elements from the input array.</p>

**Kind**: global function  
**Summary**: Returns a new array with only the unique elements from the input array.  
**Returns**: <code>Array</code> - <ul>
<li>An array containing only the unique elements from the input array.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | <p>An array of elements. Default value is an empty array.</p> |

<a name="hasOwnProperty"></a>

## hasOwnProperty(obj, keys, [returnType]) ⇒ <code>string</code> \| <code>boolean</code>
<p>Determines whether an object has a property with the specified name.</p>

**Kind**: global function  
**Summary**: Determines whether an object has a property with the specified name.  
**Returns**: <code>string</code> \| <code>boolean</code> - <ul>
<li>If returnType is true, returns a boolean value indicating whether all keys were found in the object. If returnType is false, returns a string indicating whether all keys were found or which keys were not found.</li>
</ul>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>object</code> |  | <p>The object to check for properties.</p> |
| keys | <code>string</code> |  | <p>The keys to check for in the object, separated by commas.</p> |
| [returnType] | <code>boolean</code> | <code>false</code> | <p>Determines the return type of the function. Defaults to false.</p> |

**Example**  
```js
console.log(hasOwnProperty({'a':1, 'b':2, 'c':3}, "a,d"));// Output: "d not found"
```
<a name="isStr"></a>

## isStr(str) ⇒ <code>boolean</code>
<p>Checks if <code>str</code> is a <code>String</code> type.</p>

**Kind**: global function  
**Summary**: Checks if <code>str</code> is a <code>String</code> type.  
**Returns**: <code>boolean</code> - <ul>
<li>Returns <code>true</code> if <code>str</code> is a <code>String</code> type, otherwise <code>false</code>.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | <p>The input to be checked.</p> |

**Example**  
```js
const result1 = isStr("hello"); // trueconst result2 = isStr(123); // falseconst result3 = isStr(true); // false
```
<a name="isStrHasSpecialChar"></a>

## isStrHasSpecialChar(str, pattern) ⇒ <code>boolean</code>
<p>Check's the special characters in the provided string.</p>

**Kind**: global function  
**Summary**: Check's the special characters in the provided string.  
**Returns**: <code>boolean</code> - <ul>
<li>Returns true if the <code>str</code> contains at least one special character from the <code>pattern</code>, false otherwise.</li>
</ul>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  | <p>The input string to check for special characters.</p> |
| pattern | <code>string</code> | <code>&quot;&lt;&gt;@!#$%^&amp;*()_+[]{}?:;\\|&#x27;\&quot;\\,./~&#x60;-&#x3D;&quot;</code> | <p>The pattern of special characters to check against. Default value is &quot;&lt;&gt;@!#$%^&amp;*()_+[]{}?:;|'&quot;,./~`-=&quot;.</p> |

**Example**  
```js
console.log(isStrHasSpecialChar("hello h@rry"));
```
<a name="isURLValid"></a>

## isURLValid(url) ⇒ <code>boolean</code>
<p>Checks if a given string is a valid URL.</p>

**Kind**: global function  
**Summary**: Checks if a given string is a valid URL.  
**Returns**: <code>boolean</code> - <ul>
<li>True if the URL is valid, false otherwise.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>The URL to be validated.</p> |

<a name="mergeObjects"></a>

## mergeObjects(obj1, obj2) ⇒ <code>object</code>
<p>Uses deep merge way to merge objects.</p>

**Kind**: global function  
**Summary**: Uses deep merge way to merge objects.  
**Returns**: <code>object</code> - <ul>
<li>The merged object containing the combined properties of obj1 and obj2.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| obj1 | <code>object</code> | <p>The first object to be merged.</p> |
| obj2 | <code>object</code> | <p>The second object to be merged.</p> |

<a name="modifyArray"></a>

## modifyArray(arr, ele, remEle:) ⇒ <code>Array</code>
<p>Add or remove an element from an array.</p>

**Kind**: global function  
**Summary**: Add or remove an element from an array.  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| ele | <code>any</code> | <p>element to be added</p> |
| remEle: | <code>any</code> | <p>element to be deleted</p> |

<a name="objectToQueryParams"></a>

## objectToQueryParams(o) ⇒ <code>string</code>
<p>Converts an object into a query string format.</p>

**Kind**: global function  
**Summary**: Converts an object into a query string format.  
**Returns**: <code>string</code> - <ul>
<li>The query parameters string.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | <p>The object to be converted into query parameters.</p> |

<a name="printPretty"></a>

## printPretty(obj) ⇒ <code>void</code>
<p>Prints the properties of an object in a formatted way.</p>

**Kind**: global function  
**Summary**: Prints the properties of an object in a formatted way.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | <p>The object whose properties need to be printed.</p> |

**Example**  
```js
let obj = {  id: "PS10140",  sdid: "SD13112",  disableCrud: "false",  newQueryParameter: "true"};printPretty(obj);// Output// id                : PS10140// sdid              : SD13112// disableCrud       : false// newQueryParameter : true
```
<a name="removeEmptyProperty"></a>

## removeEmptyProperty(out) ⇒ <code>object</code>
<p>Removes all the keys from an object for which the value is empty.</p>

**Kind**: global function  
**Summary**: Removes all the keys from an object for which the value is empty.  
**Returns**: <code>object</code> - <ul>
<li>An object with all the empty properties removed.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| out | <code>object</code> | <p>The object that may contain empty properties.</p> |

<a name="reverseStr"></a>

## reverseStr(str) ⇒ <code>string</code>
<p>Reverses a given string.</p>

**Kind**: global function  
**Summary**: Reverses a given string.  
**Returns**: <code>string</code> - <p>The reversed version of the input string.</p>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | <p>The input string without any spaces.</p> |

<a name="reverseEachWordInSentence"></a>

## reverseEachWordInSentence(sentence) ⇒ <code>string</code>
<p>Reverses each word in a sentence.</p>

**Kind**: global function  
**Summary**: Reverses each word in a sentence.  
**Returns**: <code>string</code> - <p>The reversed sentence where each word is reversed.</p>  

| Param | Type | Description |
| --- | --- | --- |
| sentence | <code>string</code> | <p>The sentence to be reversed.</p> |

<a name="reverseSentence"></a>

## reverseSentence(sentence) ⇒ <code>string</code>
<p>Reverses the order of words in a sentence.</p>

**Kind**: global function  
**Summary**: Reverses the order of words in a sentence.  
**Returns**: <code>string</code> - <p>The reversed sentence.</p>  

| Param | Type | Description |
| --- | --- | --- |
| sentence | <code>string</code> | <p>The sentence to be reversed.</p> |

<a name="shortenString"></a>

## shortenString(str, len) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - <ul>
<li>The shortened string if the length of the input string is greater than the specified length, otherwise the original string.</li>
</ul>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  | <p>The input string to be shortened.</p> |
| len | <code>number</code> | <code>50</code> | <p>The maximum length of the shortened string. Default value is 50 if not provided.</p> |

<a name="shuffleString"></a>

## shuffleString(str) ⇒ <code>string</code>
<p>Shuffles the characters of a given string and returns the shuffled string.</p>

**Kind**: global function  
**Summary**: Shuffles the characters of a given string and returns the shuffled string.  
**Returns**: <code>string</code> - <p>The shuffled string.</p>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | <p>The input string to be shuffled.</p> |

<a name="sortObjectByKey"></a>

## sortObjectByKey(arr, key, order) ⇒ <code>Array</code>
<p>Sorts an array of objects based on a specified key in ascending or descending order.</p>

**Kind**: global function  
**Summary**: Sorts an array of objects based on a specified key in ascending or descending order.  
**Returns**: <code>Array</code> - <ul>
<li>The sorted array of objects based on the specified key and order.</li>
</ul>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arr | <code>Array</code> |  | <p>An array of objects to be sorted. Default value is an empty array.</p> |
| key | <code>string</code> |  | <p>The key based on which the objects should be sorted.</p> |
| order | <code>number</code> | <code>1</code> | <p>The sorting order. Default value is 1 (ascending), but can be set to -1 for descending order.</p> |

<a name="sortObjectByMultipleKeys"></a>

## sortObjectByMultipleKeys(arr, keys) ⇒ <code>Array.&lt;Object&gt;</code>
<p>Sorts an array of objects based on multiple keys.</p>

**Kind**: global function  
**Summary**: Sorts an array of objects based on multiple keys.  
**Returns**: <code>Array.&lt;Object&gt;</code> - <p>The sorted array of objects.</p>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> | <p>The array of objects to be sorted.</p> |
| keys | <code>Array.&lt;String&gt;</code> | <p>The keys to sort the objects. Prefix a key with a hyphen (-) to sort in descending order.</p> |

**Example**  
```js
const object = [  { name: 'John', date: '2021-01-01' },  { name: 'Alice', date: '2021-02-01' },  { name: 'Bob', date: '2021-01-15' }];const sortedArray = sortObjectByMultipleKeys(object, ['name', '-date']);console.log(sortedArray);// Output: [//   { name: 'Alice', date: '2021-02-01' },//   { name: 'Bob', date: '2021-01-15' },//   { name: 'John', date: '2021-01-01' }// ]
```
<a name="toPascalCase"></a>

## toPascalCase(str, [removeSpecialChars]) ⇒ <code>string</code>
<p>Converts a string to PascalCase format.</p>

**Kind**: global function  
**Summary**: Converts a string to PascalCase format.  
**Returns**: <code>string</code> - <p>The input string converted to PascalCase format.</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  | <p>The input string to be converted to PascalCase.</p> |
| [removeSpecialChars] | <code>boolean</code> | <code>false</code> | <p>If set to true, any special characters in the string will be removed before conversion.</p> |

<a name="uniqueArrayOfObjects"></a>

## uniqueArrayOfObjects(arr) ⇒ <code>Array.&lt;object&gt;</code>
<p>Compares all the objects (both key and value) in the given array and returns the unique array.</p>

**Kind**: global function  
**Summary**: Compares all the objects (both key and value) in the given array and returns the unique array.  
**Returns**: <code>Array.&lt;object&gt;</code> - <ul>
<li>The unique array of objects.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;object&gt;</code> | <p>An array of objects.</p> |

**Example**  
```js
uniqueArrayOfObjects([{a: 2}, {a: 2}]); // [{"a":  2}]

uniqueArrayOfObjects([{a: {b: 2}}, {a: {b: 2}}]); // [{"a": {"b": 2}}]

uniqueArrayOfObjects([{a: 2}, {a: 2, b: 3}]); // [{a: 2}, {a: 2, b: 3}]
```
