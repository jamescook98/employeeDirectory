import React, {useState, useRef} from 'react';
import TableRow from "./TableRow/TableRow.js"
import '../component/Table.css';

function Table(props) {
    const inputRef = useRef();
    const [users, setUsers] = useState([]);

    function filterByInput(){
        let filteredUsers = props.users.filter(a => a.name.first.includes(inputRef.current.value));
        console.log(filteredUsers);
        setUsers(filteredUsers);
    }

    var ascendDescend = 0;
    function sortByName() {
        let sortedUsers = [];
        if (ascendDescend % 2 == 0){
            sortedUsers = props.users.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1); 
            ascendDescend++; 
            console.log("should be odd now"+ascendDescend);
            
        } else {
            sortedUsers = props.users.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1);
            ascendDescend++;
            console.log(ascendDescend);
        }
        setUsers(sortedUsers);
    }


    return (
        <table id="customers">
             <input
          ref={inputRef}
          placeholder="Search by name"
          onChange={filterByInput}
        />
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