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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {volunteers.map((post) => (
          <div
            key={post._id}
            className="card bg-base-100 shadow-md rounded-2xl"
          >
            <figure>
              <img
                src={post.thumbnail}
                alt={post.title}
                className="h-48 w-full object-cover rounded-t-2xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-500">Category: {post.category}</p>
              <p className="text-sm text-gray-500">
                Deadline: {format(new Date(post.deadline), "P")}
              </p>
              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/volunteer-details/${post._id}`}
                  className="btn btn-primary btn-sm"
                >
                  View Details
                </Link>
              </div>
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
