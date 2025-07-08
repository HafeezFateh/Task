import React from 'react';

function Blogs(props){
    return(
    <>
        <div className="bg-slate-100 rounded-lg my-5 p-4">
            <p className="text-xl font-semibold text-slate-800">{props.title}</p>
            <p className="text-slate-600">{props.passage}</p>
            <div className='flex justify-end'>
                <a href="" className='text-blue-800 font-semibold'>Read more</a>
            </div>
        </div>
    
    </>)
}

export default Blogs;