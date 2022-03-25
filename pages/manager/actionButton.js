import React from "react";

export default function ActionButton({id}){
    React.useEffect(() => {
        // console.log(props.id);
    }, []);

    const modalListStaff = (id) => {
        console.log('list '+id);
    }
    
    function shareToGroup(id){
        console.log('share '+id);
    }
    return (
        <>
            <button type="button" className="btn border-blue-600 mr-2" onClick={() => {
                modalListStaff(id)
            }}><i className="fa fa-users text-blue-600 fa-x"></i></button>
            <button type="button" className="btn border-green-600 mr-3" onClick={() => {
                shareToGroup(id)
            }}><i className="fa fa-send text-green-600 fa-x"></i></button>
        </>
    );
}
