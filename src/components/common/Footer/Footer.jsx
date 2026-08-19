import SectionOrbs from "../../background/SectionOrbs";
import { ORB_CONFIG } from "../../background/orbConfig";
import logo from "../../../assets/images/logo.webp";

export default function Footer() {
  return (
    <footer className="h-fit w-full mx-auto">
      <SectionOrbs config={ORB_CONFIG.footer} />

      {/* FOOTER BOTTOM */}
      <div className="w-full text-white px-4 md:px-0">
        <div className="py-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-8">

            {/* Logo & Tagline */}
            <div className="flex flex-col items-center gap-4 text-center md:col-span-2">
              <div>
                <img src={logo} alt="Logo" className="h-auto object-contain w-[110px] md:w-[124px] lg:w-[136px]" />

              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-[180px]">
                Technology simplifies every aspect of life.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="mb-5 text-xs font-bold tracking-widest text-white uppercase">Quick Links</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {["Home", "Product", "Service", "About Us", "Connect Us"].map((item) => (
                  <li key={item}>
                    <a href="#" className="flex items-center gap-2 transition-colors duration-200 hover:text-white">
                      <span className="text-slate-400">›</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alamat */}
            <div className="md:col-span-2">
              <h3 className="mb-5 text-xs font-bold tracking-widest text-white uppercase">Alamat</h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>
                    Jl. Kota Semarang, Indonesia
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@kvi.or.id" className="transition-colors hover:text-white">pausnusantara@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:02178848462" className="transition-colors hover:text-white">0821567891011</a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <h3 className="mb-5 text-xs font-bold tracking-widest text-white uppercase">Social Media</h3>
              <div className="flex gap-3">

                {/* Facebook */}
                <a href="#" aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-[#1a3a5c] hover:bg-blue-600 flex items-center justify-center transition-colors duration-200">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-[#1a3a5c] hover:bg-pink-600 flex items-center justify-center transition-colors duration-200">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-[#1a3a5c] hover:bg-sky-600 flex items-center justify-center transition-colors duration-200">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

              </div>
            </div>

          </div>

          {/* Divider & Copyright */}
          <div className="border-t border-[#1e4068] mt-10 pt-4 text-center text-xs text-slate-400">
            © Ammertav. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </div>
    </footer>
  );
}
