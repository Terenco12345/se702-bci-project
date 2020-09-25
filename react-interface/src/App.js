import React from 'react';
import './App.css';

// Redux imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeNavigationIndex } from './redux/actions/navigationActions';

// MUI imports
import { indigo, lightBlue, purple } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';

// Component imports
import LandingPage from './components/LandingPage';
import ConsentFormPage from './components/ConsentFormPage';


// Theme, used for global MUI styling definitions
const theme = {
  palette: {
    type: "light",
  }
}

// Pages, stored dynamically
const pages = [LandingPage, ConsentFormPage]

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      transitionDirection: "right"
    }
  }

  /**
   * Changes the index to the previous page. Does nothing if there are no previous pages.
   */
  previousPage() {
    console.log("Now going back a page...");
    var currentIndex = this.props.navigation.navigationIndex;

    // Check if there are any previous pages
    if (currentIndex <= 0) {
      console.log("There is no previous page!")
    } else {
      this.setState({ transitionDirection: "right" })
      this.props.changeNavigationIndex(currentIndex - 1);
    }
  }

  /**
   * Changes the index to the next page. Does nothing if there are no next pages.
   */
  nextPage() {
    console.log("Now switching to next page...");
    var currentIndex = this.props.navigation.navigationIndex;

    // Check if there are any next pages
    if (currentIndex >= pages.length - 1) {
      console.log("There is no next page!")
    } else {
      this.setState({ transitionDirection: "left" })
      this.props.changeNavigationIndex(currentIndex + 1);
    }
  }

  render() {
    const muiTheme = responsiveFontSizes(createMuiTheme(theme));
    var currentIndex = this.props.navigation.navigationIndex;
    var CurrentPageComponent = pages[currentIndex];

    return (
      <ThemeProvider theme={muiTheme}>
        <CurrentPageComponent
          transitionDirection={this.state.transitionDirection} // Determines if the transition should be right, left, up or down
          previousPage={this.previousPage.bind(this)}
          nextPage={this.nextPage.bind(this)}
        />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeNavigationIndex: changeNavigationIndex,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);