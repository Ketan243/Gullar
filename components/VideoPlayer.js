import {Button, Modal, Portal, Provider} from 'react-native-paper';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import AudioSub from './static/AudioSub';
import Back from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5'; // and this
import Orientation from 'react-native-orientation-locker';
import React from 'react';
import Slider from 'react-native-slider';
import Video from 'react-native-video'; /// alreadyimported this

//import Orientation from 'react-native-orientation';

const {width} = Dimensions.get('window');

const samplevideo = {
  uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
};

const bufferConfig = {
  minBufferMs: 15000,
  maxBufferMs: 50000,
  bufferForPlaybackMs: 2500,
  bufferForPlaybackAfterRebufferMs: 5000,
};

export default class App extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      currentTime: 0,
      duration: 0.1,
      paused: true,
      overlay: false,
      fullscreen: true,
      hidden: true,
      playbackSpeed: 1.0,
    };
    this.handlePlaybackSpeed = this.handlePlaybackSpeed.bind(this);
  }

  //handleDisplaySubtitle
  handleDisplaySubtitle = () => {
    this.setState({
      hidden: !this.state.hidden,
    });
    console.log(this.state.hidden);
  };

  //handle display of playback speed
  handlePlaybackSpeed = () => {
    this.setState({
      playbackSpeed: this.state.playbackSpeed + 0.5,
    });
  };

  lastTap = null;
  //double tap
  handleDoubleTap = (doubleTapCallback, singleTapCallback) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
      clearTimeout(this.timer);
      doubleTapCallback();
    } else {
      this.lastTap = now;
      this.timer = setTimeout(() => {
        singleTapCallback();
      }, DOUBLE_PRESS_DELAY);
    }
  };

  //time conversion
  getTime = t => {
    const digit = n => (n < 10 ? `0${n}` : `${n}`);
    // const t = Math.round(time);
    const sec = digit(Math.floor(t % 60));
    const min = digit(Math.floor((t / 60) % 60));
    const hr = digit(Math.floor((t / 3600) % 60));
    return t > 60 ? hr + ':' + min + ':' + sec : min + ':' + sec; // this will convert sec to timer string
    // 33 -> 00:00:33
    // this is done here
    // ok now the theme is good to look
  };

  load = ({duration}) => this.setState({duration}); // now here the duration is update on load video
  progress = ({currentTime}) => this.setState({currentTime}); // here the current time is upated

  //5 sec backwards
  backward = () => {
    this.video.seek(this.state.currentTime - 5);
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => this.setState({overlay: false}), 3000);
  };

  //5 sec forward
  forward = () => {
    this.video.seek(this.state.currentTime + 5); // here the video is seek to 5 sec forward
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => this.setState({overlay: false}), 3000);
  };

  //slider seek

  onslide = slide => {
    this.video.seek(slide * this.state.duration); // here the upation is maked for video seeking
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => this.setState({overlay: false}), 3000);
  };

  //seek Backward

  youtubeSeekLeft = () => {
    const {currentTime} = this.state;
    this.handleDoubleTap(
      () => {
        this.video.seek(currentTime - 5);
      },
      () => {
        this.setState({overlay: true});
        this.overlayTimer = setTimeout(
          () => this.setState({overlay: false}),
          3000,
        );
      },
    );
  };

  //seek forward

  youtubeSeekRight = () => {
    const {currentTime} = this.state;
    this.handleDoubleTap(
      () => {
        // this fn is used to detect the double tap first callback
        this.video.seek(currentTime + 5);
      },
      () => {
        this.setState({overlay: true});
        this.overlayTimer = setTimeout(
          () => this.setState({overlay: false}),
          3000,
        );
      },
    );
  };

  //playback speed

  playBackSpeed = () => {
    this.handleDoubleTap(
      () => {
        this.video.setRate(1.5);
      },
      () => {
        this.setState({overlay: true});
        this.overlayTimer = setTimeout(
          () => this.setState({overlay: false}),
          3000,
        );
      },
    );
  };

  //fullscreen

  fullscreen = () => {
    const {fullscreen} = this.state;
    if (fullscreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
    this.setState({fullscreen: !fullscreen});
  };

  //on Video end
  onEndVideo = slide => {
    this.setState({
      paused: true,
      currentTime: 0,
      overlay: false,
    });
  };

  render = () => {
    const {currentTime, duration, paused, overlay, fullscreen} = this.state;
    return (
      <View style={style.container}>
        <View style={fullscreen ? style.fullscreenVideo : style.video}>
          <Video
            fullscreen={fullscreen}
            rate={this.state.playbackSpeed}
            paused={paused} // this will manage the pause and play
            ref={ref => (this.video = ref)}
            source={samplevideo}
            style={{...StyleSheet.absoluteFill}}
            resizeMode="cover"
            onLoad={this.load}
            onProgress={this.progress}
            bufferConfig={bufferConfig}
            currentPlaybackTime={5000}
            onVideoEnd={this.onEndVideo}
          />
          <View style={style.overlay}>
            {/* now we can remove this not */}
            {overlay ? (
              <View style={{...style.overlaySet, backgroundColor: '#0006'}}>
                <View style={style.topContainer}>
                  <View style={style.header}>
                    <Back
                      name="arrow-back"
                      style={{alignSelf: 'flex-start'}}
                      size={25}
                      color="white"
                      onPress={() => {
                        this.props.navigation.goBack();
                      }}
                    />
                    <Text style={style.title}>Pacific Rim</Text>
                    <View />
                  </View>
                </View>
                <View
                  style={{
                    height: '40%',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="backward"
                    style={style.icon}
                    onPress={this.backward}
                  />
                  <Icon
                    name={paused ? 'play' : 'pause'}
                    style={style.icon}
                    onPress={() => this.setState({paused: !paused})}
                  />
                  <Icon
                    name="forward"
                    style={style.icon}
                    onPress={this.forward}
                  />
                </View>
                <Provider>
                  <Portal>
                    <Modal
                      visible={this.state.hidden}
                      contentContainerStyle={style.containerStyle}>
                      <AudioSub />
                    </Modal>
                  </Portal>
                </Provider>

                <View style={style.sliderCont}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Slider
                      // we want to add some param here
                      maximumTrackTintColor="gray"
                      minimumTrackTintColor="tomato"
                      thumbTintColor="white" // now the slider and the time will work
                      value={currentTime / duration} // slier input is 0 - 1 only so we want to convert sec to 0 - 1
                      onValueChange={this.onslide}
                      style={{flex: 1}}
                    />
                    <Text
                      style={{
                        color: 'white',
                        marginLeft: 5,
                        fontFamily: 'Nunito-Regular',
                      }}>
                      {this.getTime(duration)}{' '}
                    </Text>
                  </View>

                  <View style={style.timer}>
                    <Pressable
                      style={{flexDirection: 'row', alignItems: 'center'}}
                      onPress={() => this.playBackSpeed}>
                      <Back
                        name="ios-speedometer-outline"
                        size={20}
                        color="white"
                      />
                      <Text style={style.controlsBottom}>Speed(1x)</Text>
                    </Pressable>

                    <Pressable
                      style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Back name="lock-open-outline" size={20} color="white" />
                      <Text style={style.controlsBottom}>Lock</Text>
                    </Pressable>
                    <Pressable
                      onPress={this.handleDisplaySubtitle}
                      style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon name="keyboard" size={20} color="white" />
                      <Text style={style.controlsBottom}>Audio/Subtitle</Text>
                    </Pressable>

                    <Pressable
                      style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon name="step-forward" size={20} color="white" />
                      <Text style={style.controlsBottom}>Next</Text>
                    </Pressable>
                    <Icon
                      onPress={this.fullscreen}
                      name={fullscreen ? 'compress' : 'expand'}
                      style={{fontSize: 15}}
                    />
                  </View>
                </View>
              </View>
            ) : (
              <View style={style.overlaySet}>
                <TouchableNativeFeedback onPress={this.youtubeSeekLeft}>
                  <View style={{flex: 1}} />
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.youtubeSeekRight}>
                  <View style={{flex: 1}} />
                </TouchableNativeFeedback>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  overlaySet: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
  },
  sliderCont: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  topContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  containerStyle: {
    height: '60%',
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    padding: 20,
    marginBottom: '10%',
  },
  timer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    padding: 10,
  },
  video: {width, height: width * 0.6, backgroundColor: 'black'},
  fullscreenVideo: {
    backgroundColor: 'black',
    ...StyleSheet.absoluteFill,
    elevation: 1,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
  },
  controlsBottom: {
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
    color: 'white',
    marginLeft: 2,
  },
  overlayContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    padding: 10,
  },
  overlayText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
  },
});
