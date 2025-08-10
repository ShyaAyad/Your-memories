import { Button, Form, Input, message, Typography } from "antd";
import { Link } from "react-router-dom";
import { useUserAccount } from "../Store/user.store";

const { Title } = Typography;

const Login = () => {
  const logIn = useUserAccount((state) => state.logIn);

  const handleLogin = (values) => {
    logIn(values);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Title level={1}>Login</Title>
      <Form
        autoComplete="off"
        onFinish={handleLogin}
        layout="vertical"
        variant="filled"
        className="flex flex-col w-full max-w-[250px] sm:max-w-[450px]"
      >
        <Form.Item label="email" name="email" rules={[{required: true, message: "Please enter your email" }]} className="m-20 w-full">
          <Input placeholder="example@gmail.com" />
        </Form.Item>
        <Form.Item label="password" name="password" rules={[{required: true, message: "Please enter your password" }]}>
          <Input.Password placeholder="password" />
        </Form.Item>
        {/* add an onClick that navigates user to the main page after logging in */}
        <Button htmlType="submit">
          <Link to="/">Login</Link>
        </Button>
        <Title level={5} className="flex  justify-center mt-5 gap-2">
          Don't have an account?
          <div className="underline">
            <Link to="/signup">signup</Link>
          </div>
        </Title>
      </Form>
    </div>
  );
};

export default Login;
