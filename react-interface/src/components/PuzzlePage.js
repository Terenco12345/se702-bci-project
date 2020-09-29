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
class PuzzlePage extends React.Component {
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
                        Please complete this puzzle.
                    </Typography>
                    <Typography variant="h5">
                        Attempt to complete this puzzle to the best of your ability.
                    </Typography>
                    <Paper elevation={3} className={classes.puzzle}>
                        <Typography variant="h5">
                            INSERT PUZZLE HERE
                        </Typography>
                    </Paper>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={this.props.nextPage}
                    >
                        Next
                    </Button>
                </div>
            </Slide>
        );
    }
}

// Export - Attaches Redux state, and styling
export default withStyles(styles)(PuzzlePage);