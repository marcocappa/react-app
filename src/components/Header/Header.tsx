import React from 'react';
import Button from '../Button';
import { RESOURCES } from '../../utils/constants';

interface Props {
  onFetch: (resource: string) => void;
  resource: string;
}

function Header({ onFetch, resource }: Props): JSX.Element {
  return (
    <div>
      <Button
        onClick={() => {
          onFetch(RESOURCES.INSTALLED);
        }}
        data-testid="test-installed"
        isDisabled={RESOURCES.INSTALLED === resource}
        title={RESOURCES.INSTALLED}
      >
        Installed
      </Button>
      <Button
        onClick={() => {
          onFetch(RESOURCES.UNINSTALLED);
        }}
        data-testid="test-uninstalled"
        isDisabled={RESOURCES.UNINSTALLED === resource}
        title={RESOURCES.UNINSTALLED}
      >
        Uninstalled
      </Button>
    </div>
  );
}

export default Header;
