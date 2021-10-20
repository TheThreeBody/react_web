import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import * as realURLsAPI from './utils/realURLsAPI'
// import sortBy from 'sort-by'

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

                    <Link
                        to={roomNo}
                        className="add-contact"
                    >
                        复制房间直播源{streamUri}
                    </Link>
                </div>
            </div>
        );
    }
}

export default DouyuStream