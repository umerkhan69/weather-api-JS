function getweather() {
    // get variablevalue input box
    let checkCityName = document.getElementById("temp1").value;
      
      axios.get(`https://api.weatherapi.com/v1/current.json?key=bc252d689a524ba8b32100817241807&q=${checkCityName}&aqi=yes`)


      .then(function (response){
        // handle success
        //console.log(response);
        let weather1 = response.data.current.temp_c;
        //console.log(weather1)

        document.getElementById("tempDisplay").innerHTML =(`Today, Temp of ${checkCityName} is ${weather1}`);
      })
.catch(function (error) {
    //handle error
    console.log(error);
})

}

/*axios.get('/user?ID=12345')
.then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })*/