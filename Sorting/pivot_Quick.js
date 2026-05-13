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