import {useState} from "react";
import axios from "axios";
import uuid from "uuid";

function useFlip(initialFlipState = true) {
    const [isFacingUp, setIsFacingUp] = useState(initialFlipState);

    const flip = () => {
        setIsFacingUp(isFacingUp=>!isFacingUp);
    };

    return [isFacingUp, flip];
}

function useAxios(url) {
    const [responses, setResponses] = useState([]);
    const addResponse = async (restOfUrl="") => {
      const response = await axios.get(`${url}${restOfUrl}`);
      setResponses(responses => [...responses, { ...response.data, id: uuid()}]);
    };

    return [responses, addResponse];
}

export {useFlip, useAxios};