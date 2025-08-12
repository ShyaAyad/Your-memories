import { Button, Form, Input, Typography, Upload } from "antd";
import { useCreatePost } from "../Store/post.store";
import { Link } from "react-router-dom";
import { useUserAccount } from "../Store/user.store";
import SignUp from "../pages/SignUp";

const { Title } = Typography;

const FormComponent = () => {
  const createMemory = useCreatePost((state) => state.createMemory);
  const [form] = Form.useForm(); // hook provided by Ant design
  const user = useUserAccount((state) => state.user);

  // Ant design automatically prevents form submission and the values is the data being returned from the form after filling it
  const handleSubmit = async (values) => {
    console.log(values);

    // values.image is an array of files (fileList)
    const fileList = values.image || [];
    const file = fileList.length > 0 ? fileList[0].originFileObj : null;

    const formData = new FormData();
    formData.append("creator", values.creator);
    formData.append("title", values.title);
    formData.append("description", values.description || "");

    // splitting the strings by comma and add them to the array
    const tags = values.tags;
    if (!tags) {
      console.log("there is no tag for this post");
    } else {
      // edge case: remove leading spaces in each string, and don't set empty strings as tags just return the array that holds string values
      const tagsArray = tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");
      formData.append("tags", JSON.stringify(tagsArray) || "");
    }

    // first check if there is a file if true append it to the formData
    if (file) {
      formData.append("image", file);
    }


    console.log(formData)
    createMemory(formData); // send form data to createMemory in zustand
    form.resetFields(); // clear the form
  };

  
  if(!user){
    return(
      <>
        <h1 className="flex items-center justify-center text-3xl mt-10 text-red-700">Create an account to make memories</h1>
        <SignUp />
      </>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Title level={2}>Make a memory</Title>
      <Form
        autoComplete="off"
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
          name="image" // this must match the name you pass to the .single() in the backend
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
            maxCount={1} // number of uploaded file (only one is accepted here)
            accept="image/*" // so only images are accepts (.jpg, .png...etc)
            listType="picture-card"
          >
            + Upload
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
          <Link to="/">Make memory</Link>
        </Button>
      </Form>
    </div>
  );
};

export default FormComponent;
