import ActivityCard from "../Components/ActivityCard";
import './Activities.css';

// Photos
import workshopPhoto from '../assets/workshop.jpg';
import cyberknightsPhoto from '../assets/cyberknights.jpg';
import commengPhoto from "../assets/commeng.jpg";

function Activities(){
    return(
        <section className="activities" id='activities'>
            <h2>Activities</h2>
            <ActivityCard
                title="Workshops"
                description="Led by experienced professionals, these workshops provide the opportunity for students to learn from professional experience and gain knowledge about the industry. Hands-on and real time projects allow students to further develop their technical skills and gain experience exposure to the tech industry under the guidance of professionals."
                image={workshopPhoto}>
            </ActivityCard>

            <ActivityCard
                title="Cyberknights Arcade"
                description="During the Christ the King Festival or CTK, the Computer Wizards club collaborates with other clubs to set up an arcade booth. The Cyberknights Arcade provides people an area to relax, play some games, and have fun."
                image={cyberknightsPhoto}>
            </ActivityCard>

            <ActivityCard
                title="Community Engangements"
                description="Through our outreach program members can visit, help, and engage with various communities like dog shelters, orphanages, etc. Community engagements allow us to give back and help through activities like tree planting, teaching, etc."
                image={commengPhoto}>
            </ActivityCard>
        </section>
    )
}

export default Activities;