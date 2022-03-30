import React, { useEffect } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { setShareToStaff, shareToStaff } from 'redux/actions/managerAction';
import { bindActionCreators } from 'redux';
function FormShare({ setShareToStaff, shareToStaff, staff, receiver, groupName = "Group A", targetStaff, auth }) {
    const [sendToStaff, setSendToStaff] = React.useState({
        staffId: "",
        carrotAmount: 0,
        note: "",
    });

    useEffect(() => {
        setShareToStaff({
            ...shareToStaff, sendToStaff
        })
        // console.log(sendToStaff);
    }, [sendToStaff]);
    
    let options = [];

    if (receiver == 'staff') {
        options = staff.map(s => {
            return {
                value: s.userId,
                label: `${s.firstName} ${s.lastName} (${s.jobFamily}-${s.jobGrade}, ${s.office})`
            }
        });
    }

    let staffChange = (selectedOption) => {
        console.log(`Option selected:`, selectedOption.value);
        
        setSendToStaff({...sendToStaff, staffId: selectedOption.value});
        // setShareToStaff({
        //     ...shareToStaff, sendToStaff
        // });
        // console.log(SendToStaff);
        // console.log(targetStaff);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSendToStaff({ ...sendToStaff, [name]: value });
        // setShareToStaff({
        //     ...shareToStaff, sendToStaff
        // });
        // console.log(SendToStaff);
        // console.log(targetStaff);
    };

    return (
        <>
            <form className='px-3' method="post">
                <div className="form-group mb-6">
                    {receiver == 'staff' ?
                        <>
                            <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Staff</label>
                            <Select
                                id='staff-id'
                                name="staff-id"
                                options={options}
                                onChange={staffChange}
                            />
                        </> :
                        <>
                            <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Group Name</label>
                            <input
                                name='groupName'
                                value={groupName}
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
                    <input
                        name='carrotAmount'
                        onChange={handleChange}
                        type="number" 
                        min='1' 
                        className="form-control block
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
                        placeholder={receiver == 'staff' ? "Carrot Amount" : "Carrot Amount per Staff"} required />
                </div>
                <div className="form-group mb-6">
                    <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Note</label>
                    <textarea
                        name='note'
                        onChange={handleChange}
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

const mapStateToProps = (state) => ({
    targetStaff: state.manager,
    auth: state.authentication,
})

const mapDispatchToProps = (dispatch) => {
    return {
        setShareToStaff: bindActionCreators(setShareToStaff, dispatch),
        shareToStaff: bindActionCreators(shareToStaff, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormShare);