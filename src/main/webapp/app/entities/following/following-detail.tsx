import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './following.reducer';

export const FollowingDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const followingEntity = useAppSelector(state => state.following.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="followingDetailsHeading">Following</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{followingEntity.id}</dd>
          <dt>
            <span id="since">Since</span>
          </dt>
          <dd>{followingEntity.since ? <TextFormat value={followingEntity.since} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>Followed</dt>
          <dd>{followingEntity.followed ? followingEntity.followed.id : ''}</dd>
          <dt>User Profile</dt>
          <dd>{followingEntity.userProfile ? followingEntity.userProfile.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/following" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/following/${followingEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default FollowingDetail;
