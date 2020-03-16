import React from 'react';
import Home from './Views/Home/home'
import { Layout } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
const { Footer, Content } = Layout;
function App() {
  return (
    <div >
      <Content>
        <Home />
      </Content>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;