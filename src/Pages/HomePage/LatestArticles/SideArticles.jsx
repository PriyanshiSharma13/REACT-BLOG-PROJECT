// import React from 'react'
// import { NavLink } from 'react-router-dom';

// const SideArticles = (props) => {
//   const date = new Date().toLocaleDateString();
//   return (
//     <div>
//     <div className='sideArticlesBox p1'>
//     <NavLink
//         state = {{
//           titleHead: props.titleText,
//           imageDisplay: props.img,
//           descriptionContent: props.des,
//         }}
//         to="/Extension"
//       >
//       <div className='sideArticlesImage p2'>
//         <img src={props.img} alt="not found" width={"100%"} />
//       </div>
//       <div className='sideArticlesContent'>
//         <div className='sideTitle'>{props.titleText}</div>
//         <p>{date}</p>
//       </div>
//       </NavLink>
//     </div>
//     <hr />
//     </div>
//   )
// }

// export default SideArticles

//------------------------------------------

import React from 'react'
import { NavLink } from 'react-router-dom';

const SideArticles = (props) => {
  const date = new Date().toLocaleDateString();
  return (
    <div className='p1'>
         <NavLink
         state = {{
           titleHead: props.titleText,
           imageDisplay: props.img,
           descriptionContent: props.des,
         }}
         to="/Extension"
       >
      <div className='p'>
        <div className='pp'>
          <img src={props.img} alt="not found" width={"99%"} height={"200px"}/>
        </div>
        <div className='qq'>
          <div className='rr'>
            <div className='rr1'>{props.titleText}</div>
            <div className='rr3'><b>{date}</b></div>
          </div>
        </div>
      </div>
      </NavLink>
      <hr style={{marginTop: "10px"}}/>
    </div>
  )
}

export default SideArticles