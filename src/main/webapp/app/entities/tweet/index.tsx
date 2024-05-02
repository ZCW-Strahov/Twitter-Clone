import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Tweet from './tweet';
import TweetDetail from './tweet-detail';
import TweetUpdate from './tweet-update';
import TweetDeleteDialog from './tweet-delete-dialog';

const TweetRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Tweet />} />
    <Route path="new" element={<TweetUpdate />} />
    <Route path=":id">
      <Route index element={<TweetDetail />} />
      <Route path="edit" element={<TweetUpdate />} />
      <Route path="delete" element={<TweetDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default TweetRoutes;
