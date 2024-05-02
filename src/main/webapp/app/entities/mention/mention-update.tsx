import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm, ValidatedBlobField } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITweet } from 'app/shared/model/tweet.model';
import { getEntities as getTweets } from 'app/entities/tweet/tweet.reducer';
import { IHashTag } from 'app/shared/model/hash-tag.model';
import { getEntities as getHashTags } from 'app/entities/hash-tag/hash-tag.reducer';
import { IMention } from 'app/shared/model/mention.model';
import { getEntity, updateEntity, createEntity, reset } from './mention.reducer';

export const MentionUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const tweets = useAppSelector(state => state.tweet.entities);
  const hashTags = useAppSelector(state => state.hashTag.entities);
  const mentionEntity = useAppSelector(state => state.mention.entity);
  const loading = useAppSelector(state => state.mention.loading);
  const updating = useAppSelector(state => state.mention.updating);
  const updateSuccess = useAppSelector(state => state.mention.updateSuccess);

  const handleClose = () => {
    navigate('/mention');
  };

  useEffect(() => {
    if (!isNew) {
      dispatch(getEntity(id));
    }

    dispatch(getTweets({}));
    dispatch(getHashTags({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  // eslint-disable-next-line complexity
  const saveEntity = values => {
    if (values.id !== undefined && typeof values.id !== 'number') {
      values.id = Number(values.id);
    }

    const entity = {
      ...mentionEntity,
      ...values,
      tweets: mapIdList(values.tweets),
      hashtags: mapIdList(values.hashtags),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...mentionEntity,
          tweets: mentionEntity?.tweets?.map(e => e.id.toString()),
          hashtags: mentionEntity?.hashtags?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="twitterCloneApp.mention.home.createOrEditLabel" data-cy="MentionCreateUpdateHeading">
            Create or edit a Mention
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="mention-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Content" id="mention-content" name="content" data-cy="content" type="textarea" />
              <ValidatedBlobField label="Picture" id="mention-picture" name="picture" data-cy="picture" isImage accept="image/*" />
              <ValidatedField label="Tweet" id="mention-tweet" data-cy="tweet" type="select" multiple name="tweets">
                <option value="" key="0" />
                {tweets
                  ? tweets.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.content}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField label="Hashtag" id="mention-hashtag" data-cy="hashtag" type="select" multiple name="hashtags">
                <option value="" key="0" />
                {hashTags
                  ? hashTags.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/mention" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default MentionUpdate;
