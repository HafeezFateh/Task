import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
  const [personId, setPersonId] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/person/login", {
        personId,
      });

      // logged-in user to localStorage
      localStorage.setItem("personId", res.data.person_id);
      navigate("/profile"); // ShowProfile
    } catch (err) {
      setMessage("Login failed: Person not found");
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen">
     
      <div className=" mx-5 mt-10 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Your ID"
            className="p-2 border rounded"
            value={personId}
            onChange={(e) => setPersonId(e.target.value)}
          />
          <button type="submit" className="bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-red-600 text-center">{message}</p>}
      </div>
    </div>
  );
}

export default Login;
