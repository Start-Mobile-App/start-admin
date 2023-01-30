import React, { useState, useEffect } from 'react';
import {
  DroitAdminOrganism,
  ModalDescriptionWithInputOrganism,
  ModalInfoOrganism
} from '../../Organisms';
import { Text, Button } from '../../Atoms';
import { InputMolecule } from '../../Molecules';
export default function OrganismGestionDroit (props) {
  const [show, setShow] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [userId, setUserId] = useState(null);

  const [description, setDescription] = useState([
    'Un email de connexion sera envoyé à',
    'ce nouvel utilisateur'
  ]);
  const [descriptionDelete, setDescriptionDelete] = useState([
    'Souhaitez-vous vraiment supprimer définitivement ces comptes ? ',
    'Si oui, veuillez écrire “Supprimer ces comptes” dans le champ',
    'ci-dessous puis cliquer sur le bouton Suprimer.'
  ]);
  function close () {
    setShow(false);
    props.closeModalInfoDroit();
    setShowDeleteAccount(false);
  }
  function openModalDelete (id) {
    setShowDeleteAccount(true);
    setUserId(id);
  }
  function deleteAdmin () {
    props.onClickDeleteAccount(userId);
    setShowDeleteAccount(false);
  }
  function hideModal () {
    setShow(false);
    props.validateNameDroit.error = null;
  }
  return (
    <div>
      <ModalDescriptionWithInputOrganism
        onHide={hideModal}
        description={description}
        show={show}
        classNamedescription={'descriprtion-style-div label_add_admin'}
        label_add_admin
        inputs={
          <div className='container-input-with-button'>
            <InputMolecule
              className={'input-modal-add-admin'}
              as='input'
              placeholder='Email'
              onChange={e => props.onChangeEmailAdmin(e.target.value)}
            />
            {props.validateNameDroit &&
              props.isInvalidMailAdmin === true &&
              props.validateNameDroit.error == '*Champ invalide' && (
                <Text className='error_label label_account_error margin-top'>
                  {props.validateNameDroit.error}
                </Text>
              )}
            {props.validateNameDroit &&
              props.validateNameDroit.error == 'mail already exist' && (
                <Text className='error_label label_account_error margin-top'>
                  {'*Email existant'}
                </Text>
              )}
            <Button
              className={'btn_add_admin'}
              onClick={() => props.addAdmin()}
            >
              Ajouter
            </Button>
          </div>
        }
      />
      <DroitAdminOrganism
        user={props.user}
        nameButton='Supprimer mon compte'
        openModalDelete={() => openModalDelete(props.user._id)}
        containerClassName={'OrganismInfo_Container'}
      />
      {props.listUserAdmin &&
        props.listUserAdmin.map(list => (
          <DroitAdminOrganism
            user={list}
            nameButton='Supprimer ce compte'
            containerClassName={'OrganismInfo_Container container-space'}
            openModalDelete={() => openModalDelete(list._id)}
          />
        ))}
      <Text className='label_add_admin' onClick={() => setShow(true)}>
        + Ajouter un administrateur
      </Text>

      <ModalInfoOrganism
        description={"Un email est envoyé à l'adresse saisie."}
        closeModalInfo={close}
        sizeIcon='40px'
        classNamedescription={'info-description'}
        deleteIcon={true}
        colorIcon={'#00D98B'}
        iconName={'Success'}
        showModalInfo={props.showModalInfoDroit}
        marginBottonIcon={'28px'}
      />
      <ModalDescriptionWithInputOrganism
        onHide={() => setShowDeleteAccount(false)}
        description={descriptionDelete}
        show={showDeleteAccount}
        title={'Suppression de compte'}
        contentClassName={'modal-delete-account'}
        classNamedescription={'descriprtion-style-div label_add_admin'}
        label_add_admin
        inputs={
          <div className='container-input-delete-account'>
            <InputMolecule
              className={'input-modal-add-admin'}
              as='input'
              placeholder='Saisir le texte'
              onChange={e => props.onChangeText(e.target.value)}
            />
            {props.validateNameDroit &&
              props.isInvalidMailAdmin === true &&
              props.validateNameDroit.error == '*Champ invalide' && (
                <Text className='error_label label_account_error margin-top'>
                  {props.validateNameDroit.error}
                </Text>
              )}
            <Button
              className={'btn_add_admin'}
              diasbled={props.diasbledButtonDelete}
              onClick={deleteAdmin}
            >
              Supprimer
            </Button>
          </div>
        }
      />
    </div>
  );
}
