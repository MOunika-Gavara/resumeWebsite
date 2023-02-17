import { Box } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const Contact = () => {

    return (
        <Box className="contactbox">
            <h1 className="edu">Contact</h1>
            <div className="contact" style={{ marginTop: 50 }}>
                <div style={{ marginLeft: 150 }}>
                    <EmailOutlinedIcon />
                    <Box >alex@gmail.com</Box>
                </div>
                <div style={{ marginLeft: 50 }}>
                    <CallOutlinedIcon />
                    <Box>999999999</Box>
                </div>
            </div>

        </Box>
    )
}

export default Contact;