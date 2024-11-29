
import React from 'react';
import './Footer.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer  mt-5">
      <div className="container">
        <div className="row">
          {/* Column for Links (Categories) */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase text-dark">Online Shopping</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="">Men</a></li>
              <li><a href="#" className="">Women</a></li>
              <li><a href="#" className="">Kids</a></li>
              <li><a href="#" className="">Home & Living</a></li>
              <li><a href="#" className="">Beauty</a></li>
              <li><a href="#" className="">Gift Cards</a></li>
              <li><a href="#" className="">Myntra Insider</a></li>
            </ul>

            <h5 className="text-uppercase text-dark">USEFUL LINKS</h5>
            <ul className="">
              <li><a href="#" className="">Blog</a></li>
              <li><a href="#" className="">Careers</a></li>
              <li><a href="#" className="">Site Map</a></li>
              <li><a href="#" className="">Corporate Information</a></li>
              <li><a href="#" className="">Whitehat</a></li>
              <li><a href="#" className="">Cleartrip</a></li>  
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase text-dark">CUSTOMER POLICIES</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="">Contact Us</a></li>
              <li><a href="#" className="">FAQ</a></li>
              <li><a href="#" className="">T&C</a></li>
              <li><a href="#" className="">Terms Of Use</a></li>
              <li><a href="#" className="">Track Orders</a></li>
              <li><a href="#" className="">Shipping</a></li>
              <li><a href="#" className="">Cancellation</a></li>
              <li><a href="#" className="">Returns</a></li>
              <li><a href="#" className="">Privacy policy</a></li>
              <li><a href="#" className="">Grievance Officer</a></li>
            </ul>
        </div>
          
       
         

          {/* Repeat similar columns for other categories */}
          
          {/* Column for Social Media & App Links */}
          <div className="col-lg-3 col-md-6">
                <h5 className="text-uppercase text-dark">EXPERIENCE MYNTRA APP ON MOBILE</h5>
                <img src="/images/footer.png"  className="link" />
                <h5 className="text-uppercase text-dark mt-3">Connect with us</h5>
                <a href="#" className=" me-3"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className=" me-3"><i className="fab fa-instagram"></i></a>
                <a href="#" className=" me-3"><i className="fab fa-twitter"></i></a>
                <a href="#" className=" me-3"><i className="fab fa-youtube"></i></a>
          </div>
                <div className="col-lg-3 col-md-6">
                    <img src="/images/footer1.png"  className="link" />
                </div>
        </div>

        {/* Bottom Section with Copyright and Contact */}
        <div className="text-center py-3">
          <p style={{color:'#b0b0b0'}}>© {new Date().getFullYear()} Myntra. All Rights Reserved.</p>
        </div>

        {/* Full Text Section */}
        <div className="col-12 mt-4">
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a odio a nulla malesuada efficitur. 
              Vestibulum id dignissim nisi, ut tempus lectus. Phasellus in leo sed arcu congue tempor ac a sapien. 
              Duis a urna lorem. Quisque scelerisque sapien orci, non pulvinar orci facilisis eget. Nullam eget enim 
              vitae metus interdum accumsan nec vel quam. Sed ultricies dui nec dui malesuada, in dictum mi accumsan. 
              Pellentesque aliquet diam nec feugiat malesuada.
            </p>
          </div>
        
          <div className="col-12 mt-4">
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a odio a nulla malesuada efficitur. 
              Vestibulum id dignissim nisi, ut tempus lectus. Phasellus in leo sed arcu congue tempor ac a sapien. 
              Duis a urna lorem. Quisque scelerisque sapien orci, non pulvinar orci facilisis eget. Nullam eget enim 
              vitae metus interdum accumsan nec vel quam. Sed ultricies dui nec dui malesuada, in dictum mi accumsan. 
              Pellentesque aliquet diam nec feugiat malesuada.
            </p>
          </div>

          <div className="col-12 mt-4">
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a odio a nulla malesuada efficitur. 
              Vestibulum id dignissim nisi, ut tempus lectus. Phasellus in leo sed arcu congue tempor ac a sapien. 
              Duis a urna lorem. Quisque scelerisque sapien orci, non pulvinar orci facilisis eget. Nullam eget enim 
              vitae metus interdum accumsan nec vel quam. Sed ultricies dui nec dui malesuada, in dictum mi accumsan. 
              Pellentesque aliquet diam nec feugiat malesuada.
            </p>
          </div>
          <div className="col-12 mt-4">
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a odio a nulla malesuada efficitur. 
              Vestibulum id dignissim nisi, ut tempus lectus. Phasellus in leo sed arcu congue tempor ac a sapien. 
              Duis a urna lorem. Quisque scelerisque sapien orci, non pulvinar orci facilisis eget. Nullam eget enim 
              vitae metus interdum accumsan nec vel quam. Sed ultricies dui nec dui malesuada, in dictum mi accumsan. 
              Pellentesque aliquet diam nec feugiat malesuada.
            </p>
          </div>


      </div>
    </footer>
  );
};

export default Footer;
