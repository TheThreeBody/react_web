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
        roomNo : '122024',
        streamUri: 'http'
    }

    updateSearch = (query) => {
        this.setState({roomNo: query.trim()})
    }

    clearSearch = () => {
        this.setState({roomNo: ''})
    }

    queryPython = (roomNo) => {
        realURLsAPI.queryDouyuRoom(roomNo)
            .then((streamUri) => this.state(streamUri))
    }

    render() {

        const {roomNo,streamUri} = this.state;

        const DADIplayerURL = browserOS.isMac() ? `iina://open?url=${DADI_LION}` : `potplayer://${DADI_LION}`;
        const playerURL = browserOS.isMac() ? `iina://open?url=${DADI_LION}` : `potplayer://${DADI_LION}`;

        return (
            <div className='list-platforms'>
                <div>
                    <input
                        className='search-room'
                        type='text'
                        placeholder='输入房间号'
                        value={roomNo}
                        onChange={(event) => this.updateSearch(event.target.value)}
                    />

                    <button onClick={() => this.queryPython(roomNo)}>
                        直播源生成
                    </button>

                    <a
                        className="add-contact"
                        href={playerURL}
                        target="_blank"
                    >
                        复制房间直播源{streamUri}
                    </a>

                    <a
                        className="add-contact"
                        href={DADIplayerURL}
                        target="_blank"
                    >
                        大帝直播流
                    </a>
                </div>
            </div>
        );
    }
}

export default DouyuStream