import { useState } from "react";
import axios from "axios";


function AddBlog() {
  const [title, setTitle] = useState("");
  const [passage, setPassage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/blogs", {
        title,
        passage,
      });

      if (res.status === 201) {
        setMessage("✅ Blog added successfully!");
        setTitle("");
        setPassage("");
      } else {
        setMessage("❌ Failed to add blog.");
      }
    } catch (err) {
      console.error("Add blog error:", err);
      setMessage("❌ Server error.");
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen">
    
      <div className="max-w-xl mx-5 mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-slate-800">Add a Blog</h2>

        {message && <p className="mb-4 text-red-600">{message}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog Title"
            className="p-2 border border-slate-400 rounded"
            required
          />

          <textarea
            value={passage}
            onChange={(e) => setPassage(e.target.value)}
            placeholder="Write your blog..."
            className="p-2 border border-slate-400 rounded h-40"
            required
          />

          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
