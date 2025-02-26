import React from "react";
import { useNavigate } from "react-router-dom";

const withRouter = WrappedComponent => {
    const WithRouter = () => {
        const navigate = useNavigate();
        return <WrappedComponent navigate={navigate}/>
    }
    return WithRouter;
}

export default withRouter;