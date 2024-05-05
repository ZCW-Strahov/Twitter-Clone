import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Followers from './followers';
import FollowersDetail from './followers-detail';
import FollowersUpdate from './followers-update';
import FollowersDeleteDialog from './followers-delete-dialog';

const FollowersRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Followers />} />
    <Route path="new" element={<FollowersUpdate />} />
    <Route path=":id">
      <Route index element={<FollowersDetail />} />
      <Route path="edit" element={<FollowersUpdate />} />
      <Route path="delete" element={<FollowersDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FollowersRoutes;
