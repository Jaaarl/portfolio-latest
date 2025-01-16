import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="card p-4 shadow-lg space-y-4">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-3xl text-blue-500" />
            <div>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p className="text-sm">+63 969-563-0833 </p>
            </div>
          </div>
        </div>

        <div className="card p-4 shadow-lg space-y-4">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-3xl text-blue-500" />
            <div>
              <h4 className="text-lg font-semibold">Email</h4>
              <p className="text-sm">jarl13.work@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="card p-4 shadow-lg space-y-4">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-3xl text-blue-500" />
            <div>
              <h4 className="text-lg font-semibold">Address</h4>
              <p className="text-sm">Sorsogon City, Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
