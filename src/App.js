import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import { Menu, Icon, Row, Col } from 'antd';
import Home from './component/page/home';
import About from './component/page/about';

//const { SubMenu } = Menu;

class App extends Component {
  state = {
    mode: 'inline',
    theme: 'light',
  }

  changeMode = (value) => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }

  render() {
    return (
      <Row>
      <Col span={6}>
        <Menu
          style={{ width: 256,fontColor:'#000',height:window.innerHeight }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <Menu.Item key="1">
            <Link to="/"><Icon type="mail" />Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about"><Icon type="calendar" />About</Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={18}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      </Col>
    </Row>
    );
  }
}

export default App;
