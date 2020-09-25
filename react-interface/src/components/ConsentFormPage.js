import React from 'react';

// Material UI imports
import { Paper, Slide, withStyles } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core'

// JSS Styles for this page
const styles = theme => ({
    root: {
        padding: '5vh',
        paddingTop: '20vh',
        textAlign: 'center',
        maxWidth: '800px',
        margin: 'auto'
    },
    content: {
        marginTop: theme.spacing(2),
        padding: '3vh',
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
class ConsentFormPage extends React.Component {
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
                        Consent Form
                    </Typography>
                    <Typography variant="h5" align="left">
                        First, we require you to read this consent form thoroughly. 
                    </Typography>
                    <Typography variant="h5" align="left">
                        Once you have read the form, click 'I consent'.
                    </Typography>
                    <Paper elevation={3} className={classes.content}>
                        <Typography className={classes.paragraph} align="left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis dui elementum, commodo nunc sit amet, egestas risus.
                            Integer sed lorem justo. Integer eget suscipit odio. Nam eget odio id metus auctor dignissim sit amet quis sem.
                            Pellentesque at mollis ligula. Nam a libero a nisi laoreet faucibus. Phasellus id sem ut metus pharetra imperdiet quis a ligula.
                            Integer facilisis nisi in nulla scelerisque, volutpat ultricies justo volutpat. Phasellus in erat metus.
                            Quisque pulvinar tortor sit amet massa euismod, id congue tellus ultricies. Nunc sit amet ex mauris.
                            Mauris tempus nunc a congue feugiat.
                        </Typography>
                        <Typography className={classes.paragraph} align="left">
                            Donec semper nunc sed felis condimentum imperdiet. Ut luctus fermentum nulla, et rhoncus nisl ultrices vitae.
                            Vestibulum in sagittis ipsum. Phasellus tellus nulla, hendrerit vitae purus vel, euismod porta justo.
                            Proin efficitur fermentum ultricies. Vivamus ut tellus sit amet massa pellentesque porttitor in ut tortor.
                            Fusce mauris velit, placerat quis lacus vel, sollicitudin auctor ex. Pellentesque dignissim et nulla id euismod.
                            Duis bibendum dolor ut tortor congue tempus. Mauris vitae nibh turpis.
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
                        I consent
                    </Button>
                </div>
            </Slide>
        );
    }
}

// Export - Attaches Redux state, and styling
export default withStyles(styles)(ConsentFormPage);