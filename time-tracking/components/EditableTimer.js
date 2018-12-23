import React from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';

//Stateful Component 
//- 1. props are defined here; 2. they are not changed 
//from other state or props and; 3. also they changed over time.

export default class EditableTimer extends React.Component {
    state = {
        editFormOpen: false,
    }

    render() {
        const { id, title, project, elapsed, isRunning } = this.props;
        const { editFormOpen } = this.state;

        if(editFormOpen) {
            return <TimerForm id={id} title={title} project={project} />
        }
    
        return(
        <Timer
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
        />);
    }
}