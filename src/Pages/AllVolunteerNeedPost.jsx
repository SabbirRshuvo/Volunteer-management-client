import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllVolunteerNeedPost = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/volunteer`)
      .then((res) => {
        const sortedData = res.data.sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        );
        setVolunteers(sortedData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="py-10 px-4">
        <form>
          <div className="flex p-1 overflow-hidden  rounded-lg mb-4">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter volunteer Title"
              aria-label="Enter Job Title"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
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
                <h3 className="card-title text-lg font-semibold">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Category: {post.category}
                </p>
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
      </section>
    </>
  );
};

export default AllVolunteerNeedPost;
