<h1>WEATHER APP</h1>

This application will let you check the weather in any city you want, just by writting its name on the input field.

The following information will be displayed under the input field:
- City name
- Description
- Temperature
- Temperature feeling
- Humidity

The background image will also be updated with a photo of the city you are looking for.

The application is showing 'Barcelona' weather information by default.

Feel free to clone, download or share this weather application.

<h3>How to make it work:</h3>

1. Register to https://openweathermap.org/ to get your API Key for the weather information. 
2. Register to https://unsplash.com/developers to get your API Key for the background images.
3. Download the application code.
4. Open the folder that contains the application in your computer.
5. Create a <i>config.js</i> file in the project's root folder and add config object:

```
const config = {
    OPENWEATHERMAP_KEY : 'XXXXXXXXXXXXXXX',
    UNSPLASH_KEY : 'XXXXXXXXXXXXXXX'
}
```

7. Finally, open the <i>index.html</i> file in your favorite explorer and try it out.
