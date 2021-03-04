console.log('before');
getUser(1,(user)=>{
    console.log('User:',user);
    getRepos(user.gitHubUserName,(repos)=>{
        console.log('Repos:',repos);
        getCommits(repos[0],(commits)=>{
            console.log(commits);
        })
    });
});
console.log('after');

function getUser(id,callback){
    setTimeout(()=>{
        console.log('reading user.......');
        callback({id:id,gitHubUserName:'cici'});
    },2000);
}
function getRepos(userName,callback){
    setTimeout(()=>{
        console.log('reading repos.....');
        callback(['repo1','repo2','repo3']);
    },2000);
}
function getCommits(repo,callback){
    setTimeout(()=>{
        console.log('GETTING commits......');
        callback(['first commit','v2']);
    },2000);
}