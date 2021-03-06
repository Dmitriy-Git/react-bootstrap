import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';


export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img  height={600} src="https://i.pinimg.com/originals/4e/6c/bb/4e6cbb5a04cf5a06bde6ef21a89de076.png" />
                                    <p> Лишь акционеры крупнейших компаний объявлены нарушающими общечеловеческие нормы этики и морали. 
                                    Сложно сказать, почему непосредственные участники технического прогресса 
                                    лишь добавляют фракционных разногласий и разоблачены</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img  height={400} src="https://avatars.mds.yandex.net/get-zen_doc/170671/pub_5ab02e7a51aa4d06269c53ee_5ab02fa89e29a20ea3526a37/scale_1200" />
                                    <p> Лишь акционеры крупнейших компаний объявлены нарушающими общечеловеческие нормы этики и морали. 
                                    Сложно сказать, почему непосредственные участники технического прогресса 
                                    лишь добавляют фракционных разногласий и разоблачены</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img height={600} src="https://www.hs-academypages.com/hubfs/lp/academy/adware.png" />
                                    <p> Лишь акционеры крупнейших компаний объявлены нарушающими общечеловеческие нормы этики и морали. 
                                    Сложно сказать, почему непосредственные участники технического прогресса 
                                    лишь добавляют фракционных разногласий и разоблачены</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img height={500} src="https://miro.medium.com/max/3840/1*4cFhtuq6zRDqJ6p4s2pQ6g.jpeg" />
                                    <p> Лишь акционеры крупнейших компаний объявлены нарушающими общечеловеческие нормы этики и морали. 
                                    Сложно сказать, почему непосредственные участники технического прогресса 
                                    лишь добавляют фракционных разногласий и разоблачены</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img height={500} src="https://hackr.io/blog/top-javascript-libraries/thumbnail/large" />
                                    <p> Лишь акционеры крупнейших компаний объявлены нарушающими общечеловеческие нормы этики и морали. 
                                    Сложно сказать, почему непосредственные участники технического прогресса 
                                    лишь добавляют фракционных разногласий и разоблачены</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
