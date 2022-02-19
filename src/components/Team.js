import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Container from '../components/Container/Container'
const Team = ({team}) => {
    const teamMembers = team.member
    return (
        <div className='team'>
           <Container>
                <div className="section-header">
                    <h2>{team.teamSubtitle}</h2>
                    <h1>{team.teamTitle}</h1>
                </div>
                <div className="team-members">
                    {
                        teamMembers.map((member, index) =>
                            <div className="member" key={index}>
                                <div className="member-image">
                                    <GatsbyImage image ={getImage(member.image.localFile)} alt="member-image"/>
                                </div>
                                <div className="member-content">
                                    <h3>{member.name}</h3>
                                    <p>{member.jobPosition}</p>
                                </div>

                            </div>
                        )
                    }
                </div>
           </Container>
        </div>
    )
}

export default Team
