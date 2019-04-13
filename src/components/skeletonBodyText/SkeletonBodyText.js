import React from 'react'
import './main.css'
export const SkeletonBodyText = (props) => {
    const lines = props.lines ? props.lines : 3;
    let rows = [];
    for (var i = 0; i < lines; i++) {
        rows.push(<div class="SkeletonBodyText"></div>);
    }
    return (
        <div class="SkeletonBodyText__SkeletonBodyTextContainer">
            {rows}
        </div>
    )
}
export default SkeletonBodyText