import { Component } from 'react';
import './Preview.scss';
import DOMPurify from 'dompurify';

class Preview extends Component {
    constructor(props){
        super(props);

        this.purifyHTML = this.purifyHTML.bind(this);
    }

    purifyHTML(){
        let purifiedHTML = DOMPurify.sanitize(this.props.preview);
        return {__html: purifiedHTML};
    }

    render(){
        return (
        <div 
            className="Preview" 
            dangerouslySetInnerHTML={this.purifyHTML()}></div>
        )
    }
}

export default Preview;