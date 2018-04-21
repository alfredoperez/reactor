import '../node_modules/highlight.js/styles/ocean.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Docs from './docs/Docs';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Docs />, document.getElementById("root"));
registerServiceWorker();
