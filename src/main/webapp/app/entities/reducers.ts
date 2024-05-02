import userProfile from 'app/entities/user-profile/user-profile.reducer';
import tweet from 'app/entities/tweet/tweet.reducer';
import hashTag from 'app/entities/hash-tag/hash-tag.reducer';
import mention from 'app/entities/mention/mention.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  userProfile,
  tweet,
  hashTag,
  mention,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
