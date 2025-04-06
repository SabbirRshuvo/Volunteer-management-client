import React, { useEffect, useState } from "react";

const VolunteerNeedsNow = () => {
  const [posts, setPosts] = useState([]);

  // Dummy fetch or replace with real API call
  useEffect(() => {
    const fetchData = async () => {
      // Replace this array with real data
      const data = [
        {
          id: 1,
          title: "Beach Cleanup",
          category: "Environment",
          deadline: "2025-04-10",
          thumbnail: "https://via.placeholder.com/300x200",
        },
        {
          id: 2,
          title: "Food Drive",
          category: "Community",
          deadline: "2025-04-08",
          thumbnail: "https://via.placeholder.com/300x200",
        },
        {
          id: 3,
          title: "Animal Shelter Help",
          category: "Animal Welfare",
          deadline: "2025-04-07",
          thumbnail: "https://via.placeholder.com/300x200",
        },
        // Add more posts...
      ];

      // Sort by deadline ascending
      const sorted = data.sort(
        (a, b) => new Date(a.deadline) - new Date(b.deadline)
      );

      // Limit to 6 items
      setPosts(sorted.slice(0, 6));
    };

    fetchData();
  }, []);
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Volunteer Needs Now
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-md rounded-2xl">
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
              <p className="text-sm text-gray-500">Deadline: {post.deadline}</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VolunteerNeedsNow;
