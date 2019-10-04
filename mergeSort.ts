// https://gist.github.com/joelpalmer/beab8d9a2de02c39ae09fea50dab5ea5
function mergeSort(items, compare = (x,y) => { return x < y}){
    console.log(items);
    if(items.length <=  1) {
        return items;
    }    

    let {left, right} = divide(items);
    console.log('left ' ,left);
    console.log('right ' ,right);
    return merge(mergeSort(left, compare), mergeSort(right, compare), compare, items);
}

function divide(items){
    switch(items.length){
        case 0:{
            return {left : [], right : []};
        }
        case 1: {
            return {left : items, right: []};
        }
        default:{
            let index = Math.floor(items.length / 2);
            return {
                left: items.slice(0, index),
                right: items.slice(index)
            };
        }
    }
}

function merge(left, right, compare, A){
    let [res, indexL, indexR] = [[], 0, 0];
    for(let i = 0; i< A.length ; i++){
       if(compare(left[indexL] , right[indexR])) {
           res.push(left[indexL]);
           indexL++;
       }else {
           res.push(right[indexR]);
           indexR++;
       }
       if(indexL == left.length || indexR == right.length){
           break;
       }
    }
    return indexL < left.length ? res.concat(left.slice(indexL)) 
        : res.concat(right.slice(indexR));
}
let result = mergeSort([2,4,5,7,1,2,5,4,6]);
console.log('result: ', result);

