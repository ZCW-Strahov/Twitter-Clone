import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { openFile, byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './mention.reducer';

export const MentionDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const mentionEntity = useAppSelector(state => state.mention.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="mentionDetailsHeading">Mention</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{mentionEntity.id}</dd>
          <dt>
            <span id="content">Content</span>
          </dt>
          <dd>{mentionEntity.content}</dd>
          <dt>
            <span id="picture">Picture</span>
          </dt>
          <dd>
            {mentionEntity.picture ? (
              <div>
                {mentionEntity.pictureContentType ? (
                  <a onClick={openFile(mentionEntity.pictureContentType, mentionEntity.picture)}>
                    <img src={`data:${mentionEntity.pictureContentType};base64,${mentionEntity.picture}`} style={{ maxHeight: '30px' }} />
                  </a>
                ) : null}
                <span>
                  {mentionEntity.pictureContentType}, {byteSize(mentionEntity.picture)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>Tweet</dt>
          <dd>
            {mentionEntity.tweets
              ? mentionEntity.tweets.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.content}</a>
                    {mentionEntity.tweets && i === mentionEntity.tweets.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
          <dt>Hashtag</dt>
          <dd>
            {mentionEntity.hashtags
              ? mentionEntity.hashtags.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {mentionEntity.hashtags && i === mentionEntity.hashtags.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/mention" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/mention/${mentionEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default MentionDetail;
