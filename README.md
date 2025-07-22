# 🌦️ WeatherNow - Real time Weather App

A responsive weather application that fetches and displays current weather data for any city worldwide using a weather API.
This is the project which I made during my BANO QABIL course.

### <a href="https://haniasahar.github.io/Weather-App"/> Weather App Live Demo</a>

## ✨ Features

• **Real-time Weather Data** - Current conditions, temperature, humidity, wind speed  
• **City Search** - Find weather for any location  
• **Responsive Design** - Works on mobile, tablet, and desktop  
• **Modern Async Code** - Uses `async/await` for API calls  
• **Visual Weather Icons** - Clear representation of weather conditions  
• **Unit Conversion** - Switch between Celsius/Fahrenheit  

## 🛠 Tech Stack

```bash
"dependencies": {
  "react": "^18.2.0",
  "react-icons": "^4.11.0",   # Weather icons
  "react-loader-spinner": "^5.4.5" # Loading animations
}
```
## 🌐 API Used
OpenWeatherMap API

## 🚀 Getting Started
**Prerequisites**

• API key from your weather service provider
• Node.js (v16+ recommended)

**Installation**
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
```

**Configuration**

Create .env file in root directory:

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
```

**Running the App**
```bash
npm start
```

## 🧠 Core Implementation
• API Fetch with Async/Await

```javascript
async function fetchWeather(city) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_WEATHER_API_URL}?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
}
```

• Responsive Design Approach

• Mobile-first CSS with media queries

• Flexible grid layouts

• Dynamic font sizing (rem units)

• Adaptive component rendering

## 📱 Responsive Breakpoints
`css`

/* Mobile (default) */

.container { padding: 1rem; }

/* Tablet */

@media (min-width: 768px) {
  .container { padding: 2rem; }
}

/* Desktop */

@media (min-width: 1024px) {
  .container { max-width: 1200px; margin: 0 auto; }
}
🎨 UI Components
- Search Bar - City input with search button

- Weather Card - Displays current conditions

- Forecast Section - (If implemented)

- Unit Toggle - Celsius/Fahrenheit switcher

- Loading Indicator - During API fetch

## 🌟 Upcoming Features
- 5-day forecast

- Geolocation detection

- Weather map overlay

- Air quality index

<div align="center"> <br> <sub>Built with ❤️ by <a href="https://github.com/Haniasahar">Haniya Sahar</a></sub> </div>
