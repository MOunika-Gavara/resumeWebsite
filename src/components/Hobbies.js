import "./MainPage.css";
import { Grid, Box } from "@mui/material";
import hobbies1 from "../images/hobbies1.png";
import hob from "../images/hob.avif";
import cinema from "../images/cinema.jpg";
import music from "../images/music.png"

const Hobbies = () => {
    return (
        <Box style={{ marginTop: 250 }}>
            <h1 className="edu">Hobbies</h1>
            <Grid container
                sx={{ marginLeft: 15, marginTop: 5 }}>
                <div className="divsec">
                    <img src={hobbies1} alt="sport" className="sport"></img>
                    <img src={hob} alt="cook" className="cook"></img>
                    <img src={cinema} alt="cinema" className="cinema"></img>
                    <img src={music} alt="music" className="music"></img>
                </div>
            </Grid>
        </Box>
    )
}
export default Hobbies;