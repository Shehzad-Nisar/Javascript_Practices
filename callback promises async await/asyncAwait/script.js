// function apiCall(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("successfully done");
//             resolve(200)
            
//         }, 2000);
//     })
// }

// async function getDatafromApi() {
//    await apiCall();
//    await apiCall();
//    await apiCall();
//    await apiCall();
//    await apiCall();

    
// }

// getDatafromApi()

function ValueChecker(value){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(value>0){
                console.log("successfully for " , value);
                resolve(200)
            }else{
                console.log("failed to get");
                reject(400);
            }
            
        }, 1000);
    })
}


//IIFE immediately invokes function expression used 
(async function ValueToChecker() {
    try {
        console.log("getting 1....")
    await ValueChecker(1);
    console.log("getting 2....")
    await ValueChecker(4);
    console.log("getting 3....")
    await ValueChecker(3);
    console.log("getting 4....")
    await ValueChecker(-5);
    console.log("getting 5....")
    await ValueChecker(5);
    
        
    } catch (error) {
        console.log(error)
        
    }
  
    
})();


