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

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredVolunteers = volunteers.filter((volunteer) =>
    volunteer.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <section className="py-10 px-4">
        <form>
          <div className="flex p-1 overflow-hidden  rounded-lg mb-4">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none "
              type="text"
              name="search"
              value={search}
              onChange={handleSearchChange}
              placeholder="Enter volunteer Title"
              aria-label="Enter Job Title"
            />
          </div>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {filteredVolunteers.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  Deadline:{" "}
                  <span className="font-medium text-gray-700">
                    {format(new Date(post.deadline), "P")}
                  </span>
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Volunteer Needs: {post.volunteersNeeded}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/volunteer-details/${post._id}`}
                    className="inline-block w-full text-center bg-red-400 hover:bg-orange-400 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
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
