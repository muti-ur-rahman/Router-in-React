// src/settings.js

const settings = {
    apiUrl: import.meta.env.VITE_API_URL,
    apiKey: import.meta.env.VITE_API_KEY,
    appName: import.meta.env.VITE_APP_NAME,
    environment: import.meta.env.MODE, // Built-in Vite variable for env mode
  };
  
  export default settings;
  