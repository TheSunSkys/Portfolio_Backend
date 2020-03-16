import React, { Component } from "react"
import { Row, Col, Button, Input, Card,Upload, Icon, message,notification } from 'antd'
import { Container } from 'reactstrap';
import Navbar from '../../Components/Nevbar/Navbar'
import { getPhotoDB } from '../../Services/API'
import '../../App.css'
import SlideShow from '../../Components/Slider/SlideShow'
import Background from '../../img/background/background.jpg'

var bgStyle = {
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '550px',
    backgroundSize: 'cover',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  };

  
export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoDB: [
                "psql.png",
                "mysql.png"
            ],
            photoLanguage: [
                "nodejs.png",
                "react.png",
                "java.png",
                "html.png",
                "nodejs.png",
                "nodejs.png"
            ],
            photoProfile: ''
        }
    }
    render(){
        return(
            <div className='content'>
                <Card style={bgStyle}>
                    <Navbar/>
                </Card>
                <Container style={{borderRadius: '10px', padding: '0px 0px', backgroundColor: 'rgba(f, f, 50, 255)', margin: "-80px auto auto auto", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <Card style={{padding:'0px 50px', backgroundColor: 'rgba(f, f, 50, 255)', width: 'auto', height: '600px'}}>
                        <h1>About Me</h1>
                        <Row style={{width: '100%', height: '100%'}}>
                            <Card style={{width: '30%', height: '470px', borderRadius: '10px', padding: '0px 0px', backgroundColor: 'rgba(15, 255, 50, 255)'}}>
                                <Col>
                                    <Card style={{width: '75%', height: '200px', left: '12%'}}>
                                        image profile
                                    </Card>
                                    <Card style={{width: '100%', height: '200px', top: '15px'}}>
                                        image profile
                                    </Card>
                                </Col>
                            </Card>
                            <Col style={{width: '65%', height: '100%'}}>
                                <Row >
                                    <Card style={{width: '100%', height: '225px', borderRadius: '10px', left: '58px', backgroundColor: 'rgba(15, 255, 50, 255)'}}>
                                        Education
                                        <Card style={{width: '100%', height: '100%'}}>
                                            Detail
                                        </Card>
                                    </Card>
                                </Row>
                                <Row >
                                    <Card style={{top: '22px', width: '100%', height: '225px', borderRadius: '10px', left: '58px', backgroundColor: 'rgba(15, 255, 50, 255)'}}>
                                        Contact
                                        <Col>
                                            <Row>
                                                <Card style={{width: '48%', height: '100%'}}>
                                                    Detail
                                                </Card>
                                                <Card style={{width: '48%', height: '100%', left: '23px'}}>
                                                    Detail
                                                </Card>
                                            </Row>
                                            {/* <Row>
                                                <Card style={{width: '100%', height: '100%', top: '15px'}}>
                                                    Detail
                                                </Card>
                                            </Row> */}
                                        </Col>
                                    </Card>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{padding:'0px 50px', backgroundColor: 'rgba(f, f, 50, 255)', width: 'auto', height: '600px'}}>
                        <h1>SKILLS</h1>
                        <Row>
                            <Col className='col' span={7}>
                                <h2>Database</h2>
                                <Row>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/databases/' + this.state.photoDB[0])}/>
                                    </Col>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/databases/' + this.state.photoDB[1])}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className='col' span={7}>
                                <h2>Language</h2>
                                <Row>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/languages/' + this.state.photoLanguage[0])}/>
                                    </Col>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/languages/' + this.state.photoLanguage[1])}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/languages/' + this.state.photoLanguage[2])}/>
                                    </Col>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/languages/' + this.state.photoLanguage[3])}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/languages/' + this.state.photoLanguage[4])}/>
                                    </Col>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/languages/' + this.state.photoLanguage[5])}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className='col' span={7}>
                                <h2>Tool</h2>
                                <Row>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/languages/' + this.state.photoLanguage[5])}/>
                                    </Col>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/languages/' + this.state.photoLanguage[5])}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/languages/' + this.state.photoLanguage[5])}/>
                                    </Col>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/languages/' + this.state.photoLanguage[5])}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{padding:'0px 50px', backgroundColor: 'rgba(f, f, 50, 255)', width: 'auto', height: '600px'}}>
                        <h1>EXPERIENCE</h1>
                    </Card>
                    <Card style={{padding:'0px 50px', backgroundColor: 'rgba(f, f, 50, 255)', width: 'auto', height: '600px'}}>
                        <h1>PHOTO</h1>
                        <SlideShow />
                    </Card> 
                </Container>
            </div>
        )
    }
}