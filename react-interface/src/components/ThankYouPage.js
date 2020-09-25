import React from 'react';

// Material UI imports
import { Paper, Slide, withStyles } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core'

// JSS Styles for this page
const styles = theme => ({
    root: {
        padding: '5vh',
        paddingTop: '30vh',
        textAlign: 'center',
    },
    puzzle: {
        height: '400px',
        width: '600px',
        margin: 'auto',
        marginTop: '5vh'
    },
    button: {
        marginTop: theme.spacing(5),
        fontSize: '20px'
    }
})

// React class component definition
class ThankYouPage extends React.Component {
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
                        Thank you!
                    </Typography>
                    <Typography variant="h5">
                        Everything has been recorded successfully.
                    </Typography>
                    <Button className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={()=>{window.location.reload()}}>
                        Back to beginning
                    </Button>
                </div>
            </Slide>
        );
    }
}

// Export - Attaches Redux state, and styling
export default withStyles(styles)(ThankYouPage);