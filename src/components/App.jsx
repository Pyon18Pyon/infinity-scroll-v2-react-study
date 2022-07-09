import React, { useState, useEffect } from "react";
import InfiniteList from "./InfiniteList";
import Loader from "./Loader";
import "./App.css";

// Unsplash API
const apiKey = "TeXgA8HmnBr-agrPz1a7WjRFwLMr9HOsN2hi5gSxBBA";

function App() {
  const [ appState, setAppState ] = useState({
    loading: false,
    lists: [],
  });
  
  const [ isBottom, setIsBottom ] = useState(false);

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
      setIsBottom(true);
    }
  }

  useEffect(() => {
    if (isBottom) {
      addImages(30);
    }
  }, [isBottom]);

  const addImages = (count) => {
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
    setAppState({ loading: true, lists: appState.lists });
    fetch(apiUrl)
      .then((response) => response.json())
      .then((lists) => {
        setAppState((prevState) => ({ loading: false, lists: [...prevState.lists, ...lists]}));
      });
    setIsBottom(false);
  };

  // useEffect(() => {
  //   setAppState({ loading: true });
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((lists) => {
  //       setAppState({ loading: false, lists: lists});
  //     });
  // }, [setAppState]);

  useEffect(() => {
    (async function () {
      addImages(5);
    })();
  }, [setAppState]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h1>Unsplash API - Infinite Scroll</h1>
      <div className="image-container" id="image-container">
        <InfiniteList  lists={appState.lists} />
        <Loader isLoading={appState.loading} />
      </div>
    </div>
   );
}

export default App;
