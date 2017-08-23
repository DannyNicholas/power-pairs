import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App';
import GameStore from './store/GameStore'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={GameStore}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
