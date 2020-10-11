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
    },
    paragraph: {
        marginBottom: theme.spacing(5),
        marginLeft: theme.spacing(2),
        textIndent: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(2),
        fontSize: '20px'
    }
})

// React class component definition
class ParticipantInformationSheetPage extends React.Component {
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
                        Participant Information Sheet
                    </Typography>
                    <Typography variant="h5" align="left">
                        Please read through this information sheet.
                    </Typography>
                    <Typography variant="h5" align="left">
                        Once you have read the sheet, click 'Next'.
                    </Typography>
                    <Paper elevation={3} className={classes.content}>
                        <Typography variant="h6" align="left">Introduction</Typography>
                        <Typography className={classes.paragraph} align="left">
                            We, Callum Cory, Kelvin Ngor, Terence Qu, Ryan Tan and William Li, are students in the COMPSCI705/SOFTENG702 class. Our supervisor is Dr. Danielle Lottridge.
                        </Typography>

                        <Typography variant="h6" align="left">This Project</Typography>
                        <Typography className={classes.paragraph} style={{textIndent: 0}} align="left">
                            - <b>Rationale:</b> We want to better understand the relationship between meditation and problem solving tasks. <br/>
                            - <b>Aims:</b> The results of this project will be used to better understand the physiological effects of meditation of problem solving tasks. <br/>
                            - <b>Project Duration:</b> We will work on this project until the end of semester 2020. <br/>
                            - <b>Benefits:</b> The final outcome of this project will be a new knowledge on the relationship between meditation and problem solving. 
                            This research will allow us to understand how meditation affects people's ability to problem solve. <br/>
                            - <b>Risks:</b> Participation in this research is optinal, and responses will be kept confidential in order to minimise your risks as a participant. <br/>
                        </Typography>

                        <Typography variant="h6" align="left">Invation to participate</Typography>
                        <Typography className={classes.paragraph} align="left">
                            Voluntary participantion: Your participation is vountary and you may decline this invitation without penalty.
                        </Typography>

                        <Typography variant="h6" align="left">Project Procedures:</Typography>
                        <Typography className={classes.paragraph} align="left">
                            If you choose to participate, you will be asked to attend two sessions at the University of Auckland downtown campus. 
                            During the sessions, you will be asked to wear a Neurosky Mindwave headset device and to complete several problem solving questions. 
                            The headset fits over the head with a clip to the earlobe. In one session, you will use your cellphone for 15 minutes, and in 
                            another session you will be asked to meditation for 15 minutes. Upon completion of these sessions, you will be asked to complete 
                            some problem solving questions. You will also be asked to fill out a questionnaire on how you found the tasks. The expected time 
                            commitment is 60 minutes or less. You can choose to stop the sessions at any time without penalty. 
                        </Typography>

                        <Typography variant="h6" align="left">Data storage, retention, destruction and future use</Typography>
                        <Typography className={classes.paragraph} align="left">
                            How: We will collect recordings of EEG, performance on the problem solving tasks, 
                            and responses to a questionnaire. 
                        </Typography>

                        <Typography variant="h6" align="left">Right to withdraw from participation</Typography>
                        <Typography className={classes.paragraph} align="left">
                            You can withdraw from the session at any time without having to provide a reason.
                        </Typography>

                        <Typography variant="h6" align="left">Confidentiality</Typography>
                        <Typography className={classes.paragraph} align="left">
                            The preservation of confidentiality is paramount. The information you share through this session will remain confidential to only the involved researchers.
                            Your responses will be analysed separately from your contact information to ensure confidentialty. 
                            The information you provide will be reported in project reports written individually by each researcher, 
                            and may be published in an academic research conference and/or journal. This report and publication(s) will not identify you as its source. 
                            A copy of the research findings will be made available to you, if you wish. You can also contact any of the researchers 
                            listed below if you would like to obtain a copy of the findings. 
                        </Typography>
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
                        onClick={this.props.nextPage}>
                        Next
                    </Button>
                </div>
            </Slide>
        );
    }
}

// Export - Attaches Redux state, and styling
export default withStyles(styles)(ParticipantInformationSheetPage);