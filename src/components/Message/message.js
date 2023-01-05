import React from "react";
import "./message.css"

const Message = (props) => {
    return (
        <p className="message">{props.content}</p>
    )
}

export default Message