import { Grid, Box } from "@mui/material";
import "./MainPage.css";


const Skills = () => {
    const skillset = ["HTML", "CSS", "Javascript", "React", "Firebase"]

    return (
        <Box className="educard" style={{ marginTop: 300, width: 1050, marginLeft: 120 }}>
            <h1 className="edu">Skills</h1>
            <Grid container
                sx={{ marginLeft: 15, marginTop: 5 }}>
                <div style={{ marginTop: 50, marginBottom: 50 }}>
                    {skillset.map((item) => (
                        <Box borderRadius={10} className="box">{item}</Box>
                    ))
                    }
                </div>
            </ Grid>
        </Box>
    )
}
export default Skills;