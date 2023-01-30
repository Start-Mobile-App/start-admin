## Usage

# To use atom of input (input,select,textarea,radio or checkbox), just import it as described below:

import {Input} from "../../Atoms"

<Input as='.....'> # as --> is the type of input (thats important to pass it to specify the type of input)
by default it takes input

# Exemple select

         <Input as='select' placeholder='choose value' defaultValue='2'
            options={[
              <option key='1' value='1'>
                1
              </option>,
              <option key='2' value='2'>
                2
              </option>
            ]} />

# Exemple input

<Input as='input' placeholder='input1' className='Form_Input_text' />

# Exemple textarea

<Input as='textarea' defaultValue='hi' />

# Exemple checkbox

<Input as='checkbox' id='1' disabled />
<Input as='checkbox' id='2' isValid />

# Exemple radio

<Input as='checkbox'  type='radio' />

# other props to pass

    disabled: Make the control disabled (type:boolean)
    isInvalid: Add "invalid" validation styles to the control and accompanying label (type:boolean)
    isValid: Add "valid" validation styles to the control (type:boolean)
    className: apply a style css
    onChange: A callback fired when the value changed (type:function)
    readOnly: Make the control readonly (type:boolean)
    value: The value attribute of underlying input (type:string | json)
    bsPrefix: change default class of input( default :form-control)  (type:string)
    id: unique identifier of control (type:string)
    placeholder: placeholderof control (type:string)
    defaultValue: default value of conrtrol (type:string)

# other specific props to pass in type checkbox

    onClick:  A callback fired when the value changed (type:function)
    checked: value of control (type:boolean)
    feedback: Display feedback as a tooltip (type:boolean)
    feedbackTooltip: {props.feedbackTooltip}
    label: Label for the control (type:string | node)
    type: The type of checkable (type:string) (value:'radio' | 'checkbox' | 'switch')
