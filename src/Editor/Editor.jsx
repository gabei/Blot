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

    render(){
        return (
            <TextareaAutosize onChange={this.handleChange}></TextareaAutosize>
        )
    }
}

export default Editor;