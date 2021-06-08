import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Component/Home";
import NasaWeather from "./Component/NasaWeather";
export default function App()
{

  return (
    <BrowserRouter>
      <div>
          <Route component={Home} path="/" exact />
          <Route component={NasaWeather} path="/nasaweather" />
      </div>
    </BrowserRouter>
  );
}

 
