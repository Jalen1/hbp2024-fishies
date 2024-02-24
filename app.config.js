/**
 * To fetch the data stored in process.env and store them in Typescript variables that can be imported throughout the application
 * with import 'app.config.js'
 */
import 'dotenv/config';

export default {
    "expo": {
    extra: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    }
    }
    }
    