function max(numbers) {
    let val;
    for(let i=1; i<numbers.length; i++){
        
        if(numbers[i]>numbers[0]){val=numbers[i];};
    }
    return val;
}
function findPosition(numbers, target) {
    for(let i=0; i<numbers.length; i++){
        console.log(numbers[i]);
        if(numbers[i]==target){
        return i;
        break
        }
    }
    return -1
}
    console.log(max([1, 2, 4, 5])); // should print 5
    console.log(max([5, 2, 7, 1, 6])); // should print 7
    console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
    console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
    console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // shouldprint 2 (the first position)
    console.log(findPosition([5, 2, 7, 1, 6], 8)); 