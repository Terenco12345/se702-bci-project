import React from 'react';

// Material UI imports
import { Checkbox, Divider, FormControlLabel, Paper, Slide, TextField, withStyles } from '@material-ui/core';
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
        paddingTop: '10vh',
        textAlign: 'center',
        maxWidth: '800px',
        margin: 'auto'
    },
    content: {
        marginTop: theme.spacing(2),
        padding: '3vh',
        textAlign: 'left'
    },
    paragraph: {
        marginLeft: theme.spacing(2),
        textIndent: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(2),
        fontSize: '20px'
    }
})

// React class component definition
class ConsentFormPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            transition: false,
            checks: [
                false, // I have read the Participant Information Sheet, and understood the nature of the research and I have had the opportunity to ask questions and have had them answered to my satisfaction 
                false, // I have read the Participant Information Sheet, and understood the nature of the research. I have had the opportunity to ask questions and have had them answered to my satisfaction. 
                false, // I agree to take part in this research.
                false, // I agree to my problem solving performance being recorded. 
                false, // I agree for my EEG data to be recorded.
                false, // I understand that my responses will be analysed separately from my information to ensure confidentiality. 
                false, // I understand that I am free to withdraw my participation at any time, and to withdraw any data traceable up to me one month after participation. 
                false, // I understand that the data will be used for a research project and potential publications.
            ],
            shouldMailFindings: false, // I wish/do not wish to receive a summary of findings, which can be emailed or mailed to me at this address: 
            email: '',
            consent: false,
            participantId: "",
        }
    }

    componentDidMount() {
        this.setState({ transition: true });
    }

    componentWillUnmount() {
        this.setState({ transition: false });
    }

    handleCheck(index) {
        var newChecks = this.state.checks;
        newChecks[index] = !this.state.checks[index]
        this.setState({ checks: newChecks, consent: false })

        console.log(this.state)
    }

    handleShouldMailFindings() {
        this.setState({ shouldMailFindings: !this.state.shouldMailFindings })
        this.setState({ email: '' })
    }

    canConsent() {
        // If every check is accepted, the user can consent
        for (var i = 0; i < this.state.checks.length; i++) {
            if (!this.state.checks[i]) {
                return false;
            }
        }

        // Check participant ID is valid - TO BE IMPLEMENTED PROPERLY
        if (this.state.participantId === "") {
            return false;
        }

        return true;
    }

    handleEmail(event) {
        this.setState({ email: event.target.value })
    }

    handleParticipantId(event) {
        this.setState({ participantId: event.target.value })
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
                        Consent Form
                    </Typography>
                    <Typography variant="h5" align="left">
                        We require you to read this consent form thoroughly.
                    </Typography>
                    <Typography variant="h5" align="left">
                        Once you have read the form, click 'I consent'. If you agree with everything below, you may proceed.
                    </Typography>
                    <Paper elevation={3} className={classes.content}>
                        <Typography variant="h6" align="left" style={{ marginBottom: 20 }}>
                            Consent Form
                        </Typography>

                        <FormControlLabel
                            control={<Checkbox checked={this.state.checks[0]} onChange={() => { this.handleCheck(0) }} className={classes.paragraph} />}
                            label="I have read the Participant Information Sheet, and understood the nature of the research.
                            I have also had the opportunity to ask questions and have had them answered to my satisfaction"
                        /><Divider style={{ marginBottom: 20 }} />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.checks[1]} onChange={() => { this.handleCheck(1) }} className={classes.paragraph} />}
                            label="I have read the Participant Information Sheet, and understood the nature of the research.
                            I have also had the opportunity to ask questions and have had them answered to my satisfaction"
                        /><Divider style={{ marginBottom: 20 }} />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.checks[2]} onChange={() => { this.handleCheck(2) }} className={classes.paragraph} />}
                            label="I agree to take part in this research"
                        /><Divider style={{ marginBottom: 20 }} />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.checks[3]} onChange={() => { this.handleCheck(3) }} className={classes.paragraph} />}
                            label="I agree to my problem solving performance being recorded"
                        /><Divider style={{ marginBottom: 20 }} />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.checks[4]} onChange={() => { this.handleCheck(4) }} className={classes.paragraph} />}
                            label="I agree for my EEG data to be recorded"
                        /><Divider style={{ marginBottom: 20 }} />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.checks[5]} onChange={() => { this.handleCheck(5) }} className={classes.paragraph} />}
                            label="I understand that my responses will be analysed separately from my information to ensure confidentiality"
                        /><Divider style={{ marginBottom: 20 }} />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.checks[6]} onChange={() => { this.handleCheck(6) }} className={classes.paragraph} />}
                            label="I understand that I am free to withdraw my participation at any time, and to withdraw any data traceable up to me one month after participation"
                        /><Divider style={{ marginBottom: 20 }} />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.checks[7]} onChange={() => { this.handleCheck(7) }} className={classes.paragraph} />}
                            label=" I understand that the data will be used for a research project and potential publications"
                        /><Divider style={{ marginBottom: 20 }} />
                        <br />
                        
                        <Typography>Please enter your participant ID before continuing</Typography>
                        <TextField label="Participant ID" onChange={this.handleParticipantId.bind(this)}></TextField>
                        <br/>
                        <br style={{ marginBottom: 20, marginTop:20 }} />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.shouldMailFindings} onChange={() => { this.handleShouldMailFindings() }}/>}
                            label="(OPTIONAL) I wish/do not wish to receive a summary of findings."
                        />
                        {
                            this.state.shouldMailFindings &&
                            <div>
                                <Typography className={classes.paragraph} style={{ textIndent: 0 }} align="left">
                                    My email address (for receiving findings) is this:
                                </Typography>
                                <TextField className={classes.paragraph} style={{ textIndent: 0, width: 500 }} onChange={this.handleEmail.bind(this)} variant="outlined" label="Email" />
                            </div>
                        }
                    </Paper>
                    <Button className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={this.props.previousPage}>
                        Back
                    </Button>
                    <Button className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            this.props.changeExperimentState({ participantId: this.state.participantId, email: this.state.email })
                            this.props.pushTimeEvent({identifier: "consent form agreed"})
                            this.props.nextPage()
                        }}
                        disabled={!this.canConsent() && !DEV_MODE}>
                        Next
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
    pushTimeEvent: pushTimeEvent
}, dispatch)

// Export - Attaches Redux state, and styling
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ConsentFormPage));