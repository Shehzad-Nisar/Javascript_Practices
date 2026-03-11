function getData(dataId,nextData){

    setTimeout(() => {
         console.log(dataId)
         if(nextData){
            nextData();

         }
         
        
    },2000);


   
}

getData(2223,()=>{
    getData(2222,()=>{
    getData(333)
})
});


