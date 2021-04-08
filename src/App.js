import React, { useEffect} from 'react';
import Tmdb from './Tmdb';

export default ()=> {

  useEffect(() =>{
    //pegando a lista completa
    const loadAll = async()=>{
      let list = await Tmdb.getHomeList();
    }

    loadAll();
  }, []);

  return
}