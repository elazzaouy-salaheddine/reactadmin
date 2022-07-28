import React from "react";
import Layout from "../../comp/layout/Layout";
import Widget from '../../comp/widget/Widget';
import Featured from "../../comp/featured/Featured";
import Chart from "../../comp/chart/Chart";
import Table from "../../comp/table/Table";
import "./home.scss";
const Home = () => {
  return (
    <Layout>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>


        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>


 
    </Layout>
  );
};

export default Home;
