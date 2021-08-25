import "./portfolio.scss";
import PortfolioList from "./../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {featuredportfolio,
    webPortfolio,
    mobilePortfolio,
    contentPortfolio, designPortfolio,
  
    } from "../../data";

const Portfolio = () => {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([])

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ];
    useEffect(()=>{
       switch(selected){
           case "featured":
               setData(featuredportfolio);
               break;
               case "mobile":
               setData( mobilePortfolio);
               break;
               case "web":
               setData( webPortfolio);
               break;
               case "content":
               setData( contentPortfolio);
               break;
               case "design":
               setData( designPortfolio);
               break;
               default:
                setData(featuredportfolio);

       }
        
    },[selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                <PortfolioList  
                title={item.title} 
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
                />
                ))}
            </ul>
            <div className="container">
                {data.map(data=> (

            <div className="item">
            <img src={data.img} 
            alt=""/>
            <h3>{data.title}</h3>
                </div>

                ))}
                  
            </div>
        </div>
    );
}

export default Portfolio
