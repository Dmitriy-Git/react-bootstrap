import React, { Component } from 'react';
import {Media, Container, Col, Row, Card, ListGroup} from 'react-bootstrap';

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img 
                               width={150}
                               height={150}
                               className="mr-3"
                               src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" 
                            

                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat.  
                                </p>

                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img 
                               width={150}
                               height={150}
                               className="mr-3"
                               src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" 
                            

                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat.  
                                </p>

                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img 
                               width={150}
                               height={150}
                               className="mr-3"
                               src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" 
                            

                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat.  
                                </p>

                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html Css</ListGroup.Item>
                                <ListGroup.Item>Java Script</ListGroup.Item>
                                <ListGroup.Item>React</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>  
            </Container>
        )
    }
}

