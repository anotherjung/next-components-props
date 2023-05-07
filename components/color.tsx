import { NextPage } from "next";

interface Props {
    color: string;
}

const Color: NextPage<Props> = (props) => {
    const {color} = props;
    const font = 'text-'+color+'-600'
    return <h1 className={`flex justify-center ${font}`} >{color}</h1>;
};

export default Color;