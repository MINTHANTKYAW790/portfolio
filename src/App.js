import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { FaFacebook } from "react-icons/fa";

import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import myphoto from "../src/myphoto.jpg";
import myphotowithflower from "../src/myphotowithflower.jpg";
import Profile from "../src/Profile.pdf";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

import logo from "../src/logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    EffectFade,
    Autoplay,
    Navigation,
    Pagination,
} from "swiper";
import "swiper/css/bundle";

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
    const myEmail = "kthura397@gmail.com";
    const [formData, setFormData] = useState({
        subject: "",
        message: "",
    });

    const { subject, message } = formData;
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    return (
        <div className="App">
            {/* This is the start of the header tag */}
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
                    <a href="#skills" className="homeAtag">
                        Skills
                    </a>
                </div>
                <div className="menu">
                    <a href="#projects" className="homeAtag">
                        Projects
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
            <div>
                {/* This is the start of the HOME tag */}
                <div id="home" className="home">
                    <img
                        src={myphoto}
                        alt="MinThantKyaw"
                        class="w-full md:w-[50%] lg:w-[28%] rounded overflow-hidden pt-2 "
                    ></img>
                    <div className="bodyContainer">
                        <h3 style={{ color: "#7F99A4", marginBottom: "45px" }}>
                            WELCOME TO MY PORTFOLIO
                        </h3>
                        <h1 style={{ color: "white" }}>
                            HI, I'M MIN THANT KYAW
                        </h1>
                        <h1 id="myElement" class="transition">
                            FRONTEND DEVELOPER
                        </h1>
                        <p style={{ color: "white", fontSize: "x-large" }}>
                            developer based in MYANMAR.
                        </p>
                    </div>
                </div>

                {/* This is the start of the ABOUT tag */}
                <div id="about" className="h-[800px] bg-[#0a2647] ">
                    <h1 className="text-white pt-[100px]">About Me</h1>
                    <div className="w-full flex justify-around items-center space-x-2">
                        <span className="w-full md:text-xl md:w-[40%] sm:text-sm lg:w-[40%] rounded-lg mt-10 text-white    ">
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
                        </span>

                        <img
                            src={myphotowithflower}
                            alt="myphotowithflower"
                            className="w-full md:w-[50%] lg:w-[20%] rounded-lg overflow-hidden"
                        ></img>
                    </div>
                </div>

                {/* This is the start of the SKILL tag */}
                <div id="skills" className="h-[800px] bg-[#0a2647]">
                    <h1 className="pt-[100px] text-white ">Skills</h1>
                    <div className="sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-3">
                        <div className=" flex space-x-4 border-black border-b-2  sm:py-1 md:py-2 lg:py-3 sm:m-1 md:m-2 lg:m-3 ">
                            <FaHtml5 className="text-white text-3xl" />
                            <p className="text-white">HTML</p>
                        </div>

                        <div className=" flex space-x-4 border-black border-b-2 sm:py-1 md:py-2 lg:py-3 sm:m-1 md:m-2 lg:m-3">
                            <IoLogoCss3 className="text-white text-3xl" />
                            <p className="text-white">CSS</p>
                        </div>

                        <div className=" flex space-x-4 border-black border-b-2 sm:py-1 md:py-2 lg:py-3 sm:m-1 md:m-2 lg:m-3">
                            <IoLogoJavascript className="text-white text-3xl" />
                            <p className="text-white">Javascript</p>
                        </div>
                        <div className=" flex space-x-4 border-black border-b-2 sm:py-1 md:py-2 lg:py-3 sm:m-1 md:m-2 lg:m-3">
                            <FaBootstrap className="text-white text-3xl" />
                            <p className="text-white">Bootstrap</p>
                        </div>
                        <div className=" flex space-x-4 border-black border-b-2 sm:py-1 md:py-2 lg:py-3 sm:m-1 md:m-2 lg:m-3">
                            <SiTailwindcss className="text-white text-3xl" />
                            <p className="text-white">Tailwind</p>
                        </div>
                        <div className=" flex space-x-4 border-black border-b-2 sm:py-1 md:py-2 lg:py-3 sm:m-1 md:m-2 lg:m-3">
                            <FaPython className="text-white text-3xl" />
                            <p className="text-white">Python</p>
                        </div>
                        <div className=" flex space-x-4 border-black border-b-2 sm:py-1 md:py-2 lg:py-3 sm:m-1 md:m-2 lg:m-3">
                            <IoLogoAndroid className="text-white text-3xl" />
                            <p className="text-white">Android</p>
                        </div>
                        <div className=" flex space-x-4 border-black border-b-2 sm:py-1 md:py-2 lg:py-3 sm:m-1 md:m-2 lg:m-3">
                            <FaReact className="text-white text-3xl" />
                            <p className="text-white">React</p>
                        </div>
                        <div className=" flex space-x-4 border-black border-b-2 sm:py-1 md:py-2 lg:py-3 sm:m-1 md:m-2 lg:m-3">
                            <IoLogoFirebase className="text-white text-3xl" />
                            <p className="text-white">Firebase</p>
                        </div>
                        <div className=" flex space-x-4 border-black border-b-2 sm:py-1 md:py-2 lg:py-3 sm:m-1 md:m-2 lg:m-3">
                            <FaGitAlt className="text-white text-3xl" />
                            <p className="text-white">Git</p>
                        </div>
                        <div className=" flex space-x-4 border-black border-b-2 sm:py-1 md:py-2 lg:py-3 sm:m-1 md:m-2 lg:m-3">
                            <FaNpm className="text-white text-3xl" />
                            <p className="text-white">NPM</p>
                        </div>
                    </div>

                    <a href={Profile} download>
                        <button
                            className="bg-blue-500 py-1 px-2  shadow-md active:bg-blue-900
                         text-white rounded-md text-lg  hover:bg-blue-700 transition duration-300 ease-in-out"
                        >
                            Download CV
                        </button>
                    </a>
                </div>

                {/* This is the start of the PROJECTS tag */}
                <div
                    id="projects"
                    className="h-[800px] bg-[#0a2647] text-start"
                >
                    <h1 className="text-white pt-[100px] pl-5">My Projects</h1>
                    <p className="text-white pl-5 text-xl">
                        These are some of my favorite projects. I'm always
                        looking for fun challenges to learn from. Any feedback
                        is also appreciated!
                    </p>
                    {/** <Swiper
                        slidesPerView={1}
                        navigation
                        pagination={{ type: "progressbar" }}
                        effect="fade"
                        modules={{ EffectFade }}
                        autoplay={{ delay: 3000 }}
                        className="p-5"
                    >
                        <SwiperSlide className="">
                            <div>
                                <div
                                    style={{
                                        background: `url(${myphoto}) center, no-repeat `,
                                        backgroundSize: "cover",
                                    }}
                                    className=" relative w-full h-[400px] overflow-hidden"
                                ></div>
                                <p className="text-[#f1face] absolute left-1 top-3 font-medium max-w-[90%] bg-[#457b9d] shadow-lg opacity-90 p-2 rounded-br-3xl">
                                    Hello
                                </p>
                                <p className="text-[#f1face] absolute left-1 bottom-3 font-semibold max-w-[90%] bg-[#e63946] shadow-lg opacity-90 p-2 rounded-tr-3xl">
                                    Project
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>*/}
                </div>

                {/* This is the start of the BLOG tag */}
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

                {/* This is the start of the CONTACT tag */}
                <div id="contact" className="contact ">
                    <h1 className="text-white ">Contact</h1>
                    {/* This is the Contact Me section */}
                    <div className=" flex flex-col md:flex-row md:flex-6xl lg:mx-auto p-4 rounded-lg shadow-lg lg:space-x-5 ">
                        {/* Left Div */}

                        <div className="w-full  text-left pl-2 ">
                            <h5 className="font-bold text-white">Contact us</h5>
                            <p className="text-gray-500">
                                You're always welcome for any suggestion or just
                                to have a chat
                            </p>
                            {/*Address Email Phone Div */}
                            <div className=" flex flex-col md:flex-row md:flex-6xl lg:mx-auto  rounded-lg  lg:space-x-5 ">
                                <div className="w-full  text-left ">
                                    <h6 className="font-bold text-white">
                                        ADDRESS:
                                    </h6>
                                    <p className="text-gray-500">
                                        31930 ChinDwin Street, Pobba Thiri
                                        Township, Naypyitaw
                                    </p>
                                </div>
                                <div className="w-full  text-left ">
                                    <h6 className="font-bold text-white">
                                        EMAIL:
                                    </h6>
                                    <p className="text-gray-500">
                                        kthura397@gmail.com
                                    </p>
                                </div>
                                <div className="w-full  text-left ">
                                    <h6 className="font-bold text-white">
                                        PHONE:
                                    </h6>
                                    <p className="text-gray-500">09790717397</p>
                                </div>
                            </div>

                            {/*<button className="bg-blue-600 mb-1 rounded border text-white font-bold p-2 flex justify-around items-center">
                                <MdOutgoingMail />
                                Send Email
                            </button>*/}

                            <div className="flex flex-col w-full ">
                                <div className="mt-2 mb-1">
                                    <input
                                        name="subject"
                                        id="subject"
                                        rows="2"
                                        vlaue={subject}
                                        onChange={onChange}
                                        placeholder="Subject"
                                        className="w-full px-3 py-1 text-xl mt-2 text-white bg-[#16213e] border border-gray-300 rounded transition duration-150 ease-in-out focus:text-white focus:bg-[#1d2a4d] focus:border-slate-600"
                                    ></input>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="2"
                                        vlaue={message}
                                        onChange={onChange}
                                        placeholder="message"
                                        className="w-full px-3 py-1 text-xl mt-2 text-white bg-[#16213e] border border-gray-300 rounded transition duration-150 ease-in-out focus:text-white focus:bg-[#1d2a4d] focus:border-slate-600"
                                    ></textarea>
                                </div>
                                <a
                                    href={`mailto:${myEmail}?Subject=${subject}&body=${message}`}
                                >
                                    <button
                                        className="px-7 py-3 bg-blue-600 text-white rounded text-sm uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:shadow-lg active:bg-blue-700 transition duration-150 ease-in-out w-full text-center mb-4"
                                        type="button"
                                    >
                                        Send Message
                                    </button>
                                </a>
                            </div>

                            <h5 className="font-bold text-white mt-0">
                                Contact Me
                            </h5>
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
        </div>
    );
}

export default App;
