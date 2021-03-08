import React, {ReactElement} from "react";
import FadeLoader from "react-spinners/FadeLoader";
import "./globalLoader.scss";

export const GlobalLoader: React.FC = ():ReactElement  => (
    <div className="global-loader__container" id="global-loader">
        <FadeLoader radius={250} color="rgba(54.215.183.100)" />
    </div>
);