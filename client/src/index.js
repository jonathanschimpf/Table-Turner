import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from "./registerServiceWorker";



const root = createRoot(document.getElementById('root'));
root.render(<App />);


registerServiceWorker();
