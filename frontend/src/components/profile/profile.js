import React from 'react';

class Profile extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.fetchUserCards(this.props.currentUser);
  }

  render() {
    return (
      <div>
        <div>
          Temporary User Profile for {this.props.currentUser}
        </div>
      </div>
    )
  }
}



export default Profile;