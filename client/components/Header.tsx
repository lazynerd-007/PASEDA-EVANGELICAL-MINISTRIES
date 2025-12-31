import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LOGO = "https://megaharvest.org/wp-content/uploads/2024/11/2x@2x.png";

const NAV = [
  { label: "Home", href: "/", internal: true },
  { label: "About Us", href: "/about", internal: true },
  { label: "Testimonies", href: "https://megaharvest.org/testimonies/" },
  { label: "Booking", href: "https://megaharvest.org/booking/" },
  { label: "Giving", href: "https://megaharvest.org/giving/" },
  { label: "Sermons", href: "https://megaharvest.org/album/our-resources/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-[9995] w-full bg-white",
          "shadow-sm",
        )}
      >
        <header className="relative z-[9998] w-full">
          <div className="mx-auto w-full max-w-[1550px] px-4 md:px-[48px] lg:px-[90px]">
            <div className="flex h-14 items-center justify-between md:h-20">
              {/* Logo */}
              <Link to="/" aria-label="Mega Harvest" className="flex-shrink-0">
                <img
                  src={LOGO}
                  alt="Mega Harvest"
                  className="h-8 w-auto select-none md:h-12"
                  loading="eager"
                  decoding="async"
                />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden flex-1 items-center justify-center md:flex">
                <ul className="flex items-center gap-1">
                  {NAV.map((item) => (
                    <li key={item.label}>
                      {item.internal ? (
                        <Link
                          to={item.href}
                          className="px-3 py-2 text-sm font-semibold transition-colors hover:text-neutral-600"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 text-sm font-semibold transition-colors hover:text-neutral-600"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile menu button */}
              <button
                type="button"
                aria-label="Navigation Menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="flex items-center justify-center p-2 text-neutral-700 md:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[9994] bg-black/20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed right-0 top-14 z-[9996] h-[calc(100vh-3.5rem)] w-64 bg-white shadow-lg transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="h-full overflow-y-auto p-4">
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.label}>
                {item.internal ? (
                  <Link
                    to={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-neutral-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-neutral-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
