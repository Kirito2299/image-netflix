import React, {useState, useEffect} from "react";
import './Nav.css'

function Nav(){
            const [show, handleShow] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY>100){
                handleShow(true);
            } else { 
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    },[])

    return(
        <div className={`Nav ${show && "navback"}`}>
            <img className="navlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="Netflix-logo" />
        </div>

    )
}

export default Nav;