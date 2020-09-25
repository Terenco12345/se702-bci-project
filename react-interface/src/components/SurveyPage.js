import React from 'react';

// Material UI imports
import { Paper, Slide, withStyles } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core'

// JSS Styles for this page
const styles = theme => ({
    root: {
        padding: '5vh',
        paddingTop: '10vh',
        textAlign: 'center',
        maxWidth: '800px',
        margin: 'auto'
    },
    content: {
        marginTop: theme.spacing(2),
        padding: '3vh',
        minHeight: '40vh'
    },
    paragraph: {
        marginBottom: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(2),
        fontSize: '20px'
    }
})

// React class component definition
class SurveyPage extends React.Component {
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
                        Survey
                    </Typography>
                    <Typography variant="h5" align="center">
                        Please answer all of the questions in this survey.
                    </Typography>
                    <Paper elevation={3} className={classes.content}>
                        
                    </Paper>
                    <Button className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={this.props.nextPage}>
                        Next
                    </Button>
                </div>
            </Slide>
        );
    }
}

// Export - Attaches Redux state, and styling
export default withStyles(styles)(SurveyPage);