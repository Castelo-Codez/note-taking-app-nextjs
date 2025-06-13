import {betterAuth} from "better-auth";
import {mongodbAdapter} from "better-auth/adapters/mongodb";
import {MongoClient} from "mongodb";
const mongoClient = new MongoClient(process.env.MONGO_DB_URL as string);
const client = mongoClient.db("note-taking-app-next");
export const auth = betterAuth({
    database: mongodbAdapter(client),
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },
    emailAndPassword: {
        enabled: true,
    },
});
