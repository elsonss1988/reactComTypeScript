// @flow 
import * as React from 'react';
import './Title.css'

interface TitleProps{
    // content:string;
    color?:string;
    onClick: () => void
}

export const Title:React.FunctionComponent<TitleProps> = (props)=>{
// (props: TitleProps) => {
    const {color="green", children,onClick}=props
    return (
        <div>
            <h1 className="Title" style={{color:color}} onClick={onClick}>
            {children}
            {/* {props.children} */}
            {/* {props.content} */}
            </h1>
        </div>
    );
};