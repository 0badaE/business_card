import React from "react"

function Footer(){
    return(
       <footer> 
        <div className="socials">
           <button><a href ="https://twitter.com/ObadaErfanDev"> <i className="fa-brands fa-x-twitter fa-xl"style={{color: "##161619",}} ></i></a></button>
           <button><a href ="https://www.facebook.com/Obada.erfan"> <i className="fa-brands fa-facebook fa-xl" style={{color: "##161619",}} ></i></a></button>
           <button> <a href ="https://www.instagram.com/javascript.js/"><i className="fa-brands fa-instagram fa-xl" style={{color: "##161619",}} ></i></a></button>
           <button> <a href ="https://github.com/0badaE"><i className="fa-brands fa-github fa-xl" style={{color: "##161619",}} ></i></a></button>
         </div>
        </footer> 
    )
}

export default Footer



