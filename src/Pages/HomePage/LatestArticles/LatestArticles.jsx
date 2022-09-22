import React from 'react'
import { NavLink } from 'react-router-dom';

const LatestArticles = (props) => {
  const date = new Date().toLocaleDateString();
  return (
    // <div className='bigArticles0 a'>
    //   <div className='article10 b'>
    //     <NavLink
    //     state = {{
    //       titleHead: props.titleText,
    //       imageDisplay: props.img,
    //       descriptionContent: props.des,
    //     }}
    //     to="/Extension"
    //   >
    //     <div className='articleLeft0 c'>
    //       <img src={props.img} alt="not found" width={"100%"} height={"200px"}/>
    //     </div>
    //     <div className='articleRight0'>
    //       <div className='articleTitle0 e'>{props.titleText}</div>
    //       <div className='articleDes0 f'>{props.des}...</div>
    //       <p><b>{date}</b></p>
    //     </div>
    //     </NavLink>
    //     <br /><hr />
    //   </div>
    //   </div>
    <div className='a1'>
         <NavLink
         state = {{
           titleHead: props.titleText,
           imageDisplay: props.img,
           descriptionContent: props.des,
         }}
         to="/Extension"
       >
      <div className='a'>
        <div className='aa'>
          <img src={props.img} alt="not found" width={"99%"} height={"300px"}/>
        </div>
        <div className='bb'>
          <div className='cc'>
            <div className='cc1'>{props.titleText}</div>
            <div className='cc2'>{props.des}...</div>
            <div className='cc3'><b>{date}</b></div>
          </div>
        </div>
      </div>
      </NavLink>
      <hr style={{marginTop: "10px"}}/>
    </div>
  )
}

export default LatestArticles