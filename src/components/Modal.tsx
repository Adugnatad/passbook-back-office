import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ showModal }) => {
  const closeModal = () => {
    showModal(false);
  };
  return (
    <div
      className="fixed w-full h-full top-0 left-0 flex items-center justify-center"
      id="insertModal"
    >
      <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="py-4 text-left px-6">
          <div className="text-center relative">
            <h5 className="font-bold text-gray-900 text-xl">Ad Details</h5>
            <button
              type="button"
              className="cursor-pointer z-50 absolute top-0 right-0"
              onClick={closeModal}
            >
              <AiOutlineClose color="#000" />
            </button>
          </div>

          <div className="modal-body text-[#000]">
            <form>
              <div className="mb-2">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="adStatus"
                >
                  Status
                </label>
                <div className="relative">
                  <select
                    className="form-select block bg-[#004572] text-[#fff] w-full  border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    id="adStatus"
                    name="adStatus"
                  >
                    <option value="active">Active</option>
                    <option value="dormant">Dormant</option>
                  </select>
                </div>
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  className="form-input border border-gray-400 w-full px-3 py-1"
                  id="company"
                  type="text"
                  name="company"
                />
              </div>

              <div className="mb-2">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="product"
                >
                  Product
                </label>
                <input
                  className="form-input border border-gray-400 w-full px-3 py-1"
                  id="product"
                  type="text"
                  name="product"
                />
              </div>

              <div className="mb-2">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="gender"
                >
                  Ad for Gender
                </label>
                <div className="relative">
                  <select
                    className="form-select  w-full border border-gray-400 hover:border-gray-500 px-3 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    id="gender"
                    name="gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="both">Any</option>
                  </select>
                </div>
              </div>

              <div className="mb-2">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="age"
                >
                  Ad for Age group
                </label>
                <div className="relative">
                  <select
                    className="form-select  w-full border border-gray-400 hover:border-gray-500 px-3 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    id="age"
                    name="age"
                  >
                    <option value=">18">18+</option>
                    <option value=">18">25 - 30</option>
                    <option value=">19">30 - 45</option>
                    <option value=">30">45+</option>
                  </select>
                </div>
              </div>

              <div className="mb-2">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="photo"
                >
                  Ad Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  accept="image/*"
                  className="form-input border border-gray-400 w-full px-3 py-1 text-[14px]"
                />
              </div>

              <div className="mb-2">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="startDate"
                >
                  Start Date
                </label>
                <input
                  className="form-input border border-gray-400 w-full px-3 py-1"
                  id="startDate"
                  type="date"
                  name="startDate"
                />
              </div>

              <div className="mb-2">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="startDate"
                >
                  End Date
                </label>
                <input
                  className="form-input border border-gray-400 w-full px-3 py-1"
                  id="endDate"
                  type="date"
                  name="endDate"
                />
              </div>
              <div className="w-full flex items-center justify-center">
                <button
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
