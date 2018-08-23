import React, { Component } from 'react';
import { Carousel} from 'react-bootstrap';

import ProductTab from './ProductTab';
import './Style/Home.css';

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
        return (
        <div>

        <Carousel>
            <Carousel.Item>
            <img alt="900x500" src="/images/Watch/carousel-image.jpg" />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img alt="900x500" src="/images/Watch/carousel-image1.jpg" />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img alt="900x500" src="/images/Watch/carousel-image2.jpg" />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        <ProductTab/> 
        </div>
        );
    }
}

export default Home;