import React, {ReactElement, ReactNode} from "react";

export const GlobalError: React.FC<ReactNode> = (message: string): ReactElement => (
        <div className="global-error__wrapper">
            <div className="global-error__message" id="global-error-message">{message}</div>
        </div>
    );