import React from 'react';
import BoardUsers from './BoardUsers';
import SidebarInfo from '../../../app/SidebarInfo/comp/SidebarInfo';

const BoardSidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <BoardUsers />
      <SidebarInfo list='React, React Hooks, Axios, JSONPlaceholder API' />
    </div>
  </div>
);

export default BoardSidebar;
