import Util from "../helpers/Util";
import JSONPUtil from "../helpers/JSONPUtil";
import ajaxWrapper from "../helpers/ajaxWrapper";

import config from "../config/config";

import Messages from "../constants/Messages";
import AppDispatcher from "../AppDispatcher";
import PluginEvents from "../events/PluginEvents";

var PluginActions = {
  requestPlugins: function () {
    this.request({url: `${config.apiURL}v2/plugins`})
      .success(function (response) {
        if (response != null && Util.isArray(response.plugins)) {
          AppDispatcher.dispatch({
            actionType: PluginEvents.REQUEST_PLUGINS_SUCCESS,
            data: response.plugins
          });
          return;
        }
        AppDispatcher.dispatch({
          actionType: PluginEvents.REQUEST_PLUGINS_ERROR,
          data: {message: Messages.MALFORMED}
        });
      })
      .error(function (error) {
        AppDispatcher.dispatch({
          actionType: PluginEvents.REQUEST_PLUGINS_ERROR,
          data: error
        });
      });
  },
  loadPlugin: function (pluginInfo) {
    this.load(pluginInfo.uri).then(
      function () {
        AppDispatcher.dispatch({
          actionType: PluginEvents.LOAD_PLUGIN_SUCCESS,
          metaInfo: pluginInfo
        });
      },
      function (error) {
        AppDispatcher.dispatch({
          actionType: PluginEvents.LOAD_PLUGIN_ERROR,
          data: error,
          metaInfo: pluginInfo
        });
      }
    );
  },
  request: ajaxWrapper,
  load: JSONPUtil.request
};

export default PluginActions;
