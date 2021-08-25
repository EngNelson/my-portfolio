import "./works.scss";
import {  useState } from "react";


const Works = () => {
    const [currentSlide,setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "assets/whatsapp.png",
            title: "Web Design",
            desc: "Work done when you are tired is called sancrifice. ",
            img:  "./assets/delivery.jpg",
            
        },

        {
            id: "2",
            icon: "assets/linkedin.png",
            title: "Branding",
            desc: "The bueaty of life is seen throgh it's many deversities.",
            img:  "assets/globe.png",
            
        },
        {
            id: "3",
            icon: "assets/globe.png",
            title: "Systems Design",
            desc: " We need each other to make the world, a better place.",
            img:  "",
            
        },
        {
            id: "4",
            icon: "assets/facebook.png",
            title: "Open Telementry",
            desc: " Your passion will take away sleep from your eyes and your vision will shape your friends.",
            img:  "./assets/web.jpg",
            
        },
        {
            id: "5",
            icon: "assets/phone.png",
            title: "Mobile Application",
            desc: " The quality of your friends reveals who you are.",
            img:  "./assets/",
            
        },
        {
            id: "6",
            icon: "assets/phone.png",
            title: "Machine Learning",
            desc: "Team work sponse growth and time brings happiness.",
            img:  "assets/machine.jpg",
            
        },


    ];
 const handleClick = (way)=>{
     way === "left" 
     ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2)
     :setCurrentSlide(currentSlide < data.length -1 ?currentSlide +1 : 0);
 };

      return (
        <div className="works" id="works">
            <div className="slider" 
            style={{transform:`translateX(-${currentSlide 
            * 100}vw)`}}>
               { data.map(d=>(
                 <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                  {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                          
                            <img 
                            src="assets/pro01.jpg" alt=""/>
                        </div>
                    </div>
                
                </div>
               ))};
               
            </div>
               
               
            <img src="assets/left01.png"  className="arrow-left" alt=""
            onClick={()=>handleClick("left")}/>
            <img src="assets/right01.png"  className="arrow-right" alt=""
            onClick={()=>handleClick("right")}/>
        </div>
               

               
    )
}

export default Works
