export const mergeArraysAsc = (arr1: Array<any>, arr2: Array<any>) => {
  let i = 0;
  let j = 0;
  let merged: Array<any> = [];
  while(i < arr1.length && i < arr2.length) {
    if(arr2[j] > arr1[i]) {
      merged.push(arr1[i]);
      i++
    }
    else {
      merged.push(arr2[j]);
      j++
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++
  }
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

export const mergeSortAsc = (arr: Array<any>) => {
  if(arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let half1 = mergeSortAsc(arr.slice(0, middle));
  let half2 = mergeSortAsc(arr.slice(middle));
  return mergeArraysAsc(half1, half2);
}

export const mergeSortDesc = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSortDesc(left), mergeSortDesc(right));
}

export function merge(left: Array<any>, right: Array<any>) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] >= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
