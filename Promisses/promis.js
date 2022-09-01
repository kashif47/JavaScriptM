let p=new Promise (function(resolve,reject){
    let workdone=true;
    if(workdone){
        resolve("Work done completed...")
    }else{
        reject("promis Rejected...")
    }
});

p.then((result)=>{
    console.log(result);
});

p.catch((result)=>{
    console.log(result);
});

p.finally(()=>{
    console.log("inside Finally");
    
});