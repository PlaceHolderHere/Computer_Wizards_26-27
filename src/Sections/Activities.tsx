import ActivityCard from "../Components/ActivityCard";
import './Activities.css';

function Activities(){
    return(
        <section className="activities" id='activities'>
            <h1>Activities</h1>
            <ActivityCard
                title="Cyberknights Aracde"
                description="Led by experienced professionals, these workshops provide the opportunity for students to learn from professional experience and gain knowledge about the industry. Hands-on and real time projects allow students to further develop their technical skills and gain experience exposure to the tech industry under the guidance of professionals."
                imageUrl="src\assets\workshop.jpg">
            </ActivityCard>

            <ActivityCard
                title="Cyberknights Aracde"
                description="Led by experienced professionals, these workshops provide the opportunity for students to learn from professional experience and gain knowledge about the industry. Hands-on and real time projects allow students to further develop their technical skills and gain experience exposure to the tech industry under the guidance of professionals."
                imageUrl="src\assets\workshop.jpg">
            </ActivityCard>

            <ActivityCard
                title="Cyberknights Aracde"
                description="Led by experienced professionals, these workshops provide the opportunity for students to learn from professional experience and gain knowledge about the industry. Hands-on and real time projects allow students to further develop their technical skills and gain experience exposure to the tech industry under the guidance of professionals."
                imageUrl="src\assets\workshop.jpg">
            </ActivityCard>
        </section>
    )
}

export default Activities;