import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import GroupIcon from '@mui/icons-material/Group';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import NavigationComponent from './NavigationComponent';
import "./style.sass"
import Live from '../../../../Live/Live';

const Navigation = (props) => {
  const array_navigation= [{icon: <HomeIcon />, link: "", text: "home"}, {icon: <LocalActivityIcon />, link: "activities", text: "activities"}, {icon: <GroupIcon />, link: "classes", text: "classes"}, {icon: <LiveTvIcon />}]
  return (
    <div className="menu-navigation">
      {
        array_navigation?.map((item, key)=> <NavigationComponent key={key} {...item} ></NavigationComponent>)
      }
    </div>
  )
}


export default Navigation