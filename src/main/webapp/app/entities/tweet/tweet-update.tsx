import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm, ValidatedBlobField } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserProfile } from 'app/shared/model/user-profile.model';
import { getEntities as getUserProfiles } from 'app/entities/user-profile/user-profile.reducer';
import { IHashTag } from 'app/shared/model/hash-tag.model';
import { getEntities as getHashTags } from 'app/entities/hash-tag/hash-tag.reducer';
import { IMention } from 'app/shared/model/mention.model';
import { getEntities as getMentions } from 'app/entities/mention/mention.reducer';
import { ITweet } from 'app/shared/model/tweet.model';
import { getEntity, updateEntity, createEntity, reset } from './tweet.reducer';

export const TweetUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const userProfiles = useAppSelector(state => state.userProfile.entities);
  const hashTags = useAppSelector(state => state.hashTag.entities);
  const mentions = useAppSelector(state => state.mention.entities);
  const tweetEntity = useAppSelector(state => state.tweet.entity);
  const loading = useAppSelector(state => state.tweet.loading);
  const updating = useAppSelector(state => state.tweet.updating);
  const updateSuccess = useAppSelector(state => state.tweet.updateSuccess);

  const handleClose = () => {
    navigate('/tweet');
  };

  useEffect(() => {
    if (!isNew) {
      dispatch(getEntity(id));
    }

    dispatch(getUserProfiles({}));
    dispatch(getHashTags({}));
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
    values.createdOn = convertDateTimeToServer(values.createdOn);

    const entity = {
      ...tweetEntity,
      ...values,
      userProfile: userProfiles.find(it => it.id.toString() === values.userProfile?.toString()),
      hashtags: mapIdList(values.hashtags),
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
      ? {
          createdOn: displayDefaultDateTime(),
        }
      : {
          ...tweetEntity,
          createdOn: convertDateTimeFromServer(tweetEntity.createdOn),
          userProfile: tweetEntity?.userProfile?.id,
          hashtags: tweetEntity?.hashtags?.map(e => e.id.toString()),
          mentions: tweetEntity?.mentions?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="twitterCloneApp.tweet.home.createOrEditLabel" data-cy="TweetCreateUpdateHeading">
            Create or edit a Tweet
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="tweet-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Content"
                id="tweet-content"
                name="content"
                data-cy="content"
                type="textarea"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedBlobField label="Picture" id="tweet-picture" name="picture" data-cy="picture" isImage accept="image/*" />
              <ValidatedField
                label="Created On"
                id="tweet-createdOn"
                name="createdOn"
                data-cy="createdOn"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Hashtag" id="tweet-hashtag" name="hashtag" data-cy="hashtag" type="text" />
              <ValidatedField id="tweet-userProfile" name="userProfile" data-cy="userProfile" label="User Profile" type="select">
                <option value="" key="0" />
                {userProfiles
                  ? userProfiles.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField label="Hashtag" id="tweet-hashtag" data-cy="hashtag" type="select" multiple name="hashtags">
                <option value="" key="0" />
                {hashTags
                  ? hashTags.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.description}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField label="Mention" id="tweet-mention" data-cy="mention" type="select" multiple name="mentions">
                <option value="" key="0" />
                {mentions
                  ? mentions.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.content}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/tweet" replace color="info">
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

export default TweetUpdate;
