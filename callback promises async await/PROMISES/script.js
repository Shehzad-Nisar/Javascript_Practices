// // //pending state promise

// // let promise1 = new Promise((resolve,reject)=>{
// //     console.log("promise is run")
    
// //     //
// // })

// // // resolve state promises
// // let promise = new Promise((resolve,reject)=>{
// //     console.log("promise is run")
// //     resolve("problem is resolved")
// //     //
// // })

// // //Rejected state promises
// // let promises = new Promise((resolve,reject)=>{
// //     console.log("promise is run")
// //     reject("get some errors")
// //     //
// // })

// // console.log(promise1)
// // console.log(promise)
// // console.log(promises)


// // function getInfo(userId,nextData){

// //    return new Promise((resolve,reject)=>{

// //     setTimeout(() => {
        
// //         // resolve("resolved")
// //         reject("rejected")
// //         console.log(userId);
        
// //     }, 5000);
// //    })
// // }

// //  let promise3 = getInfo(333)

// function apiCall(){
//     return new Promise((resolve,reject)=>{
//         let success = false;
//     if(success){
//         resolve("from api")
//     }else{
//         reject("from api")
//     }
//     })
// }

// let promise4 = apiCall()
// promise4.then((res)=>{
//     console.log("successfully done",res)
// })
// promise4.catch((e)=>{
//     console.log("failed to get data",e)
// })


// Example to resolve callback Hell problem by using using promises:

fetchData= (userId)=>{
   return new Promise((resolve,reject)=>{
     setTimeout(() => {
        console.log("user data is ",userId)
        resolve("from api ")

    }, 4000);
   })
}

fetchData(1).then((res)=>{
    fetchData(2).then((res)=>{
        fetchData(3).then((res)=>{
            console.log("fetching data completed")
        })
    })
})








