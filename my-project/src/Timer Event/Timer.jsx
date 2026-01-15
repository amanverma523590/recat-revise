// //Bouncing , Debouncing

// import { useRef, useState } from "react"

// export function Timer(){

//     const[msg,setMsg] = useState('Volume 0');

//     let thread2 = useRef(null);
//     let thread3 = useRef(null);

//     function Level1(){
//         setMsg('Volume increased to 20%');
//     }
//     function Level2(){
//         setMsg('Volume increased to 50%');
//     }
//     function Level3(){
//         setMsg('Volume increased to 100%');
//     }
//     function Level4(){
//         setMsg('Volume increased to 110%');
//     }

//     function handleVolumeUp(){
//             setTimeout(Level1,3000);
//             thread2.current = setTimeout(Level2,5000);  //iska refernce creent me niakl liya aur sueref me store kar diya beacuse memeory me mujhe uska adrees nahi pata it help in finding
//              thread3.current=  setTimeout(Level3,7000);
//              setTimeout(Level4,10000)
//             // Level1();
//             // Level2();
//             // Level3();
//     }
//     function handleCancelClick(){
//         clearTimeout(thread2.current);
//         clearTimeout(thread3.current)
//     }

//     return(
//         <div className="container-fluid">
//           <div className="my-4">
//             <button onClick={handleCancelClick} className="btn btn-warning mx-2">Cancel Level 2</button>
//             <button onClick={handleVolumeUp} className="btn btn-primary bi bi-volume-up"></button>
//             <span className="mx-2">{msg}</span>
//           </div>
//         </div>
//     )
// }

//Throttling, setInterval , clear Interval

//current time

// export function Timer(){

//     const[time,setTime] = useState();

//     function Timer(){
//         var now = new Date();
//         var time = now.toLocaleTimeString();
//         setTime(time);
//     }

//     useEffect(()=>{
//         setInterval(Timer,1000);
//     },[])

//     return(
//         <div>
//            <h1>Time is :{time}</h1>
//         </div>
//     )
// }

// import { useRef, useState } from "react";

// export function Timer(){

//     const[sec,setSec] = useState(0);
//     const[ms,setMs] = useState(0);

//     let thread = useRef(null);

//     let count = 0;
//     let second = 0;
//     function RunMiliSecond(){
//         count++;
//         if(count === 999){
//             second++;
//             count = 0;
//             setSec(second);
//         }
//         setMs(count);
//     }

//     function handleStart(){
//         thread.current = setInterval(RunMiliSecond,0.1)
//     }
//     function handleEnd(){
//         clearInterval(thread.current)
//     }

//     return(
//         <div className="container-fluid">
//             <div className="mt-4 text-center d-flex justify-content-center">
//                 <div className="mx-2">
//                     <span>00</span>
//                     <span style={{fontSize:"10px"}} >h</span>
//                 </div>
//                 <div className="mx-2">
//                     <span>00</span>
//                     <span style={{fontSize:'10px'}}>m</span>
//                 </div>
//                 <div className="mx-2">
//                     <span>{sec}</span>
//                     <span style={{fontSize:'10px'}} >s</span>
//                 </div>
//                 <div className="mx-2">
//                     <span>{ms}</span>
//                     <span style={{fontSize:"10px"}} >m</span>
//                 </div>
//             </div>
//             <button onClick={handleStart} className="btn btn-primary">Start</button>
//             <button onClick={handleEnd} className="btn btn-danger mx-2">End</button>
//         </div>
//     )
// }

//shoping using useref and setInterval;

import { useEffect, useRef, useState } from "react";
import axios from 'axios';

export function Timer() {

    const[product,setProduct] = useState({ id:'',title:'',price:0, category:'', image:null, description:'', rating:{rate:0,count:0} });
    const[status,setStatus] = useState('Slide show manual');

    let productId = useRef(1);
    let thread = useRef(null);

    function LoadCategories(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            setProduct(response.data);
            console.log(response.data)
        })
    }

    useEffect(()=>{
        LoadCategories(1);
    },[]);
    function LoadProductAuto(){
        console.log(productId.current);
        productId.current = productId.current+1;
        axios.get(`https://fakestoreapi.com/products/${productId.current}`)
        .then(response=>{
            setProduct(response.data)
        })
    }

    function handlePreviousClick(){
        productId.current = productId.current -1;
        LoadCategories(productId.current);
        setStatus('slide-show manual')
    }
    function handleSliderChange(e){
        productId.current = parseInt(e.target.value);
        LoadCategories(productId.current)
        setStatus('slide-show manual')
    }
    function handleNextClick(){
        productId.current = productId.current+1;
        LoadCategories(productId.current);
        setStatus('slide-show manual')
    }
    function handlePlayClick(){
        thread.current = setInterval(LoadProductAuto,5000);
        setStatus('slid-show started');
        console.log(productId.current)
    }
    function handePauseClick(){
        clearInterval(thread.current);
        productId.current = productId.current;
        setStatus('slide-show stop')
    }

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="card mt-4 w-50">

        <div className="card-hearder text-center " style={{height:'80px'}}>
            <div>{product.title}</div>
            <div className="fw-bold mt-2">({status})</div>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                    <button onClick={handlePreviousClick} className="btn btn-dark bi bi-chevron-left"></button>
                </div>
                <div className="col-10 position-relative">
                    <div className="badge fs-5 bg-danger text-white rounded rounded-circle position-absolute top-0 end-0">
                        {product.price.toLocaleString( 'en-us', {style:'currency', currency:'USD'} )}
                    </div>
                    <img src={product.image} alt="no" width="90%" height="300" />
                    <div className="mt-3">
                        <input type="range" max={20} min={1} onChange={handleSliderChange} value={productId.current} className="form-range" />
                    </div>
                </div>

                <div className="col-1 d-flex justify-content-center flex-column align-items-center">
                    <button onClick={handleNextClick} className="btn btn-dark bi bi-chevron-right mx-2"></button>
                </div>

            </div>
        </div>


        <div className="card-footer text-center">
            <button  onClick={handlePlayClick} className="btn btn-success mx-2 bi bi-play"></button>
            <button onClick={handePauseClick} className="btn btn-danger mx-2 bi bi-pause"></button>
        </div>

      </div>
    </div>
  );
}
