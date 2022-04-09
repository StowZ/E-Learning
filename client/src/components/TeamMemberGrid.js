import React, { Component } from "react";

class TeamMemberGrid extends Component {
  render() {
    /* team member data */

    let data = [
      {
        profileImage: "",
        profileTitle: "Phone",
        profileDesignation: "",
        profileEmail: "+216-77 238 479",
        
      },
      {
        profileImage: "",
        profileTitle: "Support Email",
        profileDesignation: "",
        profileEmail: "contact@gomarket.com.tn",
        
      },
      {
        profileImage: "",
        profileTitle: "Location",
        profileDesignation: "",
        profileEmail: "GoMarket , Kairouan",
        
      },
      
      
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col section-space--bottom--30"
          key={i}
        >
          <div className="team">
            
            <div className="content">
              <h3 className="title">{val.profileTitle}</h3>
              <span>{val.profileDesignation}</span>
              <a href={"mailto:" + val.profileEmail} className="email">
                {val.profileEmail}
              </a>
              
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {/*====================  team member area ====================*/}
        <div className="team-member-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                   {/* Our Team */}<span />
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="team-member-wrapper">
                  <div className="row">
                    {/* team member list */}
                    {Datalist}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of team member area  ====================*/}
      </div>
    );
  }
}

export default TeamMemberGrid;
