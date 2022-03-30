import Head from '@components/Head';
import Navbar from '@components/Navbar';
import React from 'react';
// import { wrapper } from "../../redux";
// import { getCookie } from 'redux/actions/authAction';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getFreezer } from 'redux/actions/managerAction';
function Freezer(props) {
// function Freezer(props) {
    let freezer = props.freezer;
    // console.log("freezer", freezer);
    return (
        <>
            <div className="sm:columns-6 mt-3">
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
                    <label className="form-label inline-block mb-2 text-gray-700">Start Date</label>
                    <input
                        value={freezer.start_date}
                        id='period'
                        type="text"
                        className="form-control block"
                        disabled />
                </div>
                <div className="w-full">
                    <label className="form-label inline-block mb-2 text-gray-700">End Date</label>
                    <input
                        value={freezer.end_date}
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

// export const getStaticProps = wrapper.getStaticProps((store) => () => {
//     store.dispatch(getFreezer(store.getState().authentication.token));
// })

// const mapDispatchToProps = (dispatch) => {
//     return {
//       getFreezer: bindActionCreators(getFreezer, dispatch),
//     }
//   }

//   export default connect(null, mapDispatchToProps)(Freezer);
export default Freezer;