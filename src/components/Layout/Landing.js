import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte-material';
import {Button} from '@material-ui/core';

import { withStyles, Avatar } from "@material-ui/core";
const styles = theme => ({
    appbar: {
      backgroundColor: "red",
      color: "#000000",
      height: 5
    },
})
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
          };
    }
    

    render() {
        return (
            <div>
            <Button color="primary">Primary</Button>
          <h1 color='primary'>Hello</h1>
          </div>
        );
    }
}

export default withStyles(styles)(Landing);