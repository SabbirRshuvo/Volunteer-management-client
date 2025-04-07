import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
const VolunteerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    fetchAllData();
  }, [id]);
  const fetchAllData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/volunteer/${id}`
    );

    setVolunteers(data);
  };
  const {
    thumbnail,
    title,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
    organizerName,
    organizerEmail,
  } = volunteers || {};

  const handleBeVolunteer = () => {
    navigate(`/volunteer-request/${id}`);
  };
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="card lg:card-side bg-base-100 shadow-xl flex flex-col lg:flex-row rounded-2xl">
        <figure className="lg:w-1/2 w-full max-h-[400px] overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Content */}
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl font-bold">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>

          <div className="mt-4 space-y-2">
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p>
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p>
              <span className="font-semibold">Volunteers Needed:</span>{" "}
              {volunteersNeeded}
            </p>
            <p>
              <span className="font-semibold">Deadline:</span>{" "}
              {deadline && format(new Date(deadline), "P")}
            </p>
          </div>

          <div className="divider mt-4 mb-2">Organizer Info</div>

          <div className="text-sm space-y-1">
            <p>
              <span className="font-medium">Organizer Name:</span>{" "}
              {organizerName}
            </p>
            <p>
              <span className="font-medium">Organizer Email:</span>{" "}
              {organizerEmail}
            </p>
          </div>

          <div className="card-actions mt-6">
            <button
              onClick={handleBeVolunteer}
              className="btn btn-primary w-full lg:w-auto"
            >
              Be a Volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerDetails;
