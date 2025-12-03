import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-[2px] w-full bg-gradient-to-r from-slateBlue via-softSkyCyan to-sunsetPeach opacity-60 rounded-full mb-10" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="relative h-20 w-24 flex items-center justify-center">
              <Image
                src="/images/ehm-logo.png"
                alt="EHM Tech logo"
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>
          </div>

          <div className="flex gap-6 text-sm text-slate-600">
            <Link href="/services" className="hover:text-slate-900 transition">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-slate-900 transition">
              Portfolio
            </Link>
            <Link href="/careers" className="hover:text-slate-900 transition">
              Careers
            </Link>
            <Link href="/contact" className="hover:text-slate-900 transition">
              Contact
            </Link>
          </div>

          <div className="flex gap-4 text-slate-500">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-slate-900 transition"
            >
              <FaLinkedin size={18} />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-slate-900 transition"
            >
              <FaInstagram size={18} />
            </Link>

            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-slate-900 transition"
            >
              <FaFacebook size={18} />
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-slate-900 transition"
            >
              <FaTwitter size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} EHM Technology Services — All rights reserved.
        </div>
      </div>
    </footer>
  );
};
