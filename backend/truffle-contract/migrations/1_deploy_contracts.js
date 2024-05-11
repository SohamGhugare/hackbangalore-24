var StartupActivityTracker = artifacts.require("StartupActivityTracker");
module.exports = function (deployer) {
  deployer.deploy(StartupActivityTracker, "startupactivitytracker");
  // Additional contracts can be deployed here
};
