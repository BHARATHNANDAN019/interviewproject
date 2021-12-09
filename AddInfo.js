import React, { Component } from 'react';


class AddInfo extends Component {
    state = {
        name: '',
        emailId: '',
        mobileNumber: '',
        projectName: '',
        taskDescription: '',
        startDate: '',
        endDate: '',
        taskStatus: '',
        error: {
            nameError: '',
            emailIdError: '',
            mobileNumberError: '',
            projectNameError: '',
            taskDescriptionError: '',
            startDateError: '',
            endDateError: '',
            taskStatusError: ''
        },
        formValid: ''
    }
    handleChange = (e) => {
        if (e.target.id === 'name') {
            this.validatename(e.target.value);
        }
        if (e.target.id === 'emailId') {
            this.validateemailId(e.target.value);
        }
        if (e.target.id === 'mobileNumber') {
            this.validatemobileNumber(e.target.value);
        }
        if (e.target.id === 'projectName') {
            this.validateprojectName(e.target.value);
        }
        if (e.target.id === 'taskDescription') {
            this.validatetaskDescription(e.target.value);
        }
        if (e.target.id === 'startDate') {
            this.validatestartDate(e.target.value);
        }
        if (e.target.id === 'endDate') {
            this.validateendDate(e.target.value);
        }
        if (e.target.id === 'taskStatus') {
            this.validatetaskStatus(e.target.value);
        }

    }
    validatename = (val) => {
        console.log(val);
        let nameError = this.state.error.nameError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        if (val.trim() === '') {
            nameError = '*Please enter name';
            formValid = false;
        }
        else {
            nameError = '';
            formValid = true;
        }
        this.setState({
            name: val,
            error: { ...error, nameError },
            formValid
        });
        return formValid;
    }
    validateemailId = (val) => {
        console.log(val);
        let emailIdError = this.state.error.emailIdError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        if (val.trim() === '') {
            emailIdError = '*Please enter email Id';
            formValid = false;
        }
        else {
            emailIdError = '';
            formValid = true;
        }
        this.setState({
            emailId: val,
            error: { ...error, emailIdError },
            formValid
        });
        return formValid;
    }
    validatemobileNumber = (val) => {
        console.log(val);
        let mobileNumberError = this.state.error.mobileNumberError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        if (val.trim() === '') {
            mobileNumberError = '*Please enter mobile number';
            formValid = false;
        }
        else {
            mobileNumberError = '';
            formValid = true;
        }
        this.setState({
            mobileNumber: val,
            error: { ...error, mobileNumberError },
            formValid
        });
        return formValid;
    }
    validateprojectName = (val) => {
        console.log(val);
        let projectNameError = this.state.error.projectNameError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        if (val.trim() === '') {
            projectNameError = '*Please enter project name';
            formValid = false;
        }
        else {
            projectNameError = '';
            formValid = true;
        }
        this.setState({
            projectName: val,
            error: { ...error, projectNameError },
            formValid
        });
        return formValid;
    }
    validatetaskDescription = (val) => {
        console.log(val);
        let taskDescriptionError = this.state.error.taskDescriptionError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        if (val.trim() === '') {
            taskDescriptionError = '*Please enter task description';
            formValid = false;
        }
        else {
            taskDescriptionError = '';
            formValid = true;
        }
        this.setState({
            taskDescription: val,
            error: { ...error, taskDescriptionError },
            formValid
        });
        return formValid;
    }
    validatestartDate = (val) => {
        console.log(val);
        let startDateError = this.state.error.startDateError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        if (val.trim() === '') {
            startDateError = '*Please enter start Date';
            formValid = false;
        }
        else {
            startDateError = '';
            formValid = true;
        }
        this.setState({
            startDate: val,
            error: { ...error, startDateError },
            formValid
        });
        return formValid;
    }
    validateendDate = (val) => {
        console.log(val);
        let endDateError = this.state.error.endDateError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        if (val.trim() === '') {
            endDateError = '*Please enter end date';
            formValid = false;
        }
        else {
            endDateError = '';
            formValid = true;
        }
        this.setState({
            endDate: val,
            error: { ...error, endDateError },
            formValid
        });
        return formValid;
    }
    validatetaskStatus = (val) => {
        console.log(val);
        let taskStatusError = this.state.error.taskStatusError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        if (val.trim() === '') {
            taskStatusError = '*Please enter task status';
            formValid = false;
        }
        else {
            taskStatusError = '';
            formValid = true;
        }
        this.setState({
            taskStatus: val,
            error: { ...error, taskStatusError },
            formValid
        });
        return formValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.formValid === true && this.validatename(this.state.name) && this.validateemailId(this.state.emailId) &&
            this.validatemobileNumber(this.state.mobileNumber) && this.validateprojectName(this.state.projectName) && this.validatetaskDescription(this.state.taskDescription)
            && this.validatestartDate(this.state.startDate) && this.validateendDate(this.state.endDate) 
            //  && this.validatetaskStatus(this.state.taskStatus)
            ) {
            this.props.addInfo(this.state);
            this.setState({
                name: '',
                emailId: '',
                mobileNumber: '',
                projectName: '',
                taskDescription: '',
                startDate: '',
                endDate: '',
                //  taskStatus: '',
                errorSubmit: ''
            })
        } else {
            let errorSubmit = this.state.errorSubmit;
            errorSubmit = 'Enter All details';
            this.setState({
                errorSubmit
            })
    }

}
render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name :</label>
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.name}  required name ="0-15" placeholder="Enter name"/>
                    <p>{this.state.error.nameError}</p>
                </div>
                <div>
                    <label> Email ID :</label>
                    <input type="text" id="emailId" onChange={this.handleChange} value={this.state.emailId}required placeholder="Enter Valid email id"/>
                    <p> {this.state.error.emailIdError}</p>
                </div>
                <div>
                    <label> Mobile Number :</label>
                    <input type="text" id="mobileNumber" onChange={this.handleChange} value={this.state.mobileNumber}  required name="0-9" placeholder="Enter mobile number"/>
                    <p >{this.state.error.mobileNumberError}</p>
                </div>
                <div>
                    <label> Project Name :</label>
                    <input type="text" id="projectName" onChange={this.handleChange} value={this.state.projectName} required placeholder="Enter project name" />
                    <p>{this.state.error.projectNameError}</p>
                </div>
                <div>
                    <label> Task Description :</label>
                    <input type="text" id="taskDescription" onChange={this.handleChange} value={this.state.taskDescription} required placeholder="Enter task description" />
                    <p>{this.state.error.taskDescriptionError}</p>
                </div>
                <div>
                    <label>Start Date :</label>
                    <input type="date" id="startDate" onChange={this.handleChange} value={this.state.startDate} required placeholder="Enter start date" />
                    <p>{this.state.error.startDateError}</p>
                </div>
                <div>
                    <label> End Date :</label>
                    <input type="date" id="endDate" onChange={this.handleChange} value={this.state.endDate} required placeholder="Enter end date" />
                    <p>{this.state.error.endDateError}</p>
                </div>
            {/* <div>
                    <label>Task Status : </label>
                    <input type="radio" id="Planned" value={this.state.taskStatus}/> 
                    <label>Planned</label>
                    <input type="radio" id="In-Progress" value={this.state.taskStatus} /> 
                    <label>In-Progress </label>
                    <input type="radio" id="Done"  value={this.state.taskStatus}/> 
                    <label> Done</label> 
                    </div><br/> */}

            
                <button value="submit">Save</button> 
                <button value="reset" type="delete">Reset</button>
            </form>

        </div>
    )
}
}
export default AddInfo;