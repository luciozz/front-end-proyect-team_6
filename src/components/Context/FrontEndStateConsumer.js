import { Navigate } from "react-router-dom";
import { FrontEndContext } from './FrontEndContext.js';

    const FrontEndStateConsumer = (props) => {
        //const navigate = useNavigate();
    return (
        <>
            <FrontEndContext.Consumer>
                {(state) => {
                    if((props.condition && state.globalState.user)||
                    (!(props.condition) && !(state.globalState.user))){
                        //navigate(props.pathOut);
                        if(props.pathOut){
                            return (<Navigate to={props.pathOut} />);
                        }
                    }
                    if(props.receiveState){
                        props.receiveState(state);
                    }
                }}

            </FrontEndContext.Consumer>
            {props.children}
        </>
        )
    }

    export default FrontEndStateConsumer;