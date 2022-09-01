let k=new Promise (function(resolve,reject){
    let workdone=true;
    if(workdone){
        resolve("Work done completed...")
    }else{
        reject("promis Rejected...")
    }
});

k.then((result)=>{
    console.log(result);
}).then(()=>{
    console.log("Second");
}).then(()=>{
    console.log("Third");
}).then(()=>{
    console.log("Fourth");
})

k.catch((result)=>{
    console.log(result);
});

// p.finally(()=>{
//     console.log("inside Finally");
// });