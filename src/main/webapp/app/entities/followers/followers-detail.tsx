import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './followers.reducer';

export const FollowersDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const followersEntity = useAppSelector(state => state.followers.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="followersDetailsHeading">Followers</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{followersEntity.id}</dd>
          <dt>
            <span id="since">Since</span>
          </dt>
          <dd>{followersEntity.since ? <TextFormat value={followersEntity.since} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>Follower</dt>
          <dd>{followersEntity.follower ? followersEntity.follower.id : ''}</dd>
          <dt>User Profile</dt>
          <dd>{followersEntity.userProfile ? followersEntity.userProfile.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/followers" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/followers/${followersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default FollowersDetail;
