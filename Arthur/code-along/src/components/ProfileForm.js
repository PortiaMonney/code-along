import React from "react";

const ProfileForm = ({ submit }) => {
  const [profile, setProfile] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(profile);
  };

  return (
    <form>
      <fieldset>
        <legend>Personal information</legend>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={profile.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={profile.firstlastname}
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={profile.email}
        />
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          value={profile.phone}
        />
      </fieldset>
      <button className="form" onClick={handleSubmit}>
        Add Writer
      </button>
    </form>
  );
};

export default ProfileForm;
