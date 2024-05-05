import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Following from './following';
import FollowingDetail from './following-detail';
import FollowingUpdate from './following-update';
import FollowingDeleteDialog from './following-delete-dialog';

const FollowingRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Following />} />
    <Route path="new" element={<FollowingUpdate />} />
    <Route path=":id">
      <Route index element={<FollowingDetail />} />
      <Route path="edit" element={<FollowingUpdate />} />
      <Route path="delete" element={<FollowingDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FollowingRoutes;
