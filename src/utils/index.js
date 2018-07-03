export const sortArrByParam = (arrToSort, param) => arrToSort.sort(
  (a, b) => (a[param] > b[param]) ? 1 : ((b[param]) ? -1 : 0));

export const mergeObjects = (obj1, obj2) => {
    Object.keys(obj2).map((key) => obj1[key] = obj2[key] );
    return obj1;
};

export const mergeObjectsInArrs = (arr1, arr2) => {
  let newArr = [];
  arr1.map((val, index) => {
    mergeObjects(val, arr2[index])
    newArr.push(val);
   })
   return newArr;
 };
