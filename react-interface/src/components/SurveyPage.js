import React from 'react';

// Material UI imports
import { FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Slide, withStyles, Divider } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core'
import { connect } from 'react-redux';
import { changeExperimentState } from '../redux/actions/experimentActions';
import { bindActionCreators } from 'redux';
import { SURVEY_QUESTIONS } from './../utils/QuestionUtils';
import { pushTimeEvent } from '../redux/actions/timeActions';
import axios from 'axios';
import { DEV_MODE } from './../utils/DevUtils';

// JSS Styles for this page
const styles = theme => ({
    root: {
        padding: '5vh',
        paddingTop: '10vh',
        textAlign: 'center',
        maxWidth: '1000px',
        margin: 'auto'
    },
    content: {
        marginTop: theme.spacing(2),
        padding: '3vh',
        minHeight: '40vh',
    },
    paragraph: {
        marginBottom: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(2),
        fontSize: '20px'
    },
})

// React class component definition
class SurveyPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            transition: false,
            answers: new Array(SURVEY_QUESTIONS.length).fill("")
        }
    }

    componentDidMount() {
        this.setState({ transition: true });
    }

    componentWillUnmount() {
        this.setState({ transition: false });
    }

    isSurveyFilled() {
        if (this.state.answers.includes("")) {
            return false;
        } else {
            return true;
        }
    }

    handleAnswerChange(event, index) {
        var answers = this.state.answers;
        answers[index] = event.target.value;
        this.setState({ answers: answers })
        console.log(this.state);
    }

    async handleSubmit() {
        await Promise.all([
            this.props.changeExperimentState({ surveyAnswers: this.state.answers }),
            this.props.pushTimeEvent({ identifier: "survey completed" })
        ]);
        await axios({
            method: 'post',
            withCredentials: true,
            url: 'http://localhost:5000/', 
            data: this.props.state
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        
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
                        Survey
                    </Typography>
                    <Typography variant="h5" align="center">
                        Please answer all of the questions in this survey.
                    </Typography>
                    <Paper elevation={3} className={classes.content}>
                        {SURVEY_QUESTIONS.map((value, index) => {
                            return (
                                <div key={index} style={{ marginBottom: 25 }}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">{value.question}</FormLabel>
                                        <RadioGroup row value={this.state.answers[index]} onChange={(event) => { this.handleAnswerChange(event, index) }}>
                                            <FormControlLabel labelPlacement="start" value="1" control={<Radio />} label={value.lowScale} style={{ marginRight: 20 }} />
                                            <FormControlLabel value="2" control={<Radio />} label="" />
                                            <FormControlLabel value="3" control={<Radio />} label="" />
                                            <FormControlLabel value="4" control={<Radio />} label="" />
                                            <FormControlLabel value="5" control={<Radio />} label={value.highScale} />
                                        </RadioGroup>
                                    </FormControl>
                                    <Divider style={{ marginTop: 30, marginBottom: 30 }} />
                                </div>
                            );
                        })}
                    </Paper>
                    <Button className={classes.button}
                        variant="contained"
                        color="secondary"
                        disabled={!this.isSurveyFilled() && !DEV_MODE}
                        onClick={this.handleSubmit.bind(this)}>
                        Next
                    </Button>
                </div>
            </Slide>
        );
    }
}

const mapStateToProps = state => ({
    state: state,
    experiment: state.experiment,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeExperimentState: changeExperimentState,
    pushTimeEvent: pushTimeEvent
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SurveyPage));