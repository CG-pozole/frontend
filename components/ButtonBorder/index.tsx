/*
    Button Border Component.


    Authors: Alejandro AS
    Date: 22-12-2020


*/

import * as React from 'react';
import Link from 'next/link';
import  {ButtonBlue, ButtonOrange, ButtonPurple} from "./style"




export interface ButtonBorderProps {
    href?: string;
    text: string;
    green?: boolean;
    purple?: boolean;
    blue?: boolean;
    orange?: boolean

}


const ButtonBorder: React.FunctionComponent<ButtonBorderProps> = ({ href, text, purple, green, blue, orange }) => {
    return (
        <React.Fragment>
            <div>
                {purple &&
                    <Link href={href}>
                        <ButtonPurple>
                            {text}
                        </ButtonPurple>
                    </Link>
                }
                {
                    blue &&
                    <Link href={href}>
                        <ButtonBlue >
                            {text}
                        </ButtonBlue>
                    </Link>
                }
                {orange &&
                    <Link href={href}>
                        <ButtonOrange>
                            {text}
                        </ButtonOrange>
                    </Link>
                }
            </div>
        </React.Fragment>
    );

}

export default ButtonBorder;