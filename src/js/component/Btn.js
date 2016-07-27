import {Component} from 'react';

export default class Btn extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.setEvent();
    }
    render() {
        return <button type="button" className="c_btn_normal-01" onClick={this.handleClick}>{this.props.children}</button>;
    }
}
