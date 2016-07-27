//分割が推奨されている：それぞれ対で対応するReducer
//A:A',B:B', C:C'
//reducerをくっつけるメソッド：combineReducers
//画面単位ではなく、アプリケーション全体を考慮して作成する
//Reduxデベロッパーツールがある:createStoreに入れ込む devToolsExtension():https://github.com/zalmoxisus/redux-devtools-extension
//ブラウザにもdevツールをインストールする
//参照：http://redux-form.com/5.3.1/#/?_k=9867zr


const initialState = {
    name: '西馬'
};

function app( state=initialState, action ) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                name: '村岡'
            }
            break;
        default:
    return state;
    }
}

export default app;
