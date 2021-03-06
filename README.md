# Js-Useful-Methods
Lodash, Underscore와 같은 유용한 자바스크립트 메서드 라이브러리 입니다!<br>
Implementation of Javascript Useful methods!

<a href="https://www.npmjs.com/package/js-useful-methods" target="_blank">https://www.npmjs.com/package/js-useful-methods</a>

## Intro
기본적으로, 기본 타입(Primitive values) 관련 메서드들을 우선적으로 구현한 후, 차근차근 완성시켜보려 합니다.<br>
Basically, I will implement primitive types of methods first, and then complete the whole parts step by step.

얼추 구현이 마무리되면 실제 사용에 이해를 돕는 Documentation도 추가할 예정입니다.<br>
When the implementation is almost complete, I will also add documentation to help you understand the actual use.

## Installation
Using npm:
```shell
$ npm i js-useful-methods
```
Using yarn:
```shell
$ yarn add js-useful-methods
```

In Node.js:
```javascript
Ex. var _ = require('js-useful-methods').default;
_.difference([1, 2, 3], [1, 2]); // [3]
```

If you can use 'Import':
```javascript
Ex. import _ from 'js-useful-methods';
_.flatten([1, 2, [3], [4, 5]]); // [1, 2, 3, 4, 5]
```

## Implemented Methods
### Array
- <b>chunk</b>\
Parameters: (array: Array, size: Number)\
array: The array to process.\
size(optional): The length of each chunk\
\
Creates an array of elements split into groups the length of size.\
If array can't be split evenly, the final chunk will be the remaining elements.

- <b>compact</b>\
Parameters: (array: Array)\
array: The array to compact.\
\
Creates an array with all falsey values removed.\
The values false, null, 0, "", undefined, and NaN are falsey.

- <b>concat</b>\
Parameters: (items: Array)\
items: The values to concatenate.\
\
Creates a new array concatenating array with any additional arrays and/or values.\
First Parameter is the array to concatenate.

- <b>difference</b>\
Parameters: (inspectArray: Array, excludeValues: ...Array)\
inspectArray: The array to inspect.\
excludeValues: The values to exclude.\
\
Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.\
The order and references of result values are determined by the first array.

- <b>drop</b>\
Parameters: (array: Array, dropNumber: Number)\
array: The array to query.\
dropNumber(optional): The number of elements to drop.\
\
Creates a slice of array with n elements dropped from the beginning.

- <b>dropRight</b>\
Parameters: (array: Array, dropNumber: Number)\
array: The array to query.\
dropNumber(optional): The number of elements to drop.\
\
Creates a slice of array with n elements dropped from the end.

- <b>dropRightWhile</b>\
Parameters: (array: Array, predicate: Function)\
array: The array to query.\
predicate(optional): The function invoked per iteration.\
\
Creates a slice of array excluding elements dropped from the end.\
Elements are dropped until predicate returns falsey.\
The predicate is invoked with three arguments: (value, index, array).

- <b>dropWhile</b>\
Parameters: (array: Array, predicate: Function)\
array: The array to query.\
predicate(optional): The function invoked per iteration.\
\
Creates a slice of array excluding elements dropped from the beginning.\
Elements are dropped until predicate returns falsey.\
The predicate is invoked with three arguments: (value, index, array).

- <b>findIndex</b>\
Parameters: (array: Array, predicate: Function, fromIndex: Number)\
array: The array to inspect.\
predicate(optional): The function invoked per iteration.\
fromIndex(optional): The index to search from.\
\
This method is like _.find except that it returns the index of the first element predicate\
returns truthy for instead of the element itself.

- <b>findLastIndex</b>\
Parameters: (array: Array, predicate: Function, fromIndex: Number)\
array: The array to inspect.\
predicate(optional): The function invoked per iteration.\
fromIndex(optional): The index to search from.\
\
This method is like _.findIndex except that it iterates over elements of collection from right to left.

- <b>flatten</b>\
Parameters: (array: Array)\
array: The array to flatten.\
\
Flattens array a single level deep.

- <b>flattenDeep</b>\
Parameters: (array: Array)\
array: The array to flatten.\
\
Recursively flattens array.

- <b>flattenDepth</b>\
Parameters: (array: Array, depth: Number)\
array: The array to flatten.\
depth(optional): The maximum recursion depth.\
\
Returns the new flattened array.

- <b>head</b>\
Parameters: (array: Array)\
array: The array to query.\
\
Gets the first element of array.

- <b>indexOf</b>\
Parameters: (array: Array, value: *, fromIndex: Number)\
array: The array to inspect.\
value: The value to search for.\
fromIndex(optional): The index to search from.\
\
Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons.\
If fromIndex is negative, it's used as the offset from the end of array.

- <b>initial</b>\
Parameters: (array: Array)\
array: The array to query.\
\
Gets all but the last element of array.

- <b>intersection</b>\
Parameters: (arrays: ...Array)\
array: The arrays to inspect.\
\
Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons.\
The order and references of result values are determined by the first array.

- <b>join</b>\
Parameters: (array: Array, seperator: String)\
array: The array to convert.\
seperator: The element separator.\
\
Converts all elements in array into a string separated by separator.

- <b>last</b>\
Parameters: (array: Array)\
array: The array to query.\
\
Gets the last element of array.

- <b>lastIndexOf</b>\
Parameters: (array: Array, value: *, fromIndex: Number)\
array: The array to inspect.\
value: The value to search for.\
fromIndex(optional): The index to search from.\
\
This method is like _.indexOf except that it iterates over elements of array from right to left.\
If fromIndex is negative, it's used as the offset from the end of array.

- <b>nth</b>\
Parameters: (array: Array, n: Number)\
array: The array to query.\
n(optional): The index of the element to return.\
\
Gets the element at index n of array.\
If n is negative, the nth element from the end is returned.

- <b>pull</b>\
Parameters: (array: Array, ...values: *)\
array: The array to modify.\
values: The values to remove.\
\
Removes all given values from array using SameValueZero for equality comparisons.\
Unlike _.without, this method mutates array.\
Use _.remove to remove elements from an array by predicate.

- <b>remove</b>\
Parameters: (array: Array, predicate: Function)\
array: The array to modify.\
predicate: The function invoked per iteration.\
\
Removes all elements from array that predicate returns truthy for and returns an array of the removed elements.\
The predicate is invoked with three arguments: (value, index, array).

- <b>reverse</b>\
Parameters: (array: Array)\
array: The array to modify.\
\
Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

- <b>slice</b>\
Parameters: (array: Array, start: Number, end: Number)\
array: The array to modify.\
start(optional): The start position.\
end(optional): The end position.\
\
Creates a slice of array from start up to, but not including, end.\
Note: This method is used instead of Array#slice to ensure dense arrays are returned.

- <b>tail</b>\
Parameters: (array: Array)\
array: The array to query.\
\
Gets all but the first element of array.

- <b>take</b>\
Parameters: (array: Array, n: Number)\
array: The array to query.\
n(optional): The number of elements to take.\
\
Creates a slice of array with n elements taken from the beginning.

##
### Etc
<ul>
    <li>
        <p>
            <b>characterNotation</b><br>
            Parameters: (str: String, unit: Number, character: String)<br>
            str: The string to add character per unit.<br>
            unit: The number unit to seperate a given string.<br>
            character: The character to add in string per unit.<br>
            <br>
            This function is created for the notation of money but, I added parameters for more usability.<br>
            It cuts a string by a unit from the length of string to insert a character.
        </p>
    </li>
</ul>

## ETC
성능이나 구조, 더욱 깔끔한 코드에 관한 이슈는 언제나 환영입니다!<br>
Issues regarding performance, structure, and cleaner code are always welcome!
