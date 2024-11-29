import React from 'react';
import './Profile.css';

function Profile() {
  const profileData = {
    name: "Priyanka Paliwal",
    email: "paliwal251997@gmail.com",
    bio: "A passionate front-end developer with a knack for creating dynamic user experiences.",
    profilePicture: "/images/profile.png",
    aboutMe: `
      I am a passionate front-end developer with 1.9 years of experience, specializing in React and UI design. My love for creating clean, user-focused, and visually appealing designs drives me to deliver high-quality outputs on every project I work on.

      While I may not always have all the syntax memorized, I excel in solving problems through focused research, documentation, and leveraging tools like developer tools and debugging methods. I firmly believe that success comes from perseverance and dedication, and I approach each task with 100% commitment. I thrive on the challenge of turning ideas into reality, ensuring that every project I undertake meets or exceeds expectations.

      I am constantly learning and improving, fueled by my passion for UI design. I view every project as an opportunity to grow, adapt, and sharpen my skills. My goal is to become an expert in UI design by working with knowledgeable, supportive teams that inspire me to push my boundaries.

      I may not be the most eloquent speaker, but my work speaks volumes. I am highly focused, determined, and resourceful, completing tasks with precision and enthusiasm. For me, development isn’t just a job—it’s something I genuinely love and take pride in.

      I am eager to contribute to meaningful projects, collaborate with talented professionals, and continue building a strong foundation for a fulfilling career in front-end development and UI design.
    `,
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Responsive Design",
      "Component-Based Architecture",
      "Debugging & Developer Tools",
    ],
    
  };

  return (
    <div className="profile-container">
      <img src={profileData.profilePicture} alt="Profile" className="profile-picture" />
      <h1>{profileData.name}</h1>
      <p>Email: <a href={`mailto:${profileData.email}`}>{profileData.email}</a></p>
      <p className="bio">{profileData.bio}</p>

      <div className="about-section">
        <h2>About Me</h2>
        <p>{profileData.aboutMe}</p>
      </div>
    
      {/* <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          {profileData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default Profile;
