import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
  // Validate and parse the date
  const BlogDate = isNaN(Date.parse(date)) ? "Invalid Date" : new Date(date);

  return (
    <tr className="bg-white border-b">
      {/* Author Cell */}
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          key={authorImg || assets.profile_icon} // Add unique key for each image
          width={40}
          height={40}
          src={authorImg || assets.profile_icon}
          alt={author || "No Author"}
        />
        <p>{author || "No Author"}</p>
      </th>

      {/* Title Cell */}
      <td className="px-6 py-4">{title || "No Title"}</td>

      {/* Date Cell */}
      <td className="px-6 py-4">
        {BlogDate === "Invalid Date" ? "Invalid Date" : BlogDate.toDateString()}
      </td>

      {/* Delete Icon */}
      <td onClick={() => deleteBlog(mongoId)} className="px-6 py-4 cursor-pointer">x</td>
    </tr>
  );
};

export default BlogTableItem;
