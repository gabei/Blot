import React from "react";

export const MarkDown = React.forwardRef((props, ref) => {
    return (
        <div
        ref={ref} 
        className="markdown-body" 
        dangerouslySetInnerHTML={props.html}></div>
    )
});



