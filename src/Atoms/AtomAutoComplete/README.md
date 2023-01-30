## Usage

# To use atom of auto complete, just import it as described below:

import {AutoComplete} from "../../Atoms"

# props to pass in the input

    suggestions:These are the suggestions that will be displayed. Items can take an arbitrary shape(type:Array)(required:true)
    onSuggestionsFetchRequested: Will be called every time you need to recalculate suggestions.(type:function)(required:true)
    onSuggestionsClearRequested: Will be called every time you need to set suggestions to [](type:function)(required:true)
    getSuggestionValue: Implement it to teach Autosuggest what should be the input value when suggestion is clicked.(type: Function)(required:true)
    renderSuggestion:  	Use your imagination to define how suggestions are rendered.(type:function)(required:true)
    inputProps:Pass through arbitrary props to the input. It must contain at least value and onChange.(type:Object)(required:true)
    onSuggestionSelected:Will be called every time suggestion is selected via mouse or keyboard.(type:function)
    onSuggestionHighlighted:Will be called every time the highlighted suggestion changes.(type:function)
    alwaysRenderSuggestions: 	Set it to true if you'd like to render suggestions even when the input is not focused.(type:boolean)
    highlightFirstSuggestion: 	Set it to true if you'd like Autosuggest to automatically highlight the first suggestion.(type:boolean)
    focusInputOnSuggestionClick: 	Set it to false if you don't want Autosuggest to keep the input focused when suggestions are clicked/tapped.(type:boolean)
    multiSection: 	Set it to true if you'd like to display suggestions in multiple sections (with optional titles).(type:boolean)
    renderSectionTitle: Use your imagination to define how section titles are rendered.(type:function =>when multiSection={true}
    theme: 	Use your imagination to style the Autosuggest.(type:object)
    id: 	Use it only if you have multiple Autosuggest components on a page.(type:string)
