import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    var texts = [
        "HTML, CSS, JAVASCRIPT, TYPESCRIPT",
        "EXPRESS, NODE, REACT",
        "BOOSTRAP, MUI",
    ]; // Array of texts
    var currentIndex = 0; // Current index of the text array

    function changeText() {
        var element = document.getElementById("myElement");
        element.innerHTML = texts[currentIndex];

        // Increment the index
        currentIndex = (currentIndex + 1) % texts.length;
    }

    setInterval(changeText, 3000); // Change text every 2 seconds

    return (
        <div className="App">
            <div id="home" className="home">
                <div className="menuContainer1">
                    <div className="menu">
                        <a href="#home" className="homeAtag">
                            Home
                        </a>
                    </div>
                    <div className="menu">
                        <a href="#about" className="homeAtag">
                            About
                        </a>
                    </div>
                    <div className="menu">
                        <a href="#service" className="homeAtag">
                            Service
                        </a>
                    </div>
                    <div className="menu">
                        <a href="#portfolio" className="homeAtag">
                            Portfolio
                        </a>
                    </div>
                    <div className="menu">
                        <a href="#blog" className="homeAtag">
                            Blog
                        </a>
                    </div>
                    <div className="menu">
                        <a href="#contact" className="homeAtag">
                            Contact
                        </a>
                    </div>
                </div>

                <div className="bodyContainer">
                    <h3 style={{ color: "#7F99A4" }}>WELCOME TO MY WORLD</h3>
                    <h1 style={{ color: "white" }}>HI,I'M MIN THANT KYAW</h1>
                    <h1 id="myElement" class="transition">
                        FRONTEND DEVELOPER
                    </h1>
                    <h1 style={{ color: "white" }}>
                        developer based in MYANMAR.
                    </h1>
                </div>
            </div>

            <div id="about" className="about">
                <div className="aboutContainer">
                    {/*  <img
                        className="image"
                        src={process.env.PUBLIC_URL + "/haha.jpg"}
                        alt="myImage"
                    />
 */}
                    <div className="contentAbout">
                        <h1 style={{ color: "white" }}>About Me</h1>

                        <h3 className="aboutText">
                            Hello! My name is Min Thant Kyaw. I am a frontend
                            programmer with a passion for html, css, javascript,
                            typescript, react and express.I've been learning
                            programming field for years. My journey in frontend
                            programming started during 2018.I thrive on
                            challenges and enjoy finding innovative solutions to
                            complex problems. Through my work, I aim to be a
                            Fullstack programmer. Thank you for taking the time
                            to learn a little bit about me. If you have any
                            questions or would like to connect, please don't
                            hesitate to reach out. I look forward to connect
                            with you! Best regards, Min Thant
                        </h3>

                        {/* <div className="menuContainer">
                            <div className="menu">
                                <a href="#about/#experience"> Main skills</a>
                            </div>

                            <div className="menu">
                                <a href="#about/#experience">Experience</a>
                            </div>
                            <div className="menu">
                                <a href="#about/#education">Education </a>
                            </div>
                            <div className="menu">
                                <a href="#about/#certification">
                                    Certification
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
                <h1 className="warning">
                    This website is still in the developing stage.{" "}
                </h1>
            </div>
            <div id="service" className="service">
                <div className="serviceContainer">
                    <h1 style={{ color: "white", fontSize: "50px" }}>
                        Service comming sooon..
                    </h1>
                    <h1 className="warning">
                        This website is still in the developing stage.{" "}
                    </h1>
                </div>
            </div>

            <div id="portfolio" className="portfolio">
                <div className="portfolioContainer">
                    <h1 style={{ color: "white", fontSize: "50px" }}>
                        Portfolio comming soon..
                    </h1>
                </div>
                <h1 className="warning">
                    This website is still in the developing stage.{" "}
                </h1>
            </div>

            <div id="blog" className="blog">
                <div className="blogContainer">
                    <h1 style={{ color: "white", fontSize: "50px" }}>
                        Blog comming sooon..
                    </h1>
                </div>
                <h1 className="warning">
                    This website is still in the developing stage.{" "}
                </h1>
            </div>

            <div id="contact" className="contact">
                <div className="contactContainer">
                    <h1 style={{ color: "white", fontSize: "50px" }}>
                        Hire me.
                    </h1>
                    <h3 style={{ color: "white" }}>
                        I am available for freelance work. Connect with me via
                        phone: 09790717397 or email: kthura397@gmail.com
                    </h3>
                </div>
                <h1 className="warning">
                    This website is still in the developing stage.{" "}
                </h1>
            </div>
        </div>
    );
}

export default App;
