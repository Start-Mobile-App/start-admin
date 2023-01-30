import { Img } from '../../Atoms';
import logoStart from '../../assets/logoStart.svg';
import miniLogoStart from '../../assets/miniLogoStart.svg';
export const fullLogo = (
  <div>
    <Img
      src={logoStart}
      width={'100px'}
      className={'FullLogo'}
      height={'57px'}
    />
  </div>
);
export const miniLogo = (
  <div>
    <Img
      src={miniLogoStart}
      width={'38px'}
      className={'MiniLogo'}
      height={'37px'}
    />
  </div>
);
