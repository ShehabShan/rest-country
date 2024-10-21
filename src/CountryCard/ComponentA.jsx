import { useState } from "react";
import "./componentA.css";

const ComponentA = ({ infos, setInfos }) => {
  const {
    cca2,
    cca3,
    ccn3,
    independent,
    region,
    area,
    population,
    flags,
    timezones,
    capital,
    name,
  } = infos;

  const populationFormet = (population) => {
    return (population /= 1000000).toFixed(3);
  };

  // const sortByArea = () => {
  //   const land = landmass.sort((a, b) => a - b);
  //   setLandmass(land);
  // };


  return (
    <div className="section">
      {/* <button onClick={sortByArea}>Sort by Area</button> */}
      <div className="container">
        <div className="container-box1">
          <div className="content-box1 card">
            <div>
              <h1>{area} KM</h1>
              <p>
                {name.common} area is {area} KM
              </p>
              <hr />
            </div>
            <div className="align">
              <p>{name.common}</p>
              <img className="flag-img" src={flags.png} alt="" />
            </div>
          </div>
          <div className="content-box2 card">
            <h2> {name.common} Population:</h2>
            <hr />
            <h1>{populationFormet(population)} Millions</h1>
          </div>
          <div
            className="content-box3 card"
            style={{
              backgroundImage: `url(${flags.png})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          >
            <h1>{name.common}</h1>
            <div>
              <h2>Independent {independent ? "✅" : "❌"}</h2>
            </div>
          </div>
        </div>
        <div className="container-box2 ">
          <div className="content-box4 card">
            <h4>Current Time</h4>
            <h1>{timezones}</h1>
          </div>
          <div className="content-box5 card">
            <h2>Capital</h2>
            <p>{capital}</p>
          </div>
          <div className="content-box6 card">
            <p>Cca2: {cca2}</p>
            <p>ccn3: {cca3} </p>
            <p>cca3: {ccn3} </p>
          </div>
          <div className="content-box7 card">
            <h1>Region: {region} </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentA;
