import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './PaginationComponent.module.css';
import { RickContext } from '../../context/context';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";


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
  <h2>Rick and Morty Characters</h2>
    <nav>
      <ul className={styles.paginationCharacters}>
        { infoPage.prev ? (
        <li className={styles.arrowCharacters}>
          <p className='' onClick={handlePrev}><BsFillArrowLeftCircleFill /></p>
        </li>
        ) : null}
        { infoPage.next ? (
        <li className={styles.arrowCharacters}>
          <p className='arrowCharacters' onClick={handleNext}><BsFillArrowRightCircleFill/></p>
        </li>
        ) : null}
      </ul>
    </nav>
  </div>
)};

PaginationComponent.propTypes = {};

PaginationComponent.defaultProps = {};

export default PaginationComponent;
