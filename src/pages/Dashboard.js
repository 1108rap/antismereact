import React from "react";
import { Button } from "antd";

const Dashboard = () => {
  return (
    <div>
      <h2>Beranda</h2>
      <p>Selamat datang di halaman Dashboard</p>
      <Button type="primary" href="/">
        Homepage
      </Button>
    </div>
  );
};

export default Dashboard;
