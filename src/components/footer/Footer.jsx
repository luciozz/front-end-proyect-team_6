import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="flex justify-evenly bg-orange-600 p-2 items-center dark:bg-gray-900  dark:bg-gradient-to-r dark:from-gray-900 dark:hover:bg-orange-600 transition ease-in-out dark:text-slate-100  ">
      <ul>
        <li class="flex items-center hover:scale-90 hover:bg-orange-500 hover:shadow-[0_8px_8px_1px_rgba(0,0,0,0.5)] duration-500 h  rounded-lg ">
          <FontAwesomeIcon class="h-8" icon={faHouse} />
          <a class="p-3" href="/">
            Home
          </a>
        </li>

        <li class="flex items-center hover:bg-orange-500 hover:scale-90 hover:shadow-[0_8px_8px_1px_rgba(0,0,0,0.5)] duration-500  rounded-lg">
          <FontAwesomeIcon class="h-8" icon={faAddressCard} />
          <a class="p-3" href="/">
            About
          </a>
        </li>
      </ul>
      <ul>
        <li class="flex items-center hover:bg-orange-500 hover:scale-90 hover:shadow-[0_8px_8px_1px_rgba(0,0,0,0.5)] duration-500  rounded-lg">
          <FontAwesomeIcon class="h-8" icon={faGithub} />
          <a class="p-3" href="/">
            Lorem ipsum dolor, sit amet consectetur
          </a>
        </li>

        <li class="p-3">
          <p>Grupo 6 - Comisión #22013</p>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
