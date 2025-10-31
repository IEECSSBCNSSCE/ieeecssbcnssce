import React from "react";
import "./Team.css";

const teamData = [
  {
    groupName: "Leadership",
    description: "Core leadership team members.",
    members: [
      {
        name: "Alex Johnson",
        role: "President",
        bio: "Leads overall chapter strategy and initiatives.",
        img: "https://via.placeholder.com/150",
      },
      {
        name: "Priya Iyer",
        role: "Vice President",
        bio: "Assists leadership in operations and events.",
        img: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    groupName: "Technical Team",
    description: "Developers and contributors maintaining the site and projects.",
    members: [
      {
        name: "Madhur Dodake",
        role: "Frontend Developer",
        bio: "Builds web UI and ensures accessibility.",
        img: "https://via.placeholder.com/150",
      },
      {
        name: "Sam Lee",
        role: "Backend Developer",
        bio: "Maintains API and server-side code.",
        img: "https://via.placeholder.com/150",
      },
    ],
  },
];

export default function Team() {
  return (
    <div className="team-container">
      <h1 className="team-title">Our Team</h1>
      <p className="team-subtitle">
        Meet the passionate members of IEEE SB CS NSSCE.
      </p>

      {teamData.map((group) => (
        <section key={group.groupName} className="team-group">
          <h2>{group.groupName}</h2>
          <p className="group-desc">{group.description}</p>
          <div className="team-grid">
            {group.members.map((member) => (
              <div key={member.name} className="team-card">
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-img"
                />
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
