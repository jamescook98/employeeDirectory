import React from 'react';
import TableRow from "./TableRow/TableRow.js"
import '../component/Table.css';
import randoms from "../util/randoms.json";


console.log("this does not show up");

function Table(props) {
    return (
        // <table id="customers">

        //     <TableRow
        //         profPic={randoms.results[0].picture.thumbnail}
        //         firstName={randoms.results[0].name.first}
        //         lastName={randoms.results[0].name.last}
        //         email={randoms.results[0].email}
        //         phone={randoms.results[0].phone}
        //         cell={randoms.results[0].cell} />
        //     <TableRow
        //         profPic={randoms.results[1].picture.thumbnail}
        //         firstName={randoms.results[1].name.first}
        //         lastName={randoms.results[1].name.last}
        //         email={randoms.results[1].email}
        //         phone={randoms.results[1].phone}
        //         cell={randoms.results[1].cell} />
        //     <TableRow
        //         profPic={randoms.results[2].picture.thumbnail}
        //         firstName={randoms.results[2].name.first}
        //         lastName={randoms.results[2].name.last}
        //         email={randoms.results[2].email}
        //         phone={randoms.results[2].phone}
        //         cell={randoms.results[2].cell} />
        //     <TableRow
        //         profPic={randoms.results[3].picture.thumbnail}
        //         firstName={randoms.results[3].name.first}
        //         lastName={randoms.results[3].name.last}
        //         email={randoms.results[3].email}
        //         phone={randoms.results[3].phone}
        //         cell={randoms.results[3].cell} />
        // </table>
        // <ul>
        //     {props.users.map((user,i)=>{
        //         return(
        //             <li key={i}>{user.gender}</li>
        //         )
        //     })}
        // </ul>
        <table id="customers">
            <tr>
                <th>Visage</th>
                <th>Name</th>
                <th>Email</th>
                <th>Work</th>
                <th>Cell</th>
            </tr>
            {props.users.map((user, i) => {
                return (
                    <TableRow
                        key={i}
                        profPic={user.picture.thumbnail}
                        firstName={user.name.first}
                        lastName={user.name.last}
                        email={user.email}
                        phone={user.phone}
                        cell={user.cell} />
                )
            })}
        </table>
    )
}

export default Table;