import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";

const FOOTER_LINKS = [
   {
    title: "Privacy",
    links: ["Terms of Use", "Privacy Policy", "Cookies"],
  },
  {
    title: "Services",
    links: ["Shop", "Order Ahead", "Menu"],
  },
  {
    title: "About Us",
    links: ["Find a Location", "About Us", "Our Story"],
  },
  {
    title: "Information",
    links: ["Plans & Pricing", "Sell Your Products", "Jobs"],
  },
];

const SOCIAL_LINKS = [
  {
    name: "Twitter",
    icon: FaXTwitter,
    href: "#",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-[#3b1f17] px-10 py-10 font-poppins text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">

        {/* Main Footer  */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Logo  */}
          <div className="footer-logo">
            <a
              href="/"
              className="text-4xl font-bold uppercase"
              aria-label="Coffee home"
            >
              <span className="text-5xl">C</span>offee
            </a>
          </div>

           {/* Footer Links */}
          {FOOTER_LINKS.map((section) => (
            <div
              key={section.title}
              className="footer-column"
            >
              <h2 className="mb-4 text-xl font-medium uppercase">
                {section.title}
              </h2>

              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="footer-link transition-opacity duration-200 hover:opacity-60"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

         {/* Social Media  */}
          <div className="footer-social">
            <h2 className="mb-4 text-xl font-medium uppercase">
              Social Media
            </h2>

            <div className="flex items-center gap-4 text-2xl">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="footer-social-link transition-transform duration-200 hover:scale-110"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        

      </div>
    </footer>
  );
};

export default Footer;