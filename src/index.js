import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './css/index.css';
import App from './components/App';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = () => {
    return(
        <BrowserRouter>
            <div>
                <Route path='/' exact component={App} />
                <Route path="*" component={NotFound} />
                {/* <Match pattern="/store/:storeId" component={App} /> */}
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
