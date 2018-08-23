import React, { Component } from 'react';
import {Tab, Row, Col, NavItem, Nav} from 'react-bootstrap'
import BestSellerTab from './BestSellerTab';
import SellOffTab from './SellOffTab';
import RecommendTab from './RecommendTab';

import './Style/Recommend.css'

class Recommend extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
      
    render(){
        return(
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="clearfix">
            <Col xs={10} sm={10} md={2} xsOffset={1} smOffset={1} mdOffset={1}>
            <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">Best Seller</NavItem>
                <NavItem eventKey="second">Recommend</NavItem>
                <NavItem eventKey="third">Sell Off</NavItem>
            </Nav>
            </Col>
            <Col xs={10} sm={10} md={7} xsOffset={1}>
            <Tab.Content animation>
                <Tab.Pane eventKey="first">
                    <BestSellerTab/>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <RecommendTab/>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <SellOffTab/>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
        )
    }
}
export default Recommend;