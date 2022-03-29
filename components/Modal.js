import React from "react";
// import { FaCalendar } from 'react-icons/fa'
import { AiOutlineClose } from "react-icons/ai";

export default function Modal(props) {
  return (
    <>
      <div className="z-50 left-0 top-0 fixed w-screen h-screen opacity-50 bg-black"></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-5/6 my-6 mx-auto max-w-3xl h-5/6">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none  px-10 ">
            {/*header*/}
            <div className="flex items-start justify-between pt-5 pb-4 mb-2 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">{props.title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.closeClick(false)}
              >
                <AiOutlineClose color="black" size={20} />
              </button>
            </div>
            {/*body*/}
            <div>{props.body}</div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => props.closeClick(false)}
              >
                Close
              </button>
              <button
                className="bg-[#ccc] text-black active:bg-[#aaa] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-[#aaa] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => props.actionClick()}
              >
                {props.action}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
