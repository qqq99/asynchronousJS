console.log('before');
getUser(1,(user)=>{
    console.log('User:',user);
});
console.log('after');

function getUser(id,callback){
    setTimeout(() => {
        console.log('reading user......');
        callback({id:id,gitHubUsername:'cici'});
    },2000);
}
