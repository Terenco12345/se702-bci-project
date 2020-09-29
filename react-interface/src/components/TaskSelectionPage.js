import React from 'react';

// Material UI imports
import { Slide, withStyles } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core'
import { bindActionCreators } from 'redux';
import { changeExperimentState } from '../redux/actions/experimentActions';
import { connect } from 'react-redux';

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
class TaskSelectionPage extends React.Component {
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

    pressAlpha(){
        this.props.changeExperimentState({group: 'control'});
        this.props.nextPage();
    }

    pressGamma(){
        this.props.changeExperimentState({group: 'meditation'});
        this.props.nextPage();
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
                        Please follow researcher instructions.
                    </Typography>
                    <Typography variant="h5">
                        The researcher will tell you what button to press.
                    </Typography>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={this.props.previousPage}
                    >
                        Go Back
                    </Button>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={this.pressAlpha.bind(this)}
                    >
                        Alpha
                    </Button>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={this.pressGamma.bind(this)}
                    >
                        Gamma
                    </Button>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TaskSelectionPage));