import React from 'react';
import useMedia from './Hooks/useMedia';

const ContainerSizes = () => {
  const [containerState, setContainerState] = React.useState({
    container_xl: '',
    container_l: '',
    container_m: '',
    container_s: '',
  });

  React.useEffect(() => {
    const containers = {
      container_xl: '1440px',
      container_l: '1140px',
      container_m: '960px',
      container_s: '540px',
    };

    setContainerState(containers);
  }, []);

  return {
    xlarge: useMedia(`(min-width: ${containerState.container_xl})`),
    large: useMedia(
      `(max-width: ${containerState.container_xl}) and (min-width: ${containerState.container_l})`
    ),
    medium: useMedia(
      `(max-width: ${containerState.container_l}) and (min-width: ${containerState.container_m})`
    ),
    small: useMedia(`(max-width: ${containerState.container_m})`),
    xsmall: useMedia(`(max-width: ${containerState.container_s})`),
  };
};

export default ContainerSizes;
