import React from 'react';

// Material UI imports
import { Paper, Slide, TextField, withStyles } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeQuestionIndex } from '../redux/actions/navigationActions';
import { changeExperimentState } from '../redux/actions/experimentActions';
import { pushTimeEvent } from '../redux/actions/timeActions';
import { CONTROL_QUESTIONS, MEDITATION_QUESTIONS } from '../utils/QuestionUtils';

// JSS Styles for this page
const styles = theme => ({
    root: {
        padding: '5vh',
        paddingTop: '15vh',
        textAlign: 'center',
    },
    puzzle: {
        width: '800px',
        margin: 'auto',
        padding: '2vh',
        textAlign: 'left'
    },
    button: {
        marginTop: theme.spacing(5),
        fontSize: '20px'
    }
})

// React class component definition
class QuestionsPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            intervalId: 0,

            transition: false,
            timeUp: false,
            answer: "",
            seconds: 0
        }
    }

    componentDidMount() {
        var questions = this.props.experiment.group == 'control' ? CONTROL_QUESTIONS : MEDITATION_QUESTIONS
        this.setState({ transition: true, seconds: questions[0].timeToComplete });

        this.setState({
            intervalId: setInterval(() => {
                if (this.state.seconds - 1 >= 0) {
                    // Increment counter
                    this.setState({ seconds: this.state.seconds - 1 })
                }
            }, 1000)
        });
    }

    componentWillUnmount() {
        this.setState({ transition: false });
        clearInterval(this.state.intervalId);
    }

    handleAnswer(event) {
        if (!this.state.seconds <= 0) {
            this.setState({ answer: event.target.value })
        }
    }

    handleSubmit() {
        // Submit the answer to state
        var answers = this.props.experiment.answers;
        answers[this.props.navigation.questionIndex] = this.state.answer;
        this.props.changeExperimentState({ answers: answers })

        var questions = this.props.experiment.group == 'control' ? CONTROL_QUESTIONS : MEDITATION_QUESTIONS
        // See if should go to next question, or should go to next page
        var newIndex = this.props.navigation.questionIndex + 1

        this.props.pushTimeEvent({ identifier: "question " + newIndex + " submitted" })
        if (newIndex >= questions.length) {
            this.props.nextPage()
        } else {
            this.setState({ answer: "", seconds: questions[newIndex].timeToComplete })
            this.props.changeQuestionIndex(newIndex)
        }
    }

    render() {
        const classes = this.props.classes;

        var QuestionComponent = this.props.experiment.group == 'control' ?
            CONTROL_QUESTIONS[this.props.navigation.questionIndex].component :
            MEDITATION_QUESTIONS[this.props.navigation.questionIndex].component


        return (
            <Slide direction={this.props.transitionDirection} in={this.state.transition}
                style={
                    { transformOrigin: '0 0 0' }}
                {...(this.state.transition ? { timeout: 1000 } : {})}
            >
                <div className={classes.root}>
                    <Typography variant="h2" style={{marginBottom: 20}}>
                        Answer the questions that show up below.
                    </Typography>
                    <Paper elevation={3} className={classes.puzzle}>
                        <Typography variant="h5">
                            Question {this.props.navigation.questionIndex + 1}
                        </Typography>
                        <QuestionComponent />
                        <TextField value={this.state.answer} style={{ width: 780, margin: 10 }} variant="outlined" rows={5} multiline
                            onChange={this.handleAnswer.bind(this)}
                        ></TextField>
                        <div style={{ marginTop: 10, marginLeft: 10 }}>
                            <Typography >
                                {this.state.seconds > 0 ? "Time left: " + this.state.seconds : "Time's up! You cannot write any more, and you must submit your answer."}
                            </Typography>
                        </div>
                    </Paper>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={this.handleSubmit.bind(this)}
                    >
                        Submit Answer
                    </Button>
                </div>
            </Slide>
        );
    }
}

const mapStateToProps = state => ({
    navigation: state.navigation,
    experiment: state.experiment
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeQuestionIndex: changeQuestionIndex,
    changeExperimentState: changeExperimentState,
    pushTimeEvent: pushTimeEvent
}, dispatch)

// Export - Attaches Redux state, and styling
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(QuestionsPage));