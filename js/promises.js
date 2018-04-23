function wait(msec) {
    return new Promise((resolve, reject) => {
        if(typeof msec === "number") {
            setTimeout(() => {
                resolve(`Waited ${msec/1000} seconds`);
            }, msec);
        }
        else {
            reject('Not a Number');
        }
    });
}
// wait(2000).then(msg => {console.log(msg)});

const username = "DanielC1342";
const githubPromise = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token 49738c1549f842827da8508aa76915bca399d612'}});

let r;

githubPromise
    .then(response => response.json())
    .then(users => {
        console.log(`last event at ${users[0].created_at}`);
    })
    .catch( error => {
        console.log(error);
    });

//GET /users/:username/events/public


