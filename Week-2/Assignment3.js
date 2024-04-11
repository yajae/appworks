function count(input) {
// your code here
    let word= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","t","u","v","x","y","z"];
    let asw={};
    for(let i=0;i<input.length;i++){
        for(let j=0;j<word.length;j++){
            if(input[i]===word[j]){
                if(asw[input[i]]){asw[input[i]]++}
                else(asw[input[i]]=1);

            }
        }
    }
    return asw;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}



let input2 = [
{ key: "a", value: 3 },
{ key: "b", value: 1 },
{ key: "c", value: 2 },
{ key: "a", value: 3 },
{ key: "c", value: 5 },
];
function groupByKey(input) {
    // your code here
    let object={};
    for(let i=0;i<input.length;i++){
        console.log(input[i]["key"]);
        if(!object[input[i].key]){
            object[input[i].key]=input[i].value;
        }else{
            object[input[i].key]+=input[i].value;
        }
    }
    return object;
};
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
