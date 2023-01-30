import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import theme from 'react-autosuggest/dist/theme';

AtomAutoComplete.defaultProps = {
  suggestions: ['a', 'am'],
  onSuggestionsFetchRequested: null,
  onSuggestionsClearRequested: null,
  getSuggestionValue: null,
  renderSuggestion: null,
  inputProps: null,
  onSuggestionSelected: null,
  onSuggestionHighlighted: null,
  alwaysRenderSuggestions: null,
  highlightFirstSuggestion: null,
  focusInputOnSuggestionClick: null,
  multiSection: false,
  renderSectionTitle: null,
  theme: theme,
  id: null,
  className: 'AtomAutoComplete'
};
export default function AtomAutoComplete (props) {
  return (
    <div className={props.className}>
      <Autosuggest
        suggestions={props.suggestions}
        onSuggestionsFetchRequested={props.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={props.onSuggestionsClearRequested}
        getSuggestionValue={props.getSuggestionValue}
        renderSuggestion={props.renderSuggestion}
        inputProps={props.inputProps}
        onSuggestionSelected={props.onSuggestionSelected}
        onSuggestionHighlighted={props.onSuggestionHighlighted}
        alwaysRenderSuggestions={props.alwaysRenderSuggestions}
        highlightFirstSuggestion={props.highlightFirstSuggestion}
        focusInputOnSuggestionClick={props.focusInputOnSuggestionClick}
        multiSection={props.multiSection}
        renderSectionTitle={props.renderSectionTitle}
        theme={props.theme}
        id={props.id}
      />
    </div>
  );
}
