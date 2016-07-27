import {Component} from 'react';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.Item = null;
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(data) {
        this.props.deleteItem(data);
    }
    render() {
        this.Item = this.props.item.map((data) => {
            return <ProductItem data={data} key={data.date + '-' + data.id} deleteItem={this.deleteItem} />;
        });

        return (
            <ul className='c_list_product-01'>
                {this.Item}
            </ul>
        );
    }
}
