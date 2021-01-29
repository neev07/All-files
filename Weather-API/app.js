const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  console.log("Recived");

  const apiKey = "55ccfe5bab1ec6db693bb9ecf76a9a56";
  const unit = "metric";
  const place = req.body.city;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=" + apiKey + "&units=" + unit;

  https.get(url, function(response){
    console.log(response);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = Math.floor(weatherData.main.temp);
      console.log(temp);
      const weatherDes = weatherData.weather[0].description;
      console.log(weatherDes);
      const icon = weatherData.weather[0].icon;
      const feelsLike = Math.floor(weatherData.main.feels_like);
      const place = weatherData.name;
      var url_img = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<h1>The temperature in " + place + " is: " + temp + "°C , but it feels like it's " + feelsLike + "°C</h1>");
      res.write("<h3>The weather status in " + place + " is: " + weatherDes + " </h3>");
      res.write("<img src = " + url_img + "></img>")
      res.send();
    })
  });
});

app.listen(3000, function(){
  console.log("If you are seeing this message, this means that the server is running successfully running of port 3000.");
});
