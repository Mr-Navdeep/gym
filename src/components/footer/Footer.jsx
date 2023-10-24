import React from "react";
import { links,social } from "../../assets/data";
import { Link } from "react-router-dom";
import { contact } from "../../assets/data";
import { Logo } from "../../assets/images/images.js";


const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <img src={Logo} alt="" className="w-16" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>

          <div>
            <h4 className="mb-2 font-bold text-xl">Contact us</h4>
            {contact.map(({ id, text, icon }) => {
              return (
                <div key={id} className="flex justify-start items-start gap-3 mb-1">
                  <span className="text-xs footer-icon mt-2">{icon}</span>
                  <span>{text}</span>
                </div>
              );
            })}
          </div>

          <div>
            <h4 className="mb-2 font-bold text-xl">Quick Links</h4>
            <ul>
              {links.map((menu, index) => {
                return (
                  <li key={index}>
                    <Link to={menu.path}>{menu.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>

          <h4 className="mb-2 font-bold text-xl">Social</h4>
          <ul className="flex flex-center items-center gap-2">
            {social.map(({icon,path})=>{
                return(
                    <li>
                    <Link to={path} className="footer-icon ">{icon}</Link>
                </li>
                )
               
            })}
          </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
