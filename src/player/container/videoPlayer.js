import React, {Component} from 'react';
import VideoPlayerLayout from '../component/videoPlayerLayout';
import Title from '../component/title';
import Video from '../component/video'; 
import PlayPause from '../component/play-pause';
import Timer from '../component/timer';
import PlayVideoControls from '../component/video-player-controls'
import FormattedTime from '../utiles/util.js'
import ProgressBar from '../component/progress-bar'
import Spinner from '../component/spinner'
import Volume from '../component/volume'
import FullScreen from '../component/full-screen'
import { connect } from 'react-redux';

class VideoPlayer extends Component {
    
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        volume: 1,
        volumenActual: null,
    }

    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetadata = (event) => {
        this.Video = event.target;
        this.setState({
            duration: this.Video.duration
        })
    }

    handleOnTimeUpdate = (event) => {
        this.setState ({
            currentTime: this.Video.currentTime
        })
    }

    handleProgressChange = (event) => { 
        this.Video.currentTime = event.target.value
    }

    handleSeeking = (event) => {
        this.setState({
            loading: true
        })
    }

    handleSeeked = (event) => {
        this.setState({
            loading: false
        })
    }

    handleVolumeChange = (event) => {
        this.Video.volume = event.target.value
        this.setState({ volume: this.Video.volume })
    }

    toggleVolume = () => {
        const volumenActual = this.Video.volume
        if(this.Video.volume !== 0){
            this.Video.volume = 0
            this.setState({volumenActual})
        }else{
            this.Video.volume = this.state.volumenActual
        }
    }

    handleFullScreen = (event) => {
        if(!document.webkitIsFullScreen){
            this.player.webkitRequestFullScreen()
        }else{
            document.webkitExitFullscreen()
        }
    }

    setRef = element => {
        this.player = element
    }

    render(){
        return(
            <VideoPlayerLayout
                setRef={this.setRef}    
            >
                <Title title={this.props.media.get('title')}>
                </Title>
                <PlayVideoControls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    >
                    </PlayPause>
                    <Timer
                        duration={FormattedTime(this.state.duration)}
                        currentTime={FormattedTime(this.state.currentTime)}
                    >
                    </Timer>
                    <ProgressBar                        
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                    >
                    </ProgressBar>
                    <Volume
                        handleVolumeChange={this.handleVolumeChange}
                        handleVolumeClick={this.toggleVolume}
                    >

                    </Volume>
                    <FullScreen
                        handleFullScreen={this.handleFullScreen}
                    >
                    
                    </FullScreen>
                </PlayVideoControls>
                <Spinner
                    active={this.state.loading}
                >
                </Spinner>
                <Video 
                    src={this.props.media.get('src')} 
                    autoPlay={this.props.autoplay}
                    pause={this.state.pause}
                    currentTime={this.state.currentTime}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleOnTimeUpdate={this.handleOnTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                >
                </Video>
            </VideoPlayerLayout>
        )
    }

}

function mapStateToProps (state, props) {
    return{
        media: state.get('data').get('entities').get('media').get(props.id)
    }    
}

export default connect(mapStateToProps)(VideoPlayer);