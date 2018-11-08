export const sortArrByParam = (arrToSort, param) => arrToSort.sort(
  (a, b) => (a[param] > b[param]) ? 1 : ((b[param]) ? -1 : 0));

export const mergeObjectsInArrs = (arr1, arr2) => {
  let newArr = [];
  arr1.map((val, index) => {
    newArr.push({...val, ...arr2[index]});
   })
   return newArr;
 };
