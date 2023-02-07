import React from 'react';

function HogDetails ({hog}) {
    const { specialty, greased, weight, "highest medal achieved": medal  } = hog

    return (
        <ul>
            <li>Specialty: {specialty}</li>
            <li>{greased? "Greased" : "Not Greased"}</li>
            <li>Weight: {weight}</li>
            <li>Highest medal achieved: {medal} </li>
        </ul>
    )
}

export default HogDetails;