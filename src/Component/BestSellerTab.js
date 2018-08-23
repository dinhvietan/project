import React, { Component } from 'react';
import { Panel, Image, Row, Col} from 'react-bootstrap';
import './Style/ProductTab.css'


class BestSellerTab extends Component{
    constructor(props) {
        super(props);
    }
      
    render(){
        return(
            <div>
            <Row>
                <Col xs={12} sm={12} md={12} lg={3}>
                <h3>Best Seller</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={3}>
                <Panel>
                    <Panel.Heading>
                        <Image src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350"  responsive />
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
                </Col>

                <Col xs={12} sm={12} md={12} lg={3}>
                <Panel>
                    <Panel.Heading>
                        <Image src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350" responsive />
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
                </Col>

                <Col xs={12} sm={12} md={12} lg={3}>
                <Panel>
                    <Panel.Heading>
                        <Image src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350" responsive />
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
                </Col>

                <Col xs={12} sm={12} md={12} lg={3}>
                <Panel>
                    <Panel.Heading>
                        <Image src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350" responsive />
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
                </Col>
            </Row>
            </div>  
        )
    }
}
export default BestSellerTab;