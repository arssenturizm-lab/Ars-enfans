const Profile = ({ name, avatar }) => {
  return (
    <div>
      <img src={avatar} alt="avatar" width="80" />
      <h3>{name}</h3>
    </div>
  );
};

export default Profile;
