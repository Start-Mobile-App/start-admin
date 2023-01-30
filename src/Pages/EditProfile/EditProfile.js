import { React, useState, useEffect } from 'react';
import { ProfileModalTemplate } from '../../Templates';
import { setNameUser } from '../../Redux/actions/authActions';
import {
  apiGetAccount,
  apiModifyAccount,
  apiGetAllAdministrator,
  apiAddAdmin,
  apiModifyCompany,
  apiDeleteAdmin,
  apiGetCompany
} from '../../Api/Account';
import { useSelector, useDispatch } from 'react-redux';
export default function EditProfile (props) {
  const userConnected = useSelector(state => state.auth);
  const [ContactInfo, setContactInfo] = useState('');
  const [info, setInfo] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [listUserAdmin, setListUserAdmin] = useState('');
  const [isInvalidMail, setInvalidMail] = useState(false);
  const [validateName, setValidateName] = useState({
    validate: false,
    error: null
  });
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [showModalInfoDroit, setShowModalInfoDroit] = useState(false);
  const [ModeContactInfo, onClickModierContactInfo] = useState('');
  const [ModeGestionDroit, onClickModeGestionDroitInfo] = useState('');
  const [emailAdmin, setEmailAdmin] = useState('');
  const [isInvalidMailAdmin, setInvalidMailAdmin] = useState(false);
  const [Selected, setSelected] = useState(0);
  const [textValueDelete, setTextValueDelete] = useState('');
  const [isInvalidMailCompany, setInvalidMailCompany] = useState(false);
  const [diasbledButtonDelete, setDisabledButtonDelete] = useState(true);
  const [validateNameDroit, setValidateNameDroit] = useState({
    validate: false,
    error: null
  });
  const [validateStreet, setValidateStreet] = useState({ error: null });
  const [validateMail, setValidateMail] = useState({ error: null });
  const [validateZipCode, setValidateZipCode] = useState({ error: null });
  const [validateDirection, setValidateDirection] = useState({ error: null });
  const [validateNation, setValidateNation] = useState({ error: null });

  const dispatch = useDispatch();
  useEffect(() => {
    getAccount();
    getAllAdministrator();
  }, []);
  function closeModalInfo () {
    setShowModalInfo(false);
    setValidateName({
      validate: false,
      error: null
    });
    setValidateZipCode({ error: null });
    setValidateStreet({ error: null });
    setValidateNation({ error: null });
    setValidateDirection({ error: null });
    setValidateMail({ error: null });
  }
  function closeModalInfoDroit () {
    setShowModalInfoDroit(false);
    setValidateNameDroit({
      validate: false,
      error: null
    });
  }

  async function getAccount () {
    const response = await apiGetAccount();
    if (response) {
      if (response.statusCode === 200) {
        response.data.password = '*****';
        setInfo(response.data);
      }
    }
    const result = await apiGetCompany();
    if (result) {
      if (result.statusCode === 200) {
        setContactInfo(result.data);
      }
    }
  }
  async function getAllAdministrator () {
    const response = await apiGetAllAdministrator();
    if (response && response.statusCode === 200) {
      setListUserAdmin(response.data);
    }
  }
  function onChangeNewPassword (value) {
    setNewPassword(value);
  }
  function onChangeConfirmPassword (value) {
    setConfirmPassword(value);
  }
  function onChangeEmailAdmin (value) {
    setEmailAdmin(value);
  }

  function onClickModierContact () {
    onClickModierContactInfo('Edit');
    setInfo({ ...info, password: '' });
  }
  function onClickModeGestionDroit () {
    onClickModeGestionDroitInfo('Edit');
    setValidateName({
      validate: false,
      error: null
    });
    setValidateZipCode({ error: null });
    setValidateStreet({ error: null });
    setValidateNation({ error: null });
    setValidateDirection({ error: null });
    setValidateMail({ error: null });
  }
  function onChangeInfo (key, value) {
    const attr = key;
    const obInfo = { ...info };
    obInfo[attr] = value;
    setInfo(obInfo);
  }
  function onChangeText (value) {
    setTextValueDelete(value);
  }
  function onChangeInfoCompany (key, value) {
    const attr = key;
    const obInfo = { ...ContactInfo };
    obInfo[attr] = value;
    setContactInfo(obInfo);
  }
  function validateSpace (value) {
    if (!value.replace(/\s/g, '').length) {
      return false;
    }
    return true;
  }
  async function updateCompany () {
    let error = false;
    const cond = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (cond.test(String(ContactInfo.mail).toLowerCase())) {
      const body = JSON.stringify({
        zipCode: ContactInfo.zipCode,
        direction: ContactInfo.direction,
        mail: ContactInfo.mail,
        nation: ContactInfo.nation,
        street: ContactInfo.street
      });
      if (validateSpace(ContactInfo.zipCode) === false) {
        error = true;
        setValidateZipCode({
          error: '* Validez ce champ'
        });
      }
      if (validateSpace(ContactInfo.direction) === false) {
        error = true;
        setValidateDirection({
          error: '* Validez ce champ'
        });
      }
      if (validateSpace(ContactInfo.mail) === false) {
        error = true;
        setValidateMail({
          validate: false,
          error: '* Validez ce champ'
        });
      }
      if (validateSpace(ContactInfo.nation) === false) {
        error = true;
        setValidateNation({
          validate: false,
          error: '* Validez ce champ'
        });
      }
      if (validateSpace(ContactInfo.street) === false) {
        error = true;
        setValidateStreet({
          validate: false,
          error: '* Validez ce champ'
        });
      }
      if (error === false) {
        const response = await apiModifyCompany(body);
        if (response.statusCode === 200) {
          setShowModalInfo(true);
          onClickModeGestionDroitInfo('');
          setValidateName({
            validate: false,
            error: null
          });
          setValidateZipCode({ error: null });
          setValidateStreet({ error: null });
          setValidateNation({ error: null });
          setValidateDirection({ error: null });
          setValidateMail({ error: null });
        } else if (response.statusCode === 400) {
          setValidateName({
            validate: true,
            error: response.message
          });
        }
      }
    } else {
      setInvalidMailCompany(true);
      setValidateName({
        validate: false,
        error: '*Champ invalide'
      });
    }
  }
  async function submitDataInfo () {
    if (
      newPassword.length >= 8 &&
      hasUperCase(newPassword) &&
      hasLowerCase(newPassword) &&
      hasNumber(newPassword) &&
      hasSpecialCaracter(newPassword)
    ) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          info.mail
        )
      ) {
        const body = JSON.stringify({
          lastName: info.lastName ? info.lastName : '',
          firstName: info.firstName ? info.firstName : '',
          mail: info.mail,
          tel: info.tel ? info.tel : '',
          newPassword: newPassword,
          oldPassword: info.password === '*****' ? '' : info.password,
          confirmPassword: confirmPassword
        });
        const response = await apiModifyAccount(body);
        if (response.statusCode === 200) {
          setShowModalInfo(true);
          onClickModierContactInfo('');
          setValidateName({
            validate: false,
            error: null
          });
          dispatch(setNameUser({ user: response.data }));
          setValidateName({
            validate: true,
            error: response.message
          });
        }
        if (response.statusCode === 400) {
          setValidateName({
            validate: false,
            error: response.message
          });
        }
      } else {
        setInvalidMail(true);
        setValidateName({
          validate: false,
          error: '*Champ invalide'
        });
      }
    } else {
      setValidateName({
        validate: false,
        error: 'password invalide'
      });
    }
  }
  async function addAdmin () {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailAdmin
      )
    ) {
      const body = JSON.stringify({
        mail: emailAdmin
      });
      const response = await apiAddAdmin(body);
      if (response.statusCode === 200) {
        setShowModalInfoDroit(true);
        onClickModeGestionDroitInfo('');
        getAllAdministrator();
      } else if (response.statusCode === 400) {
        if (response.message === 'Validation failed') {
          setInvalidMailAdmin(true);
          setValidateNameDroit({
            validate: false,
            error: '*Champ invalide'
          });
        } else {
          setValidateNameDroit({
            validate: false,
            error: response.message
          });
        }
      }
    } else {
      setInvalidMailAdmin(true);
      setValidateNameDroit({
        validate: false,
        error: '*Champ invalide'
      });
    }
  }
  function submitInfo () {
    submitDataInfo();
  }
  async function deleteAccount (id) {
    if (textValueDelete === 'Supprimer ces comptes') {
      setDisabledButtonDelete(false);
      const response = await apiDeleteAdmin(id);
      if (response.statusCode === 200) {
        if (
          userConnected != undefined &&
          userConnected.user != undefined &&
          userConnected.user.id != id
        ) {
          onClickModeGestionDroitInfo('');
          getAllAdministrator();
        } else {
          window.location = '/login';
        }
      }
    } else {
      setDisabledButtonDelete(true);
    }
  }

  function SelectCategory (name) {
    onClickModierContactInfo('');
    onClickModeGestionDroitInfo('');
    setSelected(name);
  }
  function hasUperCase (str) {
    return /[A-Z]/.test(str);
  }
  function hasLowerCase (str) {
    return /[a-z]/.test(str);
  }
  function hasSpecialCaracter (str) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str);
  }
  function hasNumber (str) {
    return /[0-9]/.test(str);
  }
  return (
    <ProfileModalTemplate
      ContactInfo={ContactInfo}
      Info={info}
      show={props.show}
      onHide={props.onHide}
      onClickModierContactInfo={onClickModierContact}
      ModeContactInfo={ModeContactInfo}
      onChangeInfo={onChangeInfo}
      Selected={Selected}
      SelectCategory={SelectCategory}
      ModeGestionDroit={ModeGestionDroit}
      onClickModeGestionDroit={onClickModeGestionDroit}
      user={info}
      listUserAdmin={listUserAdmin}
      onChangeNewPassword={onChangeNewPassword}
      onChangeConfirmPassword={onChangeConfirmPassword}
      submitInfo={submitInfo}
      showModalInfo={showModalInfo}
      closeModalInfo={closeModalInfo}
      validateName={validateName}
      isInvalidMail={isInvalidMail}
      onChangeEmailAdmin={onChangeEmailAdmin}
      isInvalidMailAdmin={isInvalidMailAdmin}
      addAdmin={addAdmin}
      validateNameDroit={validateNameDroit}
      showModalInfoDroit={showModalInfoDroit}
      closeModalInfoDroit={closeModalInfoDroit}
      updateCompany={updateCompany}
      isInvalidMailCompany={isInvalidMailCompany}
      onChangeInfoCompany={onChangeInfoCompany}
      onClickDeleteAccount={deleteAccount}
      onChangeText={onChangeText}
      diasbledButtonDelete={diasbledButtonDelete}
      validateDirection={validateDirection}
      validateNation={validateNation}
      validateStreet={validateStreet}
      validateMail={validateMail}
      validateZipCode={validateZipCode}
    />
  );
}
