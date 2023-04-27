

//get weather API
document.querySelector('.search-button').addEventListener('click', getFetch)



function getFetch(){

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=42.9832406&lon=-81.243372&appid=497f18bf99dfaa3787ed42a9650b0bf3`

  document.getElementById('fels').style.backgroundColor = '#585676'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        
//creating images and converting from icon to image        
        function changePicture(img) {
          const imageContainer = document.querySelector('#image');

          imageContainer.innerHTML = '';

          if(img === '01d' || '01n') { 
            let clearCloud = document.createElement('img')
            clearCloud.src = "./img/Clear.png"
            imageContainer.appendChild(clearCloud)

          }else if(img === '02d' || '02n') {
            let lightCloud = document.createElement('img')
            lightCloud.src = "./img/LightCloud.png"
            imageContainer.appendChild(lightCloud)

        } else if(img === '03d' || '03n') {
          let heavyCloud = document.createElement('img')
          heavyCloud.src = "./img/HeavyCloud.png"
          imageContainer.appendChild(heavyCloud)
          
        }else if(img === '04d' || '04n') {
        let heavyCloud = document.createElement('img')
        heavyCloud.src = "./img/HeavyCloud.png"
        imageContainer.appendChild(heavyCloud)
        
        }else if(img === '09d' || '09n') {
          let heavyRain = document.createElement('img')
          heavyRain.src = "./img/HeavyRain.png"
          imageContainer.appendChild(heavyRain)
        }else if(img === '10d' || '10n') {
        let lightRain = document.createElement('img')
        lightRain.src = "./img/Shower.png"
        imageContainer.appendChild(lightRain)
        } else if (img === '11d' || '11n') {
        let thunderstorm = document.createElement('img')
        thunderstorm.src = "./img/Thunderstorm.png"
        imageContainer.appendChild(thunderstorm)
        }else if (img === '13d' || '13n') {
        let snow = document.createElement('img')
        snow.src = "./img/Snow.png"
       imageContainer.appendChild(snow)
        }else {
          return error
        }
        }

document.querySelector('#cels').addEventListener('click', convertF)

document.querySelector('#fels').addEventListener('click', convertF)

        //storing data from api
       let todayTemperature = data.main.temp
       let cityName = data.name
       let visibility = data.visibility
       let airPresure = data.main.pressure
       let humidity = data.main.humidity
       let windSpeed = data.wind.speed
       let picture = changePicture(data.weather[0].icon)
       let weatherDescription = data.weather[0].main
       
   

console.log(picture)
    



//putting the data in the DOM
let today = new Date().toISOString().slice(0, 10)

document.querySelector('#date').innerHTML = today

       document.querySelector("a").innerHTML = cityName;

       document.querySelector(".weather").innerHTML = weatherDescription;

       document.querySelector(".temperature").innerHTML =
         todayTemperature + " °F";



       document.querySelector("#visibility").innerHTML = `${visibility} miles`;

       document.querySelector("#air").innerHTML = `${airPresure} mb`;

       document.querySelector("#humidity").innerHTML = `${humidity} %`;

       document.querySelector("#wind").innerHTML = `${windSpeed} mph`;

       
   //change the icon with picture
  
  // let images = document.createElement('img')
  // images.src = picture
  // let place = document.querySelector('#image')
  // place.appendChild(images)

  //       document.body.appendChild(images)


    // from F to C and from C to F     (chatgpt code)

 

    function convertF() {
      let celsBtn = document.getElementById('cels');
      let felsBtn = document.getElementById('fels');
      let todayTemperature = parseFloat(document.querySelector('.temperature').innerHTML);
      
      if (celsBtn.style.backgroundColor === '#E7E7EB' && felsBtn.style.backgroundColor === '#585676') {
        let convertToF = (todayTemperature * 9 / 5) + 32;
        let roundedF = convertToF.toFixed(2);
        document.querySelector('.temperature').innerHTML = roundedF + ' °F';
        
        celsBtn.style.backgroundColor = '#E7E7EB';
        felsBtn.style.backgroundColor = '#585676';
      } else {
        let convertToC = (todayTemperature - 32) * 5 / 9;
        let roundedC = convertToC.toFixed(2);
        document.querySelector('.temperature').innerHTML = roundedC + ' °C';
        
        celsBtn.style.backgroundColor = '#585676';
        felsBtn.style.backgroundColor = '#E7E7EB';
      }
    }
    
    document.getElementById('fels').onclick = convertF;
//my code
//  function convertF() {

//   let clickC =  document.getElementById('cels').style.backgroundColor 
//  clickC = '#585676' 
//  document.getElementById('fels').style.backgroundColor = '#E7E7EB'

//  console.log(clickC)


//   let clickF = document.getElementById('fels').style.backgroundColor
//   clickF = '#E7E7EB'
  
//     document.getElementById('cels').style.backgroundColor = '#585676'
    
//     let todayTemperature = parseFloat(document.querySelector('.temperature').innerHTML)

//     if (clickC === '#E7E7EB') {
//       let convertToF = (convertToC * 9 / 5) + 32
//       let roundedF = convertToF.toFixed(2)
//       document.querySelector('.temperature').innerHTML = roundedF + ' °F'
//      }else {
//      let convertToC = (todayTemperature - 32) * 5 / 9
//      let roundedC = convertToC.toFixed(2)
//        document.querySelector('.temperature').innerHTML = roundedC + ' °C'
//      }
  
//  }


// document.getElementById('fels').onclick = convertF;

  
     





    })

 

  
      .catch(err => {
          console.log(`error ${err}`)
      });





      }
      
