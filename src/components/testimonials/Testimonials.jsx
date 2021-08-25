import "./testimonials.scss";

const Testimonials = () => {

    const data = [
        {
            id: "1",
            icon:"./assets/iphone.png",
            title: "Senior Developer",
            desc: " Your commitment and dedidcation,has make me to truest you over time.",
            img:  "./assets/matthew-reyes.jpg",
            name: "Matthew Reyes",
            
        },

        {
            id: "2",
            icon: "./assets/linkedin.png",
            title: "Co-Founder of Synex Tech",
            desc: " I have been greatly inspired during our,working session because of your management skirls.",
            img:  "./assets/test03.jpg",
            name: "Victoria Golden",
            
        },
    
        {
            id: "3",
            icons: "./assets/globe.png",
            title: "Pyro OpenSource Contributor",
            desc: " You are a unique developer,Never stop contributing.",
            img:  "./assets/test02.jpg",
            name: "Derrick Miller",
            
        },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) =>(

               
                <div className={d.featured ? "card featured" : "card"}>
                <div className="top">
                    <img src="assets/right01.png" className="left" alt=""/>
                    <img 
                     className="user"
                    src={d.img} alt=""/>
                    <img 
                     className="right"
                    src={d.img} alt=""/>
                </div>
                <div className="center">
                   {d.desc}
                </div>
                <div className="bottom">
                    <h3>{d.name}</h3>
                    <h4>{d.title}</h4>
                </div>
             </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
