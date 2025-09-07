let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("#fact");
let btn2 = document.querySelector("#pic");

async function getFacts() {
    try {
        let result = await axios.get(url);
        return result.data.fact;
    } catch(e) {
        console.log("Error occured - ",e);
        return "No data found";
    }
}

async function getImages() {
    try {
        let res = await axios.get(url2);
        console.log(res.data);
        return res.data.message;
    } catch (e) {
        console.log("Error occured - ",e);
        return '/';
    }
}

btn.addEventListener("click",async ()=> {
    let fact = await getFacts();

    let p = document.querySelector("#catFact");
    p.innerText = fact;
})
btn2.addEventListener("click",async ()=>{
    let link = await getImages();
    
    let img = document.querySelector("#dogImg");
    img.setAttribute("src",link);
});