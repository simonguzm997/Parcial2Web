import React, { useState, useEffect } from 'react';
import Pokemon from "./pokemon";
import Graphic from "./graphics";
import {FormattedMessage} from 'react-intl';
import { Container, Row, Col, Table, Badge } from 'react-bootstrap';

const PokemonsList = () => {


  const [pokemons, setPokemon] = useState("");

  function getLanguage() {
    return navigator.language || navigator.userLanguage;
  }




   useEffect(()=>{
    if(!navigator.onLine){
        if(localStorage.getItem("pokemons") === null) {
            console.log("No se pueden traer los pokemons porque no tiene conexión")

        } else {
            setPokemon(JSON.parse(localStorage.getItem('pokemons')));
        }
    } else {

        let URL = "";

        console.log("En List "+ getLanguage())

        if(getLanguage()==="en-US"){
            console.log("Estoy en ENN")
            URL = "https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json"
        }else{
            console.log("Estoy en ESSS else")
            URL = "https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/e2bc20df02828d297f99558551e37959ac97a6f8/pokemon-es.json"
        }

        fetch(URL)
        .then(res => res.json())
        .then(res => {
            setPokemon(res);
            localStorage.setItem("pokemons", JSON.stringify(res));
        });
    }
}, []);

  
    


    return (
      <div>
        <h1><FormattedMessage id="TableTitle"/></h1>
        <Table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                  <FormattedMessage id="Image"/>
              </th>
              <th scope="col"><FormattedMessage id="Name"/></th>
              <th scope="col"><FormattedMessage id="Description"/></th>
              <th scope="col"><FormattedMessage id="Height"/></th>
              <th scope="col"><FormattedMessage id="Weight"/> </th>
              <th scope="col"><FormattedMessage id="Type"/></th>
            </tr>
          </thead>
          <tbody>
              {pokemons &&pokemons.map((e,i) => <Pokemon key={i} pokemon={e}/>)}
          </tbody>
        </Table>

        <div>
        <h1><FormattedMessage id="GraphTitle"/></h1>
          {pokemons &&
            <Graphic datos={pokemons} />
          }
        </div>
      </div>
      
    );
  
}

export default PokemonsList