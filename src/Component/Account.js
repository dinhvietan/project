import React from 'react';
import {Table, Panel} from 'react-bootstrap';

import DataUtils from '../Utils/DataUtils';
import './Style/Profile.css';

class Account extends React.Component {
    constructor(props) {
        super(props);
    }

    buildAccountList() {
        let AccountList = DataUtils.getUserList();
        let _accountList = [];

        for(let i in AccountList) {
            _accountList.push(
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{AccountList[i].firstname}</td>
                    <td>{AccountList[i].lastname}</td>
                    <td>{AccountList[i].email}</td>
                </tr>
            )
        }

        return _accountList;
    }

    render() {
        let _accountList = this.buildAccountList();
        return (
            <div >
                <Panel className="page-panel" >
                    <Panel.Heading>
                    <Panel.Title className="parallax"><h2>User Management</h2></Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Table className="user-list"  striped bordered condensed hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {_accountList}
                            </tbody>
                        </Table>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default Account;