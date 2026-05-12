function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let temp = arr[i]
        for(var j = i-1; arr[j] > temp && j>=0; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = temp
    }
    return arr
}

let array = [2,1,3,4,6,5]
console.log(insertionSort(array))