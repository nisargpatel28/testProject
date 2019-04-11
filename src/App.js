// Author      : Nisarg Patel
// Date        : 11th April 2019
// Description : Listing of school's records
import React from "react";
import "./App.css";
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class App extends React.Component {
  constructor(){
    super() 
      this.state = {
        schoolData: []
      }
    this.getSchoolList();
  }
  getSchoolList() {
    fetch(process.env.REACT_APP_API_URL + "/schools")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("API_URL1=>", process.env.REACT_APP_API_URL);
          console.log("result=>", result);
          this.setState({schoolData: result});
          // this.setState({
          //   isLoaded: true,
          //   items: result.items
          // });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (      
      <Paper className="MuiPaper-root-3 MuiPaper-elevation2-7 MuiPaper-rounded-4 SimpleTable-root-1">
      <Typography variant="h4" gutterBottom>
          School List
      </Typography>
      <a href="teachers" className="myLink">Teachers</a>
      <a href="addteachers" className="myLink">Add Teacher</a>
        <Table className  ="MuiTable-root-30 SimpleTable-table-2">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Country Id</TableCell>
              <TableCell align="right">region Id</TableCell>
              <TableCell align="right">School Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.schoolData.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.countryID}</TableCell>
                <TableCell align="right">{row.regionID}</TableCell>
                <TableCell align="right">{row.schoolCode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
