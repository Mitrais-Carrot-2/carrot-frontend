import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { basePath } from "next.config";

export default function History(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(moment(props.item.shareAt).format("DD/MM/YYYY HH:mm"));
    setName(
      props.managerName
    );
  }, []);

  return (
    <tr key={props.index}>
      <td className="text-center">{props.index + 1}</td>
      <td>{name}</td>
      <td className="text-center">{props.item.carrotAmount}</td>
      <td className="text-center">{date}</td>
      <td>{props.item.note}</td>
    </tr>
  );
}
