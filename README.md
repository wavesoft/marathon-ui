[![Stories in Ready](https://badge.waffle.io/mesosphere/marathon.png?label=ready,gui&title=Ready)](https://waffle.io/mesosphere/marathon?label=gui)
# Marathon UI [![Build Status](https://travis-ci.org/mesosphere/marathon-ui.png?branch=master)](https://travis-ci.org/mesosphere/marathon-ui) [![Teamcity Snapshot UI Webjar Build Status](https://teamcity.mesosphere.io/app/rest/builds/buildType:%28id:Oss_Marathon_SnapshotUiWebjar%29/statusIcon)](https://teamcity.mesosphere.io/viewType.html?buildTypeId=Oss_Marathon_SnapshotUiWebjar&guest=1) [![Coverage Status](https://coveralls.io/repos/mesosphere/marathon-ui/badge.svg?branch=master&service=github)](https://coveralls.io/github/mesosphere/marathon-ui?branch=feature%2Fadd-code-coverage-task)

![Marathon UI](https://raw.githubusercontent.com/mesosphere/marathon-ui/master/marathon-ui.png "Marathon UI")

## The web user interface for Mesosphere's Marathon

The UI is bundled with the [Marathon](https://github.com/mesosphere/marathon) package.

Please note that issues are disabled for this repository. Please feel free to open an issue on the
[issues page on the main Marathon Repository](https://github.com/mesosphere/marathon/issues?q=is%3Aopen+is%3Aissue+label%3Agui).

#### Documentation

Documentation for the Marathon UI (work in progress) can be found at
https://mesosphere.github.io/marathon/docs/marathon-ui.html.

#### Prequisites

Please make sure you've installed and properly configured the following software:

* [Docker 1.9](https://www.docker.com/)
* [Node 5](https://nodejs.org/en/blog/release/v5.0.0/) including [NPM](https://npmjs.org/)

#### Setup

##### 1. Install all dependencies

        npm install
        npm install -g gulp

##### 2. Configure your hosts

If you're not using something like [dnsdock](https://github.com/tonistiigi/dnsdock) or [dinghy](https://github.com/codekitchen/dinghy) (OS X) for easy container discovery/access, please configure your hosts as follows:

      mesos-master.docker 192.168.99.100
      mesos-slave.docker  192.168.99.100
      marathon.docker     192.168.99.100

*Use `$ docker-machine ip $DOCKER_MACHINE_NAME` to get the current docker machine ip and add those lines to your `etc/hosts` configuration.*


##### 4. Start your environment

The following command will download, configure and start a basic Zookeeper, Mesos and Marathon setup for you. It will also serve the Marathon UI.

       docker-compose up

##### 5. Build your very own Marathon UI

Running the following command will build the Marathon UI and watch for file changes to rerun the build.

       npm run serve

Open http://marathon.docker:8080 to enjoy your fresh build.

#### Contributing to this project

Please refer to the [CONTRIBUTING.md](https://github.com/mesosphere/marathon-ui/blob/master/CONTRIBUTING.md) file.
