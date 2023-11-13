import React from "react";
import Img1 from '../../src/Imgs/arrow-down.svg'


function SearchBar() {
    return (
        <>
            <div className="px-171 w-full">
                <div class="bg-search-box p-2.5 rounded-[20px] mb-10 ">
                    <div class="bg-white p-4 rounded-xl flex flex-col gap-5">
                        <div class="bg-[#F6F6F6] border border-solid border-333 rounded-xl w-fit">
                            <button
                                class=" text-[#929595] text-base rounded-[10px] hover:bg-signup-btn hover:text-white px-6 py-2">SignUp
                            </button>
                            <button
                                class=" text-[#929595] text-base rounded-[10px] hover:bg-signup-btn hover:text-white px-6 py-2">Packages
                            </button>
                            <button
                                class=" text-[#929595] text-base rounded-[10px] hover:bg-signup-btn hover:text-white px-6 py-2">Hotel
                            </button>
                        </div>
                        <div>
                            <form class="flex items-center gap-4">
                                <div
                                    class="border border-solid border-333 rounded-[10px] w-full flex justify-between items-center p-5">
                                    <input class="text-sm rounded-lg border-none outline-none" type="text"
                                        placeholder="Where to go?" required />
                                    <img src={Img1} />
                                </div>
                                <button class="bg-signup-btn px-12 py-5 text-white text-base font-normal rounded-[10px]"
                                    type="submit">Serach</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchBar;