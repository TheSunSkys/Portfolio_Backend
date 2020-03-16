import React, { Component } from "react"
import { Navbar } from 'react-bootstrap';
export default class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bg: "rgb(192,192,192, 0.5)",
        sizeFont: "40px"
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let value = "", sizeValue = ""
    let scrollTop = window.pageYOffset
    if(scrollTop > 400){
      value = "rgb(192,192,192)"
    }else{
      value  = "rgb(192,192,192, 0.5)"
    }
    this.setState({
      bg: value,
    });
  };

  render(){
    return (
      <Navbar style={{backgroundColor: this.state.bg, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} fixed="top">
        <div style={{fontSize: this.state.sizeFont}}>
          Portfolio
        </div>
      </Navbar>
    )
  }
}
