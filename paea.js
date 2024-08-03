// Function to convert a scene object to its JSON representation
function sceneToJSON(scene) {
    // Convert the scene object to a JSON string
    return JSON.stringify(scene);
}

// Export the sceneToJSON function for use in other modules
//
// By assigning sceneToJSON to exports.sceneToJSON, we are making this function
// available for other files to import and use. This is part of the CommonJS module
// system in Node.js.
//
// Example:
// In another file, you can import this function using:
// const { sceneToJSON } = require('./path/to/this/file');
exports.sceneToJSON = sceneToJSON;
