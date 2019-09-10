import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Inputbase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

import Navbar from './../components/navbar/Navbar';

class ContextApplication extends Component {
    render() {
        return (
            <div className="context-application">
                <Navbar />
            </div>
        )
    }
}

export default ContextApplication;