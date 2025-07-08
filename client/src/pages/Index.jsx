import { Link } from "react-router-dom";

function Index(){
    return (
        <>
            
            <div className="min-h-screen flex flex-col gap-4 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 items-center justify-center">
                <h1 className="font-semibold text-white my-5 text-4xl text-center">ProTech</h1>
                <Link to='/register'className="bg-slate-300/30 text-white font-semibold p-4 text-center rounded-lg w-[200px]">Register</Link>
                <Link to='/login'   className="bg-slate-300/30 text-white font-semibold p-4 text-center rounded-lg w-[200px]">Login</Link>
                <Link to='/add-blog'className="bg-slate-300/30 text-white font-semibold p-4 text-center rounded-lg w-[200px]">Add Blog</Link>

            </div>
        </>
    )
}

export  default Index;