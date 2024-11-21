function printMax(data){
    let max = data[0];
    for (let val of data){
        if(val > max) {
            max = val;
        }
    }
    console.log(max)
    return max;
}

function printMin(data){
    let min = data[0];
    for (let val of data){
        if(val < min) {
            min = val;
        }
    }
    console.log(min)
    return min;
}

function printSum (data) {
    let sum = 0;
    for(let val of data){
        sum += val;
    }
    console.log(sum);
    return sum;
}

function printerr(msg) {
    console.log(msg);
}

async function sleep (ms) {
    await new Promise(resolve => {

    });
}

//sync code

const arr = [...Array(1000).keys()]; //this evals to an array with 1000 leng and 999 ints in ascending order.



printSum(arr);

printMax(arr);

printMin(arr);

console.log("all done");// this doesnt print till allat is done ^^^

//sync code 2



//async 1

console.log("---------- async 1 ----------");

function getData(){
    //const arr = undefined
    const arr = [...Array(1000).keys()];


    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(!arr){
                return reject("no data avail")
            }
            resolve(arr)
        }, 3000)
    })
}

let promise = getData();

promise.then(printSum, printerr); // first is the resolve function and second arg is reject function.

console.log(promise);

getData().then(printMax, printerr); // the promise returns either a resolve with data resolve(DATA) or reject(DATA) and then you handle the data in a .then

getData().then(printMin).catch(printerr); //catch is essentially the reject function and the .then is the resolve function

getData().then(printMin).then(printMax).then(printSum).catch(printerr);

//async 3

async function donut() {
    const resp = await fetch('https://pcpricee.xyz/intel-cpus', {
        method: 'GET',
    })

    let data = await resp.json()

    data.forEach(element => {
        document.getElementById("list").insertAdjacentHTML("beforeend", '<ol class="list">' + element + '</ol>')
    });
}

donut()







