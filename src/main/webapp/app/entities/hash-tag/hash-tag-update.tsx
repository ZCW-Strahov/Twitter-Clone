import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITweet } from 'app/shared/model/tweet.model';
import { getEntities as getTweets } from 'app/entities/tweet/tweet.reducer';
import { IMention } from 'app/shared/model/mention.model';
import { getEntities as getMentions } from 'app/entities/mention/mention.reducer';
import { IHashTag } from 'app/shared/model/hash-tag.model';
import { getEntity, updateEntity, createEntity, reset } from './hash-tag.reducer';

export const HashTagUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const tweets = useAppSelector(state => state.tweet.entities);
  const mentions = useAppSelector(state => state.mention.entities);
  const hashTagEntity = useAppSelector(state => state.hashTag.entity);
  const loading = useAppSelector(state => state.hashTag.loading);
  const updating = useAppSelector(state => state.hashTag.updating);
  const updateSuccess = useAppSelector(state => state.hashTag.updateSuccess);

  const handleClose = () => {
    navigate('/hash-tag');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getTweets({}));
    dispatch(getMentions({}));
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
      ...hashTagEntity,
      ...values,
      tweets: mapIdList(values.tweets),
      mentions: mapIdList(values.mentions),
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
          ...hashTagEntity,
          tweets: hashTagEntity?.tweets?.map(e => e.id.toString()),
          mentions: hashTagEntity?.mentions?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="twitterCloneApp.hashTag.home.createOrEditLabel" data-cy="HashTagCreateUpdateHeading">
            Create or edit a Hash Tag
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="hash-tag-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Description" id="hash-tag-description" name="description" data-cy="description" type="text" />
              <ValidatedField label="Tweet" id="hash-tag-tweet" data-cy="tweet" type="select" multiple name="tweets">
                <option value="" key="0" />
                {tweets
                  ? tweets.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.content}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField label="Mention" id="hash-tag-mention" data-cy="mention" type="select" multiple name="mentions">
                <option value="" key="0" />
                {mentions
                  ? mentions.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/hash-tag" replace color="info">
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

export default HashTagUpdate;
