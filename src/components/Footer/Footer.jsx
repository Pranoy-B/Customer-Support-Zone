import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 md:pl-35">
      <nav className="max-w-full">
        <h6 className="footer-title">CS-Ticket System</h6>
        <p className="w-[350px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Product & Services</a>
        <a className="link link-hover">Customer Stories</a>
        <a className="link link-hover">Download Apps</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Our Mission</a>
        <a className="link link-hover">Contact Saled</a>
      </nav>
      <nav>
        <h6 className="footer-title">Information</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Join Us</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social Links</h6>
        <a className="link link-hover"> <i class="fa-brands fa-facebook-f"></i> @CS-Ticket System</a>
        <a className="link link-hover"><i class="fa-brands fa-instagram"></i> @CS-Ticket System</a>
        <a className="link link-hover"><i class="fa-brands fa-x-twitter"></i> @CS-Ticket System</a>
        <a className="link link-hover"><i class="fa-regular fa-envelope"></i> Support@cst.com</a>
        
      </nav>

    </footer>
  );
};

export default Footer;
