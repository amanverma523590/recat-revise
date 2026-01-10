import { useEffect, useState } from 'react'
import './fetch.css'
import axios from 'axios'

export function FetchApi(){

    const[courses,setCourses] = useState( [ {title : '', duration : '', teacher: ' ', country : null} ] )

    useEffect(()=>{
        axios.get('course.json')
        .then(response=>{
            setCourses(response.data)
        })
    },[])

    return(
        <div className='container-fluid'>
            <main className='d-flex flex-wrap mt-4 bg-success '>
                {
                    courses.map((course,index)=>(
                        <div key={index} className='card m-2 p-2 bg-danger'>

                            { course.country ? ( <img src={course.country} alt="no img" height='120' className='img-top' /> ) : ( <div>no img</div> ) }

                            <div className='card-header'>
                                <div>{course.title}</div>
                            </div>

                            <div className='card-body'>
                                <dl>
                                    <dt>Teacher</dt>
                                    <dd>{course.teacher}</dd>
                                    <dt>Duration</dt>
                                    <dd>{course.duration}</dd>
                                </dl>
                            </div>
                            
                        </div>
                    ))
                }
            </main>
        </div>
    )
}