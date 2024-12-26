import React from "react";
import "./Profile.css";
import profile from "../../assets/profile.png";
function Profile() {
  return (
    <form className="profile-form">
      <div className="profile-form-inputs">
        <div className="profile-form-image">
          <img
            width="100%"
            style={{ borderRadius: "50%", minWidth: "2rem", aspectRatio:'1' }}
            src={profile}
          />
        </div>
        <fieldset>
          <label  htmlFor="name">
            Your Name
            <br />
            <input className="profile-input" type="text" id="name" placeholder="KennaaKoo" />
          </label>

          <label  htmlFor="email">
            Email
            <br />
            <input className="profile-input" type="email" id="email" placeholder="kennako@gmail.com" />
          </label>

          <label  htmlFor="date">
            Date of Birth
            <br />
            <input className="profile-input" type="date" id="date" placeholder="24/10/2024" />
          </label>

          <label  htmlFor="address">
            Permanent Address
            <br />
            <input className="profile-input" type="text" id="address" placeholder="ASTU Adama Ethio" />
          </label>

          <label  htmlFor="postal">
            Postal Code
            <br />
            <input className="profile-input" type="text" id="postal" placeholder="1000" />
          </label>
        </fieldset>

        <fieldset>
          <label  htmlFor="user">
            User Name
            <br />
            <input className="profile-input" type="text" id="user" placeholder="KennaaKoo" />
          </label>

          <label  htmlFor="password">
            Password
            <br />
            <input className="profile-input" type="password" id="password" placeholder="***********" />
          </label>

          <label  htmlFor="presentAd">
            Present Address
            <br />
            <input className="profile-input"
              type="text"
              id="presentAd"
              placeholder="ASTU, Adama, Oromia"
            />
          </label>

          <label  htmlFor="city">
            City
            <br />
            <input className="profile-input" type="text" id="city" placeholder="Adama" />
          </label>

          <label  htmlFor="country">
            Country
            <br />
            <input className="profile-input" type="text" id="country" placeholder="Et" />
          </label>
        </fieldset>
      </div>

      <div
        style={{ display: "flex", justifyContent: "end", padding: "0 0.5rem" }}
      >
        <button className="profile-submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default Profile;
