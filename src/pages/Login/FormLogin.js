import { Card, Input, Button, Checkbox, Form, Flex } from "antd";

const FormLogin = () => {
  return (
    <div>
      <Card title="Sign In Card" bordered={false} style={{ width: 600 }}>
        <Form>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please Input Your Username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please Input Your Password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember</Checkbox>
          </Form.Item>
          <Flex horizontal gap={"small"}>
            <Form.Item>
              <Button type="primary" href="/" danger>
                Back
              </Button>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Flex>
        </Form>
      </Card>
    </div>
  );
};

export default FormLogin;
