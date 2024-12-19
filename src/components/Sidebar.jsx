import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ onSignOut }) => {
  return (
    <aside className="w-64 bg-blue-700 text-white flex flex-col h-screen fixed">
      {/* Sidebar Header */}
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold">User Dashboard</h2>
      </div>
      {/* Navigation */}
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard/profile"
              className="block px-6 py-3 hover:bg-blue-800 rounded-md"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/settings"
              className="block px-6 py-3 hover:bg-blue-800 rounded-md"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/activity"
              className="block px-6 py-3 hover:bg-blue-800 rounded-md"
            >
              Activity
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/support"
              className="block px-6 py-3 hover:bg-blue-800 rounded-md"
            >
              Support
            </Link>
          </li>
        </ul>
      </nav>
      {/* Sign Out Button */}
      <div className="px-6 py-4">
        <button
          onClick={onSignOut}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
