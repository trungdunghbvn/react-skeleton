import React from 'react'
import './main.css'
export const SkeletonDisplayTitle = (props) => {
  let size = 'SkeletonDisplayTitle-small';
  switch (props.size) {
    case 'medium':
      size = 'SkeletonDisplayTitle-medium';
      break;
    case 'large':
      size = 'SkeletonDisplayTitle-large';
      break;
    default:
      size = 'SkeletonDisplayTitle-small';
      break;
  }
  return (
    <div className="skeleton">
      <div className={`SkeletonDisplayTitle ${size}`}></div>
    </div>
  )
}
export default SkeletonDisplayTitle