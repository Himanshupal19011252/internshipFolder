//  variables

let heading = document.getElementById("weatherheading");
let celcius = document.getElementById("celcius");
let kelvin = document.getElementById("kelvin");
let fahrenheit = document.getElementById("fahrenheit");

// for reset

function Reset() {
    celcius.value = '';
    kelvin.value = '';
    fahrenheit.value = '';
    heading.textContent = "Weather";
    document.body.style.backgroundImage = 'none';
    var newImageUrl = './image/startingbg.jpg';
    document.body.style.backgroundImage = 'url(' + newImageUrl + ')';
}

// for set new background image

function setNewBackgroundImage(url) {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundImage = 'url(' + url + ')';
}

// for set new weather image

function setWeatherHeading(headingtext){
    heading.textContent = headingtext;
}

// for change background image
function ImageChanger(currentValue) {
    var newImageUrl;
    if (currentValue <= 0) {
        newImageUrl = './image/verycold.jpg'; // Replace with the URL of your image
        setNewBackgroundImage(newImageUrl);
        setWeatherHeading("Very Cold Weather")
    }
    else if (0 < currentValue && currentValue <= 15) {
        newImageUrl = './image/fog.jpg';
        setNewBackgroundImage(newImageUrl);
        setWeatherHeading("Cold Weather")
    }
    else if (15 < currentValue && currentValue <= 27) {
        newImageUrl = './image/warm.jpg';
        setNewBackgroundImage(newImageUrl);
        setWeatherHeading("Warm Weather")
    }
    else if (27 < currentValue && currentValue <= 38) {
        newImageUrl = './image/hot.jpg';
        setNewBackgroundImage(newImageUrl);
        setWeatherHeading("Hot Weather")
    }
    else if (currentValue > 38) {
        newImageUrl = './image/veryhot.jpg';
        setNewBackgroundImage(newImageUrl);
        setWeatherHeading("Very Hot Weather")
    }
}

// convertor button
function Convertor() {
    let Value1 = parseFloat(celcius.value);
    let Value2 = parseFloat(kelvin.value);
    let Value3 = parseFloat(fahrenheit.value);

    if (!isNaN(Value1)) {
        fahrenheit.value = ((Value1 * 9 / 5) + 32).toFixed(2);
        kelvin.value = ((Value1) + 273.15).toFixed(2);
        ImageChanger(Value1);
    }
    else if (!isNaN(Value2)) {
        celcius.value = (Value2 - 273.15).toFixed(2);
        fahrenheit.value = ((Value2 - 273.15) * 9 / 5 + 32).toFixed(2);
        ImageChanger(celcius.value);
    }
    else if (!isNaN(Value3)) {
        celcius.value = ((Value3 - 32) * 5 / 9).toFixed(2);
        kelvin.value = ((Value3 - 32) * 5 / 9 + 273.15).toFixed(2);
        ImageChanger(celcius.value);
    }
}
