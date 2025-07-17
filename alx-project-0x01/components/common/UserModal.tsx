import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const keys = name.split(".");
    if (keys.length === 1) {
      setUser((prev) => ({ ...prev, [name]: value }));
    } else {
      setUser((prev) => {
        const updated = { ...prev };
        let current: any = updated;

        for (let i = 0; i < keys.length - 1; i++) {
          current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl overflow-y-auto max-h-screen">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={user.website}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="company.name"
            placeholder="Company Name"
            value={user.company.name}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="company.catchPhrase"
            placeholder="Catch Phrase"
            value={user.company.catchPhrase}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="company.bs"
            placeholder="Business Slogan"
            value={user.company.bs}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="address.street"
            placeholder="Street"
            value={user.address.street}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="address.suite"
            placeholder="Suite"
            value={user.address.suite}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="address.city"
            placeholder="City"
            value={user.address.city}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="address.zipcode"
            placeholder="Zipcode"
            value={user.address.zipcode}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="address.geo.lat"
            placeholder="Latitude"
            value={user.address.geo.lat}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="address.geo.lng"
            placeholder="Longitude"
            value={user.address.geo.lng}
            onChange={handleChange}
            className="input"
          />

          <div className="col-span-2 flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
