import { HomeOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useUserAccount } from "../Store/user.store";
import { Typography } from "antd";
import Lottie from "lottie-react";
import NoAccountInfo from '../NoDataFound.json'

const UserAccount = () => {
  const user = useUserAccount((state) => state.user);
  return (
    <div className="flex flex-col mt-10 mx-7 justify-center">
      <Link to="/" className="text-xl">
        <HomeOutlined
          style={{
            fontSize: "30px",
            marginBottom: "20px",
            marginRight: "15px",
          }}
        />
        Back to memories
      </Link>
      {user ? (
        <div className="flex flex-col items-center">
          <Typography.Title level={3}>Account info: </Typography.Title>
          <Typography.Title level={4}>
            <UserOutlined className="mr-5" />
            user name: {user.username}
          </Typography.Title>
          <Typography.Title level={4}>
            <MessageOutlined className="mr-5" />
            email: {user.email}
          </Typography.Title>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Typography.Title level={2}>
            No account info, login to see account info
          </Typography.Title>
          <Lottie
            animationData={NoAccountInfo}
            style={{ height: 500, width: 500 }}
            loop={true}
            autoplay={true}
          />
        </div>
      )}
    </div>
  );
};

export default UserAccount;
