import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import * as realURLsAPI from './utils/realURLsAPI'
import * as browserOS from './utils/browserOS'
// import sortBy from 'sort-by'

import RGMaps from './RGMaps'

const DADI_LION = 'http://dyscdnali1.douyucdn.cn/live/122024r69JkBOUVs.flv';

class DouyuStream extends Component{

    state = {
        OS:'windows',
        roomNo : '122024',
        douyuStream: '',
        bilibiliStream:''
    }

    updateSearch = (query) => {
        this.setState({roomNo: query.trim()})
    }

    clearSearch = () => {
        this.setState({roomNo: ''})
    }

    trim = (oriURL) => oriURL;

    queryDouyuPy = (roomNo) => {
        realURLsAPI.queryDouyuRoom(roomNo)
            .then((stream) => {
               // this.trim(stream)
                this.setState({douyuStream: stream.flv})
            })
    }
    queryBilibiliPy = (roomNo) => {
        realURLsAPI.queryBilibiliRoom(roomNo)
            .then((stream) => {
                // this.trim(stream)
                this.setState({bilibiliStream: stream})
            })
    }

    handleQuery = (roomNo) => {
        this.queryDouyuPy(roomNo);
        this.queryBilibiliPy(roomNo);
    }

    handleEnterKey = (e) => {
        if(e.nativeEvent.keyCode === 13){ //e.nativeEvent获取原生的事件对像
            this.handleQuery(this.state.roomNo)
        }
    }

    render() {

        const {OS, roomNo, douyuStream,bilibiliStream} = this.state;

        const DADIplayerURL = browserOS.isMac() ? `iina://open?url=${DADI_LION}` : `potplayer://${DADI_LION}`;
        const douyuURL = browserOS.isMac() ? `iina://open?url=${douyuStream}` : `potplayer://${douyuStream}`;
        const bilibiliURL = browserOS.isMac() ? `iina://open?url=${bilibiliStream}` : `potplayer://${bilibiliStream}`;

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
                    <br/>
                    <p>
                        斗鱼Link:
                    </p>
                    <a
                        className="add-contact"
                        href={douyuURL}
                        target="_blank"
                    >
                        打开房间直播源{douyuStream}
                        {/*复制*/}
                    </a>
                    <br/>
                    手机版开发中
                    {/*OS === 'android'?*/}
                    {/*<Link onClick={}>*/}
                        {/*点击复制{douyuURL}*/}
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
                    <p>
                        B站Link:
                    </p>
                    <a
                        className="add-contact"
                        href={bilibiliURL}
                        target="_blank"
                    >
                        打开房间直播源{bilibiliURL}
                        {/*复制*/}
                    </a>
                </div>
                <br/>
                <div>
                    <h3>My Google Maps Demo</h3>
                    <RGMaps
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAglMAlYae3eTPg7hSwp3f2YCOhATkz7Zk&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                    {/*<script src="http://ditu.google.cn/maps/api/js?key=AIzaSyAglMAlYae3eTPg7hSwp3f2YCOhATkz7Zk&callback=initMap&libraries=drawing"*/}
                            {/*type="text/javascript"></script>*/}
                </div>
            </div>
        );
    }
}

export default DouyuStream