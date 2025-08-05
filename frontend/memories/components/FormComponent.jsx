import { Button, Form, Input, Typography, Upload } from "antd";
import { useCreatePost } from "../Store/post.store";

const { Title } = Typography;

const FormComponent = () => {
  const createMemory = useCreatePost((state) => state.createMemory);
  const [form] = Form.useForm(); // hook provided by Ant design

  // Ant design automatically prevents form submission and the values is the data being returned from the form after filling it
  const handleSubmit = (values) => {
    createMemory(values); // send values (which is an object) to the createPost function in zustand file
    form.resetFields(); // clear form after submission
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Title level={2}>Make a memory</Title>
      <Form
        form={form}
        onFinish={handleSubmit}
        variant="filled"
        className="flex flex-col w-full max-w-[250px] sm:max-w-[450px]"
      >
        <Form.Item
          required
          name={"creator"}
          rules={[{ required: true, message: "Please enter creator name" }]}
          className="m-20 w-full"
        >
          <Input placeholder="creator" />
        </Form.Item>
        <Form.Item
          required
          name={"title"}
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input placeholder="title" />
        </Form.Item>
        <Form.Item name={"description"}>
          <Input.TextArea placeholder="description" />
        </Form.Item>
        <Form.Item name={"tags"}>
          <Input placeholder="tags" />
        </Form.Item>

        <Form.Item
          name="image"
          valuePropName="file"
          getValueFromEvent={(e) => e.file.originFileObj} // just get the File object
        >
          <Upload
            listType="picture"
            beforeUpload={() => false} // prevent automatic upload
            maxCount={1}
            accept="image/*"
          >
            <Button>Upload Image</Button>
          </Upload>
        </Form.Item>
        {/* <Form.Item>

          to upload image later
          
          <Upload />
        </Form.Item> */}
        <Button
          htmlType="submit"
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
