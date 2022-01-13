import React, {Component} from 'react';
import * as realURLsAPI from './utils/realURLsAPI'

class Sukiya extends Component{

    state = {
        decodeStr:'',
        encodeStr:'',
        discountNo:''
    }

    updateQuery = (query) => {
        //https://segmentfault.com/a/1190000013236956 decodeURIComponent（）解码
        this.setState({decodeStr: query.trim()},
            () => this.setState({encodeStr:encodeURIComponent(query)}))
    }

    handleQuery = (query) =>{
        realURLsAPI.querySukiya(query)
            .then((data) => {
                this.setState({discountNo: data.discountNo})
            })
    }

    handleEnterKey = (e) => {
        if(e.nativeEvent.keyCode === 13){ //e.nativeEvent获取原生的事件对像
            this.handleQuery(this.state.encodeStr)
        }
    }

    render() {
        const {decodeStr,encodeStr, discountNo} = this.state;

        return (
            <div className='list-platforms'>
                <input style={{ width: '40%' }}
                    className='query-link'
                    type='text'
                    placeholder='输入食其家网址 例:http://cn-sukiya.csfeedback.net/sv/cn/RCN1109212000012010326913'
                    value={decodeStr}
                    onChange={(event) => this.updateQuery(event.target.value)}
                    onKeyDown={(e) => this.handleEnterKey(e)}
                />
                <button onClick={() => this.handleQuery(encodeStr)}>
                    sukiya生成
                </button>
                <br/>
                <p>
                    食其家discountNo：{discountNo}
                    <br/>
                    encodeStr:<br/>{encodeStr}
                    <br/>
                    decodeStr:<br/>{decodeStr}
                </p>
                <br/>
                <p>
                    http://cn-sukiya.csfeedback.net/sv/cn/RCN1209202100012099528818
                <br/>
                    http%3A%2F%2Fcn-sukiya.csfeedback.net%2Fsv%2Fcn%2FRCN1209202100012099528818
                </p>

            </div>
        )
    }
}

export default Sukiya