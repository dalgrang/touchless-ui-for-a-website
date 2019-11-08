import React from 'react';
import * as faceapi from 'face-api.js';
import '../styles/AreaPointer.css';
import Navigation from '../components/Navagation';
import LoadingPage from '../pages/LoadingPage';

class AreaPointer extends React.Component {

    constructor(props) {
        super(props);
        this._isMounted = false;
        this.detectionsWithLandmarks = null;
        this.videoWidth = 320;
        this.videoHeight = 240;
        this.videoCenterX = this.videoWidth / 2;
        this.videoCenterY = this.videoHeight / 2;
        this.tol = 5;
        this.previousFacePosition = null;
        this.scrolledY = null;
        this.clickableElementsCount = 0;
        this.emojisAtClickableElements = [];
        this.currentPageKey = null;
        this.isClicked = false;
        this.hasOneSecondPassedAfterAClick = null;
    }

    state = {
        windowWidth: window.innerWidth,
        windowHeight : window.innerHeight,
        pageYOffset: window.pageYOffset,
        facePosition: null
    }

    loadFaceapi = async () => {
        await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        await faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models');
        await faceapi.nets.faceExpressionNet.loadFromUri('/models');
    }

    updateWindowSize = () => {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }
    
    updatePageYOffset = () => {
        this.setState({
            pageYOffset: window.pageYOffset
        });
    }

    removeClassClickable = () => {
        let clickableElements = document.querySelectorAll('.clickable');

        [].forEach.call(clickableElements, function(clickableElement) {
            clickableElement.className = clickableElement.className.replace(/(^|\s)clickable*\S/g, '');
        });
    }

    detectLinksOnTheArea = (facePosition) => {

        if ( facePosition !== this.previousFacePosition ||
             this.state.pageYOffset !== this.scrolledY || 
             this.currentPageKey !== this.props.currentPageKey ||
             this.hasOneSecondPassedAfterAClick === false ) {

            this.clickableElementsCount = 0; 

            this.removeClassClickable();

            if ( facePosition !== 'border-top' && facePosition !== 'border-bottom' && facePosition !== 'border-left' && facePosition !== 'border-right' ) {

                let pointedAreaPosition = document.querySelector('.area.' + facePosition).getBoundingClientRect();

                for ( let x = pointedAreaPosition.left; x <= pointedAreaPosition.right; x += 10 ) {
                    
                    for ( let y = pointedAreaPosition.top; y <= pointedAreaPosition.bottom; y += 10 ) {

                        let element = document.elementFromPoint(x, y);

                        if ( ( ['A', 'BUTTON', 'INPUT'].indexOf(element.tagName) > -1 ||
                               getComputedStyle(element).cursor === 'pointer' ) &&
                               // to prevent adding classes multiple time
                               element.classList.contains('clickable') === false && 
                               element.parentNode.classList.contains('clickable') === false ) {

                                this.clickableElementsCount++;

                                if ( this.clickableElementsCount < 7 ) {
                                    element.classList.add('clickable', 'clickable' + this.clickableElementsCount);
                                }

                            }
                    }
                }
            }

        }

        if ( this.clickableElementsCount > 0 || facePosition === 'border-top' || facePosition === 'border-bottom' || facePosition === 'border-left' || facePosition === 'border-right' ) {
            this.detectExpression();
        }

        this.scrolledY = this.state.pageYOffset;
        this.previousFacePosition = facePosition;
        this.currentPageKey = this.props.currentPageKey;

    }

    triggerClickWithExpressions = (faceExpressions) => {

        let detected = null;
        let probability = 0;

        Object.keys(faceExpressions.expressions).forEach(function(expression) {
            if ( expression !== 'neutral' && faceExpressions.expressions[expression] > probability ) {
                probability = faceExpressions.expressions[expression];
                detected = expression;
            }
        });
        
        if ( probability > 0.85 && this.isClicked === false ) {

            if ( detected === 'happy') {
                if ( this.state.facePosition === 'border-top' ) {
                    document.querySelector('.scroll-area.scroll-up').click();
                } else if ( this.state.facePosition === 'border-bottom' ) {
                    document.querySelector('.scroll-area.scroll-down').click();
                } else if ( this.state.facePosition === 'border-right' ) {
                    document.querySelector('.back-forward-area.go-forward.enabled').click();
                } else if ( this.state.facePosition === 'border-left' ) {
                    document.querySelector('.back-forward-area.go-back.enabled').click();
                } else {
                    document.querySelector('.clickable1').click();
                }
            } else if ( detected === 'surprised') {
                document.querySelector('.clickable2').click();
            } else if ( detected === 'sad') {
                document.querySelector('.clickable3').click();
            } else if ( detected === 'angry') {
                document.querySelector('.clickable4').click();
            } else if ( detected === 'disgusted') {
                document.querySelector('.clickable5').click();
            } else if ( detected === 'fearful') {
                document.querySelector('.clickable6').click();
            }
    
            this.isClicked = true;

            this.hasOneSecondPassedAfterAClick = false;

            window.setTimeout(() => {
                this.hasOneSecondPassedAfterAClick = true;
            }, 1000);

        } else if ( probability <= 0.85 ) {

            this.isClicked = false;

        }

    }

    locateFacePositionOnAreaPointer = (noseTipX, noseTipY) => {

        if ( noseTipY < this.videoCenterY - this.tol * 3 && this.state.pageYOffset !== 0 ) {

            this.setState({ facePosition: 'border-top' });

        } else if ( noseTipY > this.videoCenterY + this.tol * 3 && this.state.windowHeight + this.state.pageYOffset < document.documentElement.scrollHeight ) {

            this.setState({ facePosition: 'border-bottom' });

        } else if ( this.props.goForwardEnabled && noseTipX < this.videoCenterX - this.tol * 3 ) {
            
            this.setState({ facePosition: 'border-right' });

        } else if ( this.props.goBackEnabled && noseTipX > this.videoCenterX + this.tol * 3 ) {

            this.setState({ facePosition: 'border-left' });

        } else if ( noseTipX < this.videoCenterX + this.tol &&
            noseTipX > this.videoCenterX - this.tol &&
            noseTipY < this.videoCenterY - this.tol ) { 

            this.setState({ facePosition: 'center-top' });

       } else if ( noseTipX < this.videoCenterX + this.tol &&
                   noseTipX > this.videoCenterX - this.tol &&
                   noseTipY > this.videoCenterY + this.tol ) { 

            this.setState({ facePosition: 'center-bottom' });

       } else if ( noseTipX < this.videoCenterX + this.tol &&
                   noseTipX > this.videoCenterX - this.tol ) {

            this.setState({ facePosition: 'center-center' });

       } else if ( noseTipX < this.videoCenterX + this.tol &&
                 noseTipY < this.videoCenterY - this.tol ) {

            this.setState({ facePosition: 'right-top' });

       } else if ( noseTipX < this.videoCenterX + this.tol &&
                   noseTipY > this.videoCenterY + this.tol ) {

            this.setState({ facePosition: 'right-bottom' });

       } else if ( noseTipX < this.videoCenterX + this.tol ) {

            this.setState({ facePosition: 'right-center' });

       } else if ( noseTipX > this.videoCenterX + this.tol &&
                   noseTipY < this.videoCenterY - this.tol ) {

            this.setState({ facePosition: 'left-top' });

       } else if ( noseTipX > this.videoCenterX + this.tol &&
                   noseTipY > this.videoCenterY + this.tol ) {

            this.setState({ facePosition: 'left-bottom' });

       } else if ( noseTipX > this.videoCenterX + this.tol ) {

            this.setState({ facePosition: 'left-center' });

       }

    }

    getUserVideo = (userVideo, videoWidth, videoHeight) => {

      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia( { video: { width: videoWidth, height: videoHeight } } )
        .then(function (stream) {
          userVideo.srcObject = stream;
        })
        .catch(function (err0r) {
            console.log("Something went wrong!");
        });
      }

    }

    detectExpression = async () => {

        try {

            const faceExpressions = await faceapi
            .detectSingleFace( this.video, new faceapi.TinyFaceDetectorOptions({inputSize: this.videoWidth}) )
            .withFaceExpressions();

            this.triggerClickWithExpressions(faceExpressions);

        } catch (error) {
            console.log(error);
        }
        
    }

    detectFace = async () => {

        const useTinyModel = true;

      try {
        
          this.detectionsWithLandmarks = await faceapi
            .detectSingleFace( this.video, new faceapi.TinyFaceDetectorOptions({inputSize: this.videoWidth}) )
            .withFaceLandmarks(useTinyModel);
        
          if (this._isMounted === false ) { return; }

          let noseTipX = this.detectionsWithLandmarks.landmarks.positions[30]['_x'];
          let noseTipY = this.detectionsWithLandmarks.landmarks.positions[30]['_y'];

          this.locateFacePositionOnAreaPointer(noseTipX, noseTipY);
          this.detectLinksOnTheArea(this.state.facePosition);

        } catch (error) {
          console.log(error);
        }
    };

    execution = () => {

        window.setInterval( () => {
            this.detectFace();
        }, 100);

    }

    async componentDidMount() {
        
        this._isMounted = true;
        await this.loadFaceapi();
        window.addEventListener("resize", this.updateWindowSize);
        window.addEventListener("scroll", this.updatePageYOffset);

        this.video = document.querySelector('#videoElement');

        this.getUserVideo(this.video, this.videoWidth, this.videoHeight);

        this.execution();

    }

    componentWillUnmount = () => {

      this._isMounted = false;
      window.clearInterval(this.execution);
      this.video.srcObject.getTracks()[0].stop();
      this.removeClassClickable();
      window.removeEventListener("resize", this.updateWindowSize);
      window.removeEventListener("scroll", this.updatePageYOffset);

    }

    render() {
        return (
            <div>
                {this.detectionsWithLandmarks === null ? <LoadingPage /> : ''}

                <div id="area-pointer" className={this.state.facePosition}>
                  <div className="area left-top"></div>
                  <div className="area center-top"></div>
                  <div className="area right-top"></div>
                  <div className="area left-center"></div>
                  <div className="area center-center"></div>
                  <div className="area right-center"></div>
                  <div className="area left-bottom"></div>
                  <div className="area center-bottom"></div>
                  <div className="area right-bottom"></div>
                  <Navigation 
                    faceInterface='areaPointer'
                    windowHeight={this.state.windowHeight}
                    goBackEnabled={this.props.goBackEnabled}
                    goForwardEnabled={this.props.goForwardEnabled}
                  />
                </div>
                <video autoPlay={true} id="videoElement"></video>
            </div>
        );
    };
};


export default AreaPointer;