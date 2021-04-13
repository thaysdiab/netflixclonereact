/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import './App.css'
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default function Read() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const LoadAll = async () => {
      // pegando a lista
      let list = await Tmdb.getHomeList();
      //console.log(list);
      setMovieList(list);

      // pegando o featured
      let originals = list.filter((i) => i.slug === 'originals');

      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );

      let chosen = originals[0].items.results[randomChosen];
      //console.log(chosen);
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      console.log(chosenInfo);
      setFeaturedData(chosenInfo);
    };
    LoadAll();
  }, []);

  useEffect(() => {
    const ScrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', ScrollListener);

    return () => {
      window.removeEventListener('scroll', ScrollListener);
    };
  }, []);

  return (
    <>
      <div className="page">
        <Header black={blackHeader} />
        {featuredData && <FeaturedMovie item={featuredData} />}
        <section className="lists">
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </section>
      </div>
      <footer>
        Todos os direitos das imagens são da Netflix. <br/>
        Dados Extraidos de
        www.themoviedb.org - Tutorial de Bonieky Lacerda youtube
      </footer>
      {movieList.length <= 0 && (
        <div className="loading">
          <div id="loader" className="nfLoader"></div>
        </div>
      )}
    </>
  );
}
