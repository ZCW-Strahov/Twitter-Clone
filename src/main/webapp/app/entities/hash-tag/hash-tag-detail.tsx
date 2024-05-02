import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './hash-tag.reducer';

export const HashTagDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const hashTagEntity = useAppSelector(state => state.hashTag.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="hashTagDetailsHeading">Hash Tag</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{hashTagEntity.id}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{hashTagEntity.description}</dd>
          <dt>Tweet</dt>
          <dd>
            {hashTagEntity.tweets
              ? hashTagEntity.tweets.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.content}</a>
                    {hashTagEntity.tweets && i === hashTagEntity.tweets.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
          <dt>Mention</dt>
          <dd>
            {hashTagEntity.mentions
              ? hashTagEntity.mentions.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {hashTagEntity.mentions && i === hashTagEntity.mentions.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/hash-tag" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/hash-tag/${hashTagEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default HashTagDetail;
