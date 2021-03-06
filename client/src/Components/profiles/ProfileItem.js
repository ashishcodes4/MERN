import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validations/is-empty';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className='card card-body bg-dark mb-3 text-white'>
        <div className="row">
          <div className="col-2">
            <img src={profile.user.avatar} alt="avatar" className="rounded-circle"/>
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.user.name}</h3>
            <p>{profile.status} {isEmpty(profile.company) ? null : <span>at {profile.company}</span>}</p>
            <Link to={`/profile/${profile.handle}`} className='btn btn-info'>
            View profile</Link>
          </div>
            <div className="col-md-4 skill d-none md-block ">
              <h4>Skill Sets</h4>
              <ul className="list-group">
                {profile.skills.slice(0,4).map((skill, index) => (
                  <li key={index} className="list-group-item bg-dark">
                    <i className="fa fa-check">
                      <span className="ml-2 text-capitalize">{skill}</span> 
                    </i>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileItem;
