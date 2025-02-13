import React from 'react';

const Footer = () => {
  return (
    <footer className='min-h-[450px] bg-stone-900 text-white py-8'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between'>
        <div className='mb-6 lg:mb-0 flex flex-col'>
          <h3 className='text-xl font-bold'>Your Company</h3>
          <p className='text-gray-400 mt-2'>
            Providing quality products and services for over 10 years.
          </p>
        </div>

        <div className='mb-6 lg:mb-0'>
          <h4 className='text-lg font-semibold'>Contact Us</h4>
          <ul className='text-gray-400 mt-2'>
            <li>Email: info@yourcompany.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Your Street, Your City, Your Country</li>
            <li>Support: support@yourcompany.com</li>
            <li>Working Hours: Mon - Fri, 9 AM - 5 PM</li>
          </ul>
        </div>

        <div className='mb-6 lg:mb-0'>
          <h4 className='text-lg font-semibold'>Follow Us</h4>
          <ul className='flex flex-col gap-4 mt-2'>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500'>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400'>
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gulomoov_1/?next=%2F" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-700'>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@gulomoov__1" target="_blank" rel="noopener noreferrer" className='hover:text-red-500'>
                YouTube
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className='flex flex-col items-start lg:items-center'>
            <a href='/privacy-policy' className='hover:text-gray-400 mb-2 lg:mb-0 lg:mr-4'>
              Privacy Policy
            </a>
            <a href='/terms-of-service' className='hover:text-gray-400'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <div className='text-center mt-8'>
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
