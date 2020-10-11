import React from 'react';

// Material UI imports
import { Slide, withStyles, Divider } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core'

// Redux imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeExperimentState } from '../redux/actions/experimentActions';
import { pushTimeEvent } from '../redux/actions/timeActions';

// Other imports
import { DEV_MODE } from './../utils/DevUtils';


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
class PreQuestionsPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            transition: false,
            seconds: 900
        }
    }

    componentDidMount() {
        this.setState({ transition: true });

        this.setState({intervalId: setInterval(() => {
            if (this.state.seconds - 1 >= 0) {
                // Increment counter
                this.setState({ seconds: this.state.seconds - 1 })
            }
        }, 1000)});
    }

    componentWillUnmount() {
        this.setState({ transition: false });
        clearInterval(this.state.intervalId);
    }

    getTimeDisplayString(){
        if(this.state.seconds > 0){
            var minutes = Math.floor(this.state.seconds / 60);
            var seconds = this.state.seconds - minutes * 60;

            return minutes+"m, "+seconds+"s"
        } else {
            return "Time up! Please proceed to the next step."
        }
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
                        <br/><br/>
                        <Typography variant="h4">
                            {this.getTimeDisplayString()}
                        </Typography>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="secondary"
                            disabled={this.state.seconds > 0 && !DEV_MODE}
                            onClick={()=>{
                                this.props.pushTimeEvent({identifier: "control group activity end, starting question 1"})
                                this.props.nextPage()
                            }}
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
                        <br/><br/>
                        <Typography variant="h4">
                            {this.getTimeDisplayString()}
                        </Typography>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="secondary"
                            disabled={this.state.seconds > 0 && !DEV_MODE}
                            onClick={()=>{
                                this.props.pushTimeEvent({identifier: "meditation activity end, starting question 1"})
                                this.props.nextPage()
                            }}
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
    pushTimeEvent: pushTimeEvent
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PreQuestionsPage));