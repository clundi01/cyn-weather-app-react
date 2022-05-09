# CYN Weather App

This project provides a complete introduction to using React to build a client-side web app. I created a simple Weather App that allows you to search for locations and displays its current weather.


#User Stories
To find out the weather today when you are about to step out. Imagine yourself somewhere else while seeing how it looks 7 days from now.

#Added a DayCard Component 
//This function is getting both dates as argument and checking whether the dates are same or not.
function sameDay(d1, d2) {

//And returing the function by checking year, month and date of both the dates.
return d1.getFullYear() === d2.getFullYear() &&

d1.getMonth() === d2.getMonth() &&

d1.getDate() === d2.getDate();

}

export default function DayCard(weather){

//This is used to extract the date from the weather variable and convert it in the desired format.
var date = new Date(weather.dt * 1000)

//This variable is used to create date object for tomorrow variable.
var tomorrow = new Date()

//This is used to set the tomorrow's date by adding 1 to the date value.
tomorrow.setDate(tomorrow.getDate() + 1)

//This is used to check whether the date is today and tomorrow and subsequently assigning the value to day variable. 
var day = sameDay(date,new Date()) ? "Today" : sameDay(date,tomorrow) ? "Tomorrow" : (date.toLocaleString('en-us', {weekday: 'long'}))

return(

//This is creating a card in the frontend view.
<div className="card">

//This is used to display the current day in the card. 
<span className="day">{day}</span>

//This is used to add image from the source link which shows the weather details in the card.
<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />

//This is used to show the weather details for the day which is shown above.
<span>{weather.weather[0].main}</span>

//This is used to display the maximum temperature and the minimum temperature of the day.
<span className="tempno">{(Math.round(weather.temp.max)+Math.round(weather.temp.min))/2}°c</span>

</div>

)

}



