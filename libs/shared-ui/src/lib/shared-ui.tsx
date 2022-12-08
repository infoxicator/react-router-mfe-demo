import React, {FunctionComponent} from 'react';

type OutlineProps = {
  
  name: string;
  children: React.ReactNode;
  color?: string;
}

const Outline:FunctionComponent<OutlineProps> = ({ name, children, color }) => (
  <div style={{ position:'relative', border:`1px solid ${color}`, padding: '2rem' }}>
    <div style={{ position: 'absolute', top: '0', bottom: '0', right:'0' }}>
      <span style={{ backgroundColor: color, padding: '5px', color: 'white'}}>{name}</span>
    </div>
    {children}
  </div>
);

export default Outline;
