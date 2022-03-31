import React, { useEffect } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { setShareToStaff, shareToStaff, setShareToGroup, shareToGroup } from 'redux/actions/managerAction';
import { bindActionCreators } from 'redux';
function FormShare({ setShareToStaff, shareToStaff, setShareToGroup, shareToGroup, staff, receiver, groupName = "Group A", groupId, targetStaff, auth }) {
    const [sendToStaff, setSendToStaff] = React.useState({
        staffId: 0,
        carrotAmount: 0,
        note: "",
    });
    
    const [sendToGroup, setSendToGroup] = React.useState({
        groupId: 0,
        carrotAmount: 0,
        note: ""
    });

    useEffect(() => {
        setSendToGroup({...sendToGroup, groupId: groupId});
        // setSendToGroup({
        //     ...shareToGroup, sendToGroup
        // });
    }, []);

    useEffect(() => {
        setShareToStaff({
            ...shareToStaff, sendToStaff
        })
    }, [sendToStaff]);

    useEffect(() => {
        setShareToGroup({
            ...shareToGroup, sendToGroup
        });
    }, [sendToGroup]);
    
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
        // console.log(`Option selected:`, selectedOption.value);
        setSendToStaff({...sendToStaff, staffId: selectedOption.value});
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (receiver == 'staff') {
            setSendToStaff({ ...sendToStaff, [name]: value });
            // console.log("send to staff", sendToStaff);
        } else {
            setSendToGroup({ ...sendToGroup, [name]: value });
            // console.log("send to group", sendToGroup);
        }
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
        setShareToGroup: bindActionCreators(setShareToGroup, dispatch),
        shareToGroup: bindActionCreators(shareToGroup, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormShare);