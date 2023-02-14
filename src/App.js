/* eslint-disable no-unused-vars */
import "bulma/css/bulma.css";
import ProfileCard from "./profileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
    return (
        <div>
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <p className="title">Personal Digital Assistants</p>
                    </div>
                </section>
            </div>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                imgSrc={AlexaImage}
                                alt="Alexa Logo"
                                description="Alexa was created my Amazon and helps you buy things"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                imgSrc={CortanaImage}
                                alt="Cortana Logo"
                                description="Cortana was made by Microsoft, Who knows what it does?"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Siri"
                                handle="@siri01"
                                imgSrc={SiriImage}
                                alt="Siri Logo"
                                description="Siri was made by Apple and is being phased out"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
