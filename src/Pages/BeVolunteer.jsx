import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { format } from "date-fns";
import toast from "react-hot-toast";

const BeVolunteer = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [post, setPost] = useState(null);
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/volunteer/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log("error fetching", err);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      volunteerPostId: id,
      postTitle: post.title,
      volunteerName: user.displayName,
      volunteerEmail: user.email,
      organizerName: post.organizerName,
      organizerEmail: post.organizerEmail,
      volunteersNeeded: post.volunteersNeeded,
      deadline: post.deadline,
      suggestion,
      status: "requested",
    };
    console.log(requestData);
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/volunteers/request`,
        requestData
      );

      await axios.patch(
        `${import.meta.env.VITE_API_URL}/volunteers/decrease/${id}`
      );
      toast.success("Requested submitted successfully!");
      setSuggestion("");
    } catch (error) {
      console.error("Error submitting request:", error);
      alert(" Failed to submit request.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Be a Volunteer</h2>

      {post && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Post Title", value: post.title },
            { label: "Description", value: post.description },
            { label: "Category", value: post?.category },
            { label: "Location", value: post.location },
            { label: "Volunteers Needed", value: post.volunteersNeeded },
          ].map((item, idx) => (
            <div key={idx}>
              <label className="label">{item.label}</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={item.value}
                readOnly
              />
            </div>
          ))}
          <label className="label">Deadline</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={format(new Date(post.deadline), "P")}
            readOnly
          />
          <label className="label">Organizer Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={post.organizerName}
            readOnly
          />

          <label className="label">Organizer Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            value={post.organizerEmail}
            readOnly
          />

          <label className="label">Volunteer Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={user?.displayName}
            readOnly
          />

          <label className="label">Volunteer Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            value={user?.email}
            readOnly
          />

          <label className="label">Your Suggestion</label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Your suggestion (optional)"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          ></textarea>

          <label className="label">Status</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value="requested"
            readOnly
          />

          <button className="btn btn-primary w-full" type="submit">
            Request
          </button>
        </form>
      )}
    </div>
  );
};

export default BeVolunteer;
