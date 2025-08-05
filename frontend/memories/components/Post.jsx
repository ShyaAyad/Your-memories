import { useCreatePost } from "../Store/post.store";
import { Avatar, Button, Typography } from "antd";
import profilePic from "../src/assets/userLogo.jpg";
import { useEffect } from "react";

const { Title } = Typography;

const Post = () => {

  const posts = useCreatePost((state) => state.posts);
  const getMemories = useCreatePost((state) => state.getAllMemories)
  const deleteMemory = useCreatePost((state) => state.deleteMemory)

  console.log(posts);

  useEffect(() => {
    getMemories();
  }, [])

  return (
    // displaying data comming from the API here
    <div className="flex flex-col items-center mt-20 mx-7 justify-center md:grid md:grid-cols-3 md:gap-10" >
      {posts.map((post) => (
        <div key={post._id} className="w-full h-full max-w-[400px] my-10 sm:mx-5 border-gray-300 border-1 p-5 rounded-3xl">
          <div className="flex gap-4 items-center">
            <Avatar src={profilePic} alt="Profile picture" size={"large"}/>
            <Title level={2}>{post.creator}</Title>
          </div>
          <Title level={1}>{post.title}</Title>
          <Title level={3}>{post.description}</Title>
          <Title level={4}>{post.tags}</Title>
          <div>
            {/* pass correct id to delete */}
            <Button onClick={() => deleteMemory(post._id)}>Delete memory</Button> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
