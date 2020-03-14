import React from 'react';
import Navbar from './Components/Nevbar/Navbar'
import Home from './Views/Home/home'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div>
      <Header>
        <Navbar/>
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>
        
      </Footer>
    </div>
  );
}

export default App;
