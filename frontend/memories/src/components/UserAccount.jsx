import { HomeOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useUserAccount } from "/src/Store/user.store";
import Lottie from "lottie-react";
import NoAccountInfo from '/NoDataFound.json'

const UserAccount = () => {
  const user = useUserAccount((state) => state.user);
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50"></div>
      <div className="absolute inset-0 backdrop-blur-3xl"></div> */}
      
      <div className="absolute top-20 left-20 w-72 h-72 bg-gray-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-3 text-gray-600 hover:text-black transition-all duration-300 mb-16 group"
        >
          <div className="w-11 h-11 rounded-xl bg-black/5 backdrop-blur-sm border border-black/10 flex items-center justify-center group-hover:bg-black/10 group-hover:border-black/20 transition-all duration-300">
            <HomeOutlined className="text-lg" />
          </div>
          <span className="text-base font-medium tracking-wide">Back to memories</span>
        </Link>
        
        {user ? (
          <div className="space-y-8">
            <div className="bg-white backdrop-blur-xl border border-black/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-200 flex items-center justify-center shadow-lg shadow-gray-800/50">
                  <UserOutlined className="text-white text-2xl" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-black tracking-tight">Account Profile</h1>
                  <p className="text-gray-600 text-sm mt-1">Manage your personal information</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative bg-black/5 backdrop-blur-sm border border-black/10 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-200 flex items-center justify-center shadow-lg">
                        <UserOutlined className="text-white text-xl" />
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-2">Username</p>
                    <p className="text-black text-xl font-bold">{user.username}</p>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative bg-black/5 backdrop-blur-sm border border-black/10 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-200 flex items-center justify-center shadow-lg">
                        <MessageOutlined className="text-white text-xl" />
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-2">Email Address</p>
                    <p className="text-black text-xl font-bold break-all">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-black/5 backdrop-blur-xl border border-black/10 rounded-3xl p-12 shadow-2xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-black mb-6 shadow-lg shadow-gray-800/50">
              <UserOutlined className="text-white text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-black mb-3">
              No Account Found
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              Sign in to access your profile and view your account information
            </p>
            <Lottie
              animationData={NoAccountInfo}
              className="max-w-lg mx-auto opacity-80"
              style={{ height: 350, width: 350 }}
              loop={true}
              autoplay={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAccount;