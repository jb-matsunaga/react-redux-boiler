import {Component} from 'react';
import SelectBox from './SelectBox';
import EditField from './EditField';

export default class EditForm extends Component {
    constructor(props) {
        super(props);
        this.selectId = this.selectId.bind(this);
        this.editInfo = this.editInfo.bind(this);
    }
    selectId(value) {
        this.props.selectId(value);
    }
    editInfo(value, type) {
        this.props.editInfo(value, type);
    }
    render() {
        let editData = (() => {
            const len = this.props.item.length;
            for (let i = 0; i < len; i++) {
                if (this.props.item[i].id === this.props.editId) {
                    return this.props.item[i];
                }
            }
        })();
        return (
            <div className="c_box-01">
                <h2 className="box-title">データ編集</h2>
                <div className="box-content">
                    <form>
                        <ul className="c_form_list -col-2">
                            <li>
                                <label htmlFor='ID'>ID</label>
                                <SelectBox data={this.props.item} editId={this.props.editId} selectId={this.selectId} />
                            </li>
                            <li>
                                <label htmlFor='NAME'>商品名</label>
                                <EditField text={editData.name} type='NAME' editString={this.editInfo} />
                            </li>
                            <li>
                                <label htmlFor='DATE'>発売日</label>
                                <EditField text={editData.date} type='DATE' editString={this.editInfo} />
                            </li>
                            <li>
                                <label htmlFor='COMMENT'>コメント</label>
                                <EditField text={editData.comment} type='COMMENT' editString={this.editInfo} />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}
