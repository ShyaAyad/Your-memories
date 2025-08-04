import { Button, Form, Input, Typography } from "antd";

const { Title } = Typography;

const FormComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Title level={2}>Make a memory</Title>
      <Form
        variant="filled"
        className="flex flex-col w-full max-w-[250px] sm:max-w-[450px]"
      >
        <Form.Item className="m-20 w-full">
          <Input placeholder="creator"/>
        </Form.Item>
        <Form.Item>
          <Input placeholder="title" />
        </Form.Item>
        <Form.Item>
          <Input.TextArea placeholder="description" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="tags" />
        </Form.Item>
        <Button
          size="large"
          style={{
            backgroundColor: "black",
            color: "#fff",
            fontSize: "20px",
            border: "1px solid black",
          }}
        >
          Make post
        </Button>
      </Form>
    </div>
  );
};

export default FormComponent;
