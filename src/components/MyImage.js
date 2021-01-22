import {Image} from 'react-bootstrap';
import "./MyImage.css"

function MyImage(props) {
  return(
    <div className={`my-image ${props.rounded? "rounded" : ""} ${props.shadow? "shadow" : ""} ${props.margin ? "margin" : ""}`} {...props}>
      <Image {...props}/>
      <p className = {`image-alt ${props.rounded? "rounded" : ""}`}>{props.alt}</p>
    </div>
  )
}

export default MyImage;
