/* eslint-disable @next/next/no-sync-scripts */

export default function ManagerRewardModal() {
  return (
    <div
      className="modal opacity-0"
      id="managerReward"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add New Manager Reward
            </h5>
            <button
              type="button"
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-4">
                <label htmlFor="text">Type Name</label>
                <input
                  id="text"
                  name="text"
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded here"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="text1">Carrot</label>
                <input
                  id="text1"
                  name="text1"
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded here"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline font-normal text-blue-700 bg-transparent"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot radius-5"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
