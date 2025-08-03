import { Form, Input, Typography } from "antd"
import TextArea from "antd/es/input/TextArea"

const { Title } = Typography

const FormComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Title level={2}>Make a memory</Title>
        <Form variant="filled" className="w-full max-w-[250px] sm:max-w-[450px]">
            <Form.Item className="m-20 w-full">
              <Input placeholder="creator"/>
            </Form.Item>
            <Form.Item>
              <Input placeholder="title"/>
            </Form.Item>
            <Form.Item>
              <TextArea placeholder="description"/>
            </Form.Item>
            <Form.Item>
              <Input placeholder="tags"/>
            </Form.Item>
        </Form>
    </div>
  )
}

export default FormComponent