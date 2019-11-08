import React from 'react';
import { withRouter } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Holder from 'holderjs/holder.min.js';

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.pageKeyArray = [];
    }

    state = {
        goBackEnabled: false,
        goForwardEnabled: false
    }

    componentDidMount() {
        this.pageKeyArray.push(this.props.location.key);
    }

    componentDidUpdate(prevProps) {

        if ( this.props.location.pathname !== prevProps.location.pathname ) {

            Holder.run();
            
            window.scrollTo(0, 0);

            if ( this.pageKeyArray.indexOf(this.props.location.key) === -1 ) {
                this.pageKeyArray.push(this.props.location.key);
            }

            if ( this.pageKeyArray.indexOf(this.props.location.key) > 0 ) {
                this.setState({ goBackEnabled: true });
            } else {
                this.setState({ goBackEnabled: false });
            }

            if ( this.pageKeyArray.indexOf(this.props.location.key) < this.pageKeyArray.length - 1 ) {
                this.setState({ goForwardEnabled: true });
            } else {
                this.setState({ goForwardEnabled: false });
            }

        }

      }

    render() {
        return (
            <div>
                <Header goBackEnabled={this.state.goBackEnabled} goForwardEnabled={this.state.goForwardEnabled} currentPageKey={this.state.currentPageKey} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
  }
  export default withRouter(AppContainer);