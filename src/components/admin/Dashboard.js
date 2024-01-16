import React from "react";
import "./Dashboard.css";

function Dashboard() {

    function performQueries(conn, callback) {
        const queryString = 'SELECT * FROM your_table';

        conn.query(queryString, (queryErr, results) => {
            if (queryErr) {
                console.error('Error executing query:', queryErr.stack);
                return;
            }

            callback(results);
        });
    }



    const data = [];

    connectToDatabase((conn) => {
        performQueries(conn, (results) => {
            // Now you can use the fetched results
            data.push(...results);

            console.log('Fetched data from the database: ');
            console.log(data);
        });
    });

    return (
        <table className="dashboard-table">
            <thead>
                <tr>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Room Type</th>
                    <th>Amount of Rooms</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                        <td>{item.startDate}</td>
                        <td>{item.endDate}</td>
                        <td>{item.roomType}</td>
                        <td>{item.numOfRooms}</td>
                        <td>${item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

//const dbObjects = IT WILL BE IMPORTED FROM THE DATABASE

export default Dashboard;