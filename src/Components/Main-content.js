import React from "react";
import Img1 from '../../src/Imgs/hunza.png'
import Img2 from '../Imgs/Malam jabba.png'

function MainContent() {
    return (
        <>
            <div class="flex pl-171 w-full pb-87">
                <div class="pt-137 w-1/2">
                    <div>
                        <p class="font-semibold text-ab italic">Get Ready For Your</p>
                        <h1 class="font-extrabold text-hover-a-clr text-[82px] ">Next Journey</h1>
                    </div>
                    <div class="flex flex-col gap-y-7">
                        <p class="w-480 text-cd">Let's find your dream destination here we will recommend you a beautiful
                            place and a
                            cheap trip with your beloved family
                        </p>
                        <button class="w-fit bg-signup-btn px-8 py-[18px] text-base text-white rounded-[10px]">Contact
                            Us</button>
                    </div>
                </div>
                <div class="pt-137 flex gap-8">
                    <div class="relative ">
                        <img src={Img1} alt="" />
                        <p class="rounded-bl-2xl rounded-tr-2xl text-2xl font-semibold px-10 py-4 absolute 
                    bottom-0 left-0 backdrop-blur-lg text-white">Hunza</p>
                    </div>
                    <div class="relative ">
                        <img src={Img2} alt="" />
                        <p class="rounded-br-2xl rounded-tl-2xl text-base font-semibold p-5 absolute 
                   bottom-9 -left-9 backdrop-blur-lg text-white -rotate-90">Malam jabba</p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default MainContent;