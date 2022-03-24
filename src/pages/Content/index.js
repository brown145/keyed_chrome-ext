import ContentFrame from './ContentFrame';
import React from 'react';
import ReactDOM from 'react-dom';
import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

const app = document.createElement('div');
app.id = 'keyed_extension-root';

document.body.appendChild(app);
ReactDOM.render(<ContentFrame />, app);

app.style.display = 'none';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'clicked_browser_action') {
    toggle();
    sendResponse(true);
  }
});

function toggle() {
  if (app.style.display === 'none') {
    app.style.display = 'block';
  } else {
    app.style.display = 'none';
  }
}
