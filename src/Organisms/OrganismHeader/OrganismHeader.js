import React, { useState, useEffect } from 'react';
import { Text, Button } from '../../Atoms';
import { AvatarMolecule } from './../../Molecules';
import EditProfile from '../../Pages/EditProfile/EditProfile';
import { useSelector } from 'react-redux';
import { ModalDescriptionWithInputOrganism } from '../../Organisms';
OrganismHeader.defaultProps = {
  title: 'title'
};
export default function OrganismHeader (props) {
  const user = useSelector(state => state.auth);
  const [showModalEditProfil, setShowModalEditProfil] = useState(false);
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState([
    'Êtes-vous sûr de vouloir vous',
    'déconnecter ?'
  ]);
  function HideProfilModal () {
    setShowModalEditProfil(false);
  }
  function logOut () {
    window.location = '/login';
  }
  return (
    <div className='OrganismHeader-Container'>
      <Text className='OrganismHeader-Tittle'>{props.title}</Text>
      <AvatarMolecule
        iconDropDown={'SortTop'}
        classNameIcon={'IconAvatar'}
        avatarDescription={
          user && user.user && user.user.lastName ? user.user.lastName : ''
        }
        ContainerDropdownClassName={'Container_Molecule_Avatar'}
        ButtonContainerClassName={'Container_Molecule_Avatar-select'}
        classNameDropDown={'Container_Molecule_Avatar_list'}
        classNameDropDownInVisible={'Container_Molecule_Avatar_list_Invisible'}
        ListDropDown={[
          {
            className: 'item_dropdown_list',
            onClick: function () {
              setShowModalEditProfil(true);
            },
            item: 'Mon compte'
          },
          {
            className: 'item_dropdown_list',
            onClick: function () {
              setShow(true);
            },
            item: 'Déconnexion'
          }
        ]}
      />
      <EditProfile
        show={showModalEditProfil}
        onHide={() => setShowModalEditProfil(false)}
      />
      <ModalDescriptionWithInputOrganism
        onHide={() => setShow(false)}
        description={description}
        show={show}
        title={'Déconnexion'}
        classNamedescription={'descriprtion-style-div label_add_admin'}
        contentClassName={'modal-content-deconnexion'}
        label_add_admin
        inputs={
          <div className='container-deconnexion-with-button'>
            <Button className={'btn_add_admin'} onClick={logOut}>
              Déconnexion
            </Button>
          </div>
        }
      />
    </div>
  );
}
