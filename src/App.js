import React, { useState } from 'react';
//declare API key 
// Grab the long string and structured my API credentials as an object 
//nested within my App function:


const api = {
  key: "2b19aee9e56667fbeb554c6c90a1ca9b",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  // I used setWeather to store result into the data object.

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          //console.log(result);
        });
    }
  }

  // display as a constant will be today’s date. Declaring an 
  //value as a constant  The JavaScript Date object 
  //represents the current local time at the point from which my browser makes 
  //the request. By setting up a series of constant arrays representing the days of the week, 
  //and the months in the year, we’re able to return the integer of today’s date, month and 
  //of course, year, parsing these in as an index to our predetermined data structure. 

//used a simple arrow function to iterate through the pre-set arrays. 
//As a default, JavaScript has four built-in objects: Array, Date, Math, and String, 
//each with their own set of properties and existing functions, or Instance Methods. 
//For the Date object, we can use a combination of the methods, getDay, getDate, getMonth 
//and lastly, getFullYear, before using string concatenation to bring everything together:

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];// Fetches the day of the week
    let date = d.getDate();//Fetches the date
    let month = months[d.getMonth()];// Fetches the month
    let year = d.getFullYear(); //Feteches the 

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;