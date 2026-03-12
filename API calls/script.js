

const URL = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME'

let div = document.getElementById("img");
let img = document.createElement("img");
let btn = document.querySelector("#btn");



let promise = async ()=> {
    console.log("fetching data from api")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0].url)

    img.src = data[1].url;
    img.alt = "random cat pic"
    img.style.width = "400px";   // width
  img.style.height = "350px";  // height

    div.append(img);

} 

btn.addEventListener("click",()=>{
    promise();
},false);

