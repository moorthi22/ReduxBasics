import React, { Component } from "react";
import { Form, Text, TextArea } from "informed";
import { connect } from "react-redux";

class EditComponent extends Component {
  setFormApi = formApi => {
    this.formApi = formApi;
  };

  handleClick = e => {
    e.preventDefault();
    const newTitle = this.formApi.getState().values.title;
    const newMessage = this.formApi.getState().values.message;
    const data = {
      newTitle,
      newMessage
    };
    this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data });
  };
  render() {
    return (
      <div className="post">
        <Form className="form" getApi={this.setFormApi}>
          <div>
            <Text
              field="title"
              id="name-field"
              value="10"
              placeholder="Enter Place Title"
            />
            <br />
            <br />
            <TextArea
              field="message"
              rows="5"
              cols="28"
              defaultValue={this.props.post.message}
              placeholder="Enter Post here..."
            />
            <br />
            <br />
            <button onClick={this.handleClick}>Update</button>
          </div>
        </Form>
      </div>
    );
  }
}
export default connect()(EditComponent);
