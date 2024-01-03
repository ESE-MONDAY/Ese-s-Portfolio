import React from "react";
import Button from "./Button";

export default {
    title: "Component/Button",
    component: "Button",
    argTypes: {
        disabled: {control : 'boolean'},
        children: {control: 'text'}
    }
}

export const Primary = (args: any) => <Button {...args}>Primary</Button>;
Primary.args = {
    disabled: false,
    children: 'Primary',
    activeColor: 'blue'

}
export const Secondary = (args: any) => <Button {...args}/>
Secondary.args = {
    disabled: false,
    children: 'Secondary',
    activeColor: 'gray'
}
export const Success = (args: any) => <Button {...args}/>
Success.args = {
    disabled: false,
    children: 'Success',
    activeColor: 'green'
}
export const Danger = (args: any) => <Button {...args}/>
Danger.args = {
    disabled: false,
    children: 'Danger',
    activeColor: 'red'
}
export const Warning = (args: any) => <Button {...args}/>
Warning.args = {
    disabled: false,
    children: 'Warning',
    activeColor: 'yellow'
}