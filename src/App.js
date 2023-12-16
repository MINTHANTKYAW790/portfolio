import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { MdOutgoingMail } from "react-icons/md";
import { FaFacebook, FaLink } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
    const openFacebookPage = () => {
        window.open(
            "https://www.facebook.com/profile.php?id=100014963328058&mibextid=eHce3h",
            "_blank"
        );
    };

    const openInstagram = () => {
        window.open(
            "https://www.instagram.com/minthantkyaw02?igshid=MmVlMjlkMTBhMg==",
            "_blank"
        );
    };
    const openTelegram = () => {
        window.open("https://t.me/mtkisyours", "_blank");
    };
    const openGithub = () => {
        window.open("https://github.com/MINTHANTKYAW790", "_blank");
    };

    return (
        <div className="App">
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

            <div id="home" className="home">
                <img
                    src="https://media.licdn.com/dms/image/D5635AQHfLmmIbP5ukA/profile-framedphoto-shrink_200_200/0/1701939233473?e=1703095200&v=beta&t=XU8qFfDbMib-Wuu2A6Joto5z279eyOJSoVWgsngRwtA"
                    alt="MinThantKyaw"
                    class="myphoto"
                ></img>
                <div className="bodyContainer">
                    <h3 style={{ color: "#7F99A4", marginBottom: "45px" }}>
                        WELCOME TO MY PORTFOLIO
                    </h3>
                    <h1 style={{ color: "white" }}>HI, I'M MIN THANT KYAW</h1>
                    <h1 id="myElement" class="transition">
                        FRONTEND DEVELOPER
                    </h1>
                    <p style={{ color: "white", fontSize: "x-large" }}>
                        developer based in MYANMAR.
                    </p>
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

                        <p className="aboutMe">
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
                        </p>

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
                {/* <div className="contactContainer">
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
                    </h1>*/}

                <div className="w-full  flex justify-center items-center flex-col max-md:w-full">
                    <div className=" w-[70%] h-72 flex justify-around items-center mt-[20%] max-md:w-full ">
                        <div className=" h-96 w-1/2  text-left pl-2">
                            <h5 className="font-bold text-white">Contact us</h5>
                            <p className="text-gray-500">
                                You're always welcome for any suggestion or just
                                to have a chat
                            </p>
                            <h6 className="font-bold text-white">ADDRESS:</h6>
                            <p className="text-gray-500">
                                31930 ChinDwin Street, Pobba Thiri Township,
                                Naypyitaw
                            </p>
                            <h6 className="font-bold text-white">EMAIL:</h6>
                            <p className="text-gray-500">kthura397@gmail.com</p>
                            <h6 className="font-bold text-white">PHONE:</h6>
                            <p className="text-gray-500">09790717397</p>

                            {/*<button className="bg-blue-600 mb-1 rounded border text-white font-bold p-2 flex justify-around items-center">
                                <MdOutgoingMail />
                                Send Email
                            </button>*/}

                            <p className="font-bold text-white">Contact Me</p>
                            <div className="flex w-full justify-between ">
                                <FaFacebook
                                    className="font-bold text-white cursor-pointer hover:text-green-400 transition duration-200 ease-in-out"
                                    onClick={openFacebookPage}
                                />

                                <FaInstagram
                                    className="font-bold text-white"
                                    onClick={openInstagram}
                                />
                                <FaTelegram
                                    className="font-bold text-white"
                                    onClick={openTelegram}
                                />
                                <FaGithub
                                    className="font-bold text-white"
                                    onClick={openGithub}
                                />
                            </div>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
                            alt="contact"
                            className="w-[40%]  phone"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
