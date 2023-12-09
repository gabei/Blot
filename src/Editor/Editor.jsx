import { Component } from 'react';
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
        <div className="Editor">
            <textarea onChange={this.handleChange}></textarea>
        </div>
        )
    }
}

export default Editor;