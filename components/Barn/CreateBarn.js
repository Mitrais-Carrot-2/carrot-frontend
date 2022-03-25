import React from "react";
import BarnReward from "./BarnReward";
import { AiOutlineClose } from "react-icons/ai";

export default function CreateBarn(props) {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl h-5/6">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none  px-10 ">
          {/*header*/}
          <div className="flex items-start justify-between py-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">Create Barn</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => props.closeClick(false)}
            >
              <AiOutlineClose color="black" size={20}/>
            </button>
          </div>
          {/*body*/}
          <div>
            <form>
              <h2>Barn Details:</h2>
              <div className="barn-details">
                <label>Barn Name:</label>
                <input type="text" name="barnName" />
                <label>Start Periode:</label>
                <input type="date" name="startPeriode" />
                <label>End Periode:</label>
                <input type="date" name="endPeriode" />
                <label>Carrot Amount</label>
                <input type="number" name="carrotAmount" />
              </div>

              <h2>Barn Settings:</h2>
              <BarnReward />

              
            </form>
          </div>
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
              onClick={() => setShowModal(false)}
            >
              Create Barn
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .barn-details {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-wrap: column wrap;
          justify-content: center;
        }
        .barn-details input {
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}
