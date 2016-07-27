import {Component} from 'react';
import OptionItem from './OptionItem';

export default class SelectBox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.optionObj = null;
    }
    handleChange(e) {
        this.props.selectId(e.target.value);
    }
    render() {
        this.optionObj = this.props.data.map((data) => {
            return <OptionItem value={this.props.editId} data={data} key={data.id + '-edit'} />
        });
        return (
            <select onChange={this.handleChange}>
                {this.optionObj}
            </select>
        );
    }
}
