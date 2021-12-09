import React from "react";

const Display = (props) => {
    const { data } = props;
    console.log(data);

    return(
        <div>
            <h4> Data Display :</h4>
            {data.map(info => {
                return(
                    <div>
                        <p> Name : {info.name}</p>
                        <p> Email ID : {info.emailId}</p>
                        <p>Mobile Number : {info.mobileNumber}</p>
                        <p>Project Name : {info.projectName}</p>
                        <p>Task Description : {info.taskDescription}</p>
                        <p>Start Date : {info.startDate}</p>
                        <p>End Date : {info.endDate}</p>
                        <p>Task Status : {info.taskStatus}</p>
                    </div>
                )
            })}


        </div>
    )
}
export default Display;