import {Component} from 'react';

export default class OptionItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <option value={this.props.data.id}>
                {this.props.data.id + '-' + this.props.data.name}
            </option>
        );
    }
}
