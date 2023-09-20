
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
<dt><a href="#arrayIntoChunks">arrayIntoChunks(arr, n)</a> ⇒</dt>
<dd><p>Convert an array into given chunk(s).</p></dd>
<dt><a href="#blockBrowserBackButton">blockBrowserBackButton()</a> ⇒ <code>void</code></dt>
<dd><p>Prevents the browser's back button from navigating to the previous page.</p></dd>
<dt><a href="#camelCase">camelCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Converts each word's first letter into uppercase.</p></dd>
<dt><a href="#checkObject">checkObject(data, keys)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks the object, if any one key's value is empty it returns false.</p></dd>
<dt><a href="#compareObject">compareObject(obj1, obj2)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function compares two objects by checking if their keys and values are equal. It can handle nested objects as well.</p></dd>
<dt><a href="#toNumber">toNumber(str, returnStrings)</a> ⇒ <code>number</code> | <code>boolean</code></dt>
<dd><p>Converts a given string formatted value into a number.</p></dd>
<dt><a href="#strToNum">strToNum(data, str)</a> ⇒ <code>Array</code> | <code>Object</code></dt>
<dd><p>Checks the provided array or object's string formatted values and converts them to numbers.</p></dd>
<dt><a href="#createTable">createTable(tableData)</a> ⇒ <code>object</code></dt>
<dd><p>Creates a table element with custom data based on the provided input.</p></dd>
<dt><a href="#currencyFormatter">currencyFormatter(val, options)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a number into a formatted currency value.</p></dd>
<dt><a href="#dataFormatter">dataFormatter(obj, formatter, options)</a> ⇒ <code>object</code></dt>
<dd><p>Data formatter - rename/customise keyname and values as you require, even nested keys and nested values can be defined.</p></dd>
<dt><a href="#dateDiff">dateDiff(from, to)</a> ⇒ <code>Object</code></dt>
<dd><p>Calculates the difference between two provided dates and returns the result in various formats.</p></dd>
<dt><a href="#generateRandomString">generateRandomString([length])</a> ⇒ <code>string</code></dt>
<dd><p>Generate a random string of characters.</p></dd>
<dt><a href="#getDates">getDates(startDate, endDate)</a> ⇒ <code>Array.&lt;Date&gt;</code></dt>
<dd><p>Returns all the dates between the start date and end date, including both.</p></dd>
<dt><a href="#getDiffInHrs">getDiffInHrs(from, to)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the difference in hours between two provided dates.</p></dd>
<dt><a href="#getNestedValue">getNestedValue(d, k)</a> ⇒ <code>any</code></dt>
<dd><p>Get nested value from the given object.</p></dd>
<dt><a href="#getUniqueArray">getUniqueArray(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns a new array with only the unique elements from the input array.</p></dd>
<dt><a href="#hasOwnProperty">hasOwnProperty(obj, keys, [returnType])</a> ⇒ <code>string</code> | <code>boolean</code></dt>
<dd><p>Determines whether an object has a property with the specified name.</p></dd>
<dt><a href="#isEmpty">isEmpty(data)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check's the provided input is valid.</p></dd>
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
<dt><a href="#sortObjectByKey">sortObjectByKey(obj, key, order)</a> ⇒ <code>Array</code></dt>
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

<a name="arrayIntoChunks"></a>

## arrayIntoChunks(arr, n) ⇒
<p>Convert an array into given chunk(s).</p>

**Kind**: global function  
**Summary**: Convert an array into given chunk(s).  
**Returns**: <p>Array of subarrays, where each subarray contains 'n' elements from the original array.</p>  

| Param | Description |
| --- | --- |
| arr | <p>The original array.</p> |
| n | <p>The number of elements to include in each subarray.</p> |

**Example**  
```js
arrayIntoChunks([1,2,3,4,5,6], 3); // [[1,2],[3,4],[5,6]]
Splits an array into subarrays of length 'n'.
```
<a name="blockBrowserBackButton"></a>

## blockBrowserBackButton() ⇒ <code>void</code>
<p>Prevents the browser's back button from navigating to the previous page.</p>

**Kind**: global function  
**Summary**: Prevents the browser's back button from navigating to the previous page.  
**Example**  
```js
const blockBrowserBackButton = require('./blockBrowserBackButton');blockBrowserBackButton();
```
<a name="camelCase"></a>

## camelCase(str) ⇒ <code>string</code>
<p>Converts each word's first letter into uppercase.</p>

**Kind**: global function  
**Summary**: Converts each word's first letter into uppercase.  
**Returns**: <code>string</code> - <ul>
<li>Returns a new string where each word's first letter is converted to uppercase.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | <p>The input string that needs to be converted to camel case.</p> |

<a name="checkObject"></a>

## checkObject(data, keys) ⇒ <code>boolean</code>
<p>Checks the object, if any one key's value is empty it returns false.</p>

**Kind**: global function  
**Summary**: Checks the object, if any one key's value is empty it returns false.  
**Returns**: <code>boolean</code> - <ul>
<li>Returns true if all values in the object are non-empty, otherwise returns false.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | <p>The object to be checked for empty values.</p> |
| keys | <code>Array.&lt;string&gt;</code> | <p>An optional array of keys to check for empty values. Default is an empty array.</p> |

**Example**  
```js
const payload = { id: 2, name: "John", address: { city: "bangalore" } }console.log(checkObject(payload, ["iddas"]));// falseconsole.log(checkObject(payload, ["name"]));// trueconsole.log(checkObject(payload, ["address.city"]));// true
```
<a name="compareObject"></a>

## compareObject(obj1, obj2) ⇒ <code>boolean</code>
<p>This function compares two objects by checking if their keys and values are equal. It can handle nested objects as well.</p>

**Kind**: global function  
**Summary**: This function compares two objects by checking if their keys and values are equal.  
**Returns**: <code>boolean</code> - <ul>
<li>Returns true if the objects have the same keys and values, false otherwise.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| obj1 | <code>object</code> | <p>The first object to compare.</p> |
| obj2 | <code>object</code> | <p>The second object to compare.</p> |

**Example**  
```js
compareObject({a: 2}, {a: 2}); // truecompareObject({a: 2}, {a: 23}); // falsecompareObject({a: {b: 2}}, {a: {b: 2}}); // true
```
<a name="toNumber"></a>

## toNumber(str, returnStrings) ⇒ <code>number</code> \| <code>boolean</code>
<p>Converts a given string formatted value into a number.</p>

**Kind**: global function  
**Summary**: Converts a given string formatted value into a number.  
**Returns**: <code>number</code> \| <code>boolean</code> - <ul>
<li>The number value if the input string is a valid number. If the input string is not a valid number and <code>returnStrings</code> is <code>true</code>, the function returns the input string. If the input string is not a valid number and <code>returnStrings</code> is <code>false</code>, the function logs a warning message and returns <code>undefined</code>.</li>
</ul>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  | <p>The string value to be converted into a number.</p> |
| returnStrings | <code>boolean</code> | <code>false</code> | <p>A flag indicating whether to return the input string if it is not a valid number. Default value is <code>false</code>.</p> |

**Example**  
```js
console.log(toNumber("-23.32")); // Output: -23.32console.log(toNumber("abc")); // Output: "abc NaN"
```
<a name="strToNum"></a>

## strToNum(data, str) ⇒ <code>Array</code> \| <code>Object</code>
<p>Checks the provided array or object's string formatted values and converts them to numbers.</p>

**Kind**: global function  
**Summary**: Checks the provided array or object's string formatted values and converts them to numbers.  
**Returns**: <code>Array</code> \| <code>Object</code> - <ul>
<li>The converted array or object.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array</code> \| <code>Object</code> | <p>The array or object to be converted.</p> |
| str | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>The key names separated by commas indicating which values in the object should be converted to numbers. (optional)</p> |

**Example**  
```js
strToNum(["3","4",3,"7",8]);// Output: [3, 4, 3, 7, 8]strToNum({ a:2, b:"4", c:"5" }, "c,b");// Output: { a: 2, b: 4, c: 5 }
```
<a name="createTable"></a>

## createTable(tableData) ⇒ <code>object</code>
<p>Creates a table element with custom data based on the provided input.</p>

**Kind**: global function  
**Summary**: Creates a table element with custom data based on the provided input.  
**Returns**: <code>object</code> - <ul>
<li>The dynamically created table element with the provided data and properties.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| tableData | <code>object</code> | <p>An object containing the table data and properties.</p> |
| tableData.data | <code>Array.&lt;object&gt;</code> | <p>An array of objects representing the data to be displayed in the table.</p> |
| tableData.fields | <code>Array.&lt;string&gt;</code> | <p>An array of field names to be shown as columns in the table.</p> |
| tableData.fieldTitles | <code>Array.&lt;string&gt;</code> | <p>An array of field titles to be displayed as column headers in the table.</p> |
| tableData.tableProps | <code>object</code> | <p>An object containing additional properties for the table.</p> |
| [tableData.tableProps.id] | <code>string</code> | <p>The id attribute of the table element. If not provided, a default id of &quot;generic-table&quot; is used.</p> |
| [tableData.tableProps.classList] | <code>Array.&lt;string&gt;</code> | <p>An array of custom class names to be added to the table element.</p> |
| [tableData.tableProps.style] | <code>string</code> | <p>Custom CSS styles to be applied to the table element.</p> |

<a name="currencyFormatter"></a>

## currencyFormatter(val, options) ⇒ <code>string</code>
<p>Converts a number into a formatted currency value.</p>

**Kind**: global function  
**Summary**: Converts a number into a formatted currency value.  
**Returns**: <code>string</code> - <ul>
<li>The formatted value as a string.</li>
</ul>  
**Link**: Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Number</code> | <p>The number to be formatted as currency.</p> |
| options | <code>Intl.NumberFormatOptions</code> | <p>An object with some or all of the properties of Intl.NumberFormatOptions.</p> |

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
<a name="getNestedValue"></a>

## getNestedValue(d, k) ⇒ <code>any</code>
<p>Get nested value from the given object.</p>

**Kind**: global function  
**Summary**: Get nested value from the given object.  
**Returns**: <code>any</code> - <ul>
<li>The nested value from the given object. If the nested value is not found, null is returned.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| d | <code>object</code> | <p>The object from which the nested value will be retrieved.</p> |
| k | <code>string</code> | <p>The dot-separated key to access the nested value.</p> |

**Example**  
```js
const data = {  pid: 'some-id',  portions: {    name: 'section'  }};console.log(getNestedValue(data, "portions.name")); // 'section'
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
<a name="isEmpty"></a>

## isEmpty(data) ⇒ <code>boolean</code>
<p>Check's the provided input is valid.</p>

**Kind**: global function  
**Summary**: Check's the provided input is valid.  
**Returns**: <code>boolean</code> - <ul>
<li>Returns true if the input is empty, otherwise returns false.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | <p>The input data to be checked for emptiness.</p> |

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

## sortObjectByKey(obj, key, order) ⇒ <code>Array</code>
<p>Sorts an array of objects based on a specified key in ascending or descending order.</p>

**Kind**: global function  
**Summary**: Sorts an array of objects based on a specified key in ascending or descending order.  
**Returns**: <code>Array</code> - <ul>
<li>The sorted array of objects based on the specified key and order.</li>
</ul>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>Array</code> |  | <p>An array of objects to be sorted. Default value is an empty array.</p> |
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
uniqueArrayOfObjects([{a: 2}, {a: 2}]); // [{"a":  2}]uniqueArrayOfObjects([{a: {b: 2}}, {a: {b: 2}}]); // [{"a": {"b": 2}}]uniqueArrayOfObjects([{a: 2}, {a: 2, b: 3}]); // [{a: 2}, {a: 2, b: 3}]
```
