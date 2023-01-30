import React, { useEffect, useState } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter
} from 'react-pro-sidebar';
import { Icon } from '../../Atoms';
import { Link } from 'react-router-dom';
import { MENU } from './Menu';
import { fullLogo, miniLogo } from './Header';
import { Footer } from './Footer';
import { useDispatch } from 'react-redux';

function OrganismSideBar (props) {
  const [selectedPath, setSelectedPath] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const path = window.location.pathname;
    const aux = path.split('/');
    if (aux.length === 0) {
      setSelectedPath('/');
    } else {
      setSelectedPath(`/${aux[1].toLowerCase()}`);
    }
  });
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_SIDE_BAR', value: { open: open } });
  }, [open]);
  function creatMenuItems (array, Child) {
    const Items = [];
    array.map(object => {
      if (object.type === 'SubMenu') {
        Items.push(creatSubMenuItems(object, true));
      } else {
        Items.push(
          <div>
            {!Child ? (
              <div style={{ backgroundColor: '#ffffff' }}>
                <div
                  style={{
                    borderBottomRightRadius:
                      object.path.toLowerCase() === selectedPath ? '7px' : '0px'
                  }}
                  className='pro-sidebar-div-radius'
                ></div>
              </div>
            ) : null}
            <MenuItem
              icon={
                <Icon
                  icon={object.icon}
                  size='20px'
                  style={
                    object.path.toLowerCase() === selectedPath
                      ? { color: '#ff8577' }
                      : {}
                  }
                />
              }
              style={
                object.path.toLowerCase() === selectedPath
                  ? { backgroundColor: '#ffffff' }
                  : {}
              }
            >
              <Link
                to={object.path}
                style={
                  object.path.toLowerCase() === selectedPath
                    ? { color: '#ff8577' }
                    : {}
                }
                className={"side-bar-element"}
              >
                {object.name}
              </Link>
            </MenuItem>
            {!Child ? (
              <div style={{ backgroundColor: '#E5E5E5' }}>
                <div
                  style={{
                    borderTopRightRadius:
                      object.path.toLowerCase() === selectedPath ? '7px' : '0px'
                  }}
                  className='pro-sidebar-div-radius'
                ></div>
              </div>
            ) : null}
          </div>
        );
      }
    });
    return Items;
  }
  function creatSubMenuItems (object, Child) {
    return (
      <SubMenu
        title={object.name}
        icon={<Icon icon={object.icon} size='20px' />}
        style={
          object.path.toLowerCase() === selectedPath
            ? { backgroundColor: '#E5E5E5' }
            : {}
        }
      >
        {creatMenuItems(object.childrens, Child)}
      </SubMenu>
    );
  }
  return (
    <div className='Organism_SideBar'>
      <ProSidebar collapsed={open}>
        <SidebarHeader onClick={() => setOpen(!open)}>
          {open ? miniLogo : fullLogo}
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            {creatMenuItems(MENU, false).map(element => {
              return element;
            })}
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}
export default OrganismSideBar;
