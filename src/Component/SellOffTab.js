import React, { Component } from 'react';
import { Panel, Image, Row, Col} from 'react-bootstrap';
import './Style/ProductTab.css'

class SellOffTab extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
      
    render(){
        return(
            <div>
             <Row>
                <Col xs={12} sm={12} md={3} lg={3}>
                <h3>Sell Off</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={3} lg={3}>
                <Panel>
                    <Panel.Heading>
                        <Image src="http://www.gheda.eu/wp-content/uploads/2017/05/immagine-linea-dogdog-wild.jpg" responsive />
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
                </Col>

                <Col xs={12} sm={12} md={3} lg={3}>
                <Panel>
                    <Panel.Heading>
                        <Image src="http://www.gheda.eu/wp-content/uploads/2017/05/immagine-linea-dogdog-wild.jpg" responsive />
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
                </Col>

                <Col xs={12} sm={12} md={3} lg={3}>
                <Panel>
                    <Panel.Heading>
                        <Image src="http://www.gheda.eu/wp-content/uploads/2017/05/immagine-linea-dogdog-wild.jpg" responsive />
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
                </Col>

                <Col xs={12} sm={12} md={3} lg={3}>
                <Panel>
                    <Panel.Heading>
                        <Image src="http://www.gheda.eu/wp-content/uploads/2017/05/immagine-linea-dogdog-wild.jpg" responsive />
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
                </Col>
            </Row>  
            </div>  
        )
    }
}
export default SellOffTab;