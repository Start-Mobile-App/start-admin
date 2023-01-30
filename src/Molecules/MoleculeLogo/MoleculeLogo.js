import React from 'react';
import { Img } from '../../Atoms';
import logoStart from '../../assets/logoStart.png';
MoleculeLogo.defaultProps = {
  img: logoStart,
  alt: 'Logo',
  width: '100px',
  height: '57px',
  className: 'img_logo_default_style'
};
export default function MoleculeLogo (props) {
  return (
    <div className='ForgetPassword-Logo'>
      <span className='Molecule-Logo'>
        <Img
          src={props.img}
          alt={props.alt}
          width={props.width}
          className={props.className}
          height={props.height}
        />
      </span>
    </div>
  );
}
