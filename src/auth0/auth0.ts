import { createAuth0 } from "@auth0/auth0-vue";

// @TODO: Use environment variable instead of hardcoded values
export default createAuth0({
  domain: "dev-gavwsrjhlz7odc04.eu.auth0.com",
  clientId: "Tf5PulyWuJUnha4G6gSPn2osNkYvmS1U",
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
});
