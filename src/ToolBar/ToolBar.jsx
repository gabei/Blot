import './ToolBar.scss';

export default function ToolBar(props){
    return (
        <div className='ToolBar'>
            <h4>{props.header}</h4>
            {props.children}
        </div>
    )
}

