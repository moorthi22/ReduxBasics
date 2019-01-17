import React, { Component } from "react";
import { Form, Text, TextArea } from "informed";
import { connect } from "react-redux";

class PostForm extends Component {
  setFormApi = formApi => {
    this.formApi = formApi;
  };

  handleClick = e => {
    e.preventDefault();
    const title = this.formApi.getState().values.title;
    const message = this.formApi.getState().values.post;
    const data = {
      id: new Date(),
      title,
      message
    };
    const action = {
      type: "ADD_POST",
      data
    };

    this.props.dispatch(action);

    this.formApi.getState().values.title = "";
    this.formApi.getState().values.post = "";
    console.log(data);
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <Form getApi={this.setFormApi}>
          <div>
            <Text
              field="title"
              id="name-field"
              placeholder="Enter Place Title"
            />
            <br />
            <br />
            <TextArea
              field="post"
              rows="5"
              cols="28"
              placeholder="Enter Post here..."
            />
            <br />
            <br />
            <button onClick={this.handleClick}>Post</button>
          </div>
        </Form>
      </div>
    );
  }
}
export default connect()(PostForm);
