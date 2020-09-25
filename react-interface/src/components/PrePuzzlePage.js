import React from 'react';

// Material UI imports
import { Slide, withStyles } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeExperimentState } from '../redux/actions/experimentActions';

// JSS Styles for this page
const styles = theme => ({
    root: {
        padding: '5vh',
        paddingTop: '30vh',
        textAlign: 'center',
    },
    button: {
        margin: theme.spacing(5),
        fontSize: '20px'
    }
})

// React class component definition
class PrePuzzlePage extends React.Component {
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
                {this.props.experiment.group == 'control'
                    ? // Render instructions for control group
                    <div className={classes.root}>
                        <Typography variant="h2">
                            Browse your phone for 15 minutes.
                        </Typography>
                        <Typography variant="h5">
                            Do what you would normally do on your phone, until 15 minutes have passed.
                        </Typography>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={this.props.nextPage}
                        >
                            Next
                        </Button>
                    </div>
                    : // Render instructions for meditation group
                    <div className={classes.root}>
                        <Typography variant="h2">
                            Meditate for 15 minutes.
                        </Typography>
                        <Typography variant="h5">
                            Take deep breaths.
                        </Typography>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={this.props.nextPage}
                        >
                            Next
                        </Button>
                    </div>
                }
            </Slide>
        );
    }
}

const mapStateToProps = state => ({
    experiment: state.experiment,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeExperimentState: changeExperimentState,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PrePuzzlePage));