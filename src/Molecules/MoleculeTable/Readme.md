## Usage

# To use MoleculeTable , just import it as described below:

import {Table} from "../../Molecules"

# props to pass in the table

    format:Format of date to apply in moment function(type : String)
    ContainerClassName : apply a style css for container of Table
    TableClassName : apply a  style css for  table
    listColumns : list of column (type : array of object {
        type:  (use to specific column  in  table ), value="action",
        element: (use to specific column in table), value="prototype => reactNode"
        column: description of column
        className: apply a style css for column of table
        onClick:(type : function )
        icon: use to add icon to column (type:string)
        size: apply a size to  icon (type:string)
        classNameIcon: use to add a style css to icon (type:string)
        index: index  use to link data to column
    })
    data :list of data(type: array of object {})
