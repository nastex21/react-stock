import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, useMutation } from '@apollo/react-hooks';
import App from './App';
import apolloClient from './apolloClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { subscriptionMutation } from './queries';

const Wrapper = () => {
  /* some service worker logic - ignore for now */
    const [insertSubscription] = useMutation(subscriptionMutation);
    useEffect(() => {
      serviceWorker.register(insertSubscription);
    }, [insertSubscription])
    /* ignore the above snippet */
    return <App />;
  }
  
  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <Wrapper />
    </ApolloProvider>,
    document.getElementById('root')
  );