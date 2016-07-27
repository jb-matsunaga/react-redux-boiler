import {Component} from 'react';
import ReactDOM from 'react-dom';
import EditForm from './EditForm';
import ProductList from './ProductList';
import Btn from './Btn';
import AddItemForm from './AddItemForm';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.selectId = this.selectId.bind(this);
        this.editInfo = this.editInfo.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            cdData: this.props.data,
            editId: 1,
            displayModal: false,
            winWidth: window.innerWidth || document.documentElement.clientWidth,
            winHeight: window.innerHeight || document.documentElement.clientHeight
        };
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                winWidth: window.innerWidth || document.documentElement.clientWidth,
                winHeight: window.innerHeight || document.documentElement.clientHeight
            });
        });
    }
    selectId(value) {
        this.setState({
            editId: Number(value)
        });
    }
    editInfo(value, type) {
        let newData = this.state.cdData;
        let updateData = (() => {
            const len = newData.length;
            for (let i = 0; i < len; i++) {
                if (newData[i].id === this.state.editId) {
                    return newData[i];
                }
            }
        })();

        switch (type) {
        case 'NAME':
            updateData.name = value;
            break;
        case 'DATE':
            updateData.date = value;
            break;
        case 'COMMENT':
            updateData.comment = value;
            break;
        }

        this.setState({
            cdData: newData
        });
    }
    toggleModal() {
        this.setState({
            displayModal: (this.state.displayModal) ? false : true
        });
    }
    addItem(refs) {
        const nameNode = ReactDOM.findDOMNode(refs.NAME);
        const dateNode = ReactDOM.findDOMNode(refs.DATE);
        const commentNode = ReactDOM.findDOMNode(refs.COMMENT);
        let id = this.state.cdData[this.state.cdData.length - 1].id + 1;

        if (!nameNode.value || !dateNode.value || !commentNode.value) {
            return;
        }

        const data = {
            id: id,
            name: nameNode.value.trim(),
            date: dateNode.value.trim(),
            comment: commentNode.value.trim()
        };

        this.setState({
            cdData: this.state.cdData.concat(data)
        });

        nameNode.value = '';
        dateNode.value = '';
        commentNode.value = '';
        this.toggleModal();
    }
    deleteItem(target) {
        let newData = this.state.cdData;
        newData = newData.filter((data) => {
            return target.id !== data.id
        });
        this.setState({
            cdData: newData,
            editId: (() => {
                if (this.state.editId === target.id) {
                    return newData[0].id;
                } else {
                    return this.state.editId
                }
            })()
        });
    }
    render() {
        return (
            <div>
                <EditForm item={this.state.cdData} selectId={this.selectId} editId={this.state.editId} editInfo={this.editInfo} />
                <ProductList item={this.state.cdData} deleteItem={this.deleteItem} />
                <Btn setEvent={this.toggleModal}>追加</Btn>
                <AddItemForm
                    addItem={this.addItem}
                    display={this.state.displayModal}
                    toggleModal={this.toggleModal}
                    winWidth={this.state.winWidth}
                    winHeight={this.state.winHeight} />
            </div>
        );
    }
}
