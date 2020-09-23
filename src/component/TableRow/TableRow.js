import React from "react";

function TableRow(props){
    return(
        <tr>
                <td><img src={props.profPic}/></td>
                <td>{props.firstName} {props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
                <td>{props.cell}</td>
        </tr>
    )
}

export default TableRow;