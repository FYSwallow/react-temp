import React from 'react';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import Container from './container';

export default function BasicLayout(props) {
  return (
    <div className="edit-warp">
      <DndProvider backend={HTML5Backend}>
        123
        <Container {...props} />
      </DndProvider>
    </div>
  );
}
