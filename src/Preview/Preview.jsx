import { Component } from 'react';
import './Preview.scss';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import ToolBar from '../ToolBar/ToolBar';

marked.use({ 
    gfm: true,
    breaks: true
 });

class Preview extends Component {
    constructor(props){
        super(props);
        this.purifyHTML = this.purifyHTML.bind(this);
    }

    purifyHTML(){
        return {__html: DOMPurify.sanitize(this.props.preview)};
    }

    render(){
        return (
            <div className="Preview">
                <ToolBar header="Preview"></ToolBar>
                <div 
                className="markdown-body" 
                dangerouslySetInnerHTML={this.purifyHTML()}></div>
            </div>
        
        )
    }
}

export default Preview;