console.log('before');

/* getUser(1)
 .then(user => getRepos(user.gitHubUserName))
 .then(repos => getCommits(repos[0]))
 .then(commits => console.log('Commits:',commits))
 .catch(err => console.log('Error:',err.message));
 *///有了Async await我们可以write asynchronous code like synchronous code
//但是注意一点：await is only valid in async function，所以我们wrap these inside a async function
//also async await have to use try catch block
async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepos(user.gitHubUserName);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch(err){
        console.log('Error',err.message);
    }    
}
//the return type of this func is Promise<void>,which means a promise that once fulfilled doesn't result in a value.
//so async and await are built on top of promises, they are syntactical sugars
displayCommits();

console.log('after');

function getUser(id){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log('reading user.......');
            //In order to return the result to the consumer of this promise, we use the resolve function.
            resolve({id:id,gitHubUserName:'cici'});
        },2000);
    });   
}

function getRepos(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('reading repos.....');
            //resolve(['repo1','repo2','repo3']);
            reject(new Error("cann't find repos"));
        },2000);
    });
}
function getCommits(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('GETTING COMMITES.......');
            resolve(['first commit','v2','v3']);
        },2000);
    });
}