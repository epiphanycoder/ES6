//https://gist.github.com/joelpalmer/beab8d9a2de02c39ae09fea50dab5ea5

const qSort = (arr) => {
    if(arr.length === 0){
        return arr;
    }
    let left = [], right = [], pivot = arr[0];
    for(let i = 1; i< arr.length ; i++ ){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...qSort(left), pivot, ...qSort(right)];
}

// let g = qSort(['b','c','e','a']);
let g = qSort([2,4,5,7,1,2,5,4,6]);
console.log(g);
