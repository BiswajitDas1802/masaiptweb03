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

getData()