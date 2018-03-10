import React, { Fragment } from "react";
import Card from "./Card";
import TabBar from "./TabBar";
import UserDetails from "./UserDetails";
import Posts from "./Posts";
import Albums from "./Albums";
import Todos from "./Todos";

// Render the main details view
const Details = ({ activeTab, onClickTab, user }) => (
  <Fragment>
    <Card>
      <TabBar activeTab={activeTab} onClick={onClickTab} />
    </Card>

    {activeTab === 0 && <UserDetails user={user} />}
    {activeTab === 1 && <Posts user={user} />}
    {activeTab === 2 && <Albums user={user} />}
    {activeTab === 3 && <Todos user={user} />}
  </Fragment>
);

export default Details;
