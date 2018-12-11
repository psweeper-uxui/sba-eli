import React, {Component} from "react";
import ReactPlayer from "react-player";
import { Button, Header, Icon } from "semantic-ui-react";
import { findDOMNode } from "react-dom";
import screenfull from "screenfull"; 

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

  handleKeyEvent = (e) => {
    if (e.keyCode == 32) {
      console.log("Space Pressed");
      this.playPause();
    }
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
    const title = "Video Name";
    const vidLength = "12 minutes";
    const { url, playing, volume, muted,  pip, played, loaded, duration, playbackRate, loop } = this.state

    return(
      <div>
        <h3>{learningObjective}</h3>
        <Header as="h1">{title}</Header>
        <em>Exercise ({vidLength})</em>
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
        <div className="player-controls">
          <div className="seek-controls">
            <input
              type='range' min={0} max={1} step='any'
              value={played}
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp}
            />
          </div>
          <Button icon basic onClick={this.toggleMuted}>
            {muted ? <Icon name='volume off' size='large'/> : <Icon name='volume up' size='large'/>}
          </Button>
          <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
          <Button.Group basic icon>
            <Button>
              <Icon name='angle double left'/>
            </Button>
            <Button onClick={this.playPause}>
              {playing ? <Icon name='pause circle outline' size='big'/> : <Icon name='play circle outline' size='big' />}
            </Button>
            <Button>
              <Icon name='angle double right'/>
            </Button>
          </Button.Group>
          <Button.Group basic icon>
            <Button>
              <Icon name='closed captioning outline'/>
            </Button>
            <Button onClick={this.onClickFullscreen}>
              <Icon name='expand arrows alternate' />
            </Button>
          </Button.Group>
          <span>
            Muted
            <input id="muted" type="checkbox" checked={muted} onChange={this.toggleMuted} />
          </span>
        </div>
      </div>
    )
  }
}
