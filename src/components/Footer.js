import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Policy,
  PolicyRow,
} from "./FooterStyles";

  
const Footer = () => {
    return (
        <Box>
        <h1 style={{ color: "green", 
                    textAlign: "center", 
                    marginTop: "-50px" }}>
            GeeksforGeeks: A Computer Science Portal for Geeks
        </h1>
        <Container>
            <Row>
            <Column>
                <Heading>About Us</Heading>
                <FooterLink href="#">Aim</FooterLink>
                <FooterLink href="#">Vision</FooterLink>
                <FooterLink href="#">Testimonials</FooterLink>
            </Column>
            <Column>
                <Heading>Services</Heading>
                <FooterLink href="#">Writing</FooterLink>
                <FooterLink href="#">Internships</FooterLink>
                <FooterLink href="#">Coding</FooterLink>
                <FooterLink href="#">Teaching</FooterLink>
            </Column>
            <Column>
                <Heading>Contact Us</Heading>
                <FooterLink href="#">Uttar Pradesh</FooterLink>
                <FooterLink href="#">Ahemdabad</FooterLink>
                <FooterLink href="#">Indore</FooterLink>
                <FooterLink href="#">Mumbai</FooterLink>
            </Column>
            <Column>
                <Heading>Social Media</Heading>
                <FooterLink href="#">
                <i className="fab fa-facebook-f">
                    <span style={{ marginLeft: "10px" }}>
                    Facebook
                    </span>
                </i>
                </FooterLink>
                <FooterLink href="#">
                <i className="fab fa-instagram">
                    <span style={{ marginLeft: "10px" }}>
                    Instagram
                    </span>
                </i>
                </FooterLink>
                <FooterLink href="#">
                <i className="fab fa-twitter">
                    <span style={{ marginLeft: "10px" }}>
                    Twitter
                    </span>
                </i>
                </FooterLink>
                <FooterLink href="#">
                <i className="fab fa-youtube">
                    <span style={{ marginLeft: "10px" }}>
                    Youtube
                    </span>
                </i>
                </FooterLink>
            </Column>
            </Row>
            <Policy>
            <PolicyRow>© 2019 Openfit, LLC. All rights reserved.</PolicyRow>
            <PolicyRow>
                +Results vary depending on starting point and effort. Exercise and
                proper diet are necessary to achieve and maintain weight loss and
                muscle definition. The testimonials featured may have used more than
                one product or extended the program to achieve their maximum
                results.
            </PolicyRow>
            <PolicyRow>
                Consult your physician and follow all safety instructions before
                beginning any exercise program or using any supplement or meal
                replacement product, especially if you have any unique medical
                conditions or needs. The contents on our website are for
                informational purposes only, and are not intended to diagnose any
                medical condition, replace the advice of a healthcare professional,
                or provide any medical advice, diagnosis, or treatment.
            </PolicyRow>
            <PolicyRow>
                As an Amazon Associate, we may earn from qualifying purchases.
            </PolicyRow>
            </Policy>
        </Container>
        </Box>
     );
};
export default Footer;