import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { auth } = useAuth();
  return (
    <div className="">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Profile</h1>
        <p className="text-gray-600 mb-6">
          info akun
        </p>

        {/* Profile Details */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-800 font-medium">Username:</span>
            <span className="text-gray-600">{auth?.user}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-800 font-medium">Email :</span>
            <span className="text-gray-600">zidan@gmail.com</span>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-6 text-right">
          <button
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
