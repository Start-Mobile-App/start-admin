import { Modal } from 'react-bootstrap';
import React, { useEffect, useState, useCallback } from 'react';
import { Button } from '../../Atoms';
import Cropper from 'react-easy-crop';
import getCroppedImg from './CropImage';

OrganismModalCropImage.defaultProps = {
  show: null,
  onHide: null,
  src: null,
  getCroppedImg: null
};
export default function OrganismModalCropImage (props) {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  const submit = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(src, croppedAreaPixels, 0);
      props.getCroppedImg(croppedImage);
      setCrop({ x: 0, y: 0 });
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);
  useEffect(() => {
    setSrc(props.src);
  }, [props.src]);
  return (
    <Modal
      show={props.show}
      centered
      onHide={() => props.onHide()}
      contentClassName={'small-modal-content'}
      dialogClassName={'modal-dialog'}
    >
      <div>
        {props.src && (
          <Cropper
            image={src}
            crop={crop}
            zoom={zoom}
            cropSize={{ width: 311, height: 215 }}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            classes={{ containerClassName: 'container-crop-img' }}
          />
        )}
      </div>
      <div className='container-btn-validation container-margin'>
        <Button className='btn-validation-modal' onClick={() => submit()}>
          {'Valider'}
        </Button>
      </div>
    </Modal>
  );
}
