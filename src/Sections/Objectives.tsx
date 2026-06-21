import ObjectiveCard from "../Components/ObjectiveCard";
import './Objectives.css'

function Objectives(){
    return(
        <section id="objectives" className="objectives">
            <h2 className="objectivesHeading">Club Objectives</h2>
            <div className="objectiveCards">
                <ObjectiveCard
                    title="Skills Development"
                    description="We help students develop their programming skills and fundamentals through hands-on activities and workshops."
                    imageURL="src\assets\skills.jpg">
                </ObjectiveCard>

                <ObjectiveCard
                    title="Promote Collraboration"
                    description="We want our club to be an inclusive and friendly environment, where members can have fun and collaborate with each other."
                    imageURL="src\assets\collaboration.jpg">
                </ObjectiveCard>

                <ObjectiveCard
                    title="Have Fun"
                    description="We want to help our members have fun with coding and spark their curiosity about the modern tech world!"
                    imageURL="src\assets\fun.jpg">
                </ObjectiveCard>
            </div>
        </section>
    )
}

export default Objectives;