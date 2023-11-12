import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footers = () => {
  return (
    <footer className="bg-dark_mode text-white ">
      
      <ItemsContainer/>
      <div className="flex flex-wrap px-10 pb-5"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.0549089862184!2d28.974388878624186!3d41.02285329493505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e8087f4bff%3A0x791b116c3a3c9bc3!2zS2VtYW5rZcWfIEthcmFtdXN0YWZhIFBhxZ9hLCBHw7xtcsO8ayBTay4sIDM0NDI1IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1699781686079!5m2!1str!2str" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div>
      
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