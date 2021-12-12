import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{BrowserRouter} from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';


ReactDOM.render(
<BrowserRouter>
<AlertProvider template={AlertTemplate}>
<App />
</AlertProvider>
</BrowserRouter>
,document.getElementById('root'));

