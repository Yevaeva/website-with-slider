import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import about from "../../images/about.png";

const About = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const expressions = useMemo(
    () => [
      "page speed checking",
      "error & broken page alerts",
      "user experience optimisation",
      "technical SEO audits",
      "vulnerability & security scanning",
      "website uptime monitoring",
    ],
    []
  );

  useEffect(() => {
    if (subIndex === expressions[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      if (index === expressions.length - 1) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 70 : subIndex === expressions[index].length ? 1000 : 150
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, expressions]);

  return (
    <Row className="about" style={{ marginTop: "150px" }}>
      <h1 className="fw-bold">
        Beyond {expressions[index].substring(0, subIndex)}
        <span>|</span>
      </h1>
      <div className="d-flex flex-wrap py-5">
        <Col lg={6} sm={12} className="pt-3">
          <h2 className="fw-bold text-lg-start text-center">
            Meet Hexometer, your AI sidekick that works 24/7 to catch problems
            before they affect your business.
          </h2>
          <button className="mainbtn d-block m-lg-0 m-auto my-lg-4 my-4">
            Get started with our free plan
          </button>
          <p className=" text-lg-start text-center">
            Every day your website can face an increasing range of threats.
            Server problems, slow landing pages, broken links, frustrating
            mobile experiences, embarrassing spelling mistakes, changing SEO
            rules, 3rd party services breaking, or security issues that put your
            business at risk.
          </p>
          <p className="  text-lg-start text-center">
            To make matters worse, these issues can linger unnoticed, wasting
            your ad-budget and costing your business lost sales.
          </p>
          <p className=" text-lg-start text-center">
            Hexometer monitors your website 24/7, to catch Availability,
            Performance, User experience, SEO, Health and Security problems,
            before they affect your customers.
          </p>
        </Col>
        <Col lg={6} sm={12}>
          <img className="w-100" src={about} alt="about" />
        </Col>
      </div>
    </Row>
  );
};

export default About;
