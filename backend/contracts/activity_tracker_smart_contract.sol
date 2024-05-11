// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StartupActivityTracker {
    struct Activity {
        string title;
        string description;
        uint256 date;
        string activityType;
    }

    struct Startup {
        string name;
        address founder;
        uint256[] activityIndices;
    }

    mapping(address => Startup) startups;
    mapping(uint256 => Activity) activities;
    uint256 activityCounter;

    event StartupRegistered(address indexed founder, string name);
    event ActivityAdded(address indexed founder, string title, uint256 date, string activityType);

    function registerStartup(string memory name) public {
        require(startups[msg.sender].founder == address(0), "Startup already registered");
        startups[msg.sender] = Startup(name, msg.sender, new uint256[](0));
        emit StartupRegistered(msg.sender, name);
    }

    function addActivity(string memory title, string memory description, uint256 date, string memory activityType) public {
        Startup storage startup = startups[msg.sender];
        require(startup.founder != address(0), "Startup not registered");
        activities[activityCounter] = Activity(title, description, date, activityType);
        startup.activityIndices.push(activityCounter);
        emit ActivityAdded(msg.sender, title, date, activityType);
        activityCounter++;
    }

    function getStartup(address founder) public view returns (Startup memory) {
        return startups[founder];
    }

    function getActivity(uint256 index) public view returns (Activity memory) {
        return activities[index];
    }
}
