## usage

# to use atom of datePicker, just import is as described below

import {DatePicker} from '../../Atom'

# props to pass into DatePicker

    classNameContainer: apply a style to the container of the datePiker,
    className: apply a style to the datePicker,
    placeholder: put your placeHolder like 'date' ,
    minDate: minimum date format Date or null,
    placeholderText:  formate your placeHolder like "00/00/0000",
    locale: timeZone "en-gb",
    dateFormat:  formate your date like "dd/MM/yyyy",
    filterDate: pass a function that return a bool to controle your dates,
    onChange: function that will call when you change a select,
    calendarClassName: apply a class to calendar,
    popperClassName: apply a class to popper  ,
    wrapperClassName: apply a class to wrapper
    selected: value of the select Date

# you can also read the interface of the package for more props and visit the official website to learn more
