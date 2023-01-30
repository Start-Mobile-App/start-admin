import React from 'react';
import { action } from '@storybook/addon-actions';
import { AutoComplete, Text } from '../Atoms';
export default {
  title: 'Design System/Atoms/AutoComplete',
  component: AutoComplete,
  argTypes: {
    // suggestions: {
    //     name: 'suggestions',
    //     control: { type: null },
    //     table: {
    //         type: {
    //             summary: 'These are the suggestions that will be displayed. Items can take an arbitrary shape',
    //             detail: 'type:Array'
    //         }
    //     }
    // },
    // onSuggestionsFetchRequested: {
    //     name: 'onSuggestionsFetchRequested',
    //     control: { type: null },
    //     table: {
    //         type: {
    //             summary: 'Will be called every time you need to recalculate suggestions',
    //             detail: 'type:function'
    //         }
    //     }
    // },
    // onSuggestionsClearRequested: {
    //     name: 'onSuggestionsClearRequested',
    //     control: { type: null },
    //     table: {
    //         type: {
    //             summary:
    //                 'Disables the Button, preventing mouse events, even if the underlying component is an <a> element',
    //             detail: 'type : Boolean'
    //         }
    //     }
    // },
    // getSuggestionValue: {
    //     name: 'getSuggestionValue',
    //     control: { type: null },
    //     table: {
    //         type: {
    //             summary: 'event caaled on button active',
    //             detail: 'type : function'
    //         }
    //     }
    // },
    // renderSuggestion: {
    //     name: 'renderSuggestion',
    //     control: { type: null },
    //     table: {
    //         type: {
    //             summary: 'event caaled on button active',
    //             detail: 'type : function'
    //         }
    //     }
    // },
    // inputProps: {
    //     name: 'inputProps',
    //     control: { type: null },
    //     table: {
    //         type: {
    //             summary: 'event caaled on button active',
    //             detail: 'type : function'
    //         }
    //     }
    // }
  }
};

// const inputProps = {
//     placeholder: 'placeholder',
//     onChange: onChange,
//     className: 'classNameInputAutoComplete'
// };
// const [suggestions, setSuggestions] = useState([]);
// const [value, setValue] = useState('');
// const [listVlaue] = useState([
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '12',
//     '23',
//     '34',
//     '45',
//     '56'
// ]);
// function getSuggestionValue(suggestion) {
//     return suggestion;
// }
// function onSuggestionsClearRequested() {
//     setSuggestions([]);
// }
// function onSuggestionsFetchRequested({ value }) {
//     setSuggestions(getSuggestions(value));
// }
// function getSuggestions(value) {
//     const inputValue = value.trim().toLowerCase();
//     const inputLength = inputValue.length;
//     return inputLength === 0
//         ? []
//         : listVlaue.filter(
//             element =>
//                 element.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
//         );
// }
// function onChange(event, { newValue }) {
//     setValue(newValue);
// }
// const renderSuggestion = suggestion => (
//     <Text>
//         {suggestion}
//     </Text>
// );
// Auto.args = {
//     suggestions: ['dd', 'fff'],
//     onSuggestionsFetchRequested: action('onSuggestionsFetchRequested'),
//     onSuggestionsClearRequested: action('onSuggestionsFetchRequested'),
//     getSuggestionValue: action('onSuggestionsFetchRequested'),
//     renderSuggestion: action(renderSuggestion(suggestion)),
//     inputProps: inputProps
// };
