import React from 'react'
import img1 from '../Imgs/Rectangle 62.png'
import Img2 from '../Imgs/Rectangle 97.png'
import img3 from '../Imgs/arrow-right.png'

export const OurBlog = () => {
  return (
    <>
     <div class="pt-120 flex flex-col gap-30 px-171">
                    <h1 class="text-5xl font-bold">
                        Our Blog
                    </h1>
                    <div class="grid grid-cols-2  gap-30">
                        <img src={img1}/>
                        <div class="bg-white p-4 rounded-[20px] flex flex-col gap-11">
                            <div class="flex flex-col gap-1.5">
                                <h1 class="w-338 leading-normal text-028787 text-4xl font-bold">Beautiful Place
                                    visit to
                                    Pakistan</h1>
                                <p class="leading-normal text-base font-normal w-480">There are many variations of
                                    passages of Lorem Ipsum available, but the majority have
                                    suffered alteration There are many variations of passages of Lorem Ipsum
                                    available <span class="leading-normal text-base font-bold">.......See
                                        more</span>
                                </p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-normal text-base">Tom Harry</p>
                                <p class="font-normal text-base">06 Aug 2022</p>
                            </div>
                        </div>
                        <div class="bg-white p-4 rounded-[20px] flex flex-col gap-11">
                            <div class="flex flex-col gap-1.5">
                                <h1 class="w-96 leading-normal text-028787 text-4xl font-bold">
                                    Most Beautifull Lakes of Pakistan
                                </h1>
                                <p class="leading-normal text-base font-normal w-480">There are many variations of
                                    passages of Lorem Ipsum available, but the majority have
                                    suffered alteration There are many variations of passages of Lorem Ipsum
                                    available <span class="leading-normal text-base font-bold">.......See
                                        more</span>
                                </p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-normal text-base">Tom Harry</p>
                                <p class="font-normal text-base">06 Aug 2022</p>
                            </div>
                        </div>
                        <img src={Img2}/>
                    </div>
                    <button
                        class="bg-signup-btn py-3 flex items-center gap-2.5   justify-center text-white text-base font-medium rounded-[10px] ">See
                        More
                        
                        <img class="w-6 " src={img3}/>
                    </button>
                </div>
    </>
  )
}
