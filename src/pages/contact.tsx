import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconMail,
  IconPhoneCall,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact-form';
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col lg:m-auto mx-auto mt-10 font-Roboto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-center">
        <h1 className="font-black text-5xl">&#123; Contact &#125;</h1>
      </div>
      <div className="flex mb-6 mt-10">
        <h1 className="text-4xl font-black"> Lets Work Together</h1>
      </div>
      <div className="flex lg:flex-row flex-col lg:space-x-10 lg:space-x lg:space-y-0 space-y-6">
        <div className="flex flex-col space-y-4 lg:pb-0 pb-10 lg:pr-10 pr-0">
          <p className="md:w-[460px] w-[320px]">
            Your inquiries, suggestions, or collaborations are valued. Please
            utilize the form to reach out, and I will promptly respond to your
            message. Your feedback is instrumental in enhancing my services, and
            I am committed to providing prompt assistance to address your needs.
          </p>
          <div className="font-black">Other ways to contact me</div>
          <div className="flex space-x-4">
            <IconPhoneCall />
            <div>+639664173170</div>
          </div>
          <div className="flex space-x-4">
            <IconBrandTelegram />
            <div>@aaronneyll</div>
          </div>
          <div className="flex space-x-4">
            <IconMail />
            <div>aaroneielaro@gmail.com</div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="font-black">Links</div>
            <div className="flex flex-row space-x-6">
              <a
                href="https://www.linkedin.com/in/aaron-neiel-aro-098651251/"
                target="_blank"
              >
                <IconBrandLinkedin size={32} />
              </a>
              <a href="https://github.com/aarondesu" target="_blank">
                <IconBrandGithub size={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-[420px]">
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
