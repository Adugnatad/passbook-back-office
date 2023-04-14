import React from "react";
import { useState } from "react";
import "./App.css";
import Settings from "./pages/Settings.pages";
import { ToastContainer } from "react-toastify";
import "react-tooltip/dist/react-tooltip.css";
import NavBar from "./components/NavBar";
import Campaign from "./pages/Campaign.management";
import CampaignTable from "./components/Table";

function App() {
  const [count, setCount] = useState(0);
  const data = [
    {
      "Ad Title": "Fitness Apparel",
      Status: "Active",
      Company: "GymWear Co.",
      Product: "Equb",
      "Target Gender": "Male",
      "Age group": "25-45",
      "Start Date": "2023-06-01",
      "End Date": "2023-07-31",
    },

    {
      "Ad Title": "Luxury Car Rentals",
      Status: "Inactive",
      Company: "Elite Rentals",
      Product: "Crowdfunding",
      "Target Gender": "Any",
      "Age group": "18+",
      "Start Date": "2023-08-01",
      "End Date": "2023-09-30",
    },

    {
      "Ad Title": "Pet Grooming Services",
      Status: "Active",
      Company: "Purrfect Paws",
      Product: "Coopass",
      "Target Gender": "Female",
      "Age group": "30-50",
      "Start Date": "2023-06-15",
      "End Date": "2023-08-15",
    },

    {
      "Ad Title": "Digital Marketing Course",
      Status: "Active",
      Company: "Tech Training",
      Product: "Crowdfunding",
      "Target Gender": "Any",
      "Age group": "18+",
      "Start Date": "2023-05-01",
      "End Date": "2023-06-30",
    },

    {
      "Ad Title": "Organic Skincare Products",
      Status: "Inactive",
      Company: "Naturals",
      Product: "Equb",
      "Target Gender": "Female",
      "Age group": "18-35",
      "Start Date": "2023-09-01",
      "End Date": "2023-11-30",
    },

    {
      "Ad Title": "Real Estate Investment Opportunities",
      Status: "Active",
      Company: "Homes Inc.",
      Product: "Crowdfunding",
      "Target Gender": "Any",
      "Age group": "25+",
      "Start Date": "2023-07-01",
      "End Date": "2023-09-30",
    },

    {
      "Ad Title": "Sustainable Clothing Line",
      Status: "Active",
      Company: "Eco Wear",
      Product: "Coopass",
      "Target Gender": "Any",
      "Age group": "18+",
      "Start Date": "2023-05-15",
      "End Date": "2023-06-30",
    },

    {
      "Ad Title": "Premium Coffee Subscriptions",
      Status: "Inactive",
      Company: "Brew Co.",
      Product: "Equb",
      "Target Gender": "Any",
      "Age group": "18+",
      "Start Date": "2023-08-01",
      "End Date": "2023-09-30",
    },

    {
      "Ad Title": "Online Bookstore",
      Status: "Active",
      Company: "Book World",
      Product: "Crowdfunding",
      "Target Gender": "Any",
      "Age group": "18+",
      "Start Date": "2023-06-01",
      "End Date": "2023-07-31",
    },
  ];

  return (
    <>
      <NavBar />
      <Campaign />
      <CampaignTable data={data} />
      {/* <Settings /> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
