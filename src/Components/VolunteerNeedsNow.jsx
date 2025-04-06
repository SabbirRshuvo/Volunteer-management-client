import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const VolunteerNeedsNow = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/volunteer`)
      .then((res) => {
        const sortedData = res.data.sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        );
        setVolunteers(sortedData.slice(0, 6));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Volunteer Needs Now
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {volunteers.map((post) => (
          <div
            key={post._id}
            className=" bg-white/30 border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-all duration-300"
          >
            <img
              src={post.thumbnail}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h3>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  Category: {post.category}
                </span>
                <span>{format(new Date(post.deadline), "P")}</span>
              </div>

              <Link
                to={`/volunteer-details/${post._id}`}
                className="block text-center mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium py-2 px-4 rounded-xl transition-all duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className=" text-center mt-6 ">
        <button className="btn btn-info w-1/2">
          <Link to="/all_volunteer_need_post">See All</Link>
        </button>
      </div>
    </section>
  );
};

export default VolunteerNeedsNow;
