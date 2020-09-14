import React from 'react';
import Loader from '../loader/loader';

import { Drawer } from './loader-drawer.styles';

interface Props {
  visible: boolean;
}

const LoaderDrawer: React.FC<Props> = ({ visible, children }) => {
  return (
    <>
      {children}
      {visible && (
        <Drawer>
          <Loader />
        </Drawer>
      )}
    </>
  );
};

export default LoaderDrawer;
