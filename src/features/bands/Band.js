import React from "react";
import { useDispatch } from "react-redux";
import { bandRemoved } from "./bandsSlice";

function Band({band}){

    const dispatch = useDispatch();
    
    function handleDeleteBand(){
        dispatch(bandRemoved(band.id))
    }
    
    return(
        <li>
            <span>{band.name}</span>
            <button onClick={handleDeleteBand}>Delete Band</button>
        </li>
    )
}

export default Band;