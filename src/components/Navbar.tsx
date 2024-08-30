import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex">
      <div className="">
        <Image src={"/search.png"} height={20} width={20} alt="search" />
      </div>
    </div>
  );
};

export default Navbar;
