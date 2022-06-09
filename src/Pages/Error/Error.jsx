import React from "react";
import SvgError from "./SvgError";
function Error() {
  return (
    <div class=" dark:bg-gray-900 m-4">
      <div class="flex justify-center ">
        <SvgError />
      </div>
      <div class="text-center dark:text-slate-100 ">
        <h1>404</h1>
        <h2>Page not found</h2>
        <button className="px-2 bg-orange-500 rounded transition duration-500 ease-in-out hover:bg-orange-400 hover:text-orange-50 cursor-pointer dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-orange-500">
          Volver
        </button>
      </div>
    </div>
  );
}
export default Error;
