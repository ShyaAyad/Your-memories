import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Login = () => {

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Title level={1}>Login</Title>
        <Form horizental="true" variant="filled" className="flex flex-col w-full max-w-[250px] sm:max-w-[450px]">
            <Form.Item className="m-20 w-full">
              <Title level={4}>Email: </Title>
              <Input placeholder="example@gmail.com"/>
            </Form.Item>
            <Form.Item>
              <Title level={4}>password: </Title>
              <Input.Password placeholder="password"/>
            </Form.Item>
            {/* add an onClick that navigates user to the main page after logging in */}
            <Button>Login</Button>
            <Title level={5} className='flex  justify-center mt-5 gap-2'>
              Don't have an account? 
              <div className='underline'>
                <Link to='/signup'>signup</Link>
              </div>
            </Title>
        </Form>
    </div>
  )
}

export default Login