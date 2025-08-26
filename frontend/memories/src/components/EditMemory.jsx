import { Button, Form, Input, message, Typography, Upload } from "antd";
import { useCreatePost } from "../Store/post.store";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const { Title } = Typography;

const EditMemory = () => {
  const { memoryId } = useParams(); // this is incorrect 
  console.log(memoryId)
  const posts = useCreatePost(state => state.posts)
  console.log("post", posts)
  const updateMemory = useCreatePost(state => state.updateMemory) 
  // post._id --> this is correct 
  const memoryToEdit = posts.find((post) => post._id === memoryId) // find id of the post
  console.log(memoryToEdit)
  const navigate = useNavigate();

  const [form] = Form.useForm();

  useEffect(() => {
    // if there is a matched memory with the id then start getting it's data 
    if(memoryToEdit){
        /* 
            Ant desing setFieldsValue is a function here it accepts an object 
            that has the data of the specific memory we want to edit
        */
        form.setFieldsValue({
            creator: memoryToEdit.creator,
            title: memoryToEdit.title,
            description: memoryToEdit.description,
            tags: memoryToEdit.tags
        })
    }
  }, [memoryToEdit, form])

  // Ant design automatically prevents form submission and the values is the data being returned from the form after filling it
  const handleEdit = async (values) => {

    if(!memoryToEdit){
        message.warning("Memory not found")
        navigate('/')   
    }

    await updateMemory(memoryToEdit, values)
    message.success("Memory updated succssfully")
    navigate('/')
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Title level={2}>Edit memory</Title>
      <Form
        onFinish={handleEdit}
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

        {/* <Form.Item
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
          Edit memory
        </Button>
      </Form>
    </div>
  );
};

export default EditMemory;
