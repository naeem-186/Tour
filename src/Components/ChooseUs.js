import React from "react";
import img1 from '../Imgs/medal-star.png';
import img2 from '../Imgs/music-play.png'
import img3 from '../Imgs/global.png'
import img4 from '../Imgs/Rectangle 19.png'
import img5 from '../Imgs/Rectangle 15.png'
import img6 from '../Imgs/Rectangle 80.png'


function ChooseUs() {
    return (
        <div className="flex flex-col gap-30 px-171 pt-[130px]">
            <h1 className="text-5xl font-bold">
                Why Choose US
            </h1>
            <div className="w-full flex gap-30">
                <div className="w-full bg-white rounded-2xl p-4 flex flex-col gap-30">
                    <div>
                        
                        <img src={img1}/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-2xl font-bold">Tried and Tursted</h1>
                        <p className="text-base font-normal text-[#929595]">Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>
                <div className="w-full bg-white rounded-2xl p-4 flex flex-col gap-30">
                    <div>
                        
                        <img src={img2}/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-2xl font-bold">Reliable Support</h1>
                        <p className="text-base font-normal text-[#929595]">Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>
                <div className="w-full bg-white rounded-2xl p-4 flex flex-col gap-30">
                    <div>
                        
                        <img src={img3}/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-2xl font-bold">One-stop travel partner</h1>
                        <p className="text-base font-normal text-[#929595]">Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>
            </div>
            <div class="w-full flex gap-16 ">
                        <div class="w-1/2 flex flex-col gap-y-10 pt-56 ">
                            <div class="flex flex-col gap-4">
                                <h1 class="font-bold text-ef">We Recommend Beautiful Destinations Every Month</h1>
                                <p class="text-base font-normal">
                                    let's choose your dream destination here we provide
                                    many destinations and we offer
                                    the best destinations every week.
                                </p>
                            </div>
                            <div class="flex justify-between">
                                <div class="flex flex-col gap-4">
                                    <h1 class="text-4xl font-semibold">2000+</h1>
                                    <p class="text-base font-normal">Our Explorers</p>
                                </div>
                                <div class="flex flex-col gap-4">
                                    <h1 class="text-4xl font-semibold">2000+</h1>
                                    <p class="text-base font-normal">Our Explorers</p>
                                </div>
                                <div class="flex flex-col gap-4">
                                    <h1 class="text-4xl font-semibold">2000+</h1>
                                    <p class="text-base font-normal">Our Explorers</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2 flex flex-col items-center gap-y-30 pt-120">
                            <div class="flex gap-30 items-center">
                                <div><img src={img4}/></div>
                                <div><div><img src={img5}/></div></div>
                            </div>
                            <div><div><img src={img6}/></div></div>
                        </div>
                    </div>
        </div>
        
    )
}
export default ChooseUs;