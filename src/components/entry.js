//import libraries
import React from 'react';
import {connect} from 'react-redux';

//import actions
import {helloWorld} from '../actions';

//import styling

export class Entry extends React.Component {

    render() {

        if (this.props.editing) {
            console.log('edit me now');
            let input;

    //need to pass to the input element: defaultValue={props.text}
    //is 'input.value' correct, or do I need to look in the journalList for the correct reference?

            return (
                <div className="entry">
                    <input 
                        type="text" 
                        defaultValue="default placeholder" 
                        ref={node => input = node} 
                        onBlur={e => {
                            e.preventDefault();
                            console.log('blurred', input.value);
                            this.props.onUpdate(e)
                    }}/>
                </div>

            )


        } else {
            // console.log(this.props)
            let editing = this.props.editing.toString();

            return(
                <div className="entry">
                    <span className="entry-text" onClick={(e) => this.props.onEdit(e)}>{this.props.text} {editing}</span>
                </div>
            );

        }
}

};

Entry.defaultProps = {
    text: '',
    editing: false
};

const mapStateToProps = state => ({
    // lists: state
});

export default connect()(Entry);


