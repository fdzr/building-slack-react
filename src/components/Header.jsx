import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
    return (
        <div className="flex fixed w-full items-center pt-[10px] pb-2 justify-between slack-color text-white">
            <div className="flex flex-[0.3] items-center ml-5">
                <Avatar className="cursor-pointer hover:opacity-80"/>
                <AccessTimeIcon className="ml-[200px] text-white"/>
            </div>
            <div className="flex flex-[0.4] opacity-100 bg-[#421f44] 
                            text-center py-0 px-[50px] text-gray-400 
                            border border-gray-400 border-solid">
                <SearchIcon />
                <input placeholder="Search Frank" className="rounded bg-transparent 
                                                            text-center border-none
                                                            min-w-[30vw] text-white
                                                            outline-0"/>
            </div>
            <div className="flex flex-[0.3] items-end">
                <HelpOutlineIcon className="ml-auto mr-[20px]"/>
            </div>
        </div>
    );
};

export default Header;