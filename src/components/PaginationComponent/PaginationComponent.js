import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './PaginationComponent.module.css';
import { RickContext } from '../../context/context';


const PaginationComponent = () => {

  const {onPrev, onNext, infoPage} = useContext (RickContext)

  const handlePrev = () => {
    onPrev()
  }

  const handleNext = () => {
    onNext()
  }

return(
  <div className={styles.PaginationComponent}>
    <nav>
      <ul className='pagination justify-content-center'>
        { infoPage.prev ? (
        <li className='page-item'>
          <button className='page-link' onClick={handlePrev}>Anterior</button>
        </li>
        ) : null}
        { infoPage.next ? (
        <li className='page-item'>
          <button className='page-link' onClick={handleNext}>Siguiente</button>
        </li>
        ) : null}
      </ul>
    </nav>
  </div>
)};

PaginationComponent.propTypes = {};

PaginationComponent.defaultProps = {};

export default PaginationComponent;
