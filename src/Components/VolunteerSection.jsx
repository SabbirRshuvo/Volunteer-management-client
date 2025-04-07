import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaHandshake,
  FaUsers,
  FaGlobeAmericas,
  FaHeart,
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

      <section className="py-12 px-4 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Volunteer Standards
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            We believe in making a meaningful difference with integrity,
            passion, and unity. These are the core values we expect from all our
            volunteers.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300">
              <FaHandshake className="text-4xl text-indigo-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Commitment
              </h4>
              <p className="text-sm text-gray-600">
                Volunteers should be dependable and dedicated to the tasks they
                undertake.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300">
              <FaUsers className="text-4xl text-indigo-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Teamwork
              </h4>
              <p className="text-sm text-gray-600">
                Collaboration and mutual respect are at the heart of our
                mission.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300">
              <FaGlobeAmericas className="text-4xl text-indigo-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Global Perspective
              </h4>
              <p className="text-sm text-gray-600">
                We value inclusivity, diversity, and understanding across
                cultures.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300">
              <FaHeart className="text-4xl text-indigo-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Compassion
              </h4>
              <p className="text-sm text-gray-600">
                A kind heart and willingness to help are the pillars of
                volunteerism.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteerSection;
