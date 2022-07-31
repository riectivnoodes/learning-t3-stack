import { Dispatch, SetStateAction, useState } from "react";

export interface Bool {
    githubData: boolean;
    hover: boolean;
    openEmblemMenu: boolean;
    setBool: Dispatch<SetStateAction<object>>;
}

export const useHandleSetBool = (target: string) => {
    
    const [bool, setBool] = useState<any>({ githubData: true, hover: false, openEmblemMenu: false });
    
    return [bool, (target: string) => {
        if (bool[target]) { setBool((prev) => { return { ...prev, [target]: false } }) }
    else { setBool((prev) => {return { ...prev, [target]: true }})}}]
}