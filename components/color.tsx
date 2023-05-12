import { NextPage } from "next";
import { Component } from "react";

interface Props {
    color: string;
}

const Color: NextPage<Props> = (props) => {
    const {color} = props;
    const font = 'text-'+color+'-600'
    return <h1 className={`flex justify-center text-3xl ${font}`} >{color} Component</h1>;
};

export default Color;