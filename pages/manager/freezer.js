import Head from '@components/Head';
import Navbar from '@components/Navbar';
import React from 'react';

export default function Freezer({freezer}) {
    // console.log(freezer);
    return (
        <>
            <div className="sm:columns-5 mt-3">
                <div className="w-full">
                    <label className="form-label inline-block mb-2 text-gray-700">Barn Name</label>
                    <input
                        value={freezer.barn_name}
                        id='barn-name'
                        type="text"
                        className="form-control block"
                        disabled />
                </div>
                <div className="w-full">
                    <label className="form-label inline-block mb-2 text-gray-700">Period</label>
                    <input
                        value={freezer.barn_period}
                        id='period'
                        type="text"
                        className="form-control block"
                        disabled />
                </div>
                <div className="w-full">
                    <label className="form-label inline-block mb-2 text-gray-700">Barn Owner</label>
                    <input
                        value={freezer.barn_owner}
                        id='barn-owner'
                        type="text"
                        className="form-control block"
                        disabled />
                </div>
                <div className="w-full">
                    <label className="form-label inline-block mb-2 text-gray-700">Carrot Given</label>
                    <input
                        value={freezer.distributed_carrot}
                        id='carrot-given'
                        type="number"
                        className="form-control block"
                        disabled />
                </div>
                <div className="w-full">
                    <label className="form-label inline-block mb-2 text-gray-700">Carrot Left</label>
                    <input
                        value={freezer.carrot_amount}
                        id='carrot-left'
                        type="number"
                        className="form-control block"
                        disabled />
                </div>
            </div>
        </>
    )
}