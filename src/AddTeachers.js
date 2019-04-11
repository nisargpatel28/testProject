// Author      : Nisarg Patel
// Date        : 11th April 2019
// Description : Add teacher's records
import React from "react";
import "./App.css";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class AddTeachers extends React.Component {
  constructor(props){
    super(props) 
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    fetch(process.env.REACT_APP_API_URL + "/teachers", {
      method: 'POST',
      headers: {
        'Authorization': 'Z8RayolyD8jytCXay2BUE1bktbFAzgsk',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        schoolCode: this.schoolCode.value
      })
    }).then(res => res.json())
      .then(
        (result) => {
          this.props.history.push('/teachers')
        },
        (error) => {
          
        }
      )
    e.preventDefault();
  }

  render() {
    return (      
      <Paper className="MuiPaper-root-3 MuiPaper-elevation2-7 MuiPaper-rounded-4 SimpleTable-root-1">
      <Typography variant="h4" gutterBottom>
          Add Teacher
      </Typography>
      <a href="\" className="myLink">School List</a>
      <a href="teachers" className="myLink">Teacher List</a>
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" ref={(firstName) => this.firstName = firstName} /><br/>
          Last Name:
          <input type="text" ref={(lastName) => this.lastName = lastName} /><br/>
          School Code:
          <input type="text" ref={(schoolCode) => this.schoolCode = schoolCode} /><br/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
      </Paper>
    );
  }
}

export default AddTeachers;