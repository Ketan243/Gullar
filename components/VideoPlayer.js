import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native'
import MediaControls,{PLAYER_STATES} from 'react-native-media-controls';
import React, { Component } from 'react'
import JWPlayer, { JWPlayerState } from 'react-native-jw-media-player';
import Icon from 'react-native-vector-icons/Ionicons';
import Resize from 'react-native-vector-icons/Entypo';
import Video from 'react-native-video'

const { width, height } = Dimensions.get('window')
export default class VideoPlayer extends Component {
    static defaultProps = {
        toggleReszeModeOnFullScreen: false,
        controlAnimationTiming:500,
        doubleTapTime:130,
        playInBackground: false,
        playWhenInactive: false,
        resizeMode:'contain',
        isFullScreen: false,
        showOnStart: true,
        repeat:false,
        muted:false,
        volume:1,
        title:'',
        rate:1,
    };
    constructor(props) {
      super(props)
    
      this.state = {
        currentTime:0,
        duration:0,
        isFullScreen:false,
        isLoading:true,
        paused:false,
        playerState:PLAYER_STATES.PLAYING,
        screenType:'contain',
      };
    };
    
    videoPlayer;
    state={
        currentTime:0,
        duration:0,
        isFullScreen:false,
        isLoading:true,
        paused:false,
        playerState:PLAYER_STATES.PLAYING,
        screenType:'contain',
    }

    onSeek = (seek) => {
        this.videoPlayer.seek(seek);
    }

    onPaused = playerState => {
        this.setState({
            paused:!this.state.paused,
            playerState,
        })
    }

    onReplay = () => {
        this.setState({playerState:PLAYER_STATES.PLAYING})
        this.videoPlayer.seek(0)
    }

    onProgress = data => {
        const {isLoading, playerState} = this.state;
        if(!isLoading && playerState !== PLAYER_STATES.ENDED){
            this.setState({currentTime:data.currentTime})
        }
    }

    onForward = () => {
        let newCurrentTime = this.state.currentTime + 10;
        if(newCurrentTime > this.state.duration){
            newCurrentTime = this.state.duration
        }
        this.setState({currentTime:newCurrentTime})
        this.videoPlayer.seek(newCurrentTime)
    }

    onBackward = () => {
        let newCurrentTime = this.state.currentTime - 10;
        if(newCurrentTime < 0){
            newCurrentTime = 0
        }
        this.setState({currentTime:newCurrentTime})
        this.videoPlayer.seek(newCurrentTime)
    }
    
    onLoad = data => this.setState({duration:data.duration, isLoading:false})

    onLoadStart = data => this.setState({isLoading:true});

    onEnd = () => this.setState({playerState:PLAYER_STATES.ENDED})

    onError = () => alert(error)

    exitFullScreen = () => {
        alert('exit full screen')
    }

    enterFullScreen = () => {
        if(this.state.screenType === 'content'){
            this.setState({screenType:'cover'})
            StatusBar.setHidden(true)
        }
        else{
            this.setState({screenType:'content'})
        }
        
    }

    renderToolbar = () => (
        <View style={styles.toolbar}>   
            <Text>My custom toolbar</Text>
            <Text>{this.state.duration}</Text>
        </View>
    )

    onSeeking = currentTime => this.setState({currentTime})
    

 

  render() {
    return (
      <View style={styles.container}>
    <Video
            //posterSource is used to show the image before the video starts playing
            onEnd={this.onEnd}
            onLoad={this.onLoad}
            onLoadStart={this.onLoadStart}
            onProgress={this.onProgress}
            paused={this.state.paused}
            ref={videoPlayer => this.videoPlayer = videoPlayer}
            resizeMode={this.state.screenType}
            onFullScreen={this.enterFullScreen}
            source={{uri: 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4'}}
            style={styles.mediaPlayer}
            controls={true}
            volume={13}
        />
        <View style={styles.controls}>
            <Icon name="play-back"size={25} color="white" onPress={this.onBackward}/>
            <Icon name="ios-play"size={25} color="white" onPress={this.onPaused}/>
            <Icon name="play-forward" size={25} color="white" onPress={this.onForward}/>
            <Resize name="resize-full-screen" size={25} color="white" onPress={this.enterFullScreen}/>
        </View>
        

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems:'center',
        padding:10
    },
    mediaPlayer: {
        width:'100%',
        aspectRatio:16/9,
        borderRadius:10,
    },
    controls: {
        marginTop:10,
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around'
    },
    toolbar: {
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius:5
    },
    desc:{
        marginTop:10,
        height:50,
        width:300,
        backgroundColor:'red',

    }
})