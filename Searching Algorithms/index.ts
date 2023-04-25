 function binarySearchStrings(arr: any, target: string): boolean {
    let left = 0;
    let right = arr.length - 1;
    if(target === '' || !target) return false;
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      let currentElem = arr[middle];
      if(currentElem.localeCompare(target) === -1) {
        left = middle + 1
      }
      else if(currentElem.localeCompare(target) === 1) {
        right = middle - 1;
      }
      else {
        return true
      }
    }
    return false
  }

  function mergeArrays(arr1: any, arr2: any) {
    let merged = [];
    let i = 0;
    let j = 0;
    while(i < arr1?.length && j < arr2?.length) {
      if(arr2[j].localeCompare(arr1[i]) === 1) {
        merged.push(arr1[i]);
        i++
      }
      else if(arr2[j].localeCompare(arr1[i]) === -1) {
        merged.push(arr2[j])
        j++
      }
    }
    while (i < arr1?.length) {
      merged.push(arr1[i]);
      i++
    }
    while(j < arr2?.length) {
      merged.push(arr2[j]);
      j++
    }
    return merged
  }

  function mergeSort(arr: string[]) {
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let half1 = mergeSort(arr.slice(0, middle));
    let half2 = mergeSort(arr.slice(middle));
    return mergeArrays(half1, half2);
  }
