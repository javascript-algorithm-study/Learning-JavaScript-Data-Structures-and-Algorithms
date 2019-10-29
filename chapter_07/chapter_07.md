 # ✅ chapter_07
## Object에서 해당 키값을 가지고 있는지(Array의 경우, key = index)
* [key] in object
```javascript
const obj = {name: 'obj-name'};
'name' in obj //  true
'obj-name' in obj // false :: key 값으로 검사해야 한다.
```
* hasOwnProperty([key])
```javascript
const obj = {name: 'o' +
 'bj-name'};
obj.hasOwnProperty('name'); //  true
obj.hasOwnProperty('obj-name') // false :: key 값으로 검사해야 한다.
```
> [chapter_07.js](https://github.com/zxczoxc125/Learning-JavaScript-Data-Structures-and-Algorithms/blob/zxczoxc125/chapter_07/chapter_07.js)
