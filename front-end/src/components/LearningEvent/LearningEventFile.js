import React, { Component } from "react";
import LearningEventVideo from "./LearningEventVideo"
import axios from "axios";

export default class LearningEventFile extends Component {
  state = {
    fileInfo: []
  };

  componentDidMount() {
    this.getFileUrl();
  };

  getFileUrl() {
    const url = this.props.event.url;

    axios
      .get(url)
      .then(res => {
        const fileInfo = res.data;
        console.log(fileInfo);
        this.setState({ fileInfo });
      })
      .catch(error => {
        console.log(error);
      });
  };

  renderFileByType() {
    const file = this.state.fileInfo;
    const title = this.props.event.title;

    if (file.mime_class === "video") {
      return <LearningEventVideo title={title} file={file} />;
    } else {
      return <LearningEventVideo title={title} />;
    }
  };

  render() {
    return  this.renderFileByType();
  }
}
