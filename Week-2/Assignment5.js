function binarySearchPosition(numbers, target) {
    let left=0;
    let right=numbers.length-1;
    let mid=right/2+1;
        if(numbers[mid]===target){
            return mid;
        }else if(target<numbers[mid]){
            if(numbers[(mid-1)/2-1]==target){
                return (mid-1)/2-1;
            }
        }else if(target>numbers[mid]){
            if(numbers[mid+right/2/2]==target){
                return mid+right/2/2;
            }
        }
    }
    console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should
