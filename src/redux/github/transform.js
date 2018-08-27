import { createTransform } from 'redux-persist';
import moment from 'moment';
import { initialState } from './reducer';

const GithubTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    inboundState = inboundState || {};

    // If given data does not have persistence configuration before
    if (!inboundState.__persisted_at) {
      inboundState = {
        ...inboundState,
        __persisted_at: moment()
      };
    }

    // Keep the first group only to avoid overflowing the storage
    if (inboundState.repositories && inboundState.repositories.length > 1) {
      inboundState = {
        ...inboundState,
        repositories: [
          inboundState.repositories[0]
        ]
      };
    }

    return inboundState;
  },
  // transform state being rehydrated
  (outboundState, key) => {
    outboundState = outboundState || {};

    if (outboundState.__persisted_at) {
      const startTime = moment(outboundState.__persisted_at);
      const endTime = moment();

      const duration = moment.duration(endTime.diff(startTime));
      const seconds = duration.asSeconds();

      // If the state is more than one hour old
      // reset it to initial state
      if (seconds > 3600) {
        return {
          ...initialState
        };
      }
    }

    return outboundState;
  },
  // define which reducers this transform gets called for.
  {
    whitelist: ['github']
  }
);

export default GithubTransform;
