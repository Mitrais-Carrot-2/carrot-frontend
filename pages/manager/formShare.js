import React from 'react';
import Select from 'react-select';

export default function FormShare(props) {
    const [staffId, setStaffId] = React.useState([]);

    let options = [];

    if(props.receiver == 'staff') {
        // console.log('staff', props.staff);
        options = props.staff.map(staff => {
            return {
                value: staff.userId,
                label: `${staff.firstName} ${staff.lastName} (${staff.jobFamily}-${staff.jobGrade}, ${staff.office})`
            }
        });
    }

    let staffChange = (selectedOption) => {
        // setStaffId(selectedOption.value);
        console.log(`Option selected:`, selectedOption.value);
    }

    return (
        <>
            <form className='px-3' method="post">
                <div className="form-group mb-6">
                    {props.receiver == 'staff' ?
                        <>
                            <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Staff</label>
                            <Select
                                id='staff-id'
                                name="staff-id"
                                // value={1}
                                options={options}
                                onChange={staffChange}
                            />  
                        </> :
                        <>
                            <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Group Name</label>
                            <input
                                value={props.groupName}
                                autoComplete='off'
                                type="text"
                                className="form-control
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
                <div className="form-group mb-6">
                    <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Carrot Amount</label>
                    <input type="number" min='1' className="form-control block
        w-full
        px-3
        py-3
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
                        placeholder={props.receiver == 'staff'? "Carrot Amount" : "Carrot Amount per Staff"}  required />
                </div>
                <div className="form-group mb-6">
                    <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Note</label>
                    <textarea
                        rows={3}
                        className="form-control
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