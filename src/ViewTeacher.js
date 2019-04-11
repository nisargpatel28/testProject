// Author      : Nisarg Patel
// Date        : 11th April 2019
// Description : View teacher's records
import React from "react";
import "./App.css";
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ViewTeacher extends React.Component {
  constructor(props){
    super(props) 
      this.state = {
        teacherData: []
      }
    this.viewTeacher(props.match.params.id);
  }
  viewTeacher = id => {
    fetch(process.env.REACT_APP_API_URL + "/teachers/" + id, { method: 'GET', 
      headers: new Headers({
        'Authorization': "Z8RayolyD8jytCXay2BUE1bktbFAzgsk"
      })  })
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result==>", result);
          this.setState({teacherData: result})
        },
        (error) => {
        }
      )
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
              <TableCell align="row">First Name</TableCell>
              <TableCell align="row">Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>            
              <TableRow>                
                <TableCell align="row">{this.state.teacherData.firstName}</TableCell>
                <TableCell align="row">{this.state.teacherData.lastName}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default ViewTeacher;
