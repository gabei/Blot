import { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './Editor.scss';

class Editor extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.update(e.target.value);
    }

    updateHeight(){

    }

    render(){



        return (
        <div className="Editor">
            <TextareaAutosize 
                onChange={this.handleChange}></TextareaAutosize>
        </div>
        )
    }
}

export default Editor;