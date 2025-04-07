import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const UpdateVolunteerNeed = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState(null);
  const [deadline, setDeadline] = useState(new Date());
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/volunteer/${id}`)
      .then((res) => {
        setPost(res.data);
        setDeadline(new Date(res.data.deadline));
      })
      .catch((err) => console.error("Failed to load post:", err));
  }, [id]);
  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedPost = {
      thumbnail: form.thumbnail.value,
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      location: form.location.value,
      volunteersNeeded: form.volunteersNeeded.value,
      deadline: deadline,
      organizerName: user.displayName,
      organizerEmail: user.email,
    };
    console.log(updatedPost);

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/volunteer/${id}`,
        updatedPost
      );
      toast.success("Volunteer post updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update post.");
    }
  };
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Toaster />
      <h2 className="text-2xl font-bold mb-6">Update Volunteer Post</h2>
      {post && (
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="font-medium">Thumbnail URL</label>
            <input
              type="text"
              name="thumbnail"
              defaultValue={post.thumbnail}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="font-medium">Post Title</label>
            <input
              type="text"
              name="title"
              defaultValue={post.title}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="font-medium">Description</label>
            <textarea
              name="description"
              defaultValue={post.description}
              required
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          <div>
            <label className="font-medium">Category</label>
            <select
              name="category"
              defaultValue={post.category}
              required
              className="select select-bordered w-full"
            >
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="social service">Social Service</option>
              <option value="animal welfare">Animal Welfare</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={post.location}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="font-medium">No. of Volunteers Needed</label>
            <input
              type="number"
              name="volunteersNeeded"
              defaultValue={post.volunteersNeeded}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="font-medium">Deadline</label>
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              className="input input-bordered w-full"
              dateFormat="yyyy-MM-dd"
            />
          </div>

          <div>
            <label className="font-medium">Organizer Name</label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />
          </div>

          <div>
            <label className="font-medium">Organizer Email</label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />
          </div>

          <button className="btn btn-primary w-full mt-4">Update Post</button>
        </form>
      )}
    </div>
  );
};

export default UpdateVolunteerNeed;
