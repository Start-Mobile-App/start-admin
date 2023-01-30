import React from 'react';
import { Text, Button } from '../../Atoms';
export default function OrganismDroitAdmin (props) {
  return (
    <div>
      <div className={props.containerClassName} style={props.style}>
        <div>
          <div className='container-description-info'>
            <Text className='Title_OrganismDroitAdmin'>Prénom</Text>
            <Text className='Info_OrganismDroitAdmin'>
              {props.user.lastName}
            </Text>
          </div>
          <div className='container-description-info'>
            <Text className='Title_OrganismDroitAdmin'>nom</Text>
            <Text className='Info_OrganismDroitAdmin'>
              {props.user.firstName}
            </Text>
          </div>
          <div className='container-description-info'>
            <Text className='Title_OrganismDroitAdmin'>Rôle</Text>
            <Text className='Info_OrganismDroitAdmin'>{props.user.role}</Text>
          </div>
          <div className='container-description-info'>
            <Text className='Title_OrganismDroitAdmin'>EMAIL</Text>
            <Text className='Info_OrganismDroitAdmin'>{props.user.mail}</Text>
          </div>
          <div className='container-description-info'>
            <Text className='Title_OrganismDroitAdmin'>Téléphone</Text>
            <Text className='Info_OrganismDroitAdmin'>{props.user.tel}</Text>
          </div>
          <div className='container-btn-validation'>
            <Button
              className='btn-update-account'
              onClick={props.openModalDelete}
            >
              {props.nameButton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
