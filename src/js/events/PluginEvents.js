const PluginEvents = {
  REQUEST_PLUGINS_SUCCESS: "PLUGIN_EVENTS_REQUEST_PLUGINS_SUCCESS",
  REQUEST_PLUGINS_ERROR: "PLUGIN_EVENTS_REQUEST_PLUGINS_ERROR",
  REQUEST_PLUGIN_META_DATA_SUCCESS:
    "PLUGIN_EVENTS_REQUEST_PLUGIN_META_DATA_SUCCESS",
  REQUEST_PLUGIN_META_DATA_ERROR:
    "PLUGIN_EVENTS_REQUEST_PLUGIN_META_DATA_ERROR",
  LOAD_PLUGIN_SUCCESS: "PLUGIN_EVENTS_RLOAD_PLUGIN_SUCCESS",
  LOAD_PLUGIN_ERROR: "PLUGIN_EVENTS_LOAD_PLUGIN_ERROR",
  BOOTSTRAP_COMPLETE: "PLUGIN_EVENTS_BOOTSTRAP_COMPLETE"
};

export default Object.freeze(PluginEvents);