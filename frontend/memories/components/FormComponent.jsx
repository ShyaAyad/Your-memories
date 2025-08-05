import { Button, Form, Input, Typography, Upload } from "antd";
import { useCreatePost } from "../Store/post.store";
import axios from "axios";

const { Title } = Typography;

const FormComponent = () => {
  const createMemory = useCreatePost((state) => state.createMemory);
  const [form] = Form.useForm(); // hook provided by Ant design

  // Ant design automatically prevents form submission and the values is the data being returned from the form after filling it
  const handleSubmit = async (values) => {
    console.log(values);
    console.log(values.title);

    // values.image is an array of files (fileList)
    const fileList = values.image || [];
    const file = fileList.length > 0 ? fileList[0].originFileObj : null;

    console.log("Extracted file:", file);

    const formData = new FormData();
    formData.append("creator", values.creator);
    formData.append("title", values.title);
    formData.append("description", values.description || "");
    formData.append("tags", values.tags || "");

    if (file) {
      formData.append("image", file);
    }

    createMemory(formData);
    form.resetFields();
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
          valuePropName="fileList" // <-- change here to fileList (array)
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e?.fileList || [];
          }}
        >
          <Upload
            beforeUpload={() => false} // prevent auto upload
            maxCount={1}
            accept="image/*"
            listType="picture"
          >
            <Button>Upload Image</Button>
          </Upload>
        </Form.Item>

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
