import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import bg from "./assets/bg.png";
import Nav from "./components/Nav";
import Search from "./components/search";
import Category from "./components/category";
import Funkoitem from "./components/funkoitem";
import Popup from "reactjs-popup";

function App() {
  const [apiData, setapiData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5006/api", {
        method: "GET",
      });
      const data = await response.json();
      setapiData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <div id="filterdiv">
          <Search />
          <Category />
        </div>
        <div id="funkodiv">
          {apiData.map((item, index) => {
            return (
              <Funkoitem
                key={index}
                image={item.imageName}
                name={
                  item.title.length < 30
                    ? item.title
                    : item.title.substr(0, 20) + "..."
                }
                fullname={item.title}
                series={item.series}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
