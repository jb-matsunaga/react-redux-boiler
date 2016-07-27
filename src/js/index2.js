import {Component} from 'react';
import ReactDOM from 'react-dom';

const initialState = [
    {
        id: 1,
        name: '佐々木',
        comment: 'キング腹ですぎゴシ'
    }
];

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDisabled = this.handleDisabled.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.updateCommentList(this.refs);
    }
    handleDisabled(e) {
        this.props.toggleBtnDisabled(this.refs);
    }
    render() {
        let btnStyle = (() => {
            if (this.props.disabled) {
                return {
                    background: '#ddd',
                    cursor: 'default'
                };
            } else {
                return {
                    background: '#fff',
                    cursor: 'pointer'
                }
            }
        })();
        return (
            <form onSubmit={this.handleSubmit}>
                <p><label>Name: <input type="text" ref="name" onChange={this.handleDisabled} /></label></p>
                <p><label>Comment: <input type="text" ref="comment" onChange={this.handleDisabled} /></label></p>
                <p><button type="submit" disabled={this.props.disabled} style={btnStyle}>Submit</button></p>
            </form>
        );
    }
}

class UpdateForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form>
                <p><label>Name: <input type="text" value={this.props.name} /></label></p>
                <p><label>Comment: <input type="text" value={this.props.comment} /></label></p>
                <p><button type="submit">Submit</button></p>
            </form>
        );
    }
}

class CommentItem extends Component {
    constructor(props) {
        super(props);

        this.handleToggleUpdateForm = this.handleToggleUpdateForm.bind(this);
    }
    handleToggleUpdateForm() {
        this.props.handleToggleUpdateForm(this.props.id);
    }
    render() {
        return (
            <li>
                <p>Name: {this.props.name}</p>
                <p>Comment: {this.props.comment}</p>
                <p><button type="button" onClick={this.handleToggleUpdateForm}>Update</button></p>
            </li>
        );
    }
}

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.Item = null;

        this.handleToggleUpdateForm = this.handleToggleUpdateForm.bind(this);
    }
    handleToggleUpdateForm(target) {
        this.props.handleToggleUpdateForm(target);
    }
    render() {
        this.Item = this.props.data.map((data) => {
            return (
                <CommentItem
                    name={data.name}
                    handleToggleUpdateForm={this.handleToggleUpdateForm}
                    comment={data.comment}
                    id={data.id}
                    key={data.id}
                />
            );
        });
        return (
            <ul>
                {this.Item}
            </ul>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentData: initialState,
            submitDisabled: true,
            updateForm: 0
        };
        this.updateCommentList = this.updateCommentList.bind(this);
        this.toggleBtnDisabled = this.toggleBtnDisabled.bind(this);
        this.handleToggleUpdateForm = this.handleToggleUpdateForm.bind(this);
    }
    toggleBtnDisabled(data) {
        let name = ReactDOM.findDOMNode(data.name).value;
        let comment = ReactDOM.findDOMNode(data.comment).value;
        let disabled = null;

        if (!name || !comment) {
            disabled = true;
        }
        if (name && comment) {
            disabled = false;
        }
        if (name.length >= 20) {
            disabled = true;
        }

        this.setState({
            submitDisabled: disabled
        });
    }
    updateCommentList(data) {
        let newComment = {
            id: this.state.commentData.length + 1,
            name: null,
            comment: null
        };

        newComment.name = ReactDOM.findDOMNode(data.name).value.trim();
        newComment.comment = ReactDOM.findDOMNode(data.comment).value.trim();

        this.setState({
            commentData: this.state.commentData.concat(newComment)
        });

        ReactDOM.findDOMNode(data.name).value = '';
        ReactDOM.findDOMNode(data.comment).value = '';
        this.toggleBtnDisabled(data);
    }
    handleToggleUpdateForm(target) {
        this.setState({
            updateForm: target
        });
    }
    render() {
        let Update = (() => {
            if (this.state.updateForm) {
                return <UpdateForm target={this.state.commentData[this.state.updateForm]} />;
            }
        })();
        return (
            <div>
                <CommentForm
                    updateCommentList={this.updateCommentList}
                    disabled={this.state.submitDisabled}
                    toggleBtnDisabled={this.toggleBtnDisabled}
                />
                <CommentList
                    data={this.state.commentData}
                    handleToggleUpdateForm={this.handleToggleUpdateForm}
                />
                {Update}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
