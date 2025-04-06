import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const volunteers = [
  {
    name: "Jonathan Doe",
    mobile: "+49 123 456 789",
    email: "johndoe@email.com",
    image: "https://i.ibb.co.com/jSbbTh9/64955.jpg",
  },
  {
    name: "George Bell",
    mobile: "+49 123 456 789",
    email: "johndoe@email.com",
    image: "https://i.ibb.co.com/gMmnz0QZ/4430124-2884.jpg",
  },
  {
    name: "Laura Fenty",
    mobile: "+49 123 456 789",
    email: "johndoe@email.com",
    image: "https://i.ibb.co.com/qF0GJq97/299.jpg",
  },
  {
    name: "Cameron Poll",
    mobile: "+49 123 456 789",
    email: "johndoe@email.com",
    image: "https://i.ibb.co.com/R4C3KqwM/2149012198.jpg",
  },
];

const VolunteerSection = () => {
  return (
    <>
      <section>
        <div
          className="bg-cover bg-center bg-slate-200 text-black text-center py-20 px-4"
          style={{ backgroundImage: "url(/hero.jpg)" }}
        >
          <h1 className="text-3xl font-bold mb-4">
            Are you ready to volunteer?
          </h1>
          <p className="mb-6">
            Start one of our programs today and help people in need
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 py-2 px-4 cursor-pointer">
              Become a Volunteer
            </button>
            <button className="bg-red-500 hover:bg-red-600 py-2 px-4 cursor-pointer">
              Make a Donation
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="py-10 px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Our group of <span className="font-bold">volunteers</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {volunteers.map((vol, i) => (
              <div key={i} className="card bg-base-100 shadow-md">
                <figure>
                  <img
                    src={vol.image}
                    alt={vol.name}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="font-bold text-lg">{vol.name}</h3>
                  <p className="text-sm flex items-center gap-2">
                    <FaPhone /> {vol.mobile}
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <FaEnvelope /> {vol.email}
                  </p>
                  <div className="flex gap-2 pt-2">
                    <FaFacebookF /> <FaInstagram /> <FaTwitter />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteerSection;
