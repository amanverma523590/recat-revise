import { useEffect, useState } from "react";
import axios from 'axios'
import './mousedemo.css'

export function Mouse() {
  const [mobiles, setMobiles] = useState([{ img_src: null }]);
  const[previewSrc,setPreviewSrc] = useState('/assets/google.png')

    useEffect(()=>{
        axios.get(`mobile.json`)
        .then(response=>{
            console.log(response)
            setMobiles(response.data)
        })
    },[])


  function handleMouseOver(e){
    setPreviewSrc(e.target.src)
  }

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-1">
            {
                mobiles.map((mobile,i)=>(
                    <div key={i} className="my-4">
                        { (mobile.img_src) ? ( <img src={mobile.img_src} alt="noimg" height="50" width="50" onMouseOver={handleMouseOver} /> ) : ( <div>no img</div> ) }
                    </div>
                ))
            }
        </div>
        <div className="col-11">
            <img src={previewSrc} alt="no img" width='300' heght='400' />
        </div>
      </div>
    </div>
  );
}
