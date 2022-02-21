import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    getfetchData("https://swapi.dev/api/people", setCharacters);
    getfetchData("https://swapi.dev/api/planets", setPlanets);
    getfetchData("https://swapi.dev/api/vehicles", setVehicle);
  }, []);

  const getfetchData = (url, setter) => {
    fetch(url)
      .then((response) => response.json())
      .then((dataJsonified) => setter(dataJsonified.results))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid">
      <div className="text-center m-5">
        <h1>Characters</h1>
      </div>
      <div className="card-group row-cols-5">
        {characters.map((character, index) => <Card key ={index} data = {
          { 
            name: character.name,
            prop1: "D.O.B",
            prop2: "Gender",
            prop3: "Heigth",
            value1: character.birth_year,
            value2: character.gender,
            value3 : character.height,
          }
        } /> )}
      </div>
      <div className="text-center m-5">
        <h1>Planets</h1>
      </div>
      <div className="card-group row-cols-5">
        {planets.map((planets, index) => <Card key ={index} data = {
          { 
            name: planets.name,
            prop1: "Climate",
            prop2: "Gravity",
            prop3: "Terrain",
            value1: planets.climate,
            value2: planets.gravity,
            value3 : planets.terrain,
          }
        } /> )}
      </div>
    </div>  
      
  );
};
