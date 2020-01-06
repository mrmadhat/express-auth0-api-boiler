# Express Auth0 API Boiler

A boilerplate API using [Express](https://expressjs.com/), [Auth0](https://auth0.com/) and [Mongoose](https://mongoosejs.com/)/[MongoDB](https://www.mongodb.com/).

## Setup

1. Download the repo
2. Setup credentials
3. Modify to your needs

### 1. Download the repo

1. This repo should be used as a starting point for your own API so first create your own git repository for your API. Then download this repo:

```
git clone https://github.com/mrmadhat/express-auth0-api-boiler your-api-directory
```

2. Set the origin to point at the repository you created in step one:

```
cd your-api-directory

git remote set-url origin <YOUR_REPO_URL>
```

### 2. Setup credentials

The API requires you to create a JSON file containing credentials for each node environment it will run in. There are two required configuration filed, `.credentials.development.json` and `.credentials.test.json`.

#### Contents of .credentials.\*.json

Each credentials file you create should contain the following:

- **auth**: Details about Auth0
- **mongo**: Details about yout Mongo database

#### .credentials.\*.json example

```
{
	"auth": {
		"domain": "<domain-identifier>.auth0.com", //required
		"audience": "audience name" // Audiences that can access the api
		"clientId": 'XXX', // *Required for testing
		"clientSecret": 'XXX' // *Required for testing
	},
	"mongo": {
		"connectionString": "mongo connection string"
	}
}
```

**\*Required for testing:** The test that are included in this repo utilise the `clientId` and `clientSecret` of your Auth0 api to generate and access token.

### 3. Modify to your needs

The setup is now complete and you can modify the API to suit your needs. To start developing simply run `npm run dev` and away you go.
