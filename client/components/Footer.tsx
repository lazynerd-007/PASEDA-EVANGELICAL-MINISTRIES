import { Twitter, Facebook, Youtube, Instagram } from "lucide-react";

const BG_IMAGE =
  "https://megaharvest.org/wp-content/uploads/2022/12/footer.jpg";

const SOCIAL_LINKS = [
  {
    name: "twitter",
    href: "https://twitter.com/preacher_jay",
    Icon: Twitter,
  },
  {
    name: "facebook",
    href: "https://web.facebook.com/preacherjay/",
    Icon: Facebook,
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/c/PreacherJay",
    Icon: Youtube,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/preacher_jay/",
    Icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("${BG_IMAGE}")`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-5 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Copyright section */}
          <div className="text-center sm:text-left">
            <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
              Copyright © 2023 Paseda Evangelical Ministries
            </p>
          </div>

          {/* Social links section */}
          <div className="flex items-center justify-center gap-5 sm:justify-end">
            {SOCIAL_LINKS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center transition-colors duration-200"
                aria-label={name}
              >
                <Icon
                  size={20}
                  className="text-gray-500 group-hover:text-orange-500 transition-colors"
                  strokeWidth={1.5}
                />
                <span className="sr-only">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
