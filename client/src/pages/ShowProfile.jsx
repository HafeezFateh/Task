import { useEffect, useState } from "react";
import Header from "../components/header";
import Image from "../components/image";
import axios from "axios";

function ShowProfile() {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const personId = localStorage.getItem("personId");

  useEffect(() => {
    const fetchPerson = async () => {
      if (!personId) return;

      try {
        const res = await axios.get(`http://localhost:5000/api/person/${personId}`);
        setPerson(res.data);
      } catch (err) {
        console.error("Failed to fetch person:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPerson();
  }, []);

  if (!personId) {
    return (
      <>
        <Header />
        <div className="text-center mt-10 text-red-600 text-xl">
          Please <a href="/login" className="underline text-blue-600">login</a> to view your profile.
        </div>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Header />
        <p className="text-center mt-10 text-gray-600">Loading...</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-slate-300 gap-5 shadow border border-slate-400 rounded-lg mx-5 flex flex-col items-center p-5 mt-5">
        <Image link={`http://localhost:5000/uploads/${person.profile_pic}`} />
        <p className="text-3xl font-semibold text-black">ID: {person.person_id}</p>
        <p className="text-xl text-slate-800">Name: {person.name}</p>
      </div>
    </>
  );
}

export default ShowProfile;
