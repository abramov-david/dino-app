import React, { Fragment, useState, useEffect, useCallback } from "react";
import classes from "./App.module.css";
import Loading from "./components/Loading";
import Card from "./components/ImageModalCard/Card";
import logo_loading from "./assets/loading.png";
import logo_header from "./assets/header.png";
import logo_footer from "./assets/logo_white.png";

const access_key = "4e5lq2-eeivLjhTT3G8oiV_5JHCvVEyqXydlevz5Yow";
const url = `https://api.unsplash.com/search/photos?query=dinosaur&per_page=30&client_id=${access_key}`; //Unsplash API for loading images

function App() {
  const [curImage, setCurImage] = useState();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [images, setImages] = useState([]);

  const fetchImageData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      //get img links from API Unsplash
      data.results.map((img) => {
        setImages((prev) => {
          return [...prev, img.urls.regular];
        });
      });
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchImageData();
  }, [fetchImageData]);

  const handleOnclick = (e) => {
    setCurImage(e.target.src);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const dinoImg = images.map((img) => {
    return (
      <img
        key={Math.random() * 999999999} //not "the good way" to set id =)
        src={img}
        alt=""
        onClick={handleOnclick}
      />
    );
  });
  return (
    <Fragment>
      {!loading && (
        <header className={classes.appHeader}>
          <div className={classes.title}>
            <h1>DINO </h1>
            <p className={classes.mainLogoText}>image app</p>
          </div>
          <img src={logo_header} alt="" />
        </header>
      )}

      {loading && <Loading />}

      {showModal && <Card imgUrl={curImage} closeModal={closeModal} />}
      {error && <p>Something go wrong!</p>}
      <main className={classes.main}>{dinoImg}</main>

      {!loading && (
        <footer className={classes.name}>
          <div className={classes.text}>
            <h3>David Abramov</h3>
            <p>React Frontend Test</p>
          </div>
          <img src={logo_footer} width="10%" alt="" />
        </footer>
      )}
    </Fragment>
  );
}

export default App;
