import React from "react";
import { Typography, Button, Box } from "@mui/material";
import "./MainPage.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import img4 from "../images/img4.webp";
import Education from "./Education";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Experience from "./Experience";
import Contact from "./Contact";



const MainPage = () => {

    const handleEduScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleExpScroll = () => {
        const element = document.getElementById('section-2');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleSkiScroll = () => {
        const element = document.getElementById('section-3');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleHobScroll = () => {
        const element = document.getElementById('section-4');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleconScroll = () => {
        const element = document.getElementById('section-5');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="icon">
            <img className="img" src={img4} alt="background img" ></img>
            <div style={{ marginLeft: 100, marginTop: 40, color: "white" }} className="text">
                <div class="uidiv">
                    <Typography variant="h2" >Hi! I'm </Typography>
                    <Box className="uibox" borderRadius={10}>UI/UX</Box><br />
                </div>
                <Typography variant="h2">Alex Johnson</Typography>
                <Typography variant="h6">
                    Designing user interfaces for over 7 years as Product Designer
                </Typography>
            </div>
            <div className="socialicon">
                <TwitterIcon />
                <FacebookIcon />
                <GitHubIcon />
            </div>
            <div className="linkicon" style={{ width: '100%' }}>
                <Button style={{ color: "white" }} className="textbox"
                    onClick={handleEduScroll}
                    display="inline" p={1} m={1}>Education
                </Button>
                <Button style={{ color: "white" }} className="textbox"
                    onClick={handleExpScroll}
                    display="inline" p={1} m={1}>Experience
                </Button>
                <Button style={{ color: "white" }} className="textbox"
                    onClick={handleSkiScroll}
                    display="inline" p={1} m={1}>Skills
                </Button>
                <Button style={{ color: "white" }} className="textbox"
                    onClick={handleHobScroll}
                    display="inline" p={1} m={1}>Hobbies
                </Button>
                <Button style={{ color: "white" }} className="textbox"
                    onClick={handleconScroll}
                    display="inline" p={1} m={1}>Contact
                </Button>

                {/* <div className="contact">
                    <EmailOutlinedIcon />
                    <Box component="div" display="inline" p={1} m={1}>alex@gmail.com</Box>
                    <CallOutlinedIcon />
                    <Box component="div" display="inline" p={1} m={1}>999999999</Box>
                </div> */}
            </div>
            {/* <main style={{ marginLeft: sidebarOpen ? "100px" : "0px" }}>{children}</main> */}
            <div id="section-1">
                <Education />
            </div>
            <div id="section-2">
                <Experience />
            </div>
            <div id="section-3">
                <Skills />
            </div>
            <div id="section-4">
                <Hobbies />
            </div>
            <div id="section-5">
                <Contact />
            </div>
        </div >
    )
}
export default MainPage;