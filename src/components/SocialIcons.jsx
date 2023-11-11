import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-indigo-600 text-dark_mode mx-1.5 text-xl hover:text-ferrari_red hover:bg-gray-700
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;