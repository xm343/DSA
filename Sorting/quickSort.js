function swap(array, firstIndex, lastIndex){
    let temp = array[firstIndex]
    array[firstIndex] = array[lastIndex]
    array[lastIndex] = temp
}


function pivot(arr, pivotIndex = 0, endIndex = arr.length-1){
    let swapIndex = pivotIndex
    for(let i = pivotIndex+1; i<=endIndex; i++){
        if(arr[i] < arr[pivotIndex]){
            swapIndex++
            swap(arr,swapIndex,i)
        }
    }
     swap(arr, pivotIndex, swapIndex)
    return swapIndex
}

function quickSort(arr, left = 0, right = arr.length-1){
   if(left<right){
     let pivotIndex = pivot(arr, left ,right)
    quickSort(arr,left,pivotIndex-1)
    quickSort(arr,right,pivotIndex+1)
   }
   return arr
}

array = [3,2,4,5,6,2,1,9,10]
console.log(quickSort(array))