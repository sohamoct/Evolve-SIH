import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white flex justify-between p-4">
      <div className="font-bold text-xl">E-VOLV</div>
      <div className="space-x-4">
        <button className="bg-white text-blue-900 px-4 py-1 rounded">Login</button>
        <button className="bg-white text-blue-900 px-4 py-1 rounded">SignUp</button>
      </div>
    </nav>
  );
};

export default Navbar;
