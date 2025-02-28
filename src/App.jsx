import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dob, setDOB] = useState("");
  const [emergengyContact, setEmergengyContact] = useState("");
  const [emergencyRelation, setEmergencyRelation] = useState("");
  const [capability, setCapability] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [careerManager, setCareerManager] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [response, setResponse] = useState({});

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleChange = (event) => {
    setCapability(event.target.value);
  };

  const validateForm = () => {
    const errors = {};
    if (!email) errors.email = "Email is required";
    if (!employeeId) errors.employeeId = "Employee ID is required";
    if (!name) errors.name = "Full Name is required";
    if (!dateOfJoining) errors.dateOfJoining = "Date of Joining is required";
    if (!mobileNumber) errors.mobileNumber = "Mobile Number is required";
    if (mobileNumber.length != 10)
      errors.mobileNumber = "Invalid Mobile number";
    if (!bloodGroup) errors.bloodGroup = "Blood Group is required";
    if (!dob) errors.dob = "Date of Birth is required";
    if (!emergengyContact)
      errors.emergengyContact = "Emergency Contact is required";
    if (emergengyContact.length != 10)
      errors.emergengyContact = "Invalid Mobile number";
    if (!emergencyRelation) errors.emergencyRelation = "Relation is required";
    if (!capability) errors.capability = "Capability is required";
    if (!gender) errors.gender = "Gender is required";
    if (!location) errors.location = "Base Location is required";
    if (!careerManager) errors.careerManager = "Career Manager is required";
    if (!password) errors.password = "Password is required";
    if (!confirmPassword)
      errors.confirmPassword = "Confirm Password is required";
    if (password !== confirmPassword)
      errors.passwordMatch = "Passwords do not match";
    if (email && !/^[a-zA-Z0-9._%+-]+@bluealtair\.com$/.test(email))
      errors.email = "Email must end with @bluealtair.com";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert("Submitted");
      console.log({
        Name: name,
        EmployeeId: employeeId,
        DateOfJoining: dateOfJoining,
        MobileNumber: mobileNumber,
        Email: email,
        BloodGroup: bloodGroup,
        DateOfBirth: dob,
        EmergencyContact: emergengyContact,
        EmergencyRelation: emergencyRelation,
        Gender: gender,
        Capability: capability,
        Location: location,
        CareerManager: careerManager,
        Password: password,
      });
    }
  };

  return (
    <Box
      sx={{
        width: "60%",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "20px",
        boxShadow: "5px 10px 6px #d6d2d2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "Nunito, sans-serif", margin: "10px" }}
      >
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Account Details Section */}
        <Box sx={{ width: "100%", marginBottom: "20px" }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: "Nunito, sans-serif" }}
          >
            Account Details
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: "10px" }}
            inputProps={{
              pattern: "^[a-zA-Z0-9._%+-]+@bluealtair\\.com$",
              title: "Email must end with @bluealtair.com",
            }}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />

          <TextField
            label="Employee ID"
            variant="outlined"
            fullWidth
            required
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            sx={{ marginBottom: "10px" }}
            error={!!formErrors.employeeId}
            helperText={formErrors.employeeId}
          />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!formErrors.name}
                helperText={formErrors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Joining"
                variant="outlined"
                type="date"
                fullWidth
                required
                value={dateOfJoining}
                onChange={(e) => setDateOfJoining(e.target.value)}
                sx={{ marginTop: "0px" }}
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!formErrors.dateOfJoining}
                helperText={formErrors.dateOfJoining}
              />
            </Grid>
          </Grid>
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            required
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            sx={{ marginTop: "10px" }}
            error={!!formErrors.mobileNumber}
            helperText={formErrors.mobileNumber}
          />
        </Box>

        {/* Personal Details Section */}
        <Box sx={{ width: "100%", marginBottom: "20px" }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: "Nunito, sans-serif" }}
          >
            Personal Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Blood Group"
                variant="outlined"
                fullWidth
                required
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                error={!!formErrors.bloodGroup}
                helperText={formErrors.bloodGroup}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Birth"
                variant="outlined"
                type="date"
                fullWidth
                required
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
                sx={{ marginTop: "0px" }}
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!formErrors.dob}
                helperText={formErrors.dob}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Emergency Contact"
                variant="outlined"
                fullWidth
                required
                value={emergengyContact}
                onChange={(e) => setEmergengyContact(e.target.value)}
                sx={{ marginTop: "10px" }}
                error={!!formErrors.emergengyContact}
                helperText={formErrors.emergengyContact}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Relation"
                variant="outlined"
                fullWidth
                required
                value={emergencyRelation}
                onChange={(e) => setEmergencyRelation(e.target.value)}
                sx={{ marginTop: "10px" }}
                error={!!formErrors.emergencyRelation}
                helperText={formErrors.emergencyRelation}
              />
            </Grid>
          </Grid>

          <FormControl
            fullWidth
            sx={{ marginTop: "10px" }}
            error={!!formErrors.gender}
          >
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              value={gender}
              onChange={handleGender}
              label="Gender"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            {formErrors.gender && (
              <Typography variant="body2" color="error">
                {formErrors.gender}
              </Typography>
            )}
          </FormControl>
        </Box>

        {/* Organization Details Section */}
        <Box sx={{ width: "100%", marginBottom: "20px" }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: "Nunito, sans-serif" }}
          >
            Organization Details
          </Typography>
          <TextField
            label="Organization name"
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            type="text"
            value="Blue Altair"
            sx={{ marginBottom: "10px" }}
          />

          <FormControl
            fullWidth
            sx={{ marginBottom: "10px" }}
            error={!!formErrors.capability}
          >
            <InputLabel id="capability">Capability</InputLabel>
            <Select
              labelId="capability"
              name="capability"
              required
              value={capability}
              onChange={handleChange}
              label="Capability"
            >
              <MenuItem value="API Management">API Management</MenuItem>
              <MenuItem value="Data Management">Data Management</MenuItem>
              <MenuItem value="Data Science & AI">Data Science & AI</MenuItem>
              <MenuItem value="Development of Digital Applications">
                Development of Digital Applications
              </MenuItem>
            </Select>
            {formErrors.capability && (
              <Typography variant="body2" color="error">
                {formErrors.capability}
              </Typography>
            )}
          </FormControl>

          <TextField
            label="Base Location"
            variant="outlined"
            fullWidth
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{ marginTop: "0px" }}
            error={!!formErrors.location}
            helperText={formErrors.location}
          />

          <TextField
            label="Career Manager"
            variant="outlined"
            fullWidth
            required
            value={careerManager}
            onChange={(e) => setCareerManager(e.target.value)}
            sx={{ marginTop: "10px" }}
            error={!!formErrors.careerManager}
            helperText={formErrors.careerManager}
          />
        </Box>

        {/* Credentials Section */}
        <Box sx={{ width: "100%", marginBottom: "20px" }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: "Nunito, sans-serif" }}
          >
            Credentials
          </Typography>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: "10px" }}
            error={!!formErrors.password}
            helperText={formErrors.password}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            required
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ marginBottom: "10px" }}
            error={!!formErrors.confirmPassword}
            helperText={formErrors.confirmPassword}
          />
        </Box>

        {/* Submit Button */}
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{
            backgroundColor: "rgb(0, 136, 255)",
            marginTop: "10px",
            "&:hover": {
              backgroundColor: "rgb(3, 82, 152)",
            },
            fontFamily: "Nunito, sans-serif",
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default App;
