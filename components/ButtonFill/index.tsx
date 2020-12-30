/*
    ButtonFill Component.

    Author: Alejandro AS
    Date: 22-12-2020

*/


import * as React from 'react';
import Link from 'next/link';
import { Button } from "./style"

export interface PropsButtonField {
    href: string;
    text: string;
}

const ButtonFill: React.FunctionComponent<PropsButtonField> = ({ href, text }) => (
    <Link href={href}>
        <Button >{text}</Button>
    </Link>
)

export default ButtonFill;