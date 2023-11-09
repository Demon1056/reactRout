import { Vortex } from 'react-loader-spinner';

export const Loader = (
  <Vortex
    visible={true}
    height="80"
    width="80"
    ariaLabel="vortex-loading"
    wrapperStyle={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    wrapperClass="vortex-wrapper"
    colors={['red', 'green', 'blue', 'yellow', 'orange', 'grey']}
  />
);
