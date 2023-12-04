import React from "react"

function Info(){
    return(
       <>
            <img src="https://www.davidchang.ca/wp-content/uploads/2020/09/David-Chang-Photography-Headshots-Toronto-61-1536x1536.jpg" width = "317px"/>
            <section id="Info1">
                 <h1> Obada Erfan </h1>
                 <h3> Frontend Developer </h3>
                 <a href = "#"><p>ObadaErfanWebDev.com </p></a>
            </section>
            <section id="Info2">
                 <button><i className="fa-regular fa-envelope"></i>Email </button> 
                 <button><i className="fa-brands fa-linkedin"> </i>LinkedIn</button>
            </section>
       </>
    )
}

export default Info