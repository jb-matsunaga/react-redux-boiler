import {Component} from 'react';
import Btn from './Btn';

export default class AddItemForm extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    addItem() {
        this.props.addItem(this.refs);
    }
    toggleModal() {
        this.props.toggleModal();
    }
    render() {
        let display = () => {
            if (this.props.display) {
                return {
                    display: 'block'
                };
            } else {
                return {
                    display: 'none'
                };
            }
        };
        let contentStyle = () => {
            return {
                position: 'fixed',
                left: (this.props.winWidth / 2) - (1024 / 2),
                top: (this.props.winHeight / 2) - (400 / 2)
            };
        };
        let layerStyle = () => {
            return {
                height: this.props.winHeight
            };
        };
        return (
            <div className="c_box_modal-01" style={display()}>
                <div className="modal-content" style={contentStyle()}>
                    <form>
                        <ul className="c_form_list -col-2">
                            <li>
                                <label htmlFor="addItem_NAME">商品名</label>
                                <input type="text" id="addItem_NAME" className="c_form_textBox" ref="NAME" />
                            </li>
                            <li>
                                <label htmlFor="addItem_DATE">発売日</label>
                                <input type="text" id="addItem_DATE" className="c_form_textBox" ref="DATE" />
                            </li>
                            <li>
                                <label htmlFor="addItem_COMMENT">コメント</label>
                                <input type="text" id="addItem_COMMENT" className="c_form_textBox" ref="COMMENT" />
                            </li>
                        </ul>
                        <Btn setEvent={this.addItem}>追加する</Btn>
                    </form>
                </div>
                <div className="modal-layer" style={layerStyle()} onClick={this.toggleModal}></div>
            </div>
        );
    }
}
