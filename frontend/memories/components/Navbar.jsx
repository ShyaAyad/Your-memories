import { Avatar, Flex, Dropdown, Button, Typography } from "antd";
import userLogo from "../src/assets/userLogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useUserAccount } from "../Store/user.store";
import { LogoutOutlined } from "@ant-design/icons";

const Navbar = () => {
  const logOut = useUserAccount((state) => state.logOut);
  const user = useUserAccount((state) => state.user);

  const handleLogOut = () => {
    logOut();
    navigate("/no-account");
  };

  const items = [
    { key: "account", label: "Me" },
    { key: "create", label: "Add post" },
    { key: "create-account", label: "Create account"}
  ];

  const navigate = useNavigate();

  const handleClick = ({ key }) => {
    if (key === "account") {
      navigate("/user-account");
    } else if (key === "create") {
      navigate("/add-post"); // add-post is the form elements page
    } else if(key === "create-account"){
      navigate('/login')
    }
  };
  return (
    // component calls user component
    <div className="flex items-center justify-center mt-10 mx-5">
      <Flex
        justify="space-between"
        horizental="true"
        gap={16}
        className="bg-white w-full m-10 sm:max-w-5xl h-20 rounded-4xl border-gray-200 border-1"
      >
        <div className="pl-2 py-2">
          <Link to="/">
            <Avatar src={userLogo} alt="Avatar img" size={64} />
          </Link>
        </div>
        <div className="flex items-center justify-center pr-5 gap-5">
          <Dropdown menu={{ items, onClick: handleClick }}>
            <Button>Open me</Button>
          </Dropdown>
          {user ? (
            <Button onClick={handleLogOut}>
              <Link to="/"><LogoutOutlined /></Link>
            </Button>
          ) : null}
        </div>
      </Flex>
    </div>
  );
};

export default Navbar;
