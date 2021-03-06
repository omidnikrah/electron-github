// @flow
import React from "react";
import { shell } from "electron";
import { Link } from 'react-router-dom';
import UserSidebarStyles from "./styles";
import linkIcon from "./assets/link.svg";
import bagIcon from "./assets/bag.svg";
import locationIcon from "./assets/location.svg";

export default ({ data, isFollowingsPage, isFollowersPage }: any) => (
  <UserSidebarStyles>
    <figure className="user-avatar">
      <img src={data.avatarUrl} alt={data.name} />
    </figure>
    <div className="user-details">
      <h1 className="user-name">{data.name}</h1>
      <span className="user-username">@{data.login}</span>
      {data.bio && <p className="user-bio">{data.bio}</p>}
    </div>
    <ul className="user-info">
      {data.location && (
        <li>
          <img src={locationIcon} alt="" />
          <span className="user-location">{data.location}</span>
        </li>
      )}
      {data.websiteUrl && (
        <li>
          <img src={linkIcon} alt="" />
          <a
            className="user-website"
            href={`https://${data.websiteUrl}`}
            onClick={e => {
              e.preventDefault();
              shell.openExternal(
                data.websiteUrl.includes("http")
                  ? data.websiteUrl
                  : `https://${data.websiteUrl}`
              );
            }}
          >
            WebSite
          </a>
        </li>
      )}
      {data.company && (
        <li>
          <img src={bagIcon} alt="" />
          <span className="user-company">{data.company}</span>
        </li>
      )}
    </ul>
    <div className="user-followers--wrapper">
      <Link className={isFollowersPage ? 'active' : ''} to={`/followers/${data.login}`}>
        <span>{data.followers.totalCount}</span>Followers
      </Link>
      <Link className={isFollowingsPage ? 'active' : ''} to={`/followings/${data.login}`}>
        <span>{data.following.totalCount}</span>Followings
      </Link>
    </div>
    <button className="back-btn" type="button" onClick={window.history.back}>
      Back
    </button>
  </UserSidebarStyles>
);
