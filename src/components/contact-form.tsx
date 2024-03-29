import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import * as yup from 'yup';
import React, { useState } from 'react';

import {
  VITE_EMAILJS_PUBLIC_KEY,
  VITE_EMAILJS_SERVICE_KEY,
  VITE_EMAILJS_TEMPLATE_KEY,
} from '../config';

type FormData = {
  user_name: string;
  user_email: string;
  message: string;
};

const schema = yup
  .object({
    user_name: yup.string().required('Name is required'),
    user_email: yup
      .string()
      .email('Email must be a valid email, eg. jon@outlook.com')
      .required('Email is required'),
    message: yup.string().required('Message is requried'),
  })
  .required();

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit((data) => {
    setLoading(true);

    emailjs
      .send(VITE_EMAILJS_SERVICE_KEY, VITE_EMAILJS_TEMPLATE_KEY, data, {
        publicKey: VITE_EMAILJS_PUBLIC_KEY,
      })
      .then((response) => {
        reset();
        setLoading(false);
        console.log(response);
      });
  });

  return (
    <>
      <form className="flex flex-col space-y-8" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label className="font-medium">Your Name</label>
          <input
            {...register('user_name')}
            className="border-2 p-2"
            disabled={loading}
          />
          {errors.user_name && (
            <motion.span
              className="text-red-500 py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {errors.user_name.message}
            </motion.span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="">
            Your Email
          </label>
          <input
            {...register('user_email')}
            className="border-2 p-2"
            disabled={loading}
          />
          {errors.user_email && (
            <motion.span
              className="text-red-500 py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {errors.user_email.message}
            </motion.span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            {...register('message')}
            className="resize-y min-w-[320px] h-40 p-2 border-2"
            id="message"
            disabled={loading}
          ></textarea>
          {errors.message && (
            <motion.span
              className="text-red-500 py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {errors.message.message}
            </motion.span>
          )}
        </div>
        <div className="flex">
          <button
            className="p-2 w-full bg-indigo-500 text-white"
            type="submit"
            disabled={loading}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
