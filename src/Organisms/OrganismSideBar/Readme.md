## Usage

# To use OrganismSideBar , just import it as described below:

import {SideBarOrganism} from "../../Organisms"

## Configuration

# Header

fullLogo= "prototype"
miniLogo= "prototype"
cutmize your side bar logo

# Menu

MENU= array of object
Exemple
MENU=[
{
type: "SubMenu", //if you have a sub menu (you don't need to mention the type if it was not a sub menu)
name: "test", // Display name
path: "/", //path
icon: "TableauDeBordIcon", //Icon name
childrens: [ //items of the sub menu
{ type: "SubMenu",
name: "test2",
path: "/frererf",
icon: "TableauDeBordIcon",
childrens: [
{
name: "test2",
path: "/fref",
icon: "TableauDeBordIcon",
}
]
}
]
}
,
{
name: "test",  
 path: "/fg",
icon: "TableauDeBordIcon",
},
{
name: "test9",
path: "/test",
icon: "TableauDeBordIcon",
}
]

# Footer

Footer="prototype"
