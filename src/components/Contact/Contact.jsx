import React from 'react';
import Button from '../Button/Button';
import style from './Contact.module.scss';
import { RiErrorWarningLine } from 'react-icons/ri';
import Navbar from '../Navbar/Navbar';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const validationSchema = yup.object({
  name: yup
    .string()
    .max(50, 'Max length of name is 100 characters')
    .required('Please include your name.'),
  email: yup
    .string()
    .email('Your email should be a valid format.')
    .required('Please include your email'),
  message: yup.string().required('Please include your message'),
});

const Contact = () => {
  const [submit, setSubmit] = useState(false);

  const onSubmit = async (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();

    setSubmit(true);
    try {
      let { email, name, message } = values;
      await fetch('https://formsubmit.co/ajax/marasantonis@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      setSubmit(false);
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema: validationSchema,
    });

  return (
    <div className={style.contact}>
      <div className={style['contact__titleWrapper']}>
        <h2 className="headingXL">Contact</h2>
        <p className={style['contact__subtext']}>
          {`If you like to contact me please fill in the form and i'll get back to
        you as soon as possible.`}
        </p>
      </div>
      <form
        className={style['contact__form']}
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <div className={style['contact__controller']}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            className={style['contact__input']}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <RiErrorWarningLine
            className={
              errors.name && touched.name
                ? style['contact__icon--visible']
                : style['contact__icon--hidden']
            }
            size={30}
          />
        </div>
        <div className={style['contact__warningWrapper']}>
          <p
            className={
              errors.name && touched.name
                ? style['contact__warning--visible']
                : style['contact__warning--hidden']
            }
          >
            {errors.name}
          </p>
        </div>
        <div className={style['contact__controller']}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className={style['contact__input']}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <RiErrorWarningLine
            className={
              errors.email && touched.email
                ? style['contact__icon--visible']
                : style['contact__icon--hidden']
            }
            size={30}
          />
        </div>
        <div className={style['contact__warningWrapper']}>
          <p
            className={
              errors.email && touched.email
                ? style['contact__warning--visible']
                : style['contact__warning--hidden']
            }
          >
            {errors.email}
          </p>
        </div>
        <div className={style['contact__controller']}>
          <textarea
            name="message"
            id="message"
            rows="3"
            className={style['contact__input']}
            placeholder="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className={style['contact__warningWrapper']}>
          <p
            className={
              errors.message && touched.message
                ? style['contact__warning--visible']
                : style['contact__warning--hidden']
            }
          >
            {errors.message}
          </p>
        </div>
        <Button type="submit" text="send message" link="" />
      </form>
      <div
        className={
          submit
            ? style['contact__submitMsg--visible']
            : style['contact__submitMsg']
        }
      >
        <p className="headingL">Message Successfully Sent 🙏</p>
      </div>
      <div className={style['contact__navbarWrapper']}>
        <Navbar position={false} />
      </div>
    </div>
  );
};

export default Contact;
