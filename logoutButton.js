import React from 'react';
import { Dropdown } from 'semantic-ui-react';

class LogoutButton extends React.Component {

  render () {
   return <Dropdown.Item text='logout' onClick={() => this.props.onLogoutClick() }/>;
  }
}

export default LogoutButton; 
