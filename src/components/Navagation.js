import React from "react";
import '../styles/Navigation.css';

class Navigation extends React.Component {

    handleGoBack = () => {
      window.history.back();
    }

    handleGoForward = () => {
      window.history.forward();
    }

    handleScrollDown = () => {
      window.scrollBy({ 
        top: this.props.windowHeight / 2,
        left: 0,
        behavior: 'smooth'
      });
    }

    handleScrollUp = () => {
      window.scrollBy({ 
        top: -(this.props.windowHeight / 2),
        left: 0,
        behavior: 'smooth' 
      });
    }

    render() {

        let isPointerAtTheTopBorder = '';
        let isPointerAtTheBottomBorder = '';
        let isPointerAtTheLeftBorder = '';
        let isPointerAtTheRightBorder = '';

        if ( this.props.faceInterface === 'pointPointer' ) {
            isPointerAtTheTopBorder = this.props.pointerAtTheTopBorder ? 'active' : '';
            isPointerAtTheBottomBorder = this.props.pointerAtTheBottomBorder ? 'active' : '';
            isPointerAtTheLeftBorder = this.props.pointerAtTheLeftBorder ? 'active' : '';
            isPointerAtTheRightBorder = this.props.pointerAtTheRightBorder ? 'active' : '';
        }

        return (
            <div className={this.props.faceInterface + '-navigation'} >
                <div className={`scroll-area scroll-up ${isPointerAtTheTopBorder}`} 
                     onClick={this.handleScrollUp}>
                     <div className="arrow" id="arrow-up"></div>
                </div>
                <div className={`scroll-area scroll-down ${isPointerAtTheBottomBorder}`}
                     onClick={this.handleScrollDown}>
                     <div className="arrow" id="arrow-down"></div>
                </div>
                <div className={`back-forward-area go-back ${this.props.goBackEnabled ? 'enabled' : ''} ${isPointerAtTheLeftBorder}`} 
                     onClick={this.handleGoBack}>
                    <div className="arrow" id="arrow-back"></div>
                </div>
                <div className={`back-forward-area go-forward ${this.props.goForwardEnabled ? 'enabled' : ''} ${isPointerAtTheRightBorder}`} 
                     onClick={this.handleGoForward}>
                     <div className="arrow" id="arrow-forward"></div>
                </div>
            </div>
        )
    }
}

export default Navigation;