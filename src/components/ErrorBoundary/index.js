import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Ups... Something went wrong :C</h2>
          {this.state.error && this.state.error.toString()}
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
