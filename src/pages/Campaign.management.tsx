import React from "react";

const Campaign = () => {
  return (
    <div>
      <section className="grid grid-cols-4 my-5 mx-5">
        <div className="flex flex-col items-start text-[#747576] border border-[2px] hover:text-[#2386BC]  hover:border-b-[4px] hover:border-b-[#2386BC] border-r-[1px] p-3 cursor-pointer">
          <h3 className="text-[20px] font-medium ">Accounts</h3>
          <span className="text-[#747576]">Marketing Account</span>
        </div>
        <div className="flex flex-col items-start text-[#747576] border border-[2px] hover:text-[#2386BC]  hover:border-b-[4px] hover:border-b-[#2386BC] border-r-[1px] p-3 cursor-pointer">
          <h3 className="text-[20px] font-medium  ">Campaign groups</h3>
          <span className="text-[#747576]">10 total campaign groups</span>
        </div>
        <div className="flex flex-col items-start text-[#747576] border border-[2px] hover:text-[#2386BC]  hover:border-b-[4px] hover:border-b-[#2386BC] border-r-[1px] p-3 cursor-pointer">
          <h3 className="text-[20px] font-medium">Campaigns</h3>
          <span className="text-[#747576]">50 total campaigns</span>
        </div>
        <div className="flex flex-col items-start text-[#747576] border border-[2px] hover:text-[#2386BC]  hover:border-b-[4px] hover:border-b-[#2386BC] p-3 cursor-pointer">
          <h3 className="text-[20px] font-medium">Ads</h3>
          <span className="text-[#747576]">200 total ads</span>
        </div>
      </section>
    </div>
  );
};

export default Campaign;
