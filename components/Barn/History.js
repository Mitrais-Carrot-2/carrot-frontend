import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'


export default function History(props) {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    useEffect(() => {
        axios
        .get(basePath+"user/" + props.item.receiverId)
          .then((res) => {
            setName(res.data.username)
          }
          )
        setDate(moment(props.item.shareAt).format("DD/MM/YYYY HH:mm"))
        }, [])

    return (
        <tr key={props.index}>
          <td
            className="text-center"
          >{props.index + 1}</td>
          <td>{name}</td>
          <td
            className="text-center"
          >{props.item.carrotAmount}</td>
          <td
            className="text-center"
          >{date}</td>
          <td>{props.item.note}</td>
        </tr>
      );
}
