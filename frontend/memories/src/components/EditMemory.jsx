import { Button, Form, Input, message, Typography, Upload } from "antd";
import { useCreatePost } from "../Store/post.store";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const { Title } = Typography;

const EditMemory = () => {
  const { memoryId } = useParams(); 
  const posts = useCreatePost(state => state.posts);
  const updateMemory = useCreatePost(state => state.updateMemory);
  const navigate = useNavigate();

  const memoryToEdit = posts.find((post) => post._id === memoryId);

  const [form] = Form.useForm();

  useEffect(() => {
    if (memoryToEdit) {
      form.setFieldsValue({
        creator: memoryToEdit.creator,
        title: memoryToEdit.title,
        description: memoryToEdit.description,
        tags: memoryToEdit.tags.join(", "),
      });
    }
  }, [memoryToEdit, form]);

  const handleEdit = async (values) => {
    if (!memoryToEdit) {
      message.warning("Memory not found");
      navigate('/');
      return;
    }

    const formData = new FormData();
    formData.append("creator", values.creator);
    formData.append("title", values.title);
    formData.append("description", values.description || "");

    if (values.tags) {
      const tagsArray = values.tags
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag !== "");
      formData.append("tags", JSON.stringify(tagsArray));
    }

    const fileList = values.image || [];
    const file = fileList.length > 0 ? fileList[0].originFileObj : null;
    if (file) {
      formData.append("image", file);
    }

    const result = await updateMemory(memoryId, formData);

    if (result.success) {
      message.success("Memory updated successfully");
      navigate('/');
    } else {
      message.error("Failed to update memory");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Title level={2}>Edit memory</Title>
      <Form
        onFinish={handleEdit}
        form={form}
        variant="filled"
        className="flex flex-col w-full max-w-[250px] sm:max-w-[450px]"
      >
        <Form.Item required name="creator" className="m-20 w-full">
          <Input />
        </Form.Item>
        <Form.Item required name="title">
          <Input />
        </Form.Item>
        <Form.Item name="description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="tags">
          <Input />
        </Form.Item>
        <Form.Item
          name="image"
          valuePropName="fileList"
          getValueFromEvent={(e) => e?.fileList || []}
        >
          <Upload
            beforeUpload={() => false}
            maxCount={1}
            accept="image/*"
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
          Edit memory
        </Button>
      </Form>
    </div>
  );
};

export default EditMemory;
