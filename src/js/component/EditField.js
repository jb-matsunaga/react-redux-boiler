import {Component} from 'react';

export default class EditField extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.editString(e.target.value, this.props.type);
    }
    render() {
        return (
            <input type="text"
                className="c_form_textBox"
                value={this.props.text}
                ref={this.props.type}
                onChange={this.handleChange} />
        );
    }
}
