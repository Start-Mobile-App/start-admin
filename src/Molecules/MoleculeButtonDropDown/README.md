## Usage

# To use atom on input, just import it as described below:

import {ButtonDropDown} from "../../Molecule"

# props to pass in the input

    ContainerDropdownClassName:apply a style css for container  of  element
    ButtonContainerClassName:apply a style css for container  of  button
    ButtonContentClassName:apply a style css for content  of  button
    ButtonValueClassName:apply a style css for button
    ButtonValue:button value (type:string)
    classNameDropDown:apply a style css for container of list  dropdown element
    ListDropDown:list of element dropdown (type:array of object {className:apply a style css,item:description of element ,onClick:function})
    icon: add icon to  button (type:node)
    positionLeft: position of  icon (type:boolean) (positionLeft==true =>position left; position==false=> position rigth;position==null=>no icon)
