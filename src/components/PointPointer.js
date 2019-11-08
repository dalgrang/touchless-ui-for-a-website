import React from 'react';
import * as faceapi from 'face-api.js';
import '../styles/PointPointer.css';
import Navigation from '../components/Navagation';
import LoadingPage from '../pages/LoadingPage';

class PointPointer extends React.Component {

    constructor(props) {
        super(props);
        this._isMounted = false;
        this.detectionsWithLandmarks = null;
        this.videoWidth = 320;
        this.videoHeight = 240;
        this.pointPointerHeight = 50;
        this.pointPointerWidth = 50;
        this.isClicked = false;
    }

    state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      pageYOffset: window.pageYOffset,
      pointerAtTheLeftBorder: false,
      pointerAtTheRightBorder: false,
      pointerAtTheBottomBorder: false,
      pointerAtTheTopBorder: false
    };

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

    triggerClickWithExpression = (faceExpressions, pointPointerPosition) => {

        let probability = faceExpressions.expressions['happy'];

        if ( probability > 0.85 && this.isClicked === false ) {

          document.elementFromPoint(pointPointerPosition.left, pointPointerPosition.top).click();
          
          this.isClicked = true;

        } else if ( probability <= 0.85 ) {

          this.isClicked = false;

        }
    }

    detectLink = (pointPointerPosition) => {

      let element = document.elementFromPoint(pointPointerPosition.left, pointPointerPosition.top);
      
      if ( ['A', 'BUTTON', 'INPUT'].indexOf(element.tagName) > -1 ||
           window.getComputedStyle(element).cursor === 'pointer' ||
           element.classList.contains('scroll-area') === true ||
           element.classList.contains('back-forward-area') === true ) {

        this.pointPointerEmoji.style.display = 'block';
        this.detectExpression(pointPointerPosition);

      } else {

        this.pointPointerEmoji.style.display = 'none';

      }
      
    }

    onTopOrBottomBorder = (pointerY) => {

      if ( pointerY < 0 ) {

        pointerY = 0;

        if ( this.state.pageYOffset !== 0 ) {

          this.setState({ pointerAtTheTopBorder: true });

        } else {

          this.setState({ pointerAtTheTopBorder: false });
        }

      } else {

        this.setState({ pointerAtTheTopBorder: false });

      }


      if ( pointerY > this.state.windowHeight - (this.pointPointerHeight / 2) ) {

        pointerY = this.state.windowHeight - (this.pointPointerHeight / 2);

        if ( this.state.pageYOffset + this.state.windowHeight < document.documentElement.scrollHeight ) {

          document.querySelector('html').style.overflowY = 'visible';
          this.setState({ pointerAtTheBottomBorder: true });

        } else {

          document.querySelector('html').style.overflowY = 'hidden';
          this.setState({ pointerAtTheBottomBorder: false });

        }

      } else {

        document.querySelector('html').style.overflowY = 'visible';
        this.setState({ pointerAtTheBottomBorder: false });

      }

      this.pointPointer.style.top = pointerY + 'px';

    }

    onLeftOrRightBorder = (pointerX) => {

      if ( pointerX > this.state.windowWidth - this.pointPointerWidth ) {

        pointerX = this.state.windowWidth - this.pointPointerWidth;

        this.setState({ pointerAtTheLeftBorder: true });

      } else if ( pointerX < 0 ) {

        pointerX = 0 - (this.pointPointerWidth / 1.5);
        this.setState({ pointerAtTheRightBorder: true });

      } else {

        this.setState({ pointerAtTheLeftBorder: false, pointerAtTheRightBorder: false});

      }

      this.pointPointer.style.right = pointerX + 'px';

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

    movePointPointer = (noseTipX, noseTipY, sensitivity) => {

      let pointerX = ( (noseTipX / this.video.videoWidth) * this.state.windowWidth * sensitivity) - ( (sensitivity - 1) * this.state.windowWidth / 2 );
      let pointerY = ( (noseTipY / this.video.videoHeight) * this.state.windowHeight * sensitivity) - ( (sensitivity - 1) * this.state.windowHeight / 2 );

      this.pointPointer.style.right = pointerX + 'px';
      this.pointPointer.style.top = pointerY + 'px';

      this.onLeftOrRightBorder(pointerX);
      this.onTopOrBottomBorder(pointerY);
      
    }

    detectExpression = async (pointPointerPosition) => {

      try {

          const faceExpressions = await faceapi
          .detectSingleFace( this.video, new faceapi.TinyFaceDetectorOptions({inputSize: this.videoWidth}) )
          .withFaceExpressions();
          
          this.triggerClickWithExpression(faceExpressions, pointPointerPosition);

      } catch (error) {
          console.log(error);
      }
      
  }

    detectFace = async () => {

      try {

          const useTinyModel = true;

          this.detectionsWithLandmarks = await faceapi
            .detectSingleFace( this.video, new faceapi.TinyFaceDetectorOptions({inputSize: this.videoWidth}) )
            .withFaceLandmarks(useTinyModel);

          if ( this._isMounted === false ) { return; }
          
          let noseTipX = this.detectionsWithLandmarks.landmarks.positions[30]['_x'];
          let noseTipY = this.detectionsWithLandmarks.landmarks.positions[30]['_y'];
          let pointPointerPosition = this.pointPointer.getBoundingClientRect();

          this.movePointPointer(noseTipX, noseTipY, 5);
          this.detectLink(pointPointerPosition);

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
      this.pointPointer = document.querySelector('#point-pointer');
      this.pointPointerEmoji = document.querySelector('#emoji-smile');

      this.getUserVideo(this.video, this.videoWidth, this.videoHeight);

      this.execution();

    }

    componentWillUnmount = () => {
      this._isMounted = false;
      clearInterval(this.execution);
      this.video.srcObject.getTracks()[0].stop();
      window.removeEventListener("resize", this.updateWindowSize);
      window.removeEventListener("scroll", this.updatePageYOffset);
    }

    render() {
        return (
            <div>
              {this.detectionsWithLandmarks === null ? <LoadingPage /> : ''}
              <div id="point-pointer" 
                   style={{width: this.pointPointerWidth + 'px', 
                           height: this.pointPointerHeight + 'px',
                           display: this.detectionsWithLandmarks === null ? 'none' : 'block'
                          }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.93 44.67"><path d="M24.53,11.78.51.79l0,26.41A16.94,16.94,0,0,0,26.64,41.45h0A17,17,0,0,0,24.53,11.78Z" /></svg>
                <div id="emoji-container"><div id="emoji-smile"></div></div>
              </div>
              <Navigation 
                faceInterface='pointPointer'
                windowHeight={this.state.windowHeight}
                pointerAtTheTopBorder={this.state.pointerAtTheTopBorder}
                pointerAtTheBottomBorder={this.state.pointerAtTheBottomBorder}
                pointerAtTheRightBorder={this.state.pointerAtTheRightBorder}
                pointerAtTheLeftBorder={this.state.pointerAtTheLeftBorder}
                goBackEnabled={this.props.goBackEnabled}
                goForwardEnabled={this.props.goForwardEnabled}
              />
              <video autoPlay={true} id="videoElement"></video>
            </div>
        );
    };
};


export default PointPointer;