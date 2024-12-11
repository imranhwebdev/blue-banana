import { LiaTelegramPlane } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import dexicon from "../assets/img/dexsc.svg";

export default function Social({ className }) {
  const socialIcons = [
    {
      name: 'twitter',
      icon: <FaXTwitter />,
      url: 'https://x.com/bluebananaonsol'
    },
    {
      name: 'telegram',
      icon: <LiaTelegramPlane />,
      url: 'https://t.me/bluebananasol'
    },
    {
      name: 'dexicon',
      icon: <img src={dexicon} alt="Dexicon" className="w-6 h-6" />,
      url: 'https://dexscreener.com/solana/beg9q7chfyj6nk1rhqffjpycmadxumzsz1y8sb8emkad'
    },
  ];

  return (
    <ul className={`social-list flex items-center flex-wrap gap-4 ${className}`}>
      {socialIcons.map((item, index) => (
        <li key={index}>
          <a href={item.url} target="_blank" className="social-link border-2 border-black flex items-center justify-center">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
