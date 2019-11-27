


var cities=JSON.parse(localStorage.getItem("city"));

 if(cities){
   for(var i = 0; i<cities.length; i++){
     rendersearchCard(cities[i] );
   }
  
  
 }
 else{
    cities = [];
 
  
 }


 console.log(cities);
      
$("#submit").on("click",function(){
    event.preventDefault();
    rendersearchCard();
    var newweather = {city:$("#search").val()}
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + newweather.city + "&APPID=0c1a0fdb07e880991e77a08ad8ada572" + "&units=metric";
$.ajax({
    url: queryURL,
    method: "GET"
  })
    //  store all of the retrieved data inside of an object called "response"
    .then(function(response) {
      console.log(response);

    
      // Transfer content to HTML
      $(".city").html("<h1>" + response.name + " Weather </h1>");
      $('#wicon').attr('src',"https://openweathermap.org/img/wn/" +response.weather[0].icon + ".png");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".temp").text("Temperature (F) " + response.main.temp);

   
   
        })
       
        var newweather = {city:$("#search").val()}
        var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + newweather.city + "&APPID=0c1a0fdb07e880991e77a08ad8ada572" + "&units=metric";
        $.ajax({
            url: forecast,
            method: "GET"
          })
            //  store all of the retrieved data inside of an object called "response"
            .then(function(response) {
              console.log(response);
              
            
              $(".date1").text(response.list[5].dt_txt);
              $('#wicon1').attr('src',"http://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + ".png");
              $(".temp1").text("Temp:"+ response.list[5].main.temp + "F");
              $(".humidity1").text("Humidity:"+ response.list[5].main.humidity + "%");
              $(".date2").text(response.list[12].dt_txt);
              $('#wicon2').attr('src',"http://openweathermap.org/img/wn/" + response.list[12].weather[0].icon + ".png");
              $(".temp2").text("Temp:"+ response.list[12].main.temp + "F");
              $(".humidity2").text("Humidity:"+ response.list[12].main.humidity + "%");
              $(".date3").text(response.list[21].dt_txt);
              $('#wicon3').attr('src',"http://openweathermap.org/img/wn/" + response.list[21].weather[0].icon + ".png");
              $(".temp3").text("Temp:"+ response.list[21].main.temp + "F");
              $(".humidity3").text("Humidity:"+ response.list[21].main.humidity + "%");
              $(".date4").text(response.list[28].dt_txt);
              $('#wicon4').attr('src',"http://openweathermap.org/img/wn/" + response.list[28].weather[0].icon + ".png");
              $(".temp4").text("Temp:"+ response.list[28].main.temp + "F");
              $(".humidity4").text("Humidity:"+ response.list[28].main.humidity + "%");
              $(".date5").text(response.list[36].dt_txt);
              $('#wicon5').attr('src',"http://openweathermap.org/img/wn/" + response.list[36].weather[0].icon + ".png");
              $(".temp5").text("Temp:"+ response.list[36].main.temp + "F");
              $(".humidity5").text("Humidity:"+ response.list[36].main.humidity + "%");

        
              
    
        })
       
        rendersearchCard(newweather );
        cities.push(newweather);
        localStorage.setItem("city", JSON.stringify(cities));
        
        
      
        
      })
        

      


  
      function rendersearchCard(){
        var newweather = {city:$("#search").val()}
        
         var card=  ` <li class="list-group-item">${newweather.city}</li>
          `
          $("#citylist").append(card); 
          
        }

  





         
   
