# will-it-rain

A simple yet powerful weather application that provides real-time weather updates and forecasts for any location. Get current conditions and a 2-day forecast in seconds.

## Features

- **Location-based Search** — Search for weather by city or address
- **Current Weather Display** — View real-time temperature, conditions, and detailed descriptions
- **2-Day Forecast** — Plan ahead with a quick 2-day weather preview
- **Weather Condition Icons** — Visual representations of weather conditions for quick scanning
- **Responsive Design** — Works seamlessly on desktop and mobile browsers

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A modern web browser

### Installation & Setup

1. Clone the repository:

 ````bash
git clone https://github.com/yourusername/will-it-rain.git
cd will-it-rain
````

2. Install Dependencies

````bash
npm install
````

3. Start the development server
````bash
npx webpack serve
````


## Project Structure

```
├── src/
│   ├── index.js          # Main application entry point; handles form submission and DOM rendering
│   ├── api.js            # Weather API integration; fetches and transforms data from Visual Crossing
│   ├── styles.css        # Application styling and responsive design
│   ├── template.html     # HTML structure with header, search form, and weather card containers
│   ├── icon/
│   │   └── site.webmanifest   # Progressive Web App manifest
│   └── img/              # Weather icons and images
├── webpack.config.js     # Webpack configuration for bundling and development server
├── package.json          # Project metadata and dependencies
└── README.md             # This file
```


## Features & Tech Stack
### Core Technologies
- Frontend Framework — Vanilla JavaScript (no frameworks)
- Styling — CSS
- Build Tool — Webpack 5 with dev server
- Weather API — Visual Crossing Weather API (metric units)

### Supported Features
- Real-time weather data
- Metric temperature units (Celsius)
- Weather condition descriptions
- 2-day forecast preview
- Location-based queries


## Roadmap
Future enhancements planned for this project:

- Extended Forecast — Add a 5-day and 10-day forecast view
- Unit Toggle — Allow users to switch between Celsius and Fahrenheit
- Geolocation — Auto-detect user location and display weather automatically
- Saved Locations — Let users bookmark favorite locations for quick access
- Weather Alerts — Notify users of severe weather conditions
- Dark Mode — Add a dark theme option for better readability