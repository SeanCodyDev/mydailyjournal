//import libraries
import React from 'react';

//import styling

export default function Entry(props) {

    if (props.editing) {
        let input;

//need to pass to the input element: defaultValue={props.text}
//is 'input.value' correct, or do I need to look in the journalList for the correct reference?
        return (
            <div className="entry">
                <input 
                    type="text" 
                    defaultValue="default placeholder" 
                    ref={node => input = node} 
                    onChange{e => {
                        e.preventDefault();
                        console.log(input.value);
                        props.onUpdate(input.value);
                }}/>
            </div>

        )


    } else {
        // {props.text} betweens span tags
        return(
            <div className="entry">
                <span className="entry-text" onClick={(e) => props.onEdit()}>Placeholder Text</span>
            </div>
        );

    }

};

Entry.defaultProps = {
    text: ''
};
