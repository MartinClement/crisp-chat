import { createAuth0 } from "@auth0/auth0-vue";

// @TODO: Use environment variable instead of hardcoded values
export default createAuth0({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
});
