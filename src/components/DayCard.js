function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
}
export default function DayCard(weather){
    var date = new Date(weather.dt * 1000)
    var tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    var day = sameDay(date,new Date()) ? "Today" : sameDay(date,tomorrow) ? "Tomorrow" : (date.toLocaleString('en-us', {weekday: 'long'}))
    return(
        <div className="card">
            <span className="day">{day}</span>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <span>{weather.weather[0].main}</span>
            <span className="tempno">{(Math.round(weather.temp.max)+Math.round(weather.temp.min))/2}°c</span>
        </div>
    )
}