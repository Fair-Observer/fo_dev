import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App.js';

const container = document.getElementById('root');

// Create and render a root with hydration.
const root = ReactDOM.hydrateRoot(container, <BrowserRouter><App /></BrowserRouter>);