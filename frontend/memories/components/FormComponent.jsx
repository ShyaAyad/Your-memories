import { Button, Form, Input, Typography } from "antd";
import { useState } from "react";
import { useCreatePost } from "../Store/post.store";

const { Title } = Typography;

const FormComponent = () => {

  const createPost = useCreatePost((state) => state.createPost)

  // Ant design automatically prevents form submission and the values is the data being returned from the form after filling it 
  const handleSubmit = (values) => {
    console.log(values)
    createPost(values) // send values (which is an object) to the createPost function in zustand file 
  }

 
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Title level={2}>Make a memory</Title>
      <Form
        onFinish={handleSubmit}
        variant="filled"
        className="flex flex-col w-full max-w-[250px] sm:max-w-[450px]"
      >
        <Form.Item name={"creator"} className="m-20 w-full">
          <Input placeholder="creator"/>
        </Form.Item>
        <Form.Item name={"title"}>
          <Input placeholder="title"/>
        </Form.Item>
        <Form.Item name={"description"}>
          <Input.TextArea placeholder="description"/>
        </Form.Item>
        <Form.Item name={"tags"}>
          <Input placeholder="tags"/>
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
