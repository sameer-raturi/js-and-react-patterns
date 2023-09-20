import {
  sendToGoogleAnalytics,
  sendToCustomAnalytics,
  sendToEmail,
} from './analytics.js';

import './style.css';

const pinkBtn = document.getElementById('pink-btn');
const blueBtn = document.getElementById('blue-btn');

console.log(pinkBtn);
pinkBtn.addEventListener('click', () => {
  const data = '🎀 Click on pink button! 🎀';
  sendToGoogleAnalytics(data);
  sendToCustomAnalytics(data);
  sendToEmail(data);
});

blueBtn.addEventListener('click', () => {
  const data = '🦋 Click on blue button! 🦋';
  sendToGoogleAnalytics(data);
  sendToCustomAnalytics(data);
  sendToEmail(data);
});
