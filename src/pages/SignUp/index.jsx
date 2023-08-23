import { Button } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login-wrapper">
      <div className="bg-login">
        <img src="/images/login-bg.png" alt="/images/login-bg.png" />
      </div>
      <div className="form-wrapper">
        <div className="form-wrapper-inner">
          <h2>Welcome Back, Dude</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter name address"
                className="input-custom2"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="hint-error">Name is required</span>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Enter email address"
                className="input-custom2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="hint-error">Email is required</span>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password address"
                className="input-custom2"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="hint-error">Password is required</span>
              )}
            </div>
            <Button htmlType="submit" className="button-custom" type="primary">
              Sign Up
            </Button>
            <div className="info-text">
              Already have an account?{" "}
              <Link className="link" to="/signin">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
