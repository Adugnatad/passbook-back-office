import React, { useState, useEffect } from "react";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";

const CampaignTable = ({ data }) => {
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedData, setSortedData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // Define a function to handle sorting by column
  const handleSort = (column) => {
    if (column === sortColumn) {
      // Toggle sort order if the same column is clicked
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Set a new sort column and reset sort order to ascending
      setSortColumn(column);
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    }
  };

  // Define a function to handle searching by campaign name
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setFilteredData(
      data.filter((row) =>
        row["Ad Title"].toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setSortedData(
      data.filter((row) =>
        row["Ad Title"].toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  // Sort data based on selected column and sort order
  useEffect(() => {
    setSortedData(
      sortColumn
        ? [...filteredData].sort((a, b) => {
            const sortVal = sortOrder === "asc" ? 1 : -1;
            if (a[sortColumn] < b[sortColumn]) {
              return -sortVal;
            }
            if (a[sortColumn] > b[sortColumn]) {
              return sortVal;
            }
            return 0;
          })
        : filteredData
    );
    console.log(sortColumn, sortOrder);
  }, [sortOrder]);

  return (
    <div className="mt-5 m-5">
      <table className="w-full">
        <thead>
          <tr className="border-[1px] bg-[#F3F6F8]">
            <th
              className="py-4  text-start font-medium px-4"
              onClick={() => handleSort("Ad Title")}
            >
              <div className="flex items-center cursor-pointer">
                Ad Title
                <HiOutlineArrowsUpDown size={12} className="ml-1 mt-1" />
              </div>
            </th>
            <th
              className="py-4  text-start font-medium px-4 flex items-center"
              onClick={() => handleSort("Status")}
            >
              <div className="flex items-center cursor-pointer">
                Status
                <HiOutlineArrowsUpDown size={12} className="ml-1 mt-1" />
              </div>
            </th>
            <th
              className="py-4  text-start font-medium px-4"
              onClick={() => handleSort("Company")}
            >
              <div className="flex items-center cursor-pointer">
                Company
                <HiOutlineArrowsUpDown size={12} className="ml-1 mt-1" />
              </div>
            </th>
            <th
              className="py-4  text-start font-medium px-4"
              onClick={() => handleSort("Product")}
            >
              <div className="flex items-center cursor-pointer">
                Product
                <HiOutlineArrowsUpDown size={12} className="ml-1 mt-1" />
              </div>
            </th>
            <th
              className="py-4  text-start font-medium px-4"
              onClick={() => handleSort("Target gender")}
            >
              <div className="flex items-center cursor-pointer">
                Target gender
                <HiOutlineArrowsUpDown size={12} className="ml-1 mt-1" />
              </div>
            </th>
            <th
              className="py-4  text-start font-medium px-4"
              onClick={() => handleSort("Age group")}
            >
              <div className="flex items-center cursor-pointer">
                Age group
                <HiOutlineArrowsUpDown size={12} className="ml-1 mt-1" />
              </div>
            </th>
            <th
              className="py-4  text-start font-medium px-4"
              onClick={() => handleSort("Start Date")}
            >
              <div className="flex items-center cursor-pointer">
                Start Date
                <HiOutlineArrowsUpDown size={12} className="ml-1 mt-1" />
              </div>
            </th>
            <th
              className="py-4  text-start font-medium px-4"
              onClick={() => handleSort("End Date")}
            >
              <div className="flex items-center cursor-pointer">
                End Date
                <HiOutlineArrowsUpDown size={12} className="ml-1 mt-1" />
              </div>
            </th>
          </tr>
          <tr className="border-[1px] bg-[#F3F6F8]">
            <th className="py-2 text-start px-4">
              <input
                type="text"
                onChange={handleSearch}
                placeholder="Search by Ad title"
                className="text-[13px] px-2 py-1 w-[250px] text-start font-normal"
              />
            </th>
            <th colSpan={8}></th>
          </tr>
        </thead>
        <tbody className="border-[1px]">
          {sortedData.map((row, index) => (
            <tr key={index} className="border-[1px]">
              <td className="py-4  text-start font-normal px-4">
                {row["Ad Title"]}
              </td>
              <td className="text-start font-medium px-4">
                <button
                  className={
                    row["Status"] === "Active"
                      ? "bg-[#2F7B15] text-[#fff] px-2 py-[0.7px]  rounded-[5px] font-normal"
                      : "bg-yellow-200 px-1 rounded-[5px] font-normal"
                  }
                  onClick={() => alert(JSON.stringify(row))}
                >
                  {row["Status"]}
                </button>
              </td>
              <td className="text-start font-normal px-4">{row["Company"]}</td>
              <td className="text-start font-normal px-4">{row["Product"]}</td>
              <td className="text-start font-normal px-4">
                {row["Target Gender"]}
              </td>
              <td className="text-start font-normal px-4">
                {row["Age group"]}
              </td>
              <td className="text-start font-normal px-4">
                {row["Start Date"]}
              </td>
              <td className="text-start font-normal px-4">{row["End Date"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignTable;
