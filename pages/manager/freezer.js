import Head from '@components/Head';
import Navbar from '@components/Navbar';
import React from 'react';
import { getFreezer } from 'redux/actions/managerAction';
import { bindActionCreators } from 'redux';
function Freezer(props) {
    const { freezer } = props;

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
                        readOnly />
                </div>
                <div className="w-full">
                    <label className="form-label inline-block mb-2 text-gray-700">Start Date</label>
                    <input
                        value={freezer.start_date}
                        id='period'
                        type="text"
                        className="form-control block"
                        readOnly />
                </div>
                <div className="w-full">
                    <label className="form-label inline-block mb-2 text-gray-700">End Date</label>
                    <input
                        value={freezer.end_date}
                        id='period'
                        type="text"
                        className="form-control block"
                        readOnly />
                </div>
                <div className="w-full">
                    <label className="form-label inline-block mb-2 text-gray-700">Barn Owner</label>
                    <input
                        value={freezer.barn_owner}
                        id='barn-owner'
                        type="text"
                        className="form-control block"
                        readOnly />
                </div>
                <div className="w-full">
                    <label className="form-label inline-block mb-2 text-gray-700">Carrot Given</label>
                    <input
                        value={freezer.distributed_carrot}
                        id='carrot-given'
                        type="number"
                        className="form-control block"
                        readOnly />
                </div>
                <div className="w-full">
                    <label className="form-label inline-block mb-2 text-gray-700">Carrot Left</label>
                    <input
                        value={freezer.carrot_amount? freezer.carrot_amount : "null"}
                        id='carrot-left'
                        type="number"
                        className="form-control block"
                        readOnly />
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    freezer: state.manager.freezer,
    auth: state.authentication,
    state: state
})

const mapDispatchToProps = (dispatch) => {
    return {
        getFreezer: bindActionCreators(getFreezer, dispatch),
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Freezer);
export default Freezer;