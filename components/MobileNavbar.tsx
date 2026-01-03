import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MenuIcon from "@/public/icons/circle.svg";

const homeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM8 15H16V17H8V15Z"></path>
  </svg>
);

const aboutIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
  </svg>
);

const projectsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M18.0049 6.99979H21.0049C21.5572 6.99979 22.0049 7.4475 22.0049 7.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H18.0049V6.99979ZM4.00488 8.99979V18.9998H20.0049V8.99979H4.00488ZM4.00488 4.99979V6.99979H16.0049V4.99979H4.00488ZM15.0049 12.9998H18.0049V14.9998H15.0049V12.9998Z"></path>
  </svg>
);

const contactIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
  </svg>
);

const ArrowUpIcon = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 19L11.2929 12.7071C11.6834 12.3166 12.3166 12.3166 12.7071 12.7071L19 19"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5 11L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711L19 11"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

const ArrowDownIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: "rotate(180deg)" }}
  >
    <path
      d="M5 19L11.2929 12.7071C11.6834 12.3166 12.3166 12.3166 12.7071 12.7071L19 19"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5 11L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711L19 11"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

const linkedinIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3ZM5.00098 5V19H19.001V5H5.00098ZM7.50098 9C6.67255 9 6.00098 8.32843 6.00098 7.5C6.00098 6.67157 6.67255 6 7.50098 6C8.3294 6 9.00098 6.67157 9.00098 7.5C9.00098 8.32843 8.3294 9 7.50098 9ZM6.50098 10H8.50098V17.5H6.50098V10ZM12.001 10.4295C12.5854 9.86534 13.2665 9.5 14.001 9.5C16.072 9.5 17.501 11.1789 17.501 13.25V17.5H15.501V13.25C15.501 12.2835 14.7175 11.5 13.751 11.5C12.7845 11.5 12.001 12.2835 12.001 13.25V17.5H10.001V10H12.001V10.4295Z"></path>
  </svg>
);

const githubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M5.88401 18.6533C5.58404 18.4526 5.32587 18.1975 5.0239 17.8369C4.91473 17.7065 4.47283 17.1524 4.55811 17.2583C4.09533 16.6833 3.80296 16.417 3.50156 16.3089C2.9817 16.1225 2.7114 15.5499 2.89784 15.0301C3.08428 14.5102 3.65685 14.2399 4.17672 14.4263C4.92936 14.6963 5.43847 15.1611 6.12425 16.0143C6.03025 15.8974 6.46364 16.441 6.55731 16.5529C6.74784 16.7804 6.88732 16.9182 6.99629 16.9911C7.20118 17.1283 7.58451 17.1874 8.14709 17.1311C8.17065 16.7489 8.24136 16.3783 8.34919 16.0358C5.38097 15.3104 3.70116 13.3952 3.70116 9.63971C3.70116 8.40085 4.0704 7.28393 4.75917 6.3478C4.5415 5.45392 4.57433 4.37284 5.06092 3.15636C5.1725 2.87739 5.40361 2.66338 5.69031 2.57352C5.77242 2.54973 5.81791 2.53915 5.89878 2.52673C6.70167 2.40343 7.83573 2.69705 9.31449 3.62336C10.181 3.41879 11.0885 3.315 12.0012 3.315C12.9129 3.315 13.8196 3.4186 14.6854 3.62277C16.1619 2.69 17.2986 2.39649 18.1072 2.52651C18.1919 2.54013 18.2645 2.55783 18.3249 2.57766C18.6059 2.66991 18.8316 2.88179 18.9414 3.15636C19.4279 4.37256 19.4608 5.45344 19.2433 6.3472C19.9342 7.28337 20.3012 8.39208 20.3012 9.63971C20.3012 13.3968 18.627 15.3048 15.6588 16.032C15.7837 16.447 15.8496 16.9105 15.8496 17.4121C15.8496 18.0765 15.8471 18.711 15.8424 19.4225C15.8412 19.6127 15.8397 19.8159 15.8375 20.1281C16.2129 20.2109 16.5229 20.5077 16.6031 20.9089C16.7114 21.4504 16.3602 21.9773 15.8186 22.0856C14.6794 22.3134 13.8353 21.5538 13.8353 20.5611C13.8353 20.4708 13.836 20.3417 13.8375 20.1145C13.8398 19.8015 13.8412 19.599 13.8425 19.4094C13.8471 18.7019 13.8496 18.0716 13.8496 17.4121C13.8496 16.7148 13.6664 16.2602 13.4237 16.051C12.7627 15.4812 13.0977 14.3973 13.965 14.2999C16.9314 13.9666 18.3012 12.8177 18.3012 9.63971C18.3012 8.68508 17.9893 7.89571 17.3881 7.23559C17.1301 6.95233 17.0567 6.54659 17.199 6.19087C17.3647 5.77663 17.4354 5.23384 17.2941 4.57702L17.2847 4.57968C16.7928 4.71886 16.1744 5.0198 15.4261 5.5285C15.182 5.69438 14.8772 5.74401 14.5932 5.66413C13.7729 5.43343 12.8913 5.315 12.0012 5.315C11.111 5.315 10.2294 5.43343 9.40916 5.66413C9.12662 5.74359 8.82344 5.69492 8.57997 5.53101C7.8274 5.02439 7.2056 4.72379 6.71079 4.58376C6.56735 5.23696 6.63814 5.77782 6.80336 6.19087C6.94565 6.54659 6.87219 6.95233 6.61423 7.23559C6.01715 7.8912 5.70116 8.69376 5.70116 9.63971C5.70116 12.8116 7.07225 13.9683 10.023 14.2999C10.8883 14.3971 11.2246 15.4769 10.5675 16.0482C10.3751 16.2156 10.1384 16.7802 10.1384 17.4121V20.5611C10.1384 21.5474 9.30356 22.2869 8.17878 22.09C7.63476 21.9948 7.27093 21.4766 7.36613 20.9326C7.43827 20.5204 7.75331 20.2116 8.13841 20.1276V19.1381C7.22829 19.1994 6.47656 19.0498 5.88401 18.6533Z"></path>
  </svg>
);

const mediumIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795" />
  </svg>
);

const hackerrankIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z" />
  </svg>
);

const hacktheboxIcon = (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
  >
    <path
      d="m22.5106 6.4566 0.0008 -0.0123a0.888 0.888 0 0 0 -0.2717 -0.6384c-0.0084 -0.0084 -0.018 -0.0155 -0.0267 -0.0235 -0.0186 -0.0166 -0.0371 -0.0333 -0.0572 -0.0484 -0.0193 -0.0147 -0.04 -0.0276 -0.0607 -0.0406 -0.0096 -0.006 -0.0182 -0.0131 -0.0281 -0.0188L12.4576 0.1266a0.891 0.891 0 0 0 -0.9223 0.0043L1.933 5.6744c-0.0107 0.0062 -0.0203 0.014 -0.0307 0.0205 -0.0073 0.0047 -0.015 0.008 -0.0223 0.0128 -0.007 0.0047 -0.013 0.0106 -0.02 0.0155a0.8769 0.8769 0 0 0 -0.147 0.1333l-0.0026 0.003a0.8872 0.8872 0 0 0 -0.2218 0.5847l0.0009 0.014c-0.0002 0.0088 -0.0015 0.0176 -0.0015 0.0264v11.0708c0 0.3277 0.1802 0.6288 0.469 0.7836l9.5986 5.5417c0.0076 0.0044 0.0158 0.0075 0.0236 0.0117a0.8754 0.8754 0 0 0 0.166 0.0687c0.0134 0.004 0.0266 0.0083 0.0401 0.0117a0.8793 0.8793 0 0 0 0.072 0.0142c0.0117 0.0019 0.0232 0.0045 0.0349 0.006a0.835 0.835 0 0 0 0.2157 0c0.0117 -0.0015 0.0232 -0.0041 0.0348 -0.006a0.9 0.9 0 0 0 0.072 -0.0142c0.0135 -0.0034 0.0267 -0.0077 0.04 -0.0117a0.895 0.895 0 0 0 0.0646 -0.0217 0.9134 0.9134 0 0 0 0.1015 -0.047c0.0078 -0.0042 0.016 -0.0072 0.0236 -0.0117l9.5986 -5.5417a0.8888 0.8888 0 0 0 0.469 -0.7836V6.4779c0 -0.0071 -0.0012 -0.0142 -0.0014 -0.0213zM5.2543 6.0822l6.5367 -3.774a0.4182 0.4182 0 0 1 0.4182 0l6.5366 3.774a0.4182 0.4182 0 0 1 0 0.7243l-6.5367 3.774a0.4182 0.4182 0 0 1 -0.4182 0l-6.5366 -3.774a0.4182 0.4182 0 0 1 0 -0.7243zm5.6134 14.3449a0.4172 0.4172 0 0 1 -0.626 0.3613L3.718 17.0218a0.4173 0.4173 0 0 1 -0.2086 -0.3613V9.1279a0.4172 0.4172 0 0 1 0.6258 -0.3613l6.524 3.7666a0.4172 0.4172 0 0 1 0.2086 0.3614v7.5325zm9.623 -3.7666a0.4173 0.4173 0 0 1 -0.2086 0.3613l-6.5239 3.7666a0.4172 0.4172 0 0 1 -0.6259 -0.3613v-7.5325c0 -0.149 0.0796 -0.2868 0.2087 -0.3614l6.5239 -3.7666a0.4172 0.4172 0 0 1 0.6258 0.3613v7.5326z"
      fill="currentColor"
      strokeWidth="1"
    ></path>
  </svg>
);


export default function MobileNavbar() {
  const mainBtnRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [pos, setPos] = useState(() => {
    const btnWidth = 56;
    return {
      x: typeof window !== 'undefined' ? window.innerWidth - btnWidth - 10 : 0,
      y: typeof window !== 'undefined' ? (4 / 5) * window.innerHeight : 0,
    };
  });
  const [side, setSide] = useState<"left" | "right">("right");
  const [arrowIndex, setArrowIndex] = useState<number>(-1);
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const iconSize = 25;
  const socialIconSize = 20;

  const SOCIAL_ICONS = [
    { icon: linkedinIcon, label: "LinkedIn", url: "https://www.linkedin.com/in/nehanz/" },
    { icon: githubIcon, label: "GitHub", url: "https://github.com/nehanz" },
    { icon: mediumIcon, label: "Medium", url: "https://medium.com/@nehanwijayagunarathna" },
    { icon: hackerrankIcon, label: "HackerRank", url: "https://www.hackerrank.com/profile/NehanZ" },
    { icon: hacktheboxIcon, label: "HackTheBox", url: "https://app.hackthebox.com/public/users/2169585" },
  ];

  // Hide menus if click/touch outside
  useEffect(() => {
    function handleOutside(e: MouseEvent | TouchEvent) {
      let target = e.target as HTMLElement | null;
      // Check if click/touch is inside any floating UI
      while (target) {
        if (
          target.classList?.contains('assistive-menu-item') ||
          target.classList?.contains('social-icon-btn') ||
          target.classList?.contains('main-fab-btn')
        ) {
          return;
        }
        target = target.parentElement;
      }
      setOpen(false);
      setShowSocial(false);
    }
    document.addEventListener('mousedown', handleOutside, true);
    document.addEventListener('touchstart', handleOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleOutside, true);
      document.removeEventListener('touchstart', handleOutside, true);
    };
  }, []);

  const getMenuItems = React.useCallback(() => {
    const baseItems = [
      {
        icon: (
          <span
            style={{
              width: iconSize,
              height: iconSize,
              display: "inline-flex",
            }}
          >
            {homeIcon}
          </span>
        ),
        label: "/",
        onClick: () => {
          setOpen(false);
          setShowSocial(false);
          router.push("/");
        },
      },
      {
        icon: (
          <span
            style={{
              width: iconSize,
              height: iconSize,
              display: "inline-flex",
            }}
          >
            {aboutIcon}
          </span>
        ),
        label: "About",
        onClick: () => {
          setOpen(false);
          setShowSocial(false);
          router.push("/about");
        },
      },
      {
        icon: (
          <span
            style={{
              width: iconSize,
              height: iconSize,
              display: "inline-flex",
            }}
          >
            {projectsIcon}
          </span>
        ),
        label: "Projects",
        onClick: () => {
          setOpen(false);
          setShowSocial(false);
          router.push("/projects");
        },
      },
      {
        icon: (
          <span
            style={{
              width: iconSize,
              height: iconSize,
              display: "inline-flex",
            }}
          >
            {contactIcon}
          </span>
        ),
        label: "Contact",
        onClick: () => {
          setOpen(false);
          setShowSocial(false);
          router.push("/contact");
        },
      },
    ];

    const half = window.innerHeight / 2;
    const isTopHalf = pos.y + 28 < half;
    const arrowItem = {
      icon: (
        <span
          style={{ width: socialIconSize, height: socialIconSize, display: "inline-flex" }}
        >
          {isTopHalf ? ArrowDownIcon : ArrowUpIcon}
        </span>
      ),
      label: isTopHalf ? "ArrowDown" : "ArrowUp",
      onClick: () => {
        setOpen(false);
        setShowSocial(!showSocial);
      },
    };

    if (isTopHalf) {
      const items = [...baseItems, arrowItem];
      return items;
    } else {
      const items = [arrowItem, ...baseItems];
      return items;
    }
  }, [pos.y, showSocial, router, iconSize, socialIconSize]);

  React.useEffect(() => {
    const half = window.innerHeight / 2;
    const isTopHalf = pos.y + 28 < half;
    if (isTopHalf) {
      setArrowIndex(getMenuItems().length - 1);
    } else {
      setArrowIndex(0);
    }
  }, [pos.y, showSocial, getMenuItems]);

  const handleTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    const touch = e.touches[0];
    offset.current = {
      x: touch.clientX - pos.x,
      y: touch.clientY - pos.y,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    const touch = e.touches[0];
    const screenWidth = window.innerWidth;
    const btnWidth = 56;
    let x = touch.clientX - offset.current.x;
    let y = touch.clientY - offset.current.y;

    // Close menus when dragging starts
    setOpen(false);
    setShowSocial(false);

    if (x < screenWidth / 2) {
      x = 10;
      setSide("left");
    } else {
      x = screenWidth - btnWidth - 10;
      setSide("right");
    }

    const minY = (1 / 10) * window.innerHeight;
    const maxY = window.innerHeight - btnWidth - (1 / 10) * window.innerHeight;
    y = Math.max(minY, Math.min(y, maxY));
    setPos({ x, y });
  };

  const handleTouchEnd = () => {
    dragging.current = false;
  };

  const getArrowPosition = () => {
    const menuItems = getMenuItems();
    const btnRadius = 25;
    const menuRadius = 65;
    const count = menuItems.length;
    const arcStart = -90;
    const arcEnd = 90;

    let angle;
    if (count === 1) {
      angle = 0;
    } else {
      angle = arcStart + ((arcEnd - arcStart) * arrowIndex) / (count - 1);
    }

    const rad = (angle * Math.PI) / 180;
    const direction = side === "left" ? 1 : -1;
    const dx = Math.cos(rad) * menuRadius * direction;
    const dy = Math.sin(rad) * menuRadius;
    const x = pos.x + btnRadius + dx - 22;
    const y = pos.y + btnRadius + dy - 22;

    return { x, y };
  };

  const getSocialIconsPosition = () => {
    const arrowPos = getArrowPosition();
    const isTopHalf = pos.y + 28 < window.innerHeight / 2;
    const socialX = side === "right" ? window.innerWidth - 50 - 10 : 10;

    let baseY;
    if (isTopHalf) {
      baseY = arrowPos.y + 50;
    } else {
      baseY = arrowPos.y - SOCIAL_ICONS.length * 50 - 10;
    }

    return SOCIAL_ICONS.map((_, i) => ({
      x: socialX,
      y: baseY + i * 50,
    }));
  };

  const menuItems = getMenuItems();
  const socialPositions = getSocialIconsPosition();

  return (
    <div className="md:hidden">
      {(open || showSocial) && (
        <div
          className="fixed inset-0 z-40"
          style={{ background: 'transparent' }}
          onClick={() => { setOpen(false); setShowSocial(false); }}
          onTouchStart={() => { setOpen(false); setShowSocial(false); }}
        />
      )}
      <div
        ref={mainBtnRef}
        className="fixed z-50 w-14 h-14 rounded-full bg-[var(--color-background)] text-white flex items-center justify-center text-2xl shadow-lg select-none touch-none transition-colors duration-200 active:bg-[var(--color-secondary)] main-fab-btn"
        style={{ left: pos.x, top: pos.y }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => {
          setShowSocial(false);
          setOpen((v) => !v);
        }}
        aria-label="Open assistive menu"
      >
        <Image src={MenuIcon} alt="Menu" width={32} height={32} />
      </div>

      {menuItems.map((item, i) => {
        const btnRadius = 25;
        const menuRadius = 65;
        const count = menuItems.length;
        const arcStart = -90;
        const arcEnd = 90;

        let angle;
        if (count === 1) {
          angle = 0;
        } else {
          angle = arcStart + ((arcEnd - arcStart) * i) / (count - 1);
        }

        const rad = (angle * Math.PI) / 180;
        const direction = side === "left" ? 1 : -1;
        const dx = Math.cos(rad) * menuRadius * direction;
        const dy = Math.sin(rad) * menuRadius;
        const x = pos.x + btnRadius + dx - 22;
        const y = pos.y + btnRadius + dy - 22;
        const tx = open ? 0 : pos.x + btnRadius - x;
        const ty = open ? 0 : pos.y + btnRadius - y;

        return (
          <div
            key={item.label}
            className="fixed z-50 w-11 h-11 rounded-full bg-[var(--color-background)] text-white flex items-center justify-center text-xl shadow-lg transition-all duration-400 active:bg-[var(--color-secondary)] assistive-menu-item"
            style={{
              left: x,
              top: y,
              opacity: open ? 1 : 0,
              pointerEvents: open ? "auto" : "none",
              transform: `translate(${tx}px, ${ty}px) scale(${open ? 1 : 0.7})`,
              transitionDelay: open ? `${i * 0.06}s` : `${(count - i) * 0.04}s`,
            }}
            onClick={item.onClick}
            aria-label={item.label}
          >
            {item.icon}
          </div>
        );
      })}

      {showSocial && (
        <div
          className="fixed z-50 w-11 h-11 rounded-full bg-[var(--color-background)] text-white flex items-center justify-center text-xl shadow-lg transition-all duration-400 active:bg-[var(--color-secondary)] social-icon-btn"
          style={{
            left: getArrowPosition().x,
            top: getArrowPosition().y,
            opacity: showSocial ? 1 : 0,
            pointerEvents: showSocial ? "auto" : "none",
            transform: "scale(1)",
            transitionDelay: "0s",
          }}
          onClick={() => setShowSocial(false)}
          aria-label="Close social icons"
        >
          <span style={{ width: socialIconSize, height: socialIconSize, display: "inline-flex" }}>
            {pos.y + 28 < window.innerHeight / 2 ? ArrowDownIcon : ArrowUpIcon}
          </span>
        </div>
      )}

      {SOCIAL_ICONS.map((social, i) => {
        const arrowPos = getArrowPosition();
        const actualPos = socialPositions[i];
        const offsetX = arrowPos.x - actualPos.x;
        const offsetY = arrowPos.y - actualPos.y;
        const tx = showSocial ? 0 : offsetX;
        const ty = showSocial ? 0 : offsetY;
        return (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-40 w-11 h-11 rounded-full bg-[var(--color-background)] text-white flex items-center justify-center text-xl shadow-lg transition-all duration-500 social-icon-btn"
            style={{
              left: actualPos.x,
              top: actualPos.y,
              opacity: showSocial ? 1 : 0,
              pointerEvents: showSocial ? "auto" : "none",
              transform: `translate(${tx}px, ${ty}px)`,
              transitionDelay: showSocial ? `${i * 0.08}s` : `${(SOCIAL_ICONS.length - i) * 0.05}s`,
            }}
            aria-label={social.label}
            onClick={() => {
              setOpen(false);
              setShowSocial(false);
            }}
          >
            {social.icon}
          </a>
        );
      })}
    </div>
  );
}
