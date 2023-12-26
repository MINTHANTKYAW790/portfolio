import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { MdOutgoingMail } from "react-icons/md";
import { FaFacebook, FaLink } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";

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

    //Onchange function for the send email inputs

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const { name, email, subject, message } = formData;
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    return (
        <div className="App">
            <div className="menuContainer1 z-1000">
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

            <div id="contact" className="contact ">
                <h1 className="text-white py-[45px]">Contact</h1>
                {/* This is the Contact Me section */}
                <div className=" flex flex-col md:flex-row md:flex-6xl lg:mx-auto p-4 rounded-lg shadow-lg lg:space-x-5 ">
                    {/* Left Div */}

                    <div className="w-full  text-left pl-2 ">
                        <h5 className="font-bold text-white">Contact us</h5>
                        <p className="text-gray-500">
                            You're always welcome for any suggestion or just to
                            have a chat
                        </p>
                        {/*Address Email Phone Div */}
                        <div className=" flex flex-col md:flex-row md:flex-6xl lg:mx-auto  rounded-lg  lg:space-x-5 ">
                            <div className="w-full  text-left ">
                                <h6 className="font-bold text-white">
                                    ADDRESS:
                                </h6>
                                <p className="text-gray-500">
                                    31930 ChinDwin Street, Pobba Thiri Township,
                                    Naypyitaw
                                </p>
                            </div>
                            <div className="w-full  text-left ">
                                <h6 className="font-bold text-white">EMAIL:</h6>
                                <p className="text-gray-500">
                                    kthura397@gmail.com
                                </p>
                            </div>
                            <div className="w-full  text-left ">
                                <h6 className="font-bold text-white">PHONE:</h6>
                                <p className="text-gray-500">09790717397</p>
                            </div>
                        </div>

                        {/*<button className="bg-blue-600 mb-1 rounded border text-white font-bold p-2 flex justify-around items-center">
                                <MdOutgoingMail />
                                Send Email
                            </button>*/}

                        <div className="flex flex-col w-full ">
                            <div className="mt-3 mb-6">
                                <input
                                    name="name"
                                    id="name"
                                    rows="2"
                                    vlaue={name}
                                    onChange={onChange}
                                    placeholder="Name"
                                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
                                ></input>
                                <input
                                    name="email"
                                    id="email"
                                    rows="2"
                                    vlaue={email}
                                    onChange={onChange}
                                    placeholder="Email"
                                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
                                ></input>
                                <input
                                    name="subject"
                                    id="subject"
                                    rows="2"
                                    vlaue={subject}
                                    onChange={onChange}
                                    placeholder="Subject"
                                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
                                ></input>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="2"
                                    vlaue={message}
                                    onChange={onChange}
                                    placeholder="message"
                                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
                                ></textarea>
                            </div>
                            <a
                                href={`mailto:${"kthura397@gmail.com"}&Subject=${subject}&body=${message}`}
                            >
                                <button
                                    className="px-7 py-3 bg-blue-600 text-white rounded text-sm uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:shadow-lg active:bg-blue-700 transition duration-150 ease-in-out w-full text-center mb-6"
                                    type="button"
                                >
                                    Send Message
                                </button>
                            </a>
                        </div>

                        <h5 className="font-bold text-white">Contact Me</h5>
                        <div className="flex w-full justify-between ">
                            <FaFacebook
                                className=" text-3xl font-bold text-white cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out"
                                onClick={openFacebookPage}
                            />

                            <FaInstagram
                                className="font-bold text-white  text-3xl"
                                onClick={openInstagram}
                            />
                            <FaTelegram
                                className="font-bold text-white text-3xl"
                                onClick={openTelegram}
                            />
                            <FaGithub
                                className="font-bold text-white text-3xl"
                                onClick={openGithub}
                            />
                        </div>
                    </div>
                    {/* Right Div */}
                    <div className=" w-full h-[200px] md:h-[400px] overflow-hidden mt-6 md:mt-0 md:ml-2">
                        <MapContainer
                            center={[22.126658024393745, 96.18775618151084]}
                            zoom={13}
                            scrollWheelZoom={false}
                            style={{ height: "100%", width: "100%" }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker
                                position={[
                                    22.126658024393745, 96.18775618151084,
                                ]}
                            >
                                <Popup>My Current Address</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
