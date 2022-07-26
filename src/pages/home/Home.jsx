import React from "react";
import Sidebar from "../../comp/sidebar/Sidebar";
import Navbar from "../../comp/navbar/Navbar";
import Widget from '../../comp/widget/Widget';
import Featured from "../../comp/featured/Featured";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
