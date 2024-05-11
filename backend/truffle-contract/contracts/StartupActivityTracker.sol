// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract StartupTracker {
    struct Activity {
        uint256 date;
        string description;
    }

    struct Startup {
        string name;
        uint256[] activityIndices;
        address founder;
    }

    mapping(address => Startup) startups;
    mapping(uint256 => Activity) activities;
    uint256 activityCounter;

    function registerStartup(string memory _name) public {
        require(startups[msg.sender].founder == address(0), "Startup already registered");
        startups[msg.sender] = Startup(_name, new uint256[](0), msg.sender);
    }

    function addActivity(string memory _description) public {
        Startup storage startup = startups[msg.sender];
        require(startup.founder != address(0), "Startup not registered");
        activities[activityCounter] = Activity(block.timestamp, _description);
        startup.activityIndices.push(activityCounter);
        activityCounter++;
    }

    function getStartup(address _founder) public view returns (Startup memory) {
        return startups[_founder];
    }
}
