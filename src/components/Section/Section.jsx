import PropTypes from 'prop-types';
import { Title, ContainerP } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <ContainerP>
      <Title>{title}</Title>
      {children}
    </ContainerP>
  );
};
Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
