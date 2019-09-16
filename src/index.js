import ReactDOM from 'react-dom';
import './index.css';
import {getBrowserRouter} from "./navigation/router";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(getBrowserRouter(), document.getElementById('root'));
registerServiceWorker();
