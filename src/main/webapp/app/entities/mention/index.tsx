import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Mention from './mention';
import MentionDetail from './mention-detail';
import MentionUpdate from './mention-update';
import MentionDeleteDialog from './mention-delete-dialog';

const MentionRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Mention />} />
    <Route path="new" element={<MentionUpdate />} />
    <Route path=":id">
      <Route index element={<MentionDetail />} />
      <Route path="edit" element={<MentionUpdate />} />
      <Route path="delete" element={<MentionDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default MentionRoutes;
