import React from "react";
import { Avatar, Flex, Dropdown, Button } from "antd";
import userLogo from "../src/assets/userLogo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const items = [
        {key: "account", label: "Account"},
        {key: "create", label: "Add post"}
    ]

    const navigate = useNavigate()

    const handleClick = ({key}) => {
        if(key === "account"){
            navigate('/login')
        }else if(key === "create"){
            navigate('/add-post')
        }
    }
  return (
    // component calls user component
    <div className="flex items-center justify-center mt-10 mx-5">
      <Flex
        justify="space-between"
        horizental="true"
        gap={16}
        className="w-full m-10 sm:max-w-5xl h-20 rounded-4xl border-gray-800 border-1"
      >
        <div className="pl-2 py-2">
          <Avatar src={userLogo} alt="Avatar img" size={64} />
        </div>
        <div className="flex items-center justify-center pr-5">
          <Dropdown menu={{items, onClick: handleClick}}>
            <Button>Open me</Button>
          </Dropdown>
        </div>
      </Flex>
    </div>
  );
};

export default Navbar;
