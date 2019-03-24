# Lodash-Own
Lodash 라이브러리를 구현하기 위해 만든 레포지토리입니다.<br>
It's a repository to implement own Lodash library.

<a href="https://www.npmjs.com/package/lodash-own" target="_blank">https://www.npmjs.com/package/lodash-own</a>

## Intro
기본적으로, 기본 타입(Primitive values) 관련 메서드들을 우선적으로 구현한 후, 차근차근 완성시켜보려 합니다.<br>
Basically, I will implement primitive types of methods first, and then complete the whole parts step by step.

얼추 구현이 마무리되면 실제 사용에 이해를 돕는 Documentation도 추가할 예정입니다.<br>
When the implementation is almost complete, I will also add documentation to help you understand the actual use.

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

- <b>head</b>\
Parameters: (array: Array)\
array: The array to query.\
\
Gets the first element of array.

- <b>join</b>\
Parameters: (array: Array, seperator: String)\
array: The array to convert.\
seperator: The element separator.\
\
Converts all elements in array into a string separated by separator.

## ETC
성능이나 구조, 더욱 깔끔한 코드에 관한 이슈는 언제나 환영입니다!<br>
Issues regarding performance, structure, and cleaner code are always welcome!
