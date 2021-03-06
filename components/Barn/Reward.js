import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";


export default function Reward(props) {
  const [isEdited, setIsEdited] = useState(false);
  const [editedValue, setEditedValue] = useState({});

  let options = [];
  options = props.rewardsList.map((s) => {
    return {
      value: s,
      label: s,
    };
  });

  useEffect(() => {
    setEditedValue(props.reward);
  }, [props.reward]);

  return (
    <>
      <td>{props.index + 1}</td>
      <td>
        <input
          value={editedValue.rewardDescription}
          onChange={(item) =>
            setEditedValue({
              ...editedValue,
              rewardDescription: item.target.value,
            })
          }
          name={"input" + props.index}
          className="non-active"
          disabled={true}
          style={{ textAlign: "center" }}
        />
      </td>
      <td>
        <input
          value={editedValue.carrotAmount}
          onChange={(item) =>
            setEditedValue({
              ...editedValue,
              carrotAmount: item.target.value,
            })
          }
          name={"input" + props.index}
          className="non-active"
          disabled={true}
          style={{
            width: "100px",
            textAlign: "center",
          }}
        />
      </td>
      <td>
        <input
          value={editedValue.givingConditional}
          onChange={(item) =>
            setEditedValue({
              ...editedValue,
              givingConditional: item.target.value,
            })
          }
          name={"input" + props.index}
          className="non-active"
          disabled={true}
          style={{ textAlign: "center" }}
        />
      </td>
      <td className="py-2">
        <Button
          name={"edit" + props.index}
          onClick={() => {
            setIsEdited ? props.editReward(editedValue) : null;
            document
              .querySelectorAll(`input[name="input${props.index}"]`)
              .forEach((input) => {
                input.disabled = !input.disabled;
                input.classList.toggle("active");
                setIsEdited(!isEdited);
                isEdited
                  ? (document.querySelector(
                      `button[name="edit${props.index}"]`
                    ).innerHTML = "Edit")
                  : (document.querySelector(
                      `Button[name="edit${props.index}"]`
                    ).innerHTML = "Save");
              });
          }}
          className="btn border-none bg-[#4bbc7e] hover:bg-[#33a968] text-white font-bold p-1 my-1 rounded "
        >
          Edit
        </Button>

        <span> </span>
        <p
          onClick={() => {
            props.deleteReward(props.reward.id);
          }}
          className="btn bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded "
        >
          Delete
        </p>
      </td>
      <style jsx>{`
        .active {
          margin-bottom: 10px;
          border: 4px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          height: 30px;
        }
        .non-active {
          text-align: center;
        }
        td {
          padding: 0.5rem;
          text-align: center;
        }
      `}</style>
    </>
  );
}
