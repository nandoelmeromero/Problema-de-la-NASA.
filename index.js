//Promesas

const request = require("request");

//const getName = () => {
 //return new Promise((resolve, reject) => {
  //request.get("https://swapi.co/api/people/1/",
  //(err,response,body) => {
   //const personaje = JSON.parse(body);
   //response.statusCode == 200 
   //? resolve (personaje)      //Esto es un if (?) Es un operador ternario y se hace cuando es                                 verdadero. Con resolve sales de la promesa.
   //: reject("Error en getName"); //Esto es un else (:) 
  //}); 
 //});  //Lleva new por que es un objeto
//}

/* const getNameFilm = (urlFilm) => {
 return new Promise((resolve, reject) => {
  request.get(urlFilm,(err,response,body) => {
   const pelicula = JSON.parse(body);
   response.statusCode == 200
   ? resolve (pelicula)
   : reject("Error en getName") 
  });
 });
} */

/* getName().then((respuesta) => {
 console.log(respuesta.name);
 
 getNameFilm(respuesta.films[0]).then((respuestaFilm) => {
  console.log(respuestaFilm.title);
 }).catch(() => {
  console.log(err);
 });
}).catch((error) => {
 console.log(error);
}); */  
//.then() recive el resolve(resuelve) de la promesa, .catch() atrapa el reject (error)


/* getName().then((personaje) => {
 console.log(personaje.name);
 return getNameFilm(personaje.films[0]);
}).then((film) => {
 console.log(film.title);
}).catch((err) => {
 console.log(err);
}) */


//Ejercicio 2.
//Hacer una funcion que haga una peticion. (Ejemplo:
//peticionLibro("i robot"): http://openlibrary.org/search.json?q=i+robot) buscar un libro y traer el o los autores del primer libro.

/* const getBook = () => {
 return new Promise((resolve,reject) => {
  request.get ("http://openlibrary.org/search.json?q=i+robot",
  (err,response,body) => {
   const Book = JSON.parse(body);
   response.statusCode == 200
   ? resolve (Book)
   : reject ("Error en getBook")
  });
 });
} */

/* getBook().then((book) => {
 console.log("El libro es: " + book.docs[1].title);
 console.log("El autor es: " + book.docs[1].author_name[0]);
}).catch((err) => {
 console.log(err);
}) */

//Ejercicio 3.
//Hacer una peticion por autor y devolver la lista de sus libros //(http://openlibrary.org/search.json?author=asimov)

/* const getAutor = () => {
  return new Promise ((resolve, reject) => {
   request.get ("http://openlibrary.org/search.json?author=asimov",
   (err,response,body) => {
    const books = JSON.parse(body);
    response.statusCode == 200
    ? resolve(books)
    : reject ("Error en getBooks")
   });
  });
} */

/* getAutor().then((books) => {
 for(let i=0; i<=books.docs.length; i++){
  console.log("El libro "+ i + " es: " + books.docs[i].title);
 }
}) */

//Ejercicio.4
// Hacer una peticion a (http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse) y devolver el género de la banda deseada

/* const getGenero = (grupo) => {
  return new Promise ((resolve, reject) => {
    request.get (`http://www.theaudiodb.com/api/v1/json/1/search.php?s=${grupo}`,
    (err,response,body) => {
      const Banda = JSON.parse(body);
      response.statusCode == 200
      ? resolve (Banda)
      : reject ("Error al acceder a getGenero")
    });
  });
}

getGenero("pantera").then((Banda) => {
  console.log(Banda.artists[0].strStyle);
}).catch((err) => {
  console.log(err);
}) */

// Ejercicio 5.
// https://coinmarketcap.com/api/ devolver el nombre de las 10 criptomonedas mas caras en pesos mexicanos.

/* const getCriptomonedas = () => {
  return new Promise ((resolve, reject) => {
    request.get ("https://api.coinmarketcap.com/v2/ticker/5/")
  })
} */


// Ejercicio 6.
//Devolver los asteroides que sean potencialmente peligrosos para la tierra de la semana pasada hasta hoy.
//https://api.nasa.gov/api.html
// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key= 


const getAstroworld = (date1, date2) => {

 return new Promise ((resolve, reject) => {

  request.get (`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date1}&end_date=${date2}&api_key=nUJLuALoqfOL3ThMvZbWZ45IJx3hSYgMvczQ34yy`,
  (err,response,body) => {
    
    const asteroide = JSON.parse(body);
    
    response.statusCode == 200
    
    ? resolve (asteroide)
    : reject ("Error al acceder a los asteroides")
  
  });
 });
}


getAstroworld("2018-11-16","2018-11-23").then((asteroide) => {
  
  let fechas = Object.keys(asteroide.near_earth_objects) //Object.keys(objeto) Esto te regresa los atributos de un objeto en forma de arreglo
  console.log(fechas[0]);       
  console.log(fechas.length);    
  
  let astro = Object.keys(fechas[0]);

  console.log(astro);

  //console.log(asteroide.near_earth_objects[fechas[0]].astro[0]);

  
  
  //console.log(asteroide.near_earth_objects[fechas[0]]);
  //console.log(asteroide.near_earth_objects[fechas[0]]); //Esto me imprime todos los objetos que estan en la fecha 2018-11-23, el cual son 9 objetos
  //console.log(asteroide.near_earth_objects[fechas[0]].length)
  
  
  //for ( let i=0; i< fechas.length; i++){
  
    //for(let j=0; j<= asteroide.near_earth_objects[fechas[i]].length; j++){
    
    //if(asteroide.near_earth_objects[fechas[j].is_potentially_hazardous_asteroid] == false){
     
     //console.log("En la fecha: " + fechas[j] + "Paso el asteroide: " + asteroide.near_earth_objects[fechas[i]].name);
    
    //}else{
      /* console.log("error") */
    //}
   
   //}
  //} 
  
    
    
  

  
})