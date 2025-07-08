import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [personId, setPersonId] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !personId || !image) {
      return setMessage("All fields are required!");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("personId", personId);
    formData.append("profilePic", image);

    try {
      const res = await axios.post("http://localhost:5000/api/person", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("Person registered successfully!");
      setName("");
      setPersonId("");
      setImage(null);
      setPreview(null);
    } catch (err) {
      setMessage("Failed to register person");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center">

      <div className=" mx-5 mt-10 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Register Person</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Person ID"
            className="p-2 border rounded"
            value={personId}
            onChange={(e) => setPersonId(e.target.value)}
          />
<label className="cursor-pointer bg-slate-200 border border-slate-400 text-slate-700 px-4 py-2 rounded hover:bg-slate-300 w-fit">
  Select Profile Picture
  <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="hidden"
  />
</label>


          {preview && <img src={preview} alt="preview" className="w-32 h-32 rounded-full mx-auto" />}

          <button type="submit" className="bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
            Register
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>
    </div>
  );
}

export default Register;
