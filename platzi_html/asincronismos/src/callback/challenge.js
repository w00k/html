let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true); // true for async
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4 ) {
      if (xhttp.status === 200) {
	callback(null, JSON.parse(xhttp.responseText));
      } else {
	const error = new Error('Error ' + url_api);
	return callback(error, null);
      }
    } 
  }
  xhttp.send();
}

//callback hell. 
//cuidado con usar esto, usar demaciadas llamadas de este tipo, es mejor redefinir las llamdas. 

//obtiene lista de personajes
fetchData(API, (error1, data1) => {
   if (error1) return console.error(error1);
   //hace una consulta al API concatenando el id de posición 0, id = 1
   fetchData(API + data1.results[0].id, (error2, data2) => {
      if (error2) return console.error(error2);
      //hace la llamda al valor ubicado en data2.origin.url = 'https://rickandmortyapi.com/api/location/1' 
      fetchData(data2.origin.url, (error3, data3) => {
	 if (error3) return console.error(error3);
	 //imprime en consola la data
	 console.log(data1.info.count);
	 console.log(data2.name);
	 console.log(data3.dimension);
      })
   })
});
