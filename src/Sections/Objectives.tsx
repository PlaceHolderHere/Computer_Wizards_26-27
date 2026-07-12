import ObjectiveCard from "../Components/ObjectiveCard";
import './Objectives.css'

// Photos
import skillsPhoto from '../assets/skills.jpg';
import collaborationPhoto from '../assets/collaboration.jpg';
import funPhoto from '../assets/fun.jpg';

function Objectives(){
    return(
        <section id="objectives" className="objectives">
            <h2 className="objectives-title">Club Objectives</h2>
            <div className="objectiveCards">
                <ObjectiveCard
                    title="Skills Development"
                    description="We help students develop their programming skills and fundamentals through hands-on activities and workshops."
                    image={skillsPhoto}>
                </ObjectiveCard>

                <ObjectiveCard
                    title="Promote Collaboration"
                    description="We want our club to be an inclusive and friendly environment, where members can have fun and collaborate with each other."
                    image={collaborationPhoto}>
                </ObjectiveCard>

                <ObjectiveCard
                    title="Have Fun"
                    description="We want to help our members have fun with coding and spark their curiosity about the modern tech world!"
                    image={funPhoto}>
                </ObjectiveCard>
            </div>
        </section>
    )
}

export default Objectives;