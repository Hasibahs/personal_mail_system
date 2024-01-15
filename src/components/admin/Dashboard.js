import React from "react";
import "./Dashboard.css";

function Dashboard() {

    function performQueries(conn) {
        const queryString = 'SELECT * FROM your_table';

        conn.query(queryString, (queryErr, results) => {
            if (queryErr) {
                console.error('Error executing query:', queryErr.stack);
                return;
            }

            console.log('Results of the query: ');
            console.log(results);
        });
    }


    const data = [
        { startDate: '2023-01-01', endDate: '2023-01-05', roomType: 'Single', numOfRooms: 2, price: 100 },
        { startDate: '2023-02-10', endDate: '2023-02-15', roomType: 'Double', numOfRooms: 1, price: 150 },
    ];

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