import Footer from "../components/Footer";
import Nav from "../components/Nav";

function About() {
  return (
    <>
      <Nav />
      <div style={{ backgroundColor: "#F5F7F8" }}>
        <div className="about_container">
          <div className="about_heading">
            <h1>About TruthSeeker</h1>
          </div>
          <div className="about_content">
            <p>
              Welcome to TruthSeeker! We're a team of six students who came
              together to create a powerful tool to fight fake news. In today's
              world, misinformation can spread like wildfire, and our goal is to
              help you figure out what's true and what's not.
            </p>
          </div>
        </div>

        <div className="about_container">
          <div className="about_heading">
            <h1>Our Mission</h1>
          </div>
          <div className="about_content">
            <p>
              Our mission is simple: to combat the spread of fake news by
              providing a reliable and easy-to-use tool. We want to help you
              verify the credibility of news articles and sources using advanced
              machine learning. By doing this, we aim to promote media literacy
              and help create a more informed society.
            </p>
          </div>
        </div>

        <div className="about_container">
          <div className="about_heading">
            <h1>How It Works</h1>
          </div>
          <div className="about_content">
            <p>
              TruthSeeker is designed with you in mind. You can input text
              directly for analysis. Our sophisticated machine learning
              algorithms look at patterns, context, and language to give you a
              credibility score for the content.
            </p>
          </div>
        </div>

        <div className="about_container">
          <div className="about_heading">
            <h1>Our Team</h1>
          </div>
          <div className="about_content">
            <p>
              We’re six (MSc Business Analytics) students from University
              College Cork,Ireland ,driven by a common goal: to reduce the
              impact of fake news. We’ve pooled our diverse skills and knowledge
              to develop TruthSeeker as part of our project, hoping to make a
              positive difference.
            </p>
          </div>
        </div>

        <div className="about_container">
          <div className="about_heading">
            <h1>Get Involved</h1>
          </div>
          <div className="about_content">
            <p>
              We'd love for you to use TruthSeeker and join us in the fight
              against fake news. Your feedback is crucial and will help us
              improve. If you know of any new tools or have suggestions, please
              share them with us. Let's work together to create a more informed
              and resilient community.
            </p>
          </div>
        </div>

        <div className="bottom_center">
          <p>Thank you for supporting TruthSeeker!</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
