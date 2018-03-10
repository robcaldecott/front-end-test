import React from "react";
import AppBar from "./AppBar";
import LayoutGrid from "./LayoutGrid";
import LayoutGridCell from "./LayoutGridCell";
import Users from "./Users";
import Details from "./Details";
import { users } from "./api";

// The application!
export default class App extends React.Component {
  state = {
    users: [],
    selectedUser: null,
    activeTab: 0
  };

  async componentDidMount() {
    // Load all users
    this.setState({ users: await users() }, () => {
      // Select the first user (if we have any loaded)
      if (this.state.users.length > 0) {
        this.setState({ selectedUser: this.state.users[0] });
      }
    });
  }

  onSelectUser = selectedUser => this.setState({ selectedUser, activeTab: 0 });
  onSelectTab = activeTab => this.setState({ activeTab });

  render() {
    return (
      <div className="mdc-typography">
        <AppBar />

        <LayoutGrid>
          <LayoutGridCell desktop={3} tablet={2}>
            <Users
              users={this.state.users}
              selectedUser={this.state.selectedUser}
              onClick={this.onSelectUser}
            />
          </LayoutGridCell>

          <LayoutGridCell desktop={9} tablet={6}>
            <Details
              user={this.state.selectedUser}
              activeTab={this.state.activeTab}
              onClickTab={this.onSelectTab}
            />
          </LayoutGridCell>
        </LayoutGrid>
      </div>
    );
  }
}
