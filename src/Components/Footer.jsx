import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaHeart,
  FaSmile,
  FaHandsHelping,
  FaBook,
  FaMapMarkerAlt,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="font-bold text-lg mb-3">About Us</h3>
          <p className="text-sm">
            We are a volunteer-driven platform helping communities across the
            globe through selfless service and impactful programs.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Become a Volunteer
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Make a Donation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Contact Info</h3>
          <p className="text-sm flex items-center gap-2">
            <FaEnvelope /> info@volunteer.org
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaPhone /> +49 123 456 789
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaMapMarkerAlt /> 123 Hope Street, World City
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="hover:text-orange-400 cursor-pointer" />
            <FaTwitter className="hover:text-orange-400 cursor-pointer" />
            <FaInstagram className="hover:text-orange-400 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} VolunteerOrg. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
