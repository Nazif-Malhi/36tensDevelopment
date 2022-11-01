import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .account-settings .user-profile {
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    text-align: center;
  }
  .account-settings .user-profile .user-avatar {
    margin: 0 0 1rem 0;
  }
  .account-settings .user-profile .user-avatar img {
    width: 90px;
    height: 90px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
  }
  .account-settings .user-profile h5.user-name {
    margin: 0 0 0.5rem 0;
  }
  .account-settings .user-profile h6.user-email {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: #9fa8b9;
  }
  .account-settings .about {
    margin: 2rem 0 0 0;
    text-align: center;
  }
  .account-settings .about h5 {
    margin: 0 0 15px 0;
    color: #007ae1;
  }
  .account-settings .about p {
    font-size: 0.825rem;
  }
  .form-control {
    border: 1px solid #cfd1d8;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    font-size: 0.825rem;
    background: #ffffff;
    color: #2e323c;
  }

  .card {
    background: #ffffff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 0;
    margin-bottom: 1rem;
  }

  .margin {
    margin: 10px;
  }
`;

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [role, setRole] = useState("");
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios.get("http://207.148.69.16:8011/api/auth-user/").then((response) => {
      setProfile(response.data);
    });
    setFirstName(profile.first_name);
    setLastName(profile.last_name);
    setEmail(profile.email);
    setAddress(profile.address);
    setPhone(profile.cell_phone);
    setBranch(profile.branch);
    setRole(profile.role);
  });

  return (
    <ProfileContainer>
      <div className="container">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Maxwell Admin"
                      />
                    </div>
                    <h5 className="user-name">Yuki Hayashi</h5>
                    <h6 className="user-email">yuki@Maxwell.com</h6>
                  </div>
                  <div className="about">
                    <h5>About</h5>
                    <p>
                      I'm Yuki. Full Stack Designer I enjoy creating
                      user-centric, delightful and human experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="eMail"
                        placeholder="Enter email ID"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mt-3 mb-2 text-primary">Other</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="Street">Street</label>
                      <input
                        type="name"
                        className="form-control"
                        id="Street"
                        placeholder="Enter Street"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="branch">Branch</label>
                      <input
                        type="name"
                        className="form-control"
                        id="branch"
                        placeholder="Enter Branch"
                        value={branch}
                        onChange={(e) => {
                          setBranch(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="role">Role</label>
                      <input
                        type="text"
                        className="form-control"
                        id="role"
                        placeholder="Enter Role"
                        value={role}
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="city">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter City"
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right ">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-secondary margin"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-primary margin"
                        // onClick={console.log(profile)}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
