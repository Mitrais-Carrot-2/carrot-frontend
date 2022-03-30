import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function History(props) {
    const [name, setName] = useState("")
    useEffect(() => {
        axios
        .get("http://localhost:8181/api/user/" + props.item.receiverId)
          .then((res) => {
            setName(res.data.username)
          }
          )
        }, [])

    return (
        <tr key={props.index}>
          <td>{props.index + 1}</td>
          <td>{name}</td>
          <td>{props.item.carrotAmount}</td>
          <td>{props.item.shareAt}</td>
          <td>{props.item.note}</td>
        </tr>
      );
}
