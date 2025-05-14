"use client";

import { Section, Block, Link } from "../../devlink/_Builtin";
import { Navbar } from "../../devlink";
import { Footer } from "../../devlink";
import test from "node:test";

export default function Home() {
  return (
    <div>
      <Navbar
        navbarLinkFeatures={"Features"}
      ></Navbar>
      <Footer/>
    <Section
      tag="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Block tag="div" className="container">
        <Block
          tag="div"
          className="hero-split"
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h1
            className="margin-bottom-24px"
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              background: "linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Welcome to Webflow Cloud
          </h1>
          <Block tag="p" className="margin-bottom-24px">
            This is a simple test using Basic components with enhanced styling.
          </Block>
          <div>
            <Link
              button={true}
              options={{
                href: "#",
              }}
              className="button-primary"
            >
              Get Started
            </Link>
          </div>
        </Block>
      </Block>
    </Section>
    </div>
  );
}
