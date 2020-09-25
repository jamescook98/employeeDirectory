import React, {useState, useRef, useEffect} from 'react';
import TableRow from "./TableRow/TableRow.js"
import '../component/Table.css';
import axios from "axios";

function Table() {
    const inputRef = useRef();
    const [users, setUsers] = useState([]);
    const [ascend, setAscend] = useState(0);
    const [input, setInput] = useState("");
    const queryURL = "https://randomuser.me/api/?results=20";
  
    useEffect(() => {
      axios.get(queryURL)
        .then(res => {
          setUsers(res.data.results);
        });
    }, [])



    function sortByName() {
        let sortedUsers = [];
        if (ascend % 2 == 0){
            sortedUsers = users.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1); 
        } else {
            sortedUsers = users.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1);
        }
        setAscend(ascend + 1); 
        setUsers(sortedUsers);
    }


    return (
        <div>
            <div id="search">
             <input
          ref={inputRef}
          placeholder="Search by name"
          onChange={() => setInput(inputRef.current.value)}
        />
             </div><br></br>
        <table id="customers">
            <tr>
                <th>Visage</th>
                <th onClick={sortByName}>Name</th>
                <th onClick={sortByName}>Email</th>
                <th>Work</th>
                <th>Cell</th>
            </tr>
            {users.filter(user => !input || user.name.first.toLowerCase().includes(input) || user.name.last.toLowerCase().includes(input)).map((user, i) => {
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
        </div>
    )
}

export default Table;