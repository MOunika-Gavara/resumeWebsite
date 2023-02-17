import "./MainPage.css";
import { Grid, Box } from "@mui/material";

const Experience = () => {
    const exp1 = [
        {
            position: "Budget Director",
            year: "2022- Current",
            description: "This is a description of your work experience"
        }]
    const exp2 = [
        {
            position: "Business Administration",
            year: "2010-2021",
            description: "This is a description of your work experience"
        }]
    const exp3 = [{
        position: "Finance Director",
        year: "2008-2010",
        description: "This is a description of your work experience"

    }
    ]
    return (
        <Box style={{ marginTop: 300 }}>
            <h1 className="edu">Experience</h1>
            <Grid container
                sx={{ marginLeft: 15, marginTop: 5 }}>
                <div className="educard" style={{ display: "flex", flexDirection: "row" }}>
                    {exp1.map((item) => {
                        return (
                            <div >
                                <h3>{item.position}</h3>
                                <p className="info">
                                    {item.description}
                                </p>
                                <span>&bull;</span> <em className="date">{item.year}</em>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="educard" style={{ marginLeft: 50 }}>
                    {exp2.map((item) => {
                        return (
                            <div >
                                <h3>{item.position}</h3>
                                <p className="info">
                                    {item.description}
                                </p>
                                <span>&bull;</span> <em className="date">{item.year}</em>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="educard" style={{ marginLeft: 50 }}>
                    {exp3.map((item) => {
                        return (
                            <div >
                                <h3>{item.position}</h3>
                                <p className="info">
                                    {item.description}
                                </p>
                                <span>&bull;</span> <em className="date">{item.year}</em>
                            </div>
                        )
                    })
                    }
                </div>


            </Grid>
        </Box>
    )
}
export default Experience;