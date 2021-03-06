import AceEditor from "react-ace";
import "brace/mode/json";
import "brace/theme/monokai";
import React from "react/addons";

import AppDefaultFields from "../constants/AppDefaultFields";

var AppConfigJSONEditorComponent = React.createClass({
  displayName: "AppConfigJSONEditorComponent",

  propTypes: {
    app: React.PropTypes.object,
    onChange: React.PropTypes.func.isRequired,
    onError: React.PropTypes.func.isRequired
  },

  getDefaultProps: function () {
    return {
      app: null
    };
  },

  shouldComponentUpdate: function () {
    // avoid re-rendering the component as it causes the cursor to jump.
    return false;
  },

  handleUpdate: function (value) {
    var app = null;
    var jsonWasValid = false;

    try {
      app = JSON.parse(value);
      jsonWasValid = true;
    }
    catch (e) {
      this.props.onError("Invalid JSON");
    }

    if (jsonWasValid) {
      this.props.onChange(app);
    }
  },

  getPrettyPrintedDefinition: function () {
    // without this check, we would just show 'null' when creating a new app
    var app = this.props.app == null
      ? AppDefaultFields
      : this.props.app;
    return JSON.stringify(app, null, 2);
  },

  render: function () {
    return (
      <AceEditor
        editorProps={{$blockScrolling: true}}
        height="495px"
        mode="json"
        onChange={this.handleUpdate}
        showGutter={false}
        showPrintMargin={false}
        theme="monokai"
        value={this.getPrettyPrintedDefinition()}
        width="100%" />
    );
  }

});

export default AppConfigJSONEditorComponent;
