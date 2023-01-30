import React, { useState, useEffect, useRef } from 'react';

import { Text, Icon, Img } from '../../Atoms';
import Flamme from '../../assets/user.jpg';
import { ButtonDropDown } from '../../Molecules';
import dropDownIcon from '../../assets/icons/dropDownIcon.svg';

MoleculeAvatar.defaultProps = {
  onClick: null,
  onclickMonCompte: null,
  onclickDeconnexion: null,
  img: Flamme,
  iconDropDown: null,
  avatarDescription: 'admin',
  listDropDown: [],
  classNameContainer: 'OrganismHeader-Avatar-Container',
  classNameContainerImage: 'OrganismHeader-Avatar-Image-container',
  classNameImage: 'OrganismHeader-Avatar-Image',
  classNameContainerDescription: 'OrganismHeader-Avatar-Description-Container',
  classNameDescription: 'OrganismHeader-Avatar-Description',
  ContainerDropdownClassName: 'Container_Molecule_Avatar',
  classNameDropDown: 'Container_Molecule_Avatar_list',
  ButtonValue: '',
  ButtonValueClassName: 'Button_DropDown',
  sizeIcon: 14,
  classNameIcon: 'OrganismHeader-Avatar-Icon',
  classNameDropDownInVisible: 'Container_Molecule_Avatar_list_Invisible'
};
export default function MoleculeAvatar (props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [visibility, setVisibility] = useState(false);
  function useOutsideAlerter (ref) {
    useEffect(() => {
      function handleClickOutside (event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisibility(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }
  return (
    <div
      id='Container'
      className={props.classNameContainer}
      onClick={() => setVisibility(!visibility)}
      ref={wrapperRef}
    >
      <div className={props.classNameContainerImage}>
        <Img src={props.img} className={props.classNameImage} />
      </div>
      <div className={props.classNameContainerDescription}>
        <Text className={props.classNameDescription}>
          {props.avatarDescription}
        </Text>
        <ButtonDropDown
          ButtonValue={props.ButtonValue}
          ButtonContainerClassName={props.ButtonContainerClassName}
          classNameDropDown={
            visibility == true
              ? props.classNameDropDown
              : props.classNameDropDownInVisible
          }
          ListDropDown={props.ListDropDown}
          ContainerDropdownClassName={props.ContainerDropdownClassName}
          icon={
            <img className={props.classNameIcon} src={dropDownIcon}></img>
            // <Icon
            //   icon={props.iconDropDown}
            //   className={props.classNameIcon}
            //   size={'12px'}
            //   onClick={() => setVisibility(!visibility)}
            // />
          }
          positionLeft={true}
        />
      </div>
    </div>
  );
}
