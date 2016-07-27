import {Component} from 'react';
import {render} from 'react-dom';

const DATA = [
    {
        title: 'ばっしーさん',
        content: 'ほげほげほげほげほげほげほげ'
    },
    {
        title: '西馬さん',
        content: 'ふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふが'
    },
    {
        title: '松永さん',
        content: 'ばずばずばずばずばずばずばずばずばずばずばずばずばずばずばずばず'
    }
];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: DATA
        };
        this.list = null;
    }
    componentWillMount() {
        this.list = this.state.section.map((data) => {
            <Item title={data.title} content={data.content} />
        });
    }
    render() {
        return (
            <div>
                {this.list}
            </div>
        );
    }
}


class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section>
                <Heading>{this.props.title}</Heading>
                <Content>{this.props.content}</Content>
            </section>
        );
    }
}


class Heading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>{this.props.children}</h1>
        );
    }
}


class Content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p>{this.props.children}</p>
        );
    }
}


render(
    <App />,
    document.getElementById('content')
);
