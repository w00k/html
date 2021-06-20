const somethingWillHappen = () => {
   return new Promise((resolve, reject) => {
      if (true) {
	 resolve('Hey');
      } else {
	 reject('Whoooops!');
      }
   });
}

somethingWillHappen()
   .then(response => console.log(response))
   .catch(err => console.error(err));

const somethingWillHappen2 = () => {
   return new Promise((resolve, reject) => {
      if (true) {
	 setTimeout(() => {
	    resolve('True');
	 }, 2000)
      } else {
	 let error = new Error('Whoop!');
	 reject(error);
      }
   });
}

somethingWillHappen2()
   .then(response => console.log(response))
   .catch(err => console.error(err));

console.log('run Promise.all');

//ejecutar 2 o más promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
     console.log('Array of results', response);
  })
  .catch(err => {
     console.error(err);
  })
