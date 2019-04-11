// Author      : Nisarg Patel
// Date        : 11th April 2019
// Description : Listing of teacher's records
import React from "react";
import "./App.css";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Teachers extends React.Component {
  constructor(){
    super() 
      this.state = {
        teacherData: []
      }
    this.getTeacherList();
  }
  getTeacherList() {
    fetch(process.env.REACT_APP_API_URL + "/teachers", { method: 'GET', 
      headers: new Headers({
        'Authorization': "Z8RayolyD8jytCXay2BUE1bktbFAzgsk"
      })  })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({teacherData: result});
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }  
  viewTeacher = id => e => {
    this.props.history.push('/viewteacher/'+id)
  }
    // Function to remove value to favourite list
  delTeacher = id => e => {
    fetch(process.env.REACT_APP_API_URL + "/teachers/" + id, { method: 'DELETE', 
      headers: new Headers({
        'Authorization': "Z8RayolyD8jytCXay2BUE1bktbFAzgsk"
      })  })
      .then(res => res.json())
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
        }
      )
    window.location.reload();
  }

  render() {
    return (      
      <Paper className="MuiPaper-root-3 MuiPaper-elevation2-7 MuiPaper-rounded-4 SimpleTable-root-1">      
      <Typography variant="h4" gutterBottom>
          Teacher List
      </Typography>
      <a href="\" className="myLink">School List</a>
      <a href="addteachers" className="myLink">Add Teacher</a>
        <Table className="MuiTable-root-30 SimpleTable-table-2">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">School Name</TableCell>
              <TableCell align="right">School Code</TableCell>
              <TableCell align="right">View</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.teacherData.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.school.name}</TableCell>
                <TableCell align="right">{row.school.schoolCode}</TableCell>
                <TableCell align="right"><Button variant="outlined" color="primary" onClick={this.viewTeacher(row.id)}>View</Button></TableCell>
                <TableCell align="right"><Button variant="outlined" color="secondary" onClick={this.delTeacher(row.id)}>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Teachers;
