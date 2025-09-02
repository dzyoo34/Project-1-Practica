import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links-container">
        {/* Лого и описание */}
        <div className="footer__rights">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            BaltiCar 2025 <br />
            All rights reserved &copy;
          </p>
        </div>

        {/* Колонки со ссылками */}
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Нижняя часть */}
      <div className="footer__copyrights">
        <p>@2025 BaltiCar. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
