import { Button, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "../../redux/counter/action";
import LandingPageTemplate from "../../components/templates/LandingPageTemplate";
import Hero from "../../components/organisms/Hero";
import Testimony from "../../components/organisms/Testimony";
import Category from "../../components/organisms/Category";
import BannerSignUp from "../../components/organisms/BannerSignUp";
import FeaturedJobs from "../../components/organisms/FeaturedJobs";

const { Title } = Typography;

export default function LandingPage() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  return (
    // <div>
    // 	<Title level={5}>Counter: {counter}</Title>
    // 	<Button onClick={handleIncrement} type="primary">
    // 		Increment
    // 	</Button>
    // </div>
    <LandingPageTemplate>
      <Hero />
      <Testimony />
      <Category />
      <BannerSignUp />
      <FeaturedJobs />
    </LandingPageTemplate>
  );
}
