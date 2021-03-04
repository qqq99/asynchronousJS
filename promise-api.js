const p = Promise.resolve('coming soon...');
//p is an Promise object , p can call then the result here is what Promise returns also what resolve returns
p.then(result => console.log(result));

const rej =Promise.reject(new Error('something went wrong...'));
rej
.then(result=>console.log('success'))
.catch(err=>console.log(err.message));
//Running Promises in Parallel

Promise.all([p,rej])
 .then(result => console.log(result))
 .catch(err => console.log(err.message));

const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async operation 1......');
        resolve(1);
    },2000);
});
const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("Async operation 2........");
        resolve(2);
    },2000);
});
/* const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async operation 3........");
        reject(new Error('P3 ERROR, therefor no result!'));
    },2000);
}); */
//if any of these Project rejected, this Promise.all considered rejected
/* Promise.all([p1,p2,p3])
 .then(result => console.log(result))
 .catch(err=>console.log(err.message));
 */
const p4 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("Async operation 4........");
        resolve(4);
    },2000);
});
//When we want to do something as soon as one of the asynchronous operations complete
//In that case use race instead of all
//我们可以看到result就只输出了1 
//也就是说as soon as one promise in the list is fulfilled the Promise.race is consider fulfilled
Promise.race([p1,p2,p4])
.then(result => console.log(result))
.catch(err => console.log('Error',err.message));

