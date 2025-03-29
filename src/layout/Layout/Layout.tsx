import React, { FC } from 'react';
import './Layout.scss';

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => (
  <div className="Layout" data-testid="Layout">
    Layout Component
  </div>
);

export default Layout;
