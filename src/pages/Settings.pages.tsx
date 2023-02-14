import React, { useState, useEffect } from 'react';
import { AiFillQuestionCircle, AiOutlineSearch } from "react-icons/ai"
import { toast } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";
if (typeof window !== "undefined") {
    injectStyle();
}

const Settings = () => {
    const [menuSelected, setMenuSelected] = useState<string>("Security");
    const [searchText, setSearchText] = useState<string>("");
    const menuClick = (menu: string) => {
        setMenuSelected(menu);
    }
    const menuList: string[] = [
        "Features",
        "Security",
        "Applications",
        "API",
        "Active Users",
        "Crashes",
        "Drill & Segmentation",
        "Cohorts",
        "Funnels",
        "Flows",
    ];
    const [filteredMenu, setFilteredMenu] = useState(menuList);

    useEffect(() => {
        const filtered = menuList.filter((menu) => (menu.toUpperCase()).includes(searchText.toUpperCase()));
        setFilteredMenu(filtered);
    }, [searchText])

    const handleSave = () => {
        toast.success('Your changes were saved.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div>
            <div className='flex flex-row items-center space-x-2 px-5 py-5 border-[1px] border-[#D7DBE2] md:mb-5'>
                <span className='text-[25px]'>Settings</span>
                <AiFillQuestionCircle size={15} color="#D7DBE2" />
            </div>
            <div className='flex flex-col items-start w-full md:flex-row'>
                <div className='mt-[55px] mr-10 w-full md:w-[40%]'>
                    <div className='flex flex-row items-center space-x-2 px-1 border-[1px] border-[#CACCCF] '>
                        <AiOutlineSearch color='CACCCF' size={30} />
                        <input type="text" placeholder="Search in Settings" className='outline-0 p-2' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    </div>
                    {filteredMenu.map((menu, index) => (
                        <div key={index} className={`flex flex-row justify-start cursor-pointer py-2 px-4 border-[1px] text-[#9B9D9D] font-medium ${menuSelected === menu && 'border-l-[2px] border-l-[#3F85D3] text-[#3F85D3] bg-[#FAFAFA]'}`} onClick={() => menuClick(menu)}>
                            {menu}
                        </div>
                    ))}
                </div>
                <div className="w-full">

                    {menuSelected === "Security" &&
                        <section className='flex flex-col w-full'>
                            <div className='mb-5 flex flex-col'>
                                <span className='mb-5 mt-5 font-medium text-[20px] sm:mt-0'>Security</span>
                                <div>
                                    <div className='flex flex-row items-center justify-center space-x-1 mb-4 sm:justify-start'>
                                        <span className='font-medium'>Password Requirements</span>
                                        <AiFillQuestionCircle size={15} color="#D7DBE2" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-col items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3 sm:flex-row'>
                                            <div className='flex flex-col items-center mr-5 mb-5 sm:items-start sm:mb-0'>
                                                <span className="text-center sm:text-start sm:mb-1">Minimum password length</span>
                                                <span className="text-center sm:text-start">Minimum number of characters used in the password.</span>
                                            </div>
                                            <input type="number" className="w-[50%]  bg-[#FAFAFA] border-[1px] border-[#ddd] mr-5 sm:w-[150px]" />
                                        </div>
                                        <div className='flex flex-row items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3'>
                                            <div className='flex flex-col items-start mr-5'>
                                                <span className="text-start mb-1">Password must contain a number</span>
                                                <span className="text-start">If enabled, provided passwords must contain at least one digit.</span>
                                            </div>
                                            <label className="relative cursor-pointer ">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3699FF] mr-5"></div>
                                            </label>
                                        </div>
                                        <div className='flex flex-row items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3'>
                                            <div className='flex flex-col items-start mr-5'>
                                                <span className="text-start mb-1">Minimum password length</span>
                                                <span className="text-start">Minimum number of characters used in the password.</span>
                                            </div>
                                            <input type="number" className="w-[150px] bg-[#FAFAFA] border-[1px] border-[#ddd] mr-5" />
                                        </div>
                                    </div>
                                </div>
                                <button className='self-end mt-4 bg-[#3F85D3] text-[#fff] px-3 py-1 rounded-lg' onClick={handleSave}>Save</button>
                            </div>
                            <div className='mb-5  flex flex-col'>
                                <div>
                                    <div className='flex flex-row items-center space-x-1 mb-4'>
                                        <span className='font-medium'>Loggin In</span>
                                        <AiFillQuestionCircle size={15} color="#D7DBE2" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3'>
                                            <div className='flex flex-col items-start mr-5'>
                                                <span className="text-start mb-1">Allowed login attempts</span>
                                                <span className="text-start">Account will be blocked for some time after provided number of incorrect attempts.</span>
                                            </div>
                                            <input type="number" className="w-[150px] bg-[#FAFAFA] border-[1px] border-[#ddd] mr-5" />
                                        </div>
                                        <div className='flex flex-row items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3'>
                                            <div className='flex flex-col items-start mr-5'>
                                                <span className="text-start mb-1">Password must contain a number</span>
                                                <span className="text-start">If enabled, provided passwords must contain at least one digit.</span>
                                            </div>
                                            <label className="relative cursor-pointer ">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3699FF] mr-5"></div>
                                            </label>
                                        </div>
                                        <div className='flex flex-row items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3'>
                                            <div className='flex flex-col items-start mr-5'>
                                                <span className="text-start mb-1">Minimum password length</span>
                                                <span className="text-start">Minimum number of characters used in the password.</span>
                                            </div>
                                            <input type="number" className="w-[150px] bg-[#FAFAFA] border-[1px] border-[#ddd] mr-5" />
                                        </div>
                                    </div>
                                </div>
                                <button className='self-end mt-4 bg-[#3F85D3] text-[#fff] px-3 py-1 rounded-lg' onClick={handleSave}>Save</button>
                            </div>
                            <div className='mb-5  flex flex-col'>
                                <div>
                                    <div className='flex flex-row items-center space-x-1 mb-4'>
                                        <span className='font-medium'>Password Requirements</span>
                                        <AiFillQuestionCircle size={15} color="#D7DBE2" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3'>
                                            <div className='flex flex-col items-start mr-5'>
                                                <span className="text-start mb-1">Minimum password length</span>
                                                <span className="text-start">Minimum number of characters used in the password.</span>
                                            </div>
                                            <input type="number" className="w-[150px] bg-[#FAFAFA] border-[1px] border-[#ddd] mr-5" />
                                        </div>
                                        <div className='flex flex-row items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3'>
                                            <div className='flex flex-col items-start mr-5'>
                                                <span className="text-start mb-1">Password must contain a number</span>
                                                <span className="text-start">If enabled, provided passwords must contain at least one digit.</span>
                                            </div>
                                            <label className="relative cursor-pointer ">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3699FF] mr-5"></div>
                                            </label>
                                        </div>
                                        <div className='flex flex-row items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3'>
                                            <div className='flex flex-col items-start mr-5'>
                                                <span className="text-start mb-1">Minimum password length</span>
                                                <span className="text-start">Minimum number of characters used in the password.</span>
                                            </div>
                                            <input type="number" className="w-[150px] bg-[#FAFAFA] border-[1px] border-[#ddd] mr-5" />
                                        </div>
                                    </div>
                                </div>
                                <button className='self-end mt-4 bg-[#3F85D3] text-[#fff] px-3 py-1 rounded-lg' onClick={handleSave}>Save</button>
                            </div>
                        </section>
                    }
                    {menuSelected === "Features" &&
                        <section className='flex flex-col w-full'>
                            <div className='mb-5 flex flex-col'>
                                <span className='mb-5 mt-5 font-medium text-[20px] sm:mt-0'>Features</span>
                                <div>
                                    <div className='flex flex-row items-center justify-center space-x-1 mb-4 sm:justify-start'>
                                        <span className='font-medium'>Services</span>
                                        <AiFillQuestionCircle size={15} color="#D7DBE2" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-col items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3 sm:flex-row'>
                                            <div className='flex flex-col items-center mr-5 mb-5 sm:items-start sm:mb-0'>
                                                <span className="text-center sm:text-start sm:mb-1">ATM Card Request</span>
                                                <span className="text-center sm:text-start">Enable ATM Card Request Feature</span>
                                            </div>
                                            <label className="relative cursor-pointer ">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3699FF] mr-5"></div>
                                            </label>
                                        </div>
                                        <div className='flex flex-row items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3'>
                                            <div className='flex flex-col items-start mr-5'>
                                                <span className="text-start mb-1">Request Account Statement</span>
                                                <span className="text-start">Enable Request Account Statement Feature</span>
                                            </div>
                                            <label className="relative cursor-pointer ">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3699FF] mr-5"></div>
                                            </label>
                                        </div>
                                        <div className='flex flex-row items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3'>
                                            <div className='flex flex-col items-start mr-5'>
                                                <span className="text-start mb-1">Cardless Cash</span>
                                                <span className="text-start">Enable Cardless Cash Feature</span>
                                            </div>
                                            <label className="relative cursor-pointer ">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3699FF] mr-5"></div>
                                            </label>
                                        </div>
                                        <div className='flex flex-row items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3'>
                                            <div className='flex flex-col items-start mr-5'>
                                                <span className="text-start mb-1">ATM Pin Change</span>
                                                <span className="text-start">Enable ATM Pin Change Feature</span>
                                            </div>
                                            <label className="relative cursor-pointer ">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3699FF] mr-5"></div>
                                            </label>
                                        </div>
                                        <div className='flex flex-row items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3'>
                                            <div className='flex flex-col items-start mr-5'>
                                                <span className="text-start mb-1">New Product</span>
                                                <span className="text-start">Enable New Product Feature</span>
                                            </div>
                                            <label className="relative cursor-pointer ">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3699FF] mr-5"></div>
                                            </label>
                                        </div>
                                        <div className='flex flex-row items-center justify-between border-[1px] border-[#CACCCF] px-2 py-3'>
                                            <div className='flex flex-col items-start mr-5'>
                                                <span className="text-start mb-1">Early Pay-Day</span>
                                                <span className="text-start">Enable Early Pay-Day Feature</span>
                                            </div>
                                            <label className="relative cursor-pointer ">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3699FF] mr-5"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button className='self-end mt-4 bg-[#3F85D3] text-[#fff] px-3 py-1 rounded-lg' onClick={handleSave}>Save</button>
                            </div>
                        </section>
                    }
                </div>
            </div>
        </div >
    )
}

export default Settings