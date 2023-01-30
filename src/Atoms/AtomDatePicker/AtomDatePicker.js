import React, { Component } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/src/stylesheets/datepicker.scss';
import enGb from 'date-fns/locale/en-GB';
registerLocale('en-gb', enGb);

AtomDatePicker.defaultProps = {
  classNameContainer: 'DatePicker_default_container',
  className: 'Date_Picker_default_style',
  placeholder: 'Date',
  minDate: null,
  placeholderText: '00/00/0000',
  locale: 'en-gb',
  dateFormat: 'dd/MM/yyyy',
  filterDate: null,
  onChange: null,
  calendarClassName: '',
  popperClassName: '',
  wrapperClassName: ''
};

function AtomDatePicker (props) {
  return (
    <div className={props.classNameContainer}>
      <DatePicker
        {...props}
        selected={props.selected}
        onChange={props.onChange}
        className={props.className}
        placeholder={props.placeholder}
        minDate={props.minDate}
        placeholderText={props.placeholderText}
        locale={props.locale}
        filterDate={props.filterDate}
        calendarClassName={props.calendarClassName}
        popperClassName={props.popperClassName}
        wrapperClassName={props.wrapperClassName}
      />
    </div>
  );
}

export default AtomDatePicker;
