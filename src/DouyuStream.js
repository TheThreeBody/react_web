import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import * as realURLsAPI from './utils/realURLsAPI'
import * as browserOS from './utils/browserOS'
// import sortBy from 'sort-by'

const DADI_LION = 'http://dyscdnali1.douyucdn.cn/live/122024r69JkBOUVs.flv';

class DouyuStream extends Component{

    state = {
        OS:'windows',
        roomNo : '122024',
        stream: ''
    }

    updateSearch = (query) => {
        this.setState({roomNo: query.trim()})
    }

    clearSearch = () => {
        this.setState({roomNo: ''})
    }

    trim = (oriURL) => oriURL
    queryDouyuPy = (roomNo) => {
        realURLsAPI.queryDouyuRoom(roomNo)
            .then((stream) => {
               // this.trim(stream)
                this.setState({stream})
            })
    }
    queryBilibiliPy = (roomNo) => {
        realURLsAPI.queryBilibiliRoom(roomNo)
            .then((stream) => {
                // this.trim(stream)
                this.setState({stream})
            })
    }

    handleEnterKey = (e) => {
        if(e.nativeEvent.keyCode === 13){ //e.nativeEvent获取原生的事件对像
            this.queryDouyuPy(this.state.roomNo)
        }
    }

    render() {

        const {OS, roomNo, stream} = this.state;

        const DADIplayerURL = browserOS.isMac() ? `iina://open?url=${DADI_LION}` : `potplayer://${DADI_LION}`;
        const playerURL = browserOS.isMac() ? `iina://open?url=${stream}` : `potplayer://${stream}`;

        return (
            <div className='list-platforms'>
                <div onKeyDown={(e) => this.handleEnterKey(e)}>
                    <input
                        className='search-room'
                        type='text'
                        placeholder='输入房间号'
                        value={roomNo}
                        onChange={(event) => this.updateSearch(event.target.value)}
                    />

                    <button onClick={() => this.queryDouyuPy(roomNo)}>
                        douyu直播源生成
                    </button>

                    <a
                        className="add-contact"
                        href={playerURL}
                        target="_blank"
                    >
                        打开房间直播源{stream}
                        {/*复制*/}
                    </a>
                    <br/>
                    手机版开发中
                    {/*OS === 'android'?*/}
                    {/*<Link onClick={}>*/}
                        {/*点击复制{playerURL}*/}
                    {/*</Link>*/}
                    {/*: <br/>*/}
                    {/*<a*/}
                        {/*className="add-contact"*/}
                        {/*href={DADIplayerURL}*/}
                        {/*target="_blank"*/}
                    {/*>*/}
                        {/*大帝直播流*/}
                    {/*</a>*/}
                </div>
                <br/>
                <div onKeyDown={(e) => this.handleEnterKey(e)}>
                    <input
                        className='search-room'
                        type='text'
                        placeholder='输入房间号'
                        value={roomNo}
                        onChange={(event) => this.updateSearch(event.target.value)}
                    />

                    <button onClick={() => this.queryBilibiliPy(roomNo)}>
                        B站直播源生成
                    </button>

                    <a
                        className="add-contact"
                        href={playerURL}
                        target="_blank"
                    >
                        打开房间直播源{stream}
                        {/*复制*/}
                    </a>
                </div>
            </div>
        );
    }
}

export default DouyuStream