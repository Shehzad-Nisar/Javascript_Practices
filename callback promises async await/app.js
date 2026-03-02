//CALL BACK AND CALLBACK HELL PROBLEM
function getData (username,callback){
   setTimeout(()=>{
      console.log("Your ID is :",username)
      if(callback){
         callback();
      }
   },4000)
}

/* so it's leads to callback Hell problem which is not acceptable in realword applications.
Nested callbacks are stacked below one another like a pyramid which is called as (Doom pyramid)
- it is difficult to understand and manages

This problem is solved by PROMISES */

getData('shehzad nisar',()=>{
   console.log("getting username for user2")
   getData("zeshan haider",()=>{
      console.log("getting username for user3")
      getData("mushahid hussain",()=>{
         console.log("getting username for user4")
         getData("babarali")
      })
   })
});

//------------------------------------------------------------------------


//PROMISES