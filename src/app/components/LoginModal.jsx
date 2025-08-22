"use client";

import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function AuthModal({ isOpen, onClose }) {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup

  // Animation trigger
  useEffect(() => {
    if (isOpen) {
    setShow(true);
    setIsLogin(true); // Reset to login whenever modal opens
  } 
    else {
      const timeout = setTimeout(() => setShow(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen && !show) return null;

  // Validation Schemas
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too Short!").required("Required"),
  });

  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too Short!").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      style={{ backdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.4)" }}
      onClick={onClose}
    >
      <div
        className={`bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl w-11/12 max-w-md transform transition-all duration-500 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white text-lg"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        {/* Formik Form */}
        <Formik
          initialValues={
            isLogin
              ? { email: "", password: "" }
              : { name: "", email: "", password: "", confirmPassword: "" }
          }
          validationSchema={isLogin ? LoginSchema : SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
            onClose();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              {!isLogin && (
                <div className="flex flex-col">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="border border-gray-300 dark:border-gray-700 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100 transition"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}

              <div className="flex flex-col">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-300 dark:border-gray-700 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100 transition"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex flex-col">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border border-gray-300 dark:border-gray-700 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100 transition"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {!isLogin && (
                <div className="flex flex-col">
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="border border-gray-300 dark:border-gray-700 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100 transition"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isLogin
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500"
                    : "bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500"
                } text-white py-3 rounded-xl font-semibold mt-2 shadow-lg hover:shadow-indigo-400/50 transition-all`}
              >
                {isSubmitting ? (isLogin ? "Logging in..." : "Signing up...") : isLogin ? "Login" : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>

        {/* Footer Toggle */}
        <p className="mt-4 text-center text-gray-500 dark:text-gray-400 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
