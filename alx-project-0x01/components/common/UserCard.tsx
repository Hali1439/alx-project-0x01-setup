import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">@{username}</p>
      <div className="mt-4 text-gray-700 text-sm">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
        <p><strong>Company:</strong> {company.name}</p>
        <p><strong>Address:</strong> {address.street}, {address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
