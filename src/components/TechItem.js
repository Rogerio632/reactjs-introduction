import React from 'react';
import propTypes from 'prop-types';

function TechItem({ tech, onDelete }){
  return (
    <li>{tech}
      <button onClick={onDelete} type="button">Deletar</button>
      </li>
  );
}

TechItem.defaultProps = {
  tech: 'Tech not located',
  onDelete: 'missing Delete method',
};

TechItem.propTypes = {
  tech: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};

export default TechItem;  