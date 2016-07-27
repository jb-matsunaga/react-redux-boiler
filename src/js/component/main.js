import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Action from './../action.js';

class App extends React.Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <button onClick={this.props.actions.changeName}>ボタン</button>
                <p>a</p>
            </div>
        )
    }
}

//redux紐付け：コンポーネントからストアに紐付けるための便利メソッド
//ストアから受けっとたオブジェクトをここで定義したかたちでこのコンポーネント内につなぎこむ
//
const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Action, dispatch)
    };
}
export default connect(mapStateToProps)(App);
