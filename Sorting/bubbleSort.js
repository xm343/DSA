function bubbleSort(array){
    for(let i=array.length; i>0; i--){
        for(let j=0; j<array.length; j++){
            if(array[j] > array[j+1]){
                let temp = array[j]
                array[j] = arr[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

let arr = [4,3,2,5,1,6]
console.log(bubbleSort(arr))