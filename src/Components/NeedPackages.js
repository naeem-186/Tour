import React from 'react'
import img1 from '../Imgs/Rectangle 621.png'
import img2 from '../Imgs/arrow-down1.svg'

export const NeedPackages = () => {
  return (
    <>
    <div className="pt-120 px-171 grid grid-cols-2">
                    {/* <img  src="Imgs/Rectangle 621.png" alt=""> */}
                    <img className="h-[460px] w-[600px]" src={img1}/>
                    <div className="bg-03C0C1 rounded-r-2xl p-30">
                        <div className="flex flex-col gap-y-1.5">
                            <h1 className="text-white font-bold text-4xl">Need custom package?</h1>
                            <p className="text-white font-normal text-base">Our experts would will help you to create a
                                custom package just for you!</p>
                        </div>
                        <div className="flex flex-col gap-y-[31px] pt-6">
                            <div>
                                <div className="border border-white border-solid rounded-t-[10px]">
                                    <h1 className="text-white font-medium text-base p-1.5">Location</h1>
                                </div>
                                <div className="border border-white border-solid rounded-b-[10px] flex justify-between">
                                    <input className="w-full outline-none border-none text-FFF  rounded-[10px] bg-03C0C1 p-4"
                                        type="text" placeholder="Where do you want to go?"></input>                                   
                                    <img className="pr-4" src={img2}/>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-x-30 ">
                                <div>
                                    <h1
                                        className="text-white font-medium text-base p-1.5 border border-white border-solid rounded-t-[10px]">
                                        Date</h1>
                                    <div className="border border-white border-solid rounded-b-[10px] flex justify-between">
                                        <input className="w-full outline-none border-none text-FFF text-sm font-normal  rounded-[10px] bg-03C0C1 p-4"
                                            type="text" placeholder="Choose date"></input>
                                        <img className="pr-4" src={img2}/>
                                    </div>
                                </div>
                                <div>
                                    <h1
                                        className="text-white font-medium text-base p-1.5 border border-white border-solid rounded-t-[10px]">
                                        Adult's</h1>
                                    <div className="border border-white border-solid rounded-b-[10px] flex justify-between">
                                        <input className="w-full outline-none border-none text-FFF  rounded-[10px] text-sm font-normal bg-03C0C1 p-4"
                                            type="text" placeholder="Add guest" >

                                        </input>
                                            
                                        <img className="pr-4" src={img2}/>
                                    </div>
                                </div>
                                <div>
                                    <h1
                                        className="text-white font-medium text-base p-1.5 border border-white border-solid rounded-t-[10px]">
                                        Children's</h1>
                                    <div className="border border-white border-solid rounded-b-[10px] flex justify-between">
                                        <input className="w-full outline-none border-none text-white  rounded-[10px] bg-03C0C1 text-sm font-normal p-4"
                                            type="text" placeholder="Add Children's"></input>
                                        <img className="pr-4" src={img2}/>
                                    </div>
                                </div>

                            </div>
                            <div className="float-right">
                                <button className="w-fit text-signup-btn px-8 py-4 bg-white text-base font-semibold
                                 rounded-[10px] float-right">Sign
                                    Up
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
    </>
  )
}
