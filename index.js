console.log('🤖 Starting bot...'); // Message de démarrage du bot

const fs = require('fs');
const { join, dirname } = require('path');
const { fileURLToPath } = require('url');
const { Buffer } = require('buffer');

// Importer les configurations depuis config.js
const { sessionId } = require('./config.js'); // Assurez-vous que 'sessionId' est exporté correctement depuis config.js

// Function to decode a Base64 encoded session ID using UTF-8
function decodeBase64SessionId(base64SessionId) {
    return Buffer.from(base64SessionId, 'base64').toString('utf-8');
}

// Function to read from session/creds.json
function readCredJson(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log(`Error reading file ${filePath}: ${error.message}`);
        return null;
    }
}

// Function to write to session/creds.json
function writeCredJson(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`File ${filePath} updated successfully.`);
    } catch (error) {
        console.log(`Error writing to file ${filePath}: ${error.message}`);
    }
}

// Main function to handle session ID and creds.json
function main() {
    const decodedSessionId = decodeBase64SessionId(sessionId);
    console.log('Decoded Session ID:', decodedSessionId);

    const credsFilePath = './session/creds.json';
    
    // Read existing credentials data
    const credData = readCredJson(credsFilePath);
    if (!credData) {
        console.log('Failed to read credentials data.');
        return;
    }

    const newData = {
        sessionId: decodedSessionId,
        ...credData
    };

    writeCredJson(credsFilePath, newData);
    console.log('Updated Creds JSON:', newData);

    console.log('🚀 Bot has started successfully!'); // Message indiquant que le bot a démarré avec succès
}

// Call the main function
main();
