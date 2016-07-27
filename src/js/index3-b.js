import {render} from 'react-dom';
import App from './component/App';

const initialState = [
    {
        id: 1,
        name: 'guitarissimo',
        date: '2011-04-06',
        comment: '初のオリジナルアルバムだよ'
    },
    {
        id: 2,
        name: 'guitarium',
        date: '2012-03-14',
        comment: '2枚目'
    },
    {
        id: 3,
        name: 'Delight',
        date: '2013-05-22',
        comment: '3枚目'
    },
    {
        id: 4,
        name: 'ONENESS',
        date: '2015-04-08',
        comment: '4枚目'
    }
];

render(
    <App data={initialState} />,
    document.getElementById('content')
);
