import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class OSSTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            initiated: false,
            data: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:8082/world/cities/greater/1000000')
            .then(res => {
                console.log("test");
                return res.json()
            })
            .then(data => {
                this.setState({
                    initiated: true,
                    data: data
                })
            })
            .catch(error => console.log('Error:', error))
    }

    render() {
        const {initiated, classes, data} = this.state;
        if(!initiated){
            return 'Loading ...';
        }
        console.log("c:", data);

        return (
            <TableContainer component={Paper}>
                <Table className={this.props.classes.table} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Country Code</TableCell>
                            <TableCell>District</TableCell>
                            <TableCell align="right">Population</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.cities.map((row) => (
                            <TableRow hover={true} key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.countryCode}</TableCell>
                                <TableCell>{row.district}</TableCell>
                                <TableCell align="right">{row.population}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default OSSTable;