import { Button } from "antd";
import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Beranda</h2>
      <p>Selamat datang di halaman Login</p>
      <Button type="primary" href="/dashboard">
        Dashboard
      </Button>
    </div>
  );
};

export default Login;
