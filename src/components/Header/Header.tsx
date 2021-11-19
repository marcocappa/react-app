import React from 'react';
import Button from '../Button';
import { RESOURCES } from '../../utils/constants';

interface Props {
  onFetch: (resource: string) => void;
}

function Header({ onFetch }: Props): JSX.Element {
  return (
    <div>
      <Button
        onClick={() => {
          onFetch(RESOURCES.INSTALLED);
        }}
        data-testid="test-installed"
      >
        Installed
      </Button>
      <Button
        onClick={() => {
          onFetch(RESOURCES.UNINSTALLED);
        }}
        data-testid="test-uninstalled"
      >
        Uninstalled
      </Button>
    </div>
  );
}

export default Header;
