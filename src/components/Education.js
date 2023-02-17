import "./MainPage.css";
import { Grid, Box } from "@mui/material";

const Education = () => {

    const university = [{
        UniversityName: "The San Francisco Business School",
        specialization: "EEE",
        MonthOfPassing: "May",
        YearOfPassing: "2017- 2021"
    }]
    const college =
        [{
            collegeName: "L.A. University of Applied Sciences",
            specialization: "MPC",
            MonthOfPassing: "May",
            YearOfPassing: "2015 - 2017"
        }]
    const school = [{
        schoolName: "NYC School of Marketing and Advertising",
        specialization: "MPC",
        MonthOfPassing: "May",
        YearOfPassing: "2015"
    }
    ]

    return (
        <Box className="boxstyle" style={{ marginTop: 80 }}>
            <h1 className="edu">Education</h1>
            <Grid container
                sx={{ marginLeft: 15, marginTop: 5 }}>
                <div className="educard">
                    {university.map((item) => {
                        return (
                            <div >
                                <h3>{item.UniversityName}</h3>
                                <p className="info">
                                    {item.specialization}
                                </p>
                                <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                            </div>
                        )
                    })
                    }
                </div>
                <div style={{ marginLeft: 50 }} className="educard">
                    {college.map((item) => {
                        return (
                            <div>
                                <h3>{item.collegeName}</h3>
                                <p className="info">
                                    {item.specialization}
                                </p>
                                <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                            </div>
                        )
                    })
                    }
                </div>
                <div style={{ marginLeft: 50 }} className="educard">
                    {school.map((item) => {
                        return (
                            <div >
                                <h3>{item.schoolName}</h3>
                                <p className="info">
                                    {item.specialization}
                                </p>
                                <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                            </div>
                        )
                    })
                    }
                </div>
            </Grid>
        </Box>
    )
}
export default Education;