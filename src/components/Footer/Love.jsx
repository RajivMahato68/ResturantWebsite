import React from "react";
import {Link} from "react-router-dom"

function Love() {
  return (
    <div class="bg-[#232323]">
      <div class="container mx-auto py-4 px-5 flex justify-center flex-wrap flex-col sm:flex-row">
        <p class="text-gray-100 md:text-lg text-md text-center sm:text-left">
          Made With ❤️
          <Link

            class="text-[#F38220] ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amity SoftCS
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Love;
