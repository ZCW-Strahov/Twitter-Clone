import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './tweet.reducer';

export const TweetDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const tweetEntity = useAppSelector(state => state.tweet.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="tweetDetailsHeading">Tweet</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{tweetEntity.id}</dd>
          <dt>
            <span id="content">Content</span>
          </dt>
          <dd>{tweetEntity.content}</dd>
          <dt>
            <span id="picture">Picture</span>
          </dt>
          <dd>
            {tweetEntity.picture ? (
              <div>
                {tweetEntity.pictureContentType ? (
                  <a onClick={openFile(tweetEntity.pictureContentType, tweetEntity.picture)}>
                    <img src={`data:${tweetEntity.pictureContentType};base64,${tweetEntity.picture}`} style={{ maxHeight: '30px' }} />
                  </a>
                ) : null}
                <span>
                  {tweetEntity.pictureContentType}, {byteSize(tweetEntity.picture)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="createdOn">Created On</span>
          </dt>
          <dd>{tweetEntity.createdOn ? <TextFormat value={tweetEntity.createdOn} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="hashtag">Hashtag</span>
          </dt>
          <dd>{tweetEntity.hashtag}</dd>
          <dt>User Profile</dt>
          <dd>{tweetEntity.userProfile ? tweetEntity.userProfile.id : ''}</dd>
          <dt>Hashtag</dt>
          <dd>
            {tweetEntity.hashtags
              ? tweetEntity.hashtags.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {tweetEntity.hashtags && i === tweetEntity.hashtags.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
          <dt>Mention</dt>
          <dd>
            {tweetEntity.mentions
              ? tweetEntity.mentions.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.content}</a>
                    {tweetEntity.mentions && i === tweetEntity.mentions.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/tweet" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/tweet/${tweetEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TweetDetail;
