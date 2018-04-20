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

wait(2000).then(msg => {console.log(msg)});