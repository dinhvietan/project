import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';

import './Style/ProductTab.css';
import BestSellerTab from './BestSellerTab';
import RecommendTab from './RecommendTab';
import SellOffTab from './SellOffTab';

class ProductTab extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
        return (
        <div>
            <Grid>
            <br/>
            <BestSellerTab className="parralax"/>

            <RecommendTab/>

            <SellOffTab/>
            
            </Grid>
        </div>
        );
    }
}

export default ProductTab;