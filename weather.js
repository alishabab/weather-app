const city = document.querySelector("#city")
const btn = document.querySelector("#btn")
const waetherDiv = document.querySelector("#weather")
    const getUsers = () => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=a6fffd615dee8a18a1d160f3eead85a3`)
      .then( (response) => {
        if (response.ok){
         return response.json()
        } else {
          throw new Error("City Not Found!!")
        }
      })
      .then( (response) => {
        waetherDiv.innerHTML = `<h3>${response.name}, ${response.sys.country}</h3>
        <img src="http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png"> <br>
        Description: ${response.weather[0].description} <br>
        Current Temp: ${fToC(response.main.temp)} °C <br>
        Min Temp: ${fToC(response.main.temp_min)} °C <br>
        Max Temp: ${fToC(response.main.temp_max)} °C ` 
        
      })
      .catch((err) => { 
          waetherDiv.innerHTML = `<h2>${err}</h2>`
      })
    }

    const fToC = (f) => {
      return (f-273.15).toFixed(2)
    }
    btn.addEventListener('click',getUsers)
