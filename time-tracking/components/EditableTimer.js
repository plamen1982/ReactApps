import React from "react";

import TimerForm from "./TimerForm";
import Timer from "./Timer";

//Stateful Component
//- 1. prop(editFormOpen) is defined here; 2. it is not changed
//from other state or props and; 3. also is changed over time.

export default class EditableTimer extends React.Component {
  state = {
    editFormOpen: false
  };

  handleEditPress = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = timer => {
    const { onFormSubmit } = this.props;
    this.closeForm();

    onFormSubmit(timer);
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  render() {
    const { 
      id, 
      title, 
      project, 
      elapsed, 
      isRunning, 
      onRemovePress,
      onStartPress,
      onStopPress, 
    } = this.props;

    const { editFormOpen } = this.state;

    if (editFormOpen) {
      return (
        <TimerForm
          id={id}
          title={title}
          project={project}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    }

    return (
      <Timer
        id={id}
        title={title}
        project={project}
        elapsed={elapsed}
        isRunning={isRunning}
        onEditPress={this.handleEditPress}
        onRemovePress={onRemovePress}
        onStartPress={onStartPress}
        onStopPress={onStopPress}
      />
    );
  }
}
