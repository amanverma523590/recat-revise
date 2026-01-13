// import { useEffect, useState } from "react";
// import axios from 'axios'
// import './mousedemo.css'

import { useState } from "react"

// export function Mouse() {
//   const [mobiles, setMobiles] = useState([{ img_src: null }]);
//   const[previewSrc,setPreviewSrc] = useState('/assets/google.png')

//     useEffect(()=>{
//         axios.get(`mobile.json`)
//         .then(response=>{
//             console.log(response)
//             setMobiles(response.data)
//         })
//     },[])

//   function handleMouseOver(e){
//     setPreviewSrc(e.target.src)
//   }

//   return (
//     <div className="container-fluid">
//       <div className="row mt-4">
//         <div className="col-1">
//             {
//                 mobiles.map((mobile,i)=>(
//                     <div key={i} className="my-4">
//                         { (mobile.img_src) ? ( <img src={mobile.img_src} alt="noimg" height="50" width="50" onMouseOver={handleMouseOver} /> ) : ( <div>no img</div> ) }
//                     </div>
//                 ))
//             }
//         </div>
//         <div className="col-11">
//             <img src={previewSrc} alt="no img" width='300' heght='400' />
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import "./mouseanimation.css";

// export function Mouse() {
//   const [animation, setAnimation] = useState({
//     animationName: "spin",
//     animationDuration: "8s",
//     animationIterationCount: "infinite",
//     animationTimingFunction: "linear",
//   });

//   function handleMouseDown() {
//     setAnimation({
//       animationName: "spin",
//       animationDuration: "1s",
//       animationIterationCount: "infinite",
//       animationTimingFunction: "linear",
//     });
//   }
//   function handleMouseUp() {
//     setAnimation({
//       animationName: "spin",
//       animationDuration: "8s",
//       animationIterationCount: "infinite",
//       animationTimingFunction: "linear",
//     });
//   }

//   return (
//     <div
//       className="container-fluid d-flex justify-content-center align-items-center "
//       style={{ height: "100vh", backgroundColor: "gray" }}
//     >
//       <div>
//         <img
//           src="/assets/iphone.png"
//           alt="no img"
//           height={100}
//           width={100}
//           onMouseDown={handleMouseDown}
//           onMouseUp={handleMouseUp}
//           style={animation}
//         />
//       </div>
//     </div>
//   );
// }


export function Mouse(){

  const[styleObj,setStyleObj] = useState( {position:'',top: '', left: ''} );

  function handleMouseMove(e){
    setStyleObj({
      position:'absolute',
      left : e.clientX + 'px',
      top : e.clientY + 'px'
    })
  }

  return(
    <div onMouseMove={handleMouseMove}>
      <div style={{height:'400px', width:'400px', backgroundColor:'lightgray',display:'flex',justifyContent:'center',alignItems:'center', marginLeft:'300px'}}>
        Move mouse to test
      </div>
      <img src="/assets/nepal.png" alt="no img"   height={50} width={50} style={styleObj} />
    </div>
  )
}
