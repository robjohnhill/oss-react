import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OSSTable from './OSSTable.js';

function App() {
   const useStyles = makeStyles({
      table: {
         minWidth: 450,
         maxWidth: 750,
      }
   });

   const classes = useStyles();

   return <OSSTable classes={classes}/>;
}

export default App;
