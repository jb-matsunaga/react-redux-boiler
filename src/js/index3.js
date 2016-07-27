import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './component/main';
import reducer from './reducer';

//ストアを作る
const store = createStore(reducer);

const Wrapper = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

render(
    <Wrapper />,
    document.getElementById('content')
);
