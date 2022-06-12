import { Navigate } from "react-router-dom";
import { FrontEndContext } from '../Context/FrontEndContext.js';

    const FrontEndStatusConsumer = (props) => {
        //const navigate = useNavigate();
    return (
        <>
            <FrontEndContext.Consumer>
                {(Status) => {
                    if((props.condition && Status.userDarkMode.user)||
                    (!(props.condition) && !(Status.userDarkMode.user))){
                        //navigate(props.pathOut);
                        if(props.pathOut){
                            return (<Navigate to={props.pathOut} />);
                        }
                    }
                    if(props.receiveStatus){
                        props.receiveStatus(Status);
                    }
                }}

            </FrontEndContext.Consumer>
            {props.children}
        </>
        )
    }

    export default FrontEndStatusConsumer;