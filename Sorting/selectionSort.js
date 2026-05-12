function selectionSort(arr){
    let min
    for(let i=0; i<arr.length-1 ; i++){
        let min = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[min]) min = j
        }
        if(i !== min){
                let temp = arr[i]
                arr[i] = arr[min]
                arr[min] = temp
            }
    }
    return arr
}


let array  = [6,2,4,3,1,5]
console.log(selectionSort(array))