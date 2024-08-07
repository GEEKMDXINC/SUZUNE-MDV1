const fs = require('fs');
const { sessionId } = require('./config.js');

function decodeBase64SessionId(base64SessionId) {
    return Buffer.from(base64SessionId, 'base64').toString('utf-8');
}

function main() {
    try {
        const decodedSessionId = decodeBase64SessionId(sessionId);
        console.log('SESSION_ID décodé:', decodedSessionId);

        const filePath = './session/creds.json';
        
        await fs.writeFileSync(filePath, decodedSessionId, 'utf8');
    console.log('🚀 Bot has started successfully!');
    } catch (error) {
        console.error('Une erreur est survenue:', error);
    }
};

main();
