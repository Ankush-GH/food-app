import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [submit, setSubmit] = useState(false);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://fooder-data-default-rtdb.firebaseio.com/complaints.json", {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Phone: phone,
        Message: message,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");

    setSubmit(true);
  };

  return (
    <Card
      style={{
        maxWidth: "450px",
        margin: "0 auto",
        padding: "2rem 1rem",
        boxShadow:
          " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h4">
          Contact us
        </Typography>
        <form onSubmit={submitHandler}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                value={firstName}
                onChange={firstNameHandler}
                label="First Name"
                placeholder="Enter Your First Name"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                value={lastName}
                onChange={lastNameHandler}
                label="Last Name"
                placeholder="Enter Your Last Name"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField
                value={email}
                onChange={emailHandler}
                type="email"
                label="Email"
                placeholder="Enter Email Name"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField
                value={phone}
                onChange={phoneHandler}
                type="number"
                label="Phone"
                placeholder="Enter Phone Number"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField
                value={message}
                onChange={messageHandler}
                label="Message"
                multiline
                rows={4}
                placeholder="Enter Message"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                Submit
              </Button>
            </Grid>
            {submit && (
              <Typography variant="h6" className="submit-msg font_base">
                Complaint Sent!
              </Typography>
            )}
          </Grid>
        </form>
        <Typography variant="h6" style={{ marginTop: "1rem" }}>
          Fill up the form and our team will get back to you within 24 hours
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Form;
