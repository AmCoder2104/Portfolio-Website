"use client"
import { WhatsappIcon } from "hugeicons-react";
import Link from "next/link";

const WhatsAppButton = ({className}) => {
  return (
    <Link
      className={`   ${className}`}
      href={"https://wa.me/923187587633"}
      target="_blank"
      rel="noopener noreferrer"
    >

      
<button class="Btn">
  <span class="svgContainer">
    <WhatsappIcon className="text-white " size={30} />
  </span>
  <span class="BG"></span>
</button>



    </Link>
  );
};

export default WhatsAppButton;