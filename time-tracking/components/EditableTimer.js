import React from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';

//Stateful Component 
//- 1. props are defined here; 2. they are not changed 
//from other state or props and; 3. also they changed over time.

export default function EditableTimer({
    id,
    title,
    project,
    elapsed,
    isRunning,
    editFormOpen,
}) {
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