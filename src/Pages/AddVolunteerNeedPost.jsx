import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddVolunteerNeedPost = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [deadline, setDeadline] = useState(null);

  const onSubmit = (data) => {
    const newPost = {
      thumbnail: data.thumbnail,
      title: data.title,
      description: data.description,
      category: data.category,
      location: data.location,
      volunteersNeeded: parseInt(data.volunteersNeeded),
      deadline,
      organizerName: user?.name || "Anonymous",
      organizerEmail: user?.email || "unknown@example.com",
    };

    console.log("Submitted Post:", newPost);

    Swal.fire({
      icon: "success",
      title: "Post Added!",
      text: "Your volunteer need post has been submitted.",
      confirmButtonColor: "#2563eb",
    });

    reset();
    setDeadline(null);
  };
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8 my-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">
        Add Volunteer Need Post
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <input
          type="url"
          {...register("thumbnail", { required: true })}
          placeholder="Thumbnail URL"
          className="input input-bordered w-full"
        />
        {errors.thumbnail && (
          <p className="text-error">Thumbnail is required</p>
        )}

        <input
          type="text"
          {...register("title", { required: true })}
          placeholder="Post Title"
          className="input input-bordered w-full"
        />
        {errors.title && <p className="text-error">Title is required</p>}

        <textarea
          {...register("description", { required: true })}
          placeholder="Description"
          className="textarea textarea-bordered w-full"
        ></textarea>
        {errors.description && (
          <p className="text-error">Description is required</p>
        )}

        <select
          {...register("category", { required: true })}
          className="select select-bordered w-full"
        >
          <option value="">Select Category</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="social-service">Social Service</option>
          <option value="animal-welfare">Animal Welfare</option>
        </select>
        {errors.category && <p className="text-error">Category is required</p>}

        <input
          type="text"
          {...register("location", { required: true })}
          placeholder="Location"
          className="input input-bordered w-full"
        />
        {errors.location && <p className="text-error">Location is required</p>}

        <input
          type="number"
          {...register("volunteersNeeded", { required: true, min: 1 })}
          placeholder="Number of Volunteers Needed"
          className="input input-bordered w-full"
        />
        {errors.volunteersNeeded && (
          <p className="text-error">Please enter a valid number</p>
        )}

        <DatePicker
          selected={deadline}
          onChange={(date) => setDeadline(date)}
          className="input input-bordered w-full"
          placeholderText="Select Deadline"
        />
        {!deadline && <p className="text-error">Deadline is required</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddVolunteerNeedPost;
