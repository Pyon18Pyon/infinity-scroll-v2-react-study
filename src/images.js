// import { useState } from 'react';

// // Unsplash API
// let count = 5;
// const apiKey = 'TeXgA8HmnBr-agrPz1a7WjRFwLMr9HOsN2hi5gSxBBA';
// let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// let photosArray =[];
// // let initialLoad = true;

// async function getPhotos() {
//   try {
//     const response = await fetch(apiUrl);
//     photosArray = await response.json();
//   } catch (error) {
//     console.log(error);
//   }
//   console.log('photosArray:', photosArray);
//   return photosArray;
// }

// // getPhotos();

// function usePhotos() {
//   const [ photos, setPhotos ] = useState(photosArray);

//   const newPhotos = async () => {
//     const newState = await getPhotos();
//     if (newState) {
//       setPhotos();
//     }
//   }; 
//   console.log('photos:', photos);
//   return [ photos, newPhotos ]
// }

// export default usePhotos;