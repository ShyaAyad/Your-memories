import { Button, Form, Input, Typography } from "antd"
import { Link } from "react-router-dom"
import { useUserAccount } from "../Store/user.store"

const { Title } = Typography

const SignUp = () => {

  const signUp = useUserAccount(state => state.signUp);

  const handleSignUp = (values) => {
    console.log("User created successfully")
    console.log(values, ' user data')
    console.log(values.username)
    console.log(values.email)
    console.log(values.password)
    signUp(values)
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Title level={1}>Sign up</Title>
        <Form onFinish={handleSignUp} horizental="true" variant="filled" className="flex flex-col w-full max-w-[250px] sm:max-w-[450px]">
            <Form.Item className="m-20 w-full">
              <Title level={4}>UserName: </Title>
              <Input placeholder="John Doe"/>
            </Form.Item>
            <Form.Item className="m-20 w-full">
              <Title level={4}>Email: </Title>
              <Input placeholder="example@gmail.com"/>
            </Form.Item>
            <Form.Item>
              <Title level={4}>password: </Title>
              <Input.Password placeholder="password"/>
            </Form.Item>
            {/* add an onClick that navigates user to main page after registering */}
            <Button htmlType="submit">Register</Button> 
            <Title level={5} className='flex  justify-center mt-5 gap-2'>
              Already have an account? 
              <div className='underline'>
                <Link to='/login'>Log in</Link>
              </div>
            </Title>
        </Form>
    </div>
  )
}

export default SignUp