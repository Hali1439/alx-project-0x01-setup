import React from 'react';

interface PostCardProps {
  title?: string;
  excerpt?: string;
}

const PostCard: React.FC<PostCardProps> = ({ title = 'Post Title', excerpt = 'Post excerpt goes here.' }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostCard;
