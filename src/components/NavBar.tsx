import React, { useState } from "react";
import Modal from "./Modal";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className="bg-[#004572] text-[#fff] p-2 pb-[0.2px] md:px-5">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center my-2">
          <img
            src="src/assets/coop.png"
            alt="coop logo"
            className="h-[35px] w-[100px] mr-3"
          />
          <span className="text-[20px]">CAMPAIGN MANAGER</span>
        </div>
        <div>
          <img
            src="src/assets/avataaars.svg"
            alt="avatar"
            className="h-[40px] w-[40px]"
          />
        </div>
      </div>
      <hr className="border-[#1F5C85]" />
      <div className="flex flex-row justify-between items-center">
        <span className="text-[13px] cursor-pointer hover:border-b-[3px] border-[#00ADEF] py-4">
          CAMPAIGN PERFORMANCE
        </span>
        <button
          onClick={() => setShowModal(true)}
          className="px-3 py-[2px] rounded-[2px] bg-white text-[#000] text-[13px]"
        >
          Create campaign
        </button>
      </div>
      {showModal && <Modal showModal={setShowModal} />}
    </nav>
  );
};

export default NavBar;
