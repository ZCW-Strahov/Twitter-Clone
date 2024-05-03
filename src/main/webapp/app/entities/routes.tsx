import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import UserProfile from './user-profile';
import Tweet from './tweet';
import HashTag from './hash-tag';
import Mention from './mention';
import Following from './following';
import Followers from './followers';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="user-profile/*" element={<UserProfile />} />
        <Route path="tweet/*" element={<Tweet />} />
        <Route path="hash-tag/*" element={<HashTag />} />
        <Route path="mention/*" element={<Mention />} />
        <Route path="following/*" element={<Following />} />
        <Route path="followers/*" element={<Followers />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
