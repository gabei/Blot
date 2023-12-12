import { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './Editor.scss';
import ToolBar from '../ToolBar/ToolBar';

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
            <div class="Editor">
                <ToolBar header={'Editor'}></ToolBar>
                <TextareaAutosize 
                onChange={this.handleChange}></TextareaAutosize>
            </div>
        )
    }
}

export default Editor;