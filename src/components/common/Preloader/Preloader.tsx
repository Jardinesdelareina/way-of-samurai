import React from "react"

import preloader from "./../../../assets/images/preloader.gif"

let Preloader: React.FC = () => {
    return (
        <div>
            <img src={preloader} alt="" />
        </div>
    )
}

export default Preloader;