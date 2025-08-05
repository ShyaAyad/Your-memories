import { useCreatePost } from "../Store/post.store";
import { Avatar, Button, Typography, Image } from "antd";
import profilePic from "../src/assets/userLogo.jpg";
import { useEffect } from "react";

const { Title } = Typography;

const Post = () => {
  const posts = useCreatePost((state) => state.posts);
  const getMemories = useCreatePost((state) => state.getAllMemories);
  const deleteMemory = useCreatePost((state) => state.deleteMemory);
  const updateMemory = useCreatePost((state) => state.updateMemory)

  // to get all the memories we already have in the database on mount
  useEffect(() => {
    getMemories();
  }, []);

  return (
    // displaying data comming from the API here
    <div className="flex flex-col items-center mt-20 mx-7 justify-center md:grid md:grid-cols-3 md:gap-10">
      {posts.map((post) => (
        <div
          key={post._id}
          className="w-full h-full max-w-[400px] my-10 sm:mx-5 border-gray-300 border-1 p-5 rounded-3xl"
        >
          <div className="flex justify-between">
            <div className="flex gap-4 items-center justify-center">
              <Avatar src={profilePic} alt="Profile picture" size={"large"} />
              <Title level={2}>{post.creator}</Title>
            </div>

            {/* send id to zustan function to update post  */}
            <Button onClick={() => updateMemory(post._id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="black"
              >
                <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
              </svg>
            </Button>
          </div>
          <Image src={`http://localhost:8000/${post.image}`} alt="Memory image" />
          <Title level={1}>{post.title}</Title>
          <Title level={3}>{post.description}</Title>
          <Title level={4}>{post.tags}</Title>
          <div>
            {/* pass correct id to delete */}
            <Button onClick={() => deleteMemory(post._id)}>
              Delete memory
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
