// A. callback function
function delayedResult(n1, n2, delayTime, callback) {
    setTimeout(() => callback(n1+n2), delayTime);
}
//delayedResult(4, 5, 3000, function (result) {console.log(result);}); 

//B. promise
function delayedResultPromise(n1, n2, delayTime) {
    const catchResult = new Promise ((res, rej) => {
        setTimeout(() => {
            res(`${n1+n2}`);
        }, delayTime)
    });
    return catchResult;
}
// delayedResultPromise(4, 5, 3000).then(console.log);

//C. Async / await
async function main() {
    let result = await delayedResultPromise (4,5,3000);
    console.log(result);
    // your code here, you should call delayedResultPromise here and get the result using async/await.
    }
main(); // result will be shown in the console after <delayTime>seconds
