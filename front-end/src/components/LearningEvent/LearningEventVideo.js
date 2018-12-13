import React, {Component} from "react";
import ReactPlayer from "react-player";
import { Button, Header, Icon } from "semantic-ui-react";
import { findDOMNode } from "react-dom";
import Duration from "./LearningEventVideo/Duration";
import screenfull from "screenfull";
import "./Slider.css"

export default class LearningEventVideo extends Component {
  state = {
    url: "http://movietrailers.apple.com/movies/marvel/avengers-endgame/avengers-endgame-trailer-1_h720p.mov",
    playing: false,
    volume: 0.8,
    muted: false,
    pip: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbbackRate: 1.0,
    loop: false
  }

  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  setVolume = (e) => {
    this.setState({volume: parseFloat(e.target.value) })
  }

  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  onSeekMouseDown = (e) => {
    this.setState({ seeking: true })
  }

  onSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  onSeekMouseUp = (e) => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  onProgress = (state) => {
    if(!this.state.seeking) {
      this.setState(state)
    }
  }

  onDuration = (duration) => {
    this.setState({ duration })
  }

  onClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player))
  }

  ref = (player) => {
    this.player = player
  }

  render() {
    const learningObjective = "Learning Objective";
    const title = this.props.title 
    const { url, playing, volume, muted,  pip, played, loaded, duration, playbackRate, loop } = this.state
    const vidLength = <Duration seconds={duration} />;

    const seekStyle = {
      width: '640px'
    };

    const volStyle = {
      width: '50px'
    };

    return(
      <div>
        <h3>{learningObjective}</h3>
        <Header as="h1">{title}</Header>
        <em>Exercise ({vidLength} minutes)</em>
        <div className="player-wrapper">
          <ReactPlayer
            ref={this.ref}
            url={url}
            pip={pip}
            playing= {playing}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
          />
        </div>
        <div className="player-controls" style={{width: '640px'}}>
          <div className="seek-controls">
            <input
              type='range' min={0} max={1} step='any'
              value={played}
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp}
              style={seekStyle}
              class="slider"
            />
          </div>
          <div className="elapsed-time" style={{float: 'right'}}>
            <Duration seconds={duration * played} />/<Duration seconds={duration} />
          </div>
          <div className="bottom-controls" style={{paddingTop: "30px"}}>
            <Button.Group basic icon>
              <Button onClick={this.playPause}>
                {playing ? <Icon name='pause' size='big'/> : <Icon name='play' size='big' />}
              </Button>
            </Button.Group>
            <Button icon basic onClick={this.toggleMuted}>
              {muted ? <Icon name='volume off' size='big'/> : <Icon name='volume up' size='big'/>}
            </Button>
            <input type='range' min={0} max={1} step='any'
              value={volume}
              onChange={this.setVolume}
              style={volStyle}
              class="slider"
            />
            <Button.Group basic icon floated='right'>
              <Button>
                <Icon name='closed captioning outline' size='big'/>
              </Button>
              <Button onClick={this.onClickFullscreen}>
                <Icon name='expand' size='big' />
              </Button>
            </Button.Group>
          </div>
        </div>
      </div>
    )
  }
}
