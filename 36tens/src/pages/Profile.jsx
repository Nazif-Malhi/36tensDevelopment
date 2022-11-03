import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Row, Col, Container } from "react-bootstrap";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { OutlinedInput, TextField } from "@mui/material";

import countryList from "react-select-country-list";
import {
  annualData,
  companyTypeData,
  headCount,
  industries,
  MarketShare,
} from "../assets/Data/DropDownData";
import CustomButton from "../components/Custombutton";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .profile_wrapper {
    width: 90%;
    height: 70%;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 7px;
  }
`;

const Profile = () => {
  const options = useMemo(() => countryList().getData(), []);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [industry, setIndustry] = useState("");
  const [totalHeadCount, setTotalHeadCount] = useState("");
  const [annual, setAnnual] = useState("");
  const [marketShare, setMarketShare] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [email, setEmail] = useState("");

  const [profile, setProfile] = useState([]);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    axios.get("http://207.148.69.16:8011/api/auth-user/").then((response) => {
      setProfile(response.data);
    });

    // setEmail(profile.email);
    // setAddress(profile.address);
    // setPhone(profile.cell_phone);
    // setBranch(profile.branch);
    // setRole(profile.role);
  });

  return (
    <ProfileContainer>
      <div className="profile_wrapper">
        <Container>
          <Row style={{ marginTop: "30px", marginBottom: "20px" }}>
            <h3>Profile</h3>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col>
              <TextField
                id="outlined-name"
                label="Name"
                size="small"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col>
              <TextField
                id="outlined-address"
                label="Address"
                size="small"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Col>
            {/* <Col>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <Select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Category</em>
                  </MenuItem>
                  <MenuItem value={10}>Individual</MenuItem>
                  <MenuItem value={20}>Group</MenuItem>
                </Select>
              </FormControl>
            </Col>
            <Col>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <Select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Position's</em>
                  </MenuItem>
                  <MenuItem value={10}>Sr. Developer</MenuItem>
                  <MenuItem value={20}>Finance Manager</MenuItem>
                  <MenuItem value={30}>IT Manager</MenuItem>
                  <MenuItem value={30}>Chief Operating Officer</MenuItem>
                </Select>
              </FormControl>
            </Col> */}
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col>
              <TextField
                id="outlined-city"
                label="City"
                size="small"
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Col>
            <Col>
              <TextField
                id="outlined-province"
                label="Province / Region"
                size="small"
                fullWidth
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <InputLabel id="demo-multiple-name-label">Country </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  input={<OutlinedInput label="Name" />}
                >
                  {options.map((val, id) => {
                    return (
                      <MenuItem key={val.value} value={val.value}>
                        {val.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Col>
            <Col>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <InputLabel id="demo-multiple-name-label">Industry </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  input={<OutlinedInput label="Industry" />}
                >
                  {industries.map((val, id) => {
                    return (
                      <MenuItem
                        key={val.Industry_name}
                        value={val.Industry_name}
                      >
                        {val.Industry_name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <InputLabel id="demo-multiple-name-label">
                  Total Head Count{" "}
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={totalHeadCount}
                  onChange={(e) => setTotalHeadCount(e.target.value)}
                  input={<OutlinedInput label="Total Head Count" />}
                >
                  {headCount.map((val, id) => {
                    return (
                      <MenuItem key={val.head} value={val.head}>
                        {val.head}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Col>
            <Col>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <InputLabel id="demo-multiple-name-label">
                  Annual Revenue in USD{" "}
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={annual}
                  onChange={(e) => setAnnual(e.target.value)}
                  input={<OutlinedInput label="Annual Revenue in USD" />}
                >
                  {annualData.map((val, id) => {
                    return (
                      <MenuItem key={val.annual} value={val.annual}>
                        {val.annual}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <InputLabel id="demo-multiple-name-label">
                  Company Type{" "}
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={companyType}
                  onChange={(e) => setCompanyType(e.target.value)}
                  input={<OutlinedInput label="Company Type" />}
                >
                  {companyTypeData.map((val, id) => {
                    return (
                      <MenuItem key={val.company} value={val.company}>
                        {val.company}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Col>
            <Col>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <InputLabel id="demo-multiple-name-label">
                  Market Share{" "}
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={marketShare}
                  onChange={(e) => setMarketShare(e.target.value)}
                  input={<OutlinedInput label="Market Share" />}
                >
                  {MarketShare.map((val, id) => {
                    return (
                      <MenuItem key={val.share} value={val.share}>
                        {val.share}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <CustomButton
              type={"cancel textnormal margin-top margin-right20"}
              width="120px"
              height="40px"
            >
              Cancel
            </CustomButton>
            <CustomButton
              type={"normal textnormal margin-top margin-right20"}
              width="120px"
              height="40px"
            >
              Update
            </CustomButton>
          </Col>
        </Row>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
