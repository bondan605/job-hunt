import React from "react";
import "./style.css";
import { Button, Progress } from "antd";
import LandingPageTemplate from "../../components/templates/LandingPageTemplate";
import Tag from "../../components/atoms/Tag";

export default function DetailJob() {
  return (
    <LandingPageTemplate>
      <div className="section-detail">
        <div className="list-nav">
          Home / Companies / Nomad /{" "}
          <span className="name-job">Social Media Assistant</span>
        </div>
        <div className="section-card-job">
          <div className="detail">
            <div>
              <img src="/images/detail.png" alt="/images/detail.png" />
            </div>
            <div>
              <div className="name-job">Social Media Assistant</div>
              <div className="location-job">
                Agency · Paris, France · Full-Time
              </div>
            </div>
          </div>
          <div>
            <Button className="btn-apply" type="primary">
              Apply
            </Button>
          </div>
        </div>
      </div>
      <div className="section-more-detail">
        <div className="side-1">
          <div className="more-detail">
            <div className="title">Description</div>
            <div className="description">
              <p>
                Stripe is looking for Social Media Marketing expert to help
                manage our online networks. You will be responsible for
                monitoring our social media channels, creating content, finding
                effective ways to engage the community and incentivize others to
                engage on our channels.
              </p>
            </div>
          </div>
          <div className="more-detail">
            <div className="title">Responsibilities</div>
            <div className="description">
              <p>
                Stripe is looking for Social Media Marketing expert to help
                manage our online networks. You will be responsible for
                monitoring our social media channels, creating content, finding
                effective ways to engage the community and incentivize others to
                engage on our channels.
              </p>
            </div>
          </div>
          <div className="more-detail">
            <div className="title">Who You Are</div>
            <div className="description">
              <p>
                Stripe is looking for Social Media Marketing expert to help
                manage our online networks. You will be responsible for
                monitoring our social media channels, creating content, finding
                effective ways to engage the community and incentivize others to
                engage on our channels.
              </p>
            </div>
          </div>
          <div className="more-detail">
            <div className="title">Nice-To-Haves</div>
            <div className="description">
              <p>
                Stripe is looking for Social Media Marketing expert to help
                manage our online networks. You will be responsible for
                monitoring our social media channels, creating content, finding
                effective ways to engage the community and incentivize others to
                engage on our channels.
              </p>
            </div>
          </div>
        </div>
        <div className="side-2">
          <div className="content-detail">
            <div className="title">About this role</div>
            <div className="progress">
              <div className="info">
                5 applied <span>of 10 capacity</span>
              </div>
              <Progress
                className="progress-bar"
                percent={50}
                showInfo={false}
              />
            </div>
            <div className="label-value">
              <span>Apply Before</span>
              <span>July 31, 2021</span>
            </div>
            <div className="label-value">
              <span>Job Posted On</span>
              <span>July 1, 2021</span>
            </div>
            <div className="label-value">
              <span>Job Type</span>
              <span>Full-Time</span>
            </div>
            <div className="label-value">
              <span>Salary</span>
              <span>$75k-$85k USD</span>
            </div>
          </div>
          <div className="content-detail">
            <div className="title">Categories</div>
            <div className="categories">
              <Tag name="Marketing" />
              <Tag name="Design" />
            </div>
          </div>
          <div className="content-detail">
            <div className="title">Required Skills</div>
            <div className="categories">
              <Tag name="Project Management" />
              <Tag name="Copywriting" />
              <Tag name="Social Media Marketing" />
              <Tag name="English" />
              <Tag name="Copy Editing" />
            </div>
          </div>
        </div>
      </div>
    </LandingPageTemplate>
  );
}
