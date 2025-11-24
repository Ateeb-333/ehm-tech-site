import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-gradient-to-b from-black/40 via-black/60 to-black py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-[2px] w-full bg-gradient-to-r from-slateBlue via-softSkyCyan to-sunsetPeach opacity-40 rounded-full mb-10" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-inner shadow-black/60 flex items-center justify-center">
              <span className="text-white font-semibold text-base tracking-wide">
                E
              </span>
            </div>

            <div className="leading-tight">
              <p className="text-white font-semibold text-sm">
                EHM Tech Services
              </p>
              <p className="text-gray-400 text-[11px]">
                Engineering • Estimation • AI & Digital
              </p>
            </div>
          </div>

          <div className="flex gap-6 text-sm text-gray-300">
            <Link href="/services" className="hover:text-softSkyCyan transition">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-softSkyCyan transition">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-softSkyCyan transition">
              Contact
            </Link>
          </div>

          <div className="flex gap-4 text-gray-400">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaLinkedin size={18} />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaInstagram size={18} />
            </Link>

            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaFacebook size={18} />
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaTwitter size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center text-[11px] text-gray-500">
          © {new Date().getFullYear()} EHM Tech Services — All rights reserved.
        </div>
      </div>
    </footer>
  );
};
