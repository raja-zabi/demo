import React from "react";
import { AppBar, Toolbar, Typography, Box, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import Grid from "@material-ui/core/Grid";
import facebook from "../../assets/icon/facebook.ico";
import instagram from "../../assets/icon/instagram.ico";
import linkedin from "../../assets/icon/linkedin.ico";
import mailbox from "../../assets/icon/mail.ico";
import avatar from "../../assets/icon/avatar.png";

const styles = {
  appbar: {
    backgroundColor: "#b01925",
    color: "#fff",
    height: 25
  },
  appbar_text: {
    marginTop: "0.09rem",
    fontSize: "0.8rem"
  },
  icon: {
    marginTop: "0.3125rem",
    width: "0.9rem",
    height: "0.9rem"
  },
  mail_icon: {
    marginTop: "0.3125rem",
    width: "0.9rem",
    height: "0.9rem"
  },
  linecolor: {
    color: "#c9626a"
  },
  rightgrid: {
    float: "right"
  }
};
const NavigationBar = () => {
  return (
    <Grid container>
      <AppBar position="static" style={styles.appbar}>
        <Grid container>
            <Grid container item md={5}>
            <Grid item md={"auto"} justify={"center"} alignContent="center">
              <Box pl={7} component="span">
                <img src={facebook} style={styles.icon} />
              </Box>
              <Box pl={1} component="span">
                <img src={instagram} style={styles.icon} />
              </Box>
              <Box pl={1} component="span">
                <img src={linkedin} style={styles.icon} />
              </Box>
            </Grid>
            <Grid item md={"auto"} alignContent="center">
              <Grid container direction="row">
                <Box component="span" pl={2} pr={2} style={styles.linecolor}>
                  |
                </Box>
                <Box component="span">
                  <img src={mailbox} style={styles.mail_icon} />
                </Box>
                <Box component="span" pl={0.4}>
                  <Typography
                    variant="subtitle1"
                    alignContent="center"
                    color="inherit"
                    style={styles.appbar_text}
                  >
                    info@propertyshop.com
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item md={"auto"} alignContent="center">
              <Grid container direction="row">
                <Box component="span" pl={2} pr={2} style={styles.linecolor}>
                  |
                </Box>
                <Box component="span">
                  <img src={mailbox} style={styles.mail_icon} />
                </Box>
                <Box component="span" pl={0.4}>
                  <Typography
                    variant="subtitle1"
                    alignContent="center"
                    color="inherit"
                    style={styles.appbar_text}
                  >
                    Hotline +95178954487
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            </Grid>
            <Grid container item md={6} justify={'flex-end'}>
            <Box  component="span" pr={1}>
                <img src={avatar} style={styles.icon} />
              </Box>
              <Box  component="span" pr={3}>
              <Typography
                    variant="subtitle1"
                    alignContent="center"
                    color="inherit"
                    style={styles.appbar_text}>
                    Login/Register
                  </Typography>
                  </Box>
            </Grid>
          </Grid>

      </AppBar>
    </Grid>
  );
};

export default withStyles(styles)(NavigationBar);
