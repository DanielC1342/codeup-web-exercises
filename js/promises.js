function wait(msec) {
    setTimeout(const timepromise = new Promise((resolve, reject)=>{
        if(typeof msec === number)
            resolve(`waited ${msec} milliseconds before firing`);
    }),msec)

}

wait(3000).then(msg => {console.log(msg)});