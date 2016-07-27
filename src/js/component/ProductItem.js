import {Component} from 'react';
import Btn from './Btn';

export default class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        this.props.deleteItem(this.props.data);
    }
    render() {
        return (
            <li>
                <div className="product-inner">
                    <i className='product-id'>{this.props.data.id}</i>
                    <div className='product-content'>
                        <div className="product-header">
                            <b className='product-title'>{this.props.data.name}</b>
                            <span className='product-date'>{this.props.data.date}</span>
                        </div>
                        <p className='product-comment'>{this.props.data.comment}</p>
                        <p><Btn setEvent={this.handleDelete}>削除</Btn></p>
                    </div>
                </div>
            </li>
        );
    }
}
