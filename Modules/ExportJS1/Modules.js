//Ye wala first tariqa hai export import ka

// export function add(x,y){

//     console.log(`the assition of two number ${x+y}`);
// }

// export let result=()=>{
//     console.log(`inside result`);
// }




// export let greet=()=>{
//     console.log(`good morning`);
// }

//Ye wala second tariqa hai export import ka
//  function add(a,b){

//          console.log(`the assition of two number ${a+b}`);
//      }
//     let result=()=>{
//         console.log(`inside result`);
//      }

//      let greet=()=>{
//         console.log(`good morning`);
//      }

//      export{add as y,result,greet};




//Ye wala third tariqa hai 
function add(a,b){

    console.log(`the assition of two number ${a+b}`);
}
let result=()=>{
   console.log(`inside result`);
}

let greet=()=>{
   console.log(`good morning`);
}

export{add as y,result,greet};

