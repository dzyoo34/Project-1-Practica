import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links-container">
      
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

        
        <div 
          className="footer__links"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            width: '100%'
          }}
        >
          {footerLinks.map((link) => (
            <div 
              key={link.title} 
              className="footer__link"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <h3 
                className="font-bold text-lg text-gray-900"
                style={{ marginBottom: '1rem' }}
              >
                {link.title}
              </h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

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
