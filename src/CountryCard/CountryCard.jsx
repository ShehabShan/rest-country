import { useState, useEffect } from "react";
import ComponentA from "./ComponentA";

const CountryCard = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setInfos(data);
    };
    fetchData();
  }, []);

  const sortByArea = () => {
    const land = infos.sort((a, b) => Number(a.area) - Number(b.area));
    setInfos(land);
  };

  return (
    <div>
      <button onClick={sortByArea}>Sort by Area</button>
      {infos.map((info, index) => (
        <ComponentA key={index} infos={info} setInfos={setInfos} />
      ))}
    </div>
  );
};

export default CountryCard;
