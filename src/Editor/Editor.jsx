import React, { Component } from 'react';
import './Editor.scss';

class Editor extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.heightRef = React.createRef();
    }

    handleChange(e){
        this.props.update(e.target.value);
        this.updateHeight();
    }

    updateHeight(){
        console.log(this.heightRef.current.scrollHeight);
        /*
        Update the Editor and Text Area's height to match the textarea's scrollHeight. This prevents a scroll bar from appearing. Once these elements reach set max-height, stop adjusting.
        */
    }

    render(){



        return (
        <div className="Editor">
            <textarea 
                ref={this.heightRef}
                onChange={this.handleChange}></textarea>
        </div>
        )
    }
}

export default Editor;