import { cn } from "@/lib/utils";
import { Menu, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LOGO = "https://megaharvest.org/wp-content/uploads/2024/11/2x@2x.png";

const NAV = [
  { label: "Home", href: "/", internal: true },
  { label: "About Us", href: "https://megaharvest.org/aboutus/" },
  { label: "Crusades", href: "https://megaharvest.org/crusades/" },
  { label: "Testimonies", href: "https://megaharvest.org/testimonies/" },
  { label: "Booking", href: "https://megaharvest.org/booking/" },
  { label: "Giving", href: "https://megaharvest.org/giving/" },
  { label: "Sermons", href: "https://megaharvest.org/album/our-resources/" },
];

const SOCIAL = [
  { name: "twitter", href: "https://twitter.com/preacher_jay", Icon: Twitter },
  { name: "facebook", href: "https://web.facebook.com/preacherjay/", Icon: Facebook },
  { name: "youtube", href: "https://www.youtube.com/c/PreacherJay", Icon: Youtube },
  { name: "instagram", href: "https://www.instagram.com/preacher_jay/", Icon: Instagram },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-[9995] w-full bg-white",
        "shadow-[0_3px_45px_rgba(0,0,0,0.15)]",
      )}
    >
      <header className="relative z-[9998] w-full">
        <div className="mx-auto w-full max-w-[1550px] px-[24px] md:px-[48px] lg:px-[90px]">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <div className="relative z-10 flex h-full items-center">
              <Link to="/" aria-label="Mega Harvest" className="block py-[14px]">
                <img
                  src={LOGO}
                  alt="Mega Harvest"
                  className="h-[65px] w-auto select-none"
                  loading="eager"
                  decoding="async"
                />
              </Link>
            </div>

            {/* Center: Nav */}
            <nav className="hidden flex-1 items-center justify-center text-center md:flex">
              <ul className="flex w-full items-center justify-center">
                {NAV.map((item) => (
                  <li key={item.label} className="flex items-center text-[16px] font-bold">
                    {item.internal ? (
                      <Link
                        to={item.href}
                        aria-current={item.href === "/" ? "page" : undefined}
                        className="px-5 py-4 transition-colors hover:text-neutral-700"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-4 transition-colors hover:text-neutral-700"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: Socials */}
            <ul className="hidden items-center md:flex">
              {SOCIAL.map(({ name, href, Icon }) => (
                <li key={name} className="flex items-center">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex h-10 w-10 items-center justify-center text-neutral-600 transition-colors hover:text-black"
                    aria-label={name}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Navigation Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 text-neutral-700 md:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          className={cn(
            "md:hidden",
            open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
            "transition-opacity duration-200 ease-out",
          )}
        >
          <div className="mx-auto max-w-[1550px] px-6 pb-6">
            <nav className="rounded-md border border-neutral-200 bg-white p-2 shadow-sm">
              <ul className="grid">
                {NAV.map((item) => (
                  <li key={item.label}>
                    {item.internal ? (
                      <Link
                        to={item.href}
                        className="block rounded-md px-3 py-3 text-[16px] font-bold hover:bg-neutral-50"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-md px-3 py-3 text-[16px] font-bold hover:bg-neutral-50"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex items-center gap-2 border-t border-neutral-200 pt-2">
                {SOCIAL.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex h-10 w-10 items-center justify-center text-neutral-600 hover:text-black"
                    aria-label={name}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
