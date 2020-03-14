import React, { Component } from "react"
import { Row, Col, Button, Input, Card,Upload, Icon, message,notification } from 'antd'
import { Container } from 'reactstrap';
import { getPhotoDB } from '../../Services/API'
import '../../App.css'

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
            ]
        }
    }
    
    // componentWillMount() {
    //     this.getDB()
    // }

    // getDB = async () => {
    //     let resp = await getPhotoDB()
    //     if(resp.code === 200) {
    //         this.setState({
    //           photoDB: "test"
    //         })
    //       }else{
    //         message.error('can\'t connect to server')
    //     }
    // }
    render(){
        return(
            <div>
                <Card style={{padding:'50px 50px', backgroundColor: 'rgba(150, 70, 255, 255)', width: 'auto', height: '550px'}}>
                </Card>
                <Container fluid style={{padding:'0px 50px'}}>
                    <Card style={{padding:'0px 50px', backgroundColor: 'rgba(255, 255, 50, 255)', width: 'auto', height: '600px'}}>
                        <h1>ABOUT ME</h1>
                    </Card>
                    <Card style={{padding:'0px 50px', backgroundColor: 'rgba(111, 120, 150, 200)', width: 'auto', height: '600px'}}>
                        <h1>SKILLS</h1>
                        <Row>
                            <Col className='col' span={7}>
                                <h2>Database</h2>
                                <Row>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/' + this.state.photoDB[0])}/>
                                    </Col>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/' + this.state.photoDB[1])}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className='col' span={7}>
                                <h2>Language</h2>
                                <Row>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/' + this.state.photoLanguage[0])}/>
                                    </Col>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/' + this.state.photoLanguage[1])}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/' + this.state.photoLanguage[2])}/>
                                    </Col>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/' + this.state.photoLanguage[3])}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/' + this.state.photoLanguage[4])}/>
                                    </Col>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/' + this.state.photoLanguage[5])}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className='col' span={7}>
                                <h2>Tool</h2>
                                <Row>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/' + this.state.photoLanguage[5])}/>
                                    </Col>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/' + this.state.photoLanguage[5])}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/' + this.state.photoLanguage[5])}/>
                                    </Col>
                                    <Col className='photoDB' span={9}>
                                        <img className='imgDB' src={ require('../../img/' + this.state.photoLanguage[5])}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{padding:'0px 50px', backgroundColor: 'rgba(120, 150, 50, 255)', width: 'auto', height: '600px'}}>
                        <h1>EXPERIENCE</h1>
                    </Card>
                    <Card style={{padding:'0px 50px', backgroundColor: 'rgba(10, 255, 50, 255)', width: 'auto', height: '600px'}}>
                        <h1>PHOTO</h1>
                    </Card>
                </Container>
            </div>
        )
    }
}