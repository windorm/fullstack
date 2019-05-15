import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import GroupIcon from '@material-ui/icons/GroupAdd';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PoweroffIcon from '@material-ui/icons/PowerOff';
import ForumIcon from '@material-ui/icons/Forum';

import { Link } from 'react-router-dom';

export const FolderListItems = ({ user }) => (
  <div>
    <Link style={{ textDecoration: 'none' }} to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Accueil" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none' }} to="/messages">
      <ListItem button>
        <ListItemIcon>
          <ForumIcon />
        </ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItem>
    </Link>
    
    <Link style={{ textDecoration: 'none' }} to="/following">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Abonnements" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none' }} to="/discover">
      <ListItem button>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Découvrir" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'none' }} to={`/profile/${user.userId}`}>
      <ListItem button>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary="Profil" />
      </ListItem>
    </Link>
  </div>
);

export const OtherFolderListItems = (
  <div>
    <Link style={{ textDecoration: 'none' }} to="/settings">
      <ListItem button>
        <ListItemIcon>
          <PoweroffIcon />
        </ListItemIcon>
        <ListItemText primary="Déconnexion" />
      </ListItem>
    </Link>
  </div>
);

FolderListItems.propTypes = {
  user: PropTypes.object.isRequired
};
