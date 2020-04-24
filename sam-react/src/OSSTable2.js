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
        if (!initiated) {
            return 'Loading ...';
        }
        console.log("c:", data);

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <EnhancedTableToolbar numSelected={selected.length}/>
                    <TableContainer>
                        <Table className={this.props.classes.table} size="small" stickyHeader={true}
                               aria-label="simple table">
                            <EnhancedTableHead
                                classes={classes}
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
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
                </Paper>
            </div>
        );
    }
}

export default OSSTable;