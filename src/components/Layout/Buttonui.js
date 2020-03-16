import React , {Button} from 'react'
import { withStyles } from "@material-ui/core";
import {Link} from 'react-router-dom';
import home from "../../assets/icon/home.ico";
import {Grid , Paper} from "@material-ui/core";
import { AppBar, Toolbar, Typography, Box, Hidden } from "@material-ui/core";
let styles = {
    buttonbox:{
      width:'80px',
      height:'60px',
      background:"#f2f2f2",
      color:'black',
      
    },
    paper:{
      width:'80px',
      height:'60px',
      
    },
    underlineremove:{
      textdecoration:'none'
    }
  };
const Buttonui = (props) => {
    return (
        <div>
         
              <Link style={{ textDecoration: 'none' }}>
              <Paper  elevation={10} style={styles.paper} justify={'center'} alignItems={'center'} alignContent={'center'} >        
               
               <Grid  container direction='column'  style={styles.buttonbox} justify={'center'} alignItems={'center'} alignContent={'center'} >
                <Grid>
                 <img src={home} style={styles.icon} />
                 </Grid>
                  <Grid>
                  Hello
                  </Grid>
                
                  
               </Grid> 
               </Paper>  
               </Link>
               <Link style={{ textDecoration: 'none' }}>
               
               <Grid  container direction='column'  style={styles.buttonbox} justify={'center'} alignItems={'center'} alignContent={'center'} >
                <Grid>
                 <img src={home} style={styles.icon} />
                 </Grid>
                  <Grid>
                  Hello
                  </Grid>
                
                  
               </Grid> 
              
               </Link>
        </div>
    )
}
export default withStyles(styles)(Buttonui);