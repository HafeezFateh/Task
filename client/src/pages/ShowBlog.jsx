import { useEffect, useState } from "react";
import Header from "../components/header";
import Blogs from "./Blogs";
import axios from "axios";

function ShowBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Header />
      <div className="mx-5 flex flex-col mt-10">
        <h1 className="text-4xl font-semibold text-slate-100 mb-4">Blogs</h1>

        {loading ? (
          <p className="text-slate-500">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-slate-500">No blogs found.</p>
        ) : (
          blogs.map((blog) => (
            <Blogs
              key={blog.id}
              title={blog.title}
              passage={blog.passage}
            />
          ))
        )}
      </div>
    </>
  );
}

export default ShowBlog;
