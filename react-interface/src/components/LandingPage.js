import React from 'react';

// Material UI imports
import { Slide, withStyles } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core'

// JSS Styles for this page
const styles = theme => ({
    root: {
        paddingTop: '30vh',
        minHeight: '80vh',
        textAlign: 'center',
    },
    button: {
        marginTop: theme.spacing(5),
        fontSize: '2vh'
    }
})

// React class component definition
class LandingPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            transition: false
        }
    }

    componentDidMount() {
        this.setState({ transition: true });
    }

    componentWillUnmount() {
        this.setState({ transition: false });
    }

    render() {
        const classes = this.props.classes;

        return (
            <Slide direction={this.props.transitionDirection} in={this.state.transition}
                style={
                    { transformOrigin: '0 0 0' }}
                {...(this.state.transition ? { timeout: 1000 } : {})}
            >
                <div className={classes.root}>
                    <Typography variant="h2">
                        Welcome to our NeuroSky BCI experiment!
                    </Typography>
                    <Typography variant="h5">
                        You will be required to perform several tasks for this study. Press the button below to begin!
                    </Typography>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={this.props.nextPage}
                    >
                        Press here to begin!
                    </Button>
                </div>
            </Slide>
        );
    }
}

// Export - Attaches Redux state, and styling
export default withStyles(styles)(LandingPage);