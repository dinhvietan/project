import React, { Component } from 'react';
import { Form, FormGroup, Grid, Row, Col, FormControl, Button } from 'react-bootstrap';
import './Style/LoginForm.css'
import  DataUtils from '../Utils/DataUtils'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {loginname: "", password: ""},
            logged: false
        };

        let session = this.getSession();
        if(session !== null) {
            this.state.logged = true;
        }
        this.onKeyDownHandle = this.onKeyDownHandle.bind(this);
    }
    componentWillMount(event) {
        if(this.state.logged === true) {
            window.location.href = "/";
        }
    }
    getSession() {
        let session = window.localStorage.getItem("session");
        if(session != null) {
            return JSON.parse(session);
        }
        return null;
    }
    onSubmit(event, keyCode) {
        if(this.state.loginname === "" || this.state.data.password === "")  {
            alert("Invalid data");
        } else {

            let userInfo = DataUtils.checkUser(this.state.data.loginname, this.state.data.password);

            console.log(333, userInfo)
            if(userInfo != null) {
                window.localStorage.setItem("session", JSON.stringify(userInfo));
                window.location.href="/";
            }
        }
    }
    onKeyDownHandle(event) {
      if(event.keyCode === 13) {
          this.onSubmit(event, 13);
      }
    }
    onHandle(event) {
        let newState = {
            data: this.state.data
        };

        let inputName = event.target.name;
        newState.data[inputName] = event.target.value;
        
        this.setState(newState);
    }

  render() {
    return (
      <Grid>
        <Form horizontal>
        <Row className="show-grid row-email-login">
        <Col xs={10} sm={6} md={6} lg={6} lgOffset="3" mdOffset="3" smOffset="3" xsOffset="1">
        <FormGroup controlId="formHorizontalEmail">
            <span className="span-login">Email</span>
            <FormControl onKeyUp={this.onKeyDownHandle} name="loginname" onChange={this.onHandle.bind(this)} type="email" value={this.state.data.loginname} placeholder="Email" />
        </FormGroup>
        </Col>
        </Row>

        <Row className="show-grid">
        <Col xs={10} sm={6} md={6} lg={6} lgOffset="3" mdOffset="3" smOffset="3" xsOffset="1">
        <FormGroup controlId="formHorizontalPassword">
            <span className="span-login">Password</span>
            <FormControl onKeyUp={this.onKeyDownHandle} name="password" onChange={this.onHandle.bind(this)} type="password" value={this.state.data.password} placeholder="Password" />
        </FormGroup>
        </Col>
        </Row>

        <Row className="show-grid">
        <Col xs={10} sm={6} md={6} lg={6} lgOffset="3" mdOffset="3" smOffset="3" xsOffset="1">
        <FormGroup>
            <Button type="submit" onClick={this.onSubmit.bind(this)}>Sign in</Button>
        </FormGroup>
        </Col>
        </Row>
      </Form>
      </Grid>
    );
  }
}

export default LoginForm;
