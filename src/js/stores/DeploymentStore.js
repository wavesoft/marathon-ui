import {EventEmitter} from "events";

import AppDispatcher from "../AppDispatcher";
import DeploymentEvents from "../events/DeploymentEvents";
import deploymentScheme from "./schemes/deploymentScheme";

import Util from "../helpers/Util";

const storeData = {
  deployments: []
};

function processDeployments(deployments) {
  return deployments.map(function (deployment) {
    deployment = Util.extendObject(deploymentScheme, deployment);

    deployment.affectedAppsString = deployment.affectedApps.join(", ");
    deployment.currentActionsString = deployment.currentActions.join(", ");

    return deployment;
  });
}

function removeDeployment(deployments, deploymentId) {
  return deployments.filter(deployment => deployment.id !== deploymentId);
}

var DeploymentStore = Util.extendObject(EventEmitter.prototype, {
  get deployments() {
    return Util.deepCopy(storeData.deployments);
  }
});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case DeploymentEvents.REQUEST:
      storeData.deployments = processDeployments(action.data.body);
      DeploymentStore.emit(DeploymentEvents.CHANGE);
      break;
    case DeploymentEvents.REQUEST_ERROR:
      DeploymentStore.emit(
        DeploymentEvents.REQUEST_ERROR,
        action.data.body,
        action.data.status
      );
      break;
    case DeploymentEvents.REVERT:
      storeData.deployments =
        removeDeployment(storeData.deployments, action.deploymentId);
      DeploymentStore.emit(DeploymentEvents.CHANGE);
      break;
    case DeploymentEvents.REVERT_ERROR:
      DeploymentStore.emit(
        DeploymentEvents.REVERT_ERROR,
        action.data.body,
        action.data.status
      );
      break;
    case DeploymentEvents.STOP:
      storeData.deployments =
        removeDeployment(storeData.deployments, action.deploymentId);
      DeploymentStore.emit(DeploymentEvents.CHANGE);
      break;
    case DeploymentEvents.STOP_ERROR:
      DeploymentStore.emit(
        DeploymentEvents.STOP_ERROR,
        action.data.body,
        action.data.status
      );
      break;
  }
});

export default DeploymentStore;
