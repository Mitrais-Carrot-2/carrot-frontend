import Modal from "@components/Modal";
import React from "react";

export default function Barn(props) {
  function test() {
    return <h1>Halooo!!</h1>;
  }
  function action() {
    console.log("button clicked");
  }
  return (
    <div>
      Barn
      <Modal
        title={test}
        body="Test"
        closeClick={props.closeClick}
        actionClick={action}
      />
    </div>
  );
}
