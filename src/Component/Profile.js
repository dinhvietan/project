import React from 'react';
import {Panel} from 'react-bootstrap';

import DataUtils from '../Utils/DataUtils';
import './Style/Profile.css';

class Profile extends React.Component {
    buildUserInfo() {
        let userInfo = DataUtils.getUserInfo();
        let template = [];
        if(userInfo != null) {
            template.push(
                <div key={1}>
                    <span>Email: {userInfo.email}</span>
                    <br/>
                    <span>Full Name: {userInfo.name}</span>
                </div>
            )
        }

        return template;
    } 
    render() {
        let _userTemplate = this.buildUserInfo();
        return (
        <div>
            <div>
                <Panel className="page-panel">
                    <Panel.Heading>
                    <Panel.Title className="parallax"><h3>User Information</h3></Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        {_userTemplate}
                    </Panel.Body>
                </Panel>
            </div>
        </div>);
    }
}

export default Profile;