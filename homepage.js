import React, { useState } from "react";
import ReactDOM from "react-dom";
import "/src/styles.css";
import create from "/src/form.js";
function home(){
    return(
        <body>
          <h1 align="center">AGRI-CONNECT</h1>
            <ul><h2>ABOUT US -></h2>
                <li>A social media platforms to help farmers and farming enthusiasts.</li>
                <li>We connect farmers from all over India with the latest advancements in agricultural technology.</li>
                <li>we suggest crops for farmers to grow based on their
                specific field and family information.</li>
                <li>Provide information on available schemes and programs from the central and state governments.</li>
                <li> We also provide various hybrid farming methods and technology</li>
            </ul>
                <p>
                {create()}
                </p>
        </body>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(home);
export default home;