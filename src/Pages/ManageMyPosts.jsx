import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { format } from "date-fns";

const ManageMyPosts = () => {
  const { user } = useContext(AuthContext);
  const [volunteerPosts, setVolunteerPosts] = useState([]);
  const [volunteerRequests, setVolunteerRequests] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/my-volunteer-posts`, {
          params: { email: user.email },
        })
        .then((res) => setVolunteerPosts(res.data))
        .catch(() => toast.error("Failed to fetch your posts"));
    }
  }, [user?.email]);

  // Get requests made by user
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/my-volunteer-requests`, {
          params: { email: user.email },
        })
        .then((res) => setVolunteerRequests(res.data))
        .catch(() => toast.error("Failed to fetch your requests"));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    toast.success("Deleted successfully!");
  };

  const handleUpdate = (id) => {
    toast("Redirecting to update...");
  };

  const handleCancel = (id) => {
    toast.success("Request cancelled!");
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      <h2 className="text-3xl font-bold text-center"> Manage My Posts</h2>
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
          My Volunteer Need Posts
        </h3>
        {volunteerPosts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Post Title</th>
                  <th>Category</th>
                  <th>Volunteers Needed</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {volunteerPosts.map((post, index) => (
                  <tr key={post._id}>
                    <td>{index + 1}</td>
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    <td>{post.volunteersNeeded}</td>
                    <td className="flex gap-2">
                      <button
                        onClick={() => handleUpdate(post._id)}
                        className="btn btn-sm btn-outline btn-info"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(post._id)}
                        className="btn btn-sm btn-outline btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-base-200 p-6 rounded text-center text-gray-600">
            You haven’t added any volunteer posts yet.
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
          My Volunteer Request Posts
        </h3>

        {volunteerRequests.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Post Title</th>
                  <th>Organizer</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {volunteerRequests.map((req, index) => (
                  <tr key={req._id}>
                    <td>{index + 1}</td>
                    <td>{req.postTitle}</td>
                    <td>{req.organizerName}</td>
                    <td>{format(new Date(req.deadline), "P")}</td>
                    <td>{req.status}</td>
                    <td>
                      <button
                        onClick={() => handleCancel(req._id)}
                        className="btn btn-sm btn-outline btn-warning"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-base-200 p-6 rounded text-center text-gray-600">
            You haven’t requested to volunteer for any posts yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMyPosts;
