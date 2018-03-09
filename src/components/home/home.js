import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import Library from '../library/library';


class Home extends Component {
    constructor(props) {
        super(props)
        this.handleMove = this.handleMove.bind(this);
        this.state = {x:0, y:0};

    }
    handleMove(e){
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }


    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMove}>
                {/* 56D */}
                <audio controls>
                    <source src='http://www.thesoundarchive.com/play-wav-files.asp?sound=archer-sounds/bloody-mary.mp3' type="audio/mpeg" />
                </audio>
               <a href = '/archive'><button>Go to the Archive</button></a>

               {/*36H*/}
            <Library/>
            <p>The current mouse position is: ({this.state.x}, {this.state.y})</p>
            </div>

        )
    }
}


export default (Home)
