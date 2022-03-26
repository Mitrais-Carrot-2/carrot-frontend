import Head from '@components/Head';
import Navbar from '@components/Navbar';
import React from 'react';

export default function FormShare(props) {
    return (
        <>
            <form className='px-3' method="post">
                <div class="form-group mb-6">
                    {props.receiver == 'staff' ?
                        <>
                            <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Staff</label>
                            <input
                                autoComplete='nope'
                                list='staffs'
                                type="text"
                                class="form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                                aria-describedby="emailHelp" placeholder="Select Staff" required />
                            <datalist id='staffs'>
                                <option>Audrey Hepburn</option>
                                <option>James</option>
                            </datalist>
                        </> :
                        <>
                            <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Group Name</label>
                            <input
                                value={props.groupName}
                                autoComplete='off'
                                type="text"
                                class="form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                                aria-describedby="emailHelp" placeholder="Group Name" required readOnly />
                        </>
                    }
                </div>
                <div class="form-group mb-6">
                    <label for="exampleInputPassword2" class="form-label inline-block mb-2 text-gray-700">Carrot Amount</label>
                    <input type="number" min='1' class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                        placeholder="Carrot Amount" required />
                </div>
                <div class="form-group mb-6">
                    <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Note</label>
                    <textarea
                        rows={3}
                        class="form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                        aria-describedby="emailHelp" placeholder="Note" required></textarea>
                </div>
            </form>
        </>
    );
}