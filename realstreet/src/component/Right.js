// Right.js
import React from "react";

const RightSidebar = ({ step, totalSteps }) => {
    return (
        <div style={{ border: "2px solid grey", padding: "20px", width: "250px" }}>
            <h3>Progress</h3>
            <p>Current Step: {step}</p>
            <p>Total Steps: {totalSteps}</p>
        </div>
    );
};

export default RightSidebar; // Make sure this is a default export
