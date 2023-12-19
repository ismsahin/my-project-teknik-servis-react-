import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footers = () => {
  return (
    <footer className="bg-dark_mode text-white ps-4 border-t-2 border-cyan">
      
      <ItemsContainer/>
      
      
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        
        <span>Copyright © 2023 REPAIR TECHNIC All rights reserved.</span>
        <SocialIcons Icons={Icons} />

      </div>
    </footer>
  );
};

export default Footers;