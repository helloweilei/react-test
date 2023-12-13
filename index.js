import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './src/App.jsx';
import './src/style.scss';

createRoot(document.getElementById('app')).render(<App />);
