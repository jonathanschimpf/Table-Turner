import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from 'react-router-dom';



const root = createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);


registerServiceWorker();
