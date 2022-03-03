let card = document.getElementById("movie_cards")
let arr =[]
let movie = JSON.parse(localStorage.getItem("movie"))

// let btnSort = document.getElementById("sort")

let sort = document.getElementById("sort")


sort.onclick = function() {
    let btnSortVal = document.getElementById("sort1").value
//    console.log(btnSortVal)
   if(btnSortVal == "ascending"){
       movie =  movie.sort((a,b)=>a.episode_id - b.episode_id)
       console.log(movie)
        card.innerHTML=" " 
        movie.map((elem)=>create(elem))
   }else if(btnSortVal == "descending"){
    movie =  movie.sort((a,b)=>b.episode_id - a.episode_id)
    card.innerHTML=" " 
    movie.map((elem)=>create(elem))
    console.log(movie)
   }

}

let fill = document.getElementById("fill")
fill.onclick=function() {
        let filter = document.getElementById("filter").value
       console.log(filter)
       let fMovie = movie.filter((elem)=>elem.director==filter&&elem)
        // card.innerHTML=" " 
        // fMovie.map((elem)=>create(elem))
        // let btnSortVal = document.getElementById("sort1").value
//    console.log(btnSortVal)
let btnSortVal = document.getElementById("sort1").value

   if(btnSortVal == "ascending"){
       fMovie =  fMovie.sort((a,b)=>a.episode_id - b.episode_id)
      
        card.innerHTML=" " 
        fMovie.map((elem)=>create(elem))
   }else if(btnSortVal == "descending"){
    fMovie =  fMovie.sort((a,b)=>b.episode_id - a.episode_id)
      
        card.innerHTML=" " 
        fMovie.map((elem)=>create(elem))
   }
    }




if(movie==null){
    getData() 
}else{
    // getData() 
    // console.log(movie)   
    movie.map((elem)=>create(elem))
}



// characters: (18) ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/', 'https://swapi.dev/api/people/3/', 'https://swapi.dev/api/people/4/', 'https://swapi.dev/api/people/5/', 'https://swapi.dev/api/people/6/', 'https://swapi.dev/api/people/7/', 'https://swapi.dev/api/people/8/', 'https://swapi.dev/api/people/9/', 'https://swapi.dev/api/people/10/', 'https://swapi.dev/api/people/12/', 'https://swapi.dev/api/people/13/', 'https://swapi.dev/api/people/14/', 'https://swapi.dev/api/people/15/', 'https://swapi.dev/api/people/16/', 'https://swapi.dev/api/people/18/', 'https://swapi.dev/api/people/19/', 'https://swapi.dev/api/people/81/']
// created: "2014-12-10T14:23:31.880000Z"
// director: "George Lucas"
// edited: "2014-12-20T19:49:45.256000Z"
// episode_id: 4
// opening_crawl: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...."
// planets: (3) ['https://swapi.dev/api/planets/1/', 'https://swapi.dev/api/planets/2/', 'https://swapi.dev/api/planets/3/']
// producer: "Gary Kurtz, Rick McCallum"
// release_date: "1977-05-25"
// species: (5) ['https://swapi.dev/api/species/1/', 'https://swapi.dev/api/species/2/', 'https://swapi.dev/api/species/3/', 'https://swapi.dev/api/species/4/', 'https://swapi.dev/api/species/5/']
// starships: (8) ['https://swapi.dev/api/starships/2/', 'https://swapi.dev/api/starships/3/', 'https://swapi.dev/api/starships/5/', 'https://swapi.dev/api/starships/9/', 'https://swapi.dev/api/starships/10/', 'https://swapi.dev/api/starships/11/', 'https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/13/']
// title: "A New Hope"
// url: "https://swapi.dev/api/films/1/"
// vehicles: (4) ['http

async function getData(){
    try {
       let data = await fetch("https://swapi.dev/api/films")
       data = await data.json()
       localStorage.setItem("movie",JSON.stringify([]))
        console.log(data)
       localStorage.setItem("movie",JSON.stringify(data.results))
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
    h2.innerText ="Title : "+ data.title 
    p1.innerText = "Director : "+ data.director
    p2.innerText = "Release Date : "+data.release_date
    p3.innerText = "Producer : "+data.producer
    if(data.opening_crawl.length>=100){
        p4.innerText = "Openeing : "+data.opening_crawl.substring(0,100)+"..."
        
    }
    div.append(h2,p1,p2,p3,p4)
    card.append(div)
}



// getData()