import Head from '@components/Head';
import Navbar from '@components/Navbar';
import React from 'react';

export default function Freezer() {
    return (
        <>
            <div class="sm:columns-5 mt-3">
                <div class="w-full">
                    <label class="form-label inline-block mb-2 text-gray-700">Barn Name</label>
                    <input
                        id='barn-name'
                        type="text"
                        class="form-control block"
                        disabled />
                </div>
                <div class="w-full">
                    <label class="form-label inline-block mb-2 text-gray-700">Period</label>
                    <input
                        id='period'
                        type="text"
                        class="form-control block"
                        disabled />
                </div>
                <div class="w-full">
                    <label class="form-label inline-block mb-2 text-gray-700">Barn Owner</label>
                    <input
                        id='barn-owner'
                        type="text"
                        class="form-control block"
                        disabled />
                </div>
                <div class="w-full">
                    <label class="form-label inline-block mb-2 text-gray-700">Carrot Given</label>
                    <input
                        id='carrot-given'
                        type="number"
                        class="form-control block"
                        disabled />
                </div>
                <div class="w-full">
                    <label class="form-label inline-block mb-2 text-gray-700">Carrot Left</label>
                    <input
                        id='carrot-left'
                        type="number"
                        class="form-control block"
                        disabled />
                </div>
            </div>
            {/* <table className="table-auto w-full md:w-1/2 table-bordered mt-3">
                <tbody>
                    <tr>
                        <th className="px-4 py-2">Barn Name</th>
                        <td style={{ textAlign: "right" }}>Barn Name</td>
                    </tr>
                    <tr>
                        <th className="px-4 py-2">Total Carrot</th>
                        <td style={{ textAlign: "right" }}>0</td>
                    </tr>
                    <tr>
                        <th className="px-4 py-2">Rewarded Carrot</th>
                        <td style={{ textAlign: "right" }}>0</td>
                    </tr>
                    <tr>
                        <th className="px-4 py-2">My Basket</th>
                        <td style={{ textAlign: "right" }}>0</td>
                    </tr>
                </tbody>
            </table> */}
        </>
    )
}