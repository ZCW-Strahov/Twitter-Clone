import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import HashTag from './hash-tag';
import HashTagDetail from './hash-tag-detail';
import HashTagUpdate from './hash-tag-update';
import HashTagDeleteDialog from './hash-tag-delete-dialog';

const HashTagRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<HashTag />} />
    <Route path="new" element={<HashTagUpdate />} />
    <Route path=":id">
      <Route index element={<HashTagDetail />} />
      <Route path="edit" element={<HashTagUpdate />} />
      <Route path="delete" element={<HashTagDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default HashTagRoutes;
