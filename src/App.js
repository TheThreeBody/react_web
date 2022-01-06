import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import DouyuStream from './DouyuStream'
import Sukiya from './Sukiya'
// import CreateContact from './CreateContact';
// import * as ContactsAPI from './utils/ContactsAPI'


class App extends Component {
    state = {
        //从服务器获取 联系人 方法：ContactsAPI.getAll 见 ContactsAPI组件
        contacts: []
    }

    //react内置生命周期组件 组件挂载时 详见：react组件生命周期图
    componentDidMount() {
        // ContactsAPI.getAll().then((contacts) => {
        //     this.setState({contacts: contacts})
        // })
    }

    removeContact = (contact) => {
        // this.setState((prevState) => ({
        //         contacts: prevState.contacts.filter((c) => c.id !== contact.id)
        //     })
        // )
        //
        // ContactsAPI.remove(contact);
    }

    createContact(contact) {
        // ContactsAPI.create(contact).then(contact => {
        //     this.setState(prevState => {
        //         //concat 用于连接数组（在数组后添加对应的contact对象)
        //         contacts : prevState.contacts.concat([contact])
        //     })
        // })
    }

    render() {
        return (
            <Switch>
              <Route path="/" exact render= {()=> (
                  <DouyuStream
                      // onDeleteContact={this.removeContact}
                      // contacts={this.state.contacts}
                  />
              )}/>

                <Route path="/sukiya" render = {
                    ()=> (<Sukiya/>)
                }/>

              {/*<Route path="/create" render={ ({history}) =>(*/}

                  {/*<CreateContact*/}
                      {/*onCreateContact = {(contact) => {*/}
                          {/*this.createContact(contact)*/}
                          {/*//history 是router中的url变量*/}
                          {/*history.push('/')*/}
                      {/*}}/>*/}
              {/*)}/>*/}

              <Route exact path="/test" />
            </Switch>
        )
    }
}

export default App;
