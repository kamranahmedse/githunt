import { createTransform } from 'redux-persist';

const GithubTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    inboundState = inboundState || {};

    // Keep the first group only to avoid overflowing the storage
    if (inboundState.repositories && inboundState.repositories.length > 1) {
      inboundState = {
        ...inboundState,
        repositories: [
          inboundState.repositories[0]
        ]
      };
    }

    // Do not persist `processing` flag or `error` information,
    // as we want to start fresh on reload in such cases
    inboundState = {
      ...inboundState,
      processing: false,
      error: null
    };

    return inboundState;
  },
  // transform state being rehydrated
  (outboundState, key) => {
    return { ...outboundState };
  },
  // define which reducers this transform gets called for.
  {
    whitelist: ['github']
  }
);

export default GithubTransform;
