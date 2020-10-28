import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import PersonIcon from "@material-ui/icons/Person";
import StepButton from "@material-ui/core/StepButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    justifyContent: "center",
  },
}));
function getSteps() {
  return [
    "Qualified for training",
    "Training attended",
    "Mock attended",
    "Interview scheduled",
    "Offered",
    "Accepted",
  ];
}

function getCompany() {
  return [
    {
      logo:
        "https://www.green-apex.com/wp-content/uploads/2017/09/android-chrome-512x512-1.png",
      companyName: "Company A",
      timeRemaining: "10 mins",
      designation: "Frontend Developer",
    },
    {
      logo:
        "https://www.green-apex.com/wp-content/uploads/2017/09/android-chrome-512x512-1.png",
      companyName: "Company B",
      timeRemaining: "20 mins",
      designation: "React JS Developer",
    },
    {
      logo:
        "https://www.green-apex.com/wp-content/uploads/2017/09/android-chrome-512x512-1.png",
      companyName: "Company C",
      timeRemaining: "5 mins",
      designation: "Node JS Developer",
    },
    {
      logo:
        "https://www.green-apex.com/wp-content/uploads/2017/09/android-chrome-512x512-1.png",
      companyName: "Company D",
      timeRemaining: "30 mins",
      designation: "Python Developer",
    },
  ];
}

const Home = () => {
  const classes = useStyles();
  const steps = getSteps();
  const company = getCompany();

  return (
    <div style={{ marginLeft: "3%" }}>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <span>
          <h1 style={{ fontWeight: "bold" }}>Gargi's Home Page</h1>
        </span>
        <span>
          <PersonIcon style={{ fontSize: 110, color: "lightGrey" }} />
        </span>
      </Box>
      {company.map((company, index) => (
        <div>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Box flexDirection="column">
              <img
                src={`${company.logo}`}
                alt="Logo"
                style={{ width: "120px", height: "100px" }}
              />
              <h4 style={{ fontWeight: "bold", marginTop: "15px" }}>
                {company.companyName}
              </h4>
              <p>{company.designation}</p>
            </Box>

            <Stepper alternativeLabel className={classes.root}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepButton> {label}</StepButton>
                </Step>
              ))}
            </Stepper>

            <Box flexDirection="column">
              <Button
                style={{
                  height: "60px",
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                Finish Training
              </Button>
              <div
                style={{ color: "red", marginTop: "15px", fontWeight: "bold" }}
              >
                {company.timeRemaining} remaining
              </div>
            </Box>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default Home;
