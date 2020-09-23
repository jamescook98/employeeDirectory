import React, {useState} from 'react';
import TableRow from "./TableRow/TableRow.js"
import '../component/Table.css';

function Table(props) {
    const [users, setUsers] = useState([]);
    function sortByName() {
        let sortedUsers = props.users.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
        setUsers(sortedUsers);
    }

    return (
        <table id="customers">
            <tr>
                <th>Visage</th>
                <th onClick={sortByName}>Name</th>
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