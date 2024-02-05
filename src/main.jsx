import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App'; // Remove the extra dot before '/App'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
