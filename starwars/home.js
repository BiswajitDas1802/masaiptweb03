let card = document.getElementById("cards")
let arr =[]

let movieData = JSON.parse(localStorage.getItem("movieData"))
if(movieData==null){
    getData() 
}else{
    movieData.map((elem)=>create(elem))
}



async function getData(){
    try {
       let data = await fetch("https://swapi.dev/api/people")
       data = await data.json()
       localStorage.setItem("movieData",JSON.stringify(data.results))
       data.results.map((elem)=>create(elem))
    } catch (error) {
       cosole.log(error); 
    }
}


function create(data){
    let div = document.createElement("div");
    let h2 = document.createElement("h2")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")
    h2.innerText ="Name : "+ data.name 
    p1.innerText = "gender : "+ data.gender
    p2.innerText = "Birth Year : "+data.birth_year
    p3.innerText = "Height : "+data.height
    p4.innerText = "Hair Color : "+data.hair_color
    div.append(h2,p1,p2,p3,p4)
    card.append(div)
}
// getData()