import React from 'react'
import './main.css'
export const SkeletonThumbnail = (props) => {
  let size = 'SkeletonThumbnail-small';
  switch (props.size) {
    case 'medium':
      size = 'SkeletonThumbnail-medium';
      break;
    case 'large':
      size = 'SkeletonThumbnail-large';
      break;
    default:
      size = 'SkeletonThumbnail-small';
      break;
  }
  let round = props.round === true ? 'SkeletonThumbnail-round' : ''
  return (
    <div className="skeleton">
      <div className={`SkeletonThumbnail ${size} ${round}`}></div>
    </div>
  )
}
export default SkeletonThumbnail