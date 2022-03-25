import Head from '@components/Head';
import Navbar from '@components/Navbar';
import React from 'react';

export default function Freezer() {
    return (
        <table className="table-auto w-full md:w-1/2 table-bordered mt-3">
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
        </table>
    )
}