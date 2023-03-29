import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, form, InputGroup,} from 'react-bootstrap';
import styles from './SearchComponent.module.css';
import { RickContext } from '../../context/context';

const SearchComponent = () => {

  // const {searchData} = useContext (RickContext)

  // const handleChange = (event) =>{
  //   const {value} = event.target;
  //   setSearch(value);
  // }


return(
  <div className={styles.SearchComponent}>
    <Form>
      <div class="form-group">
        <input type="text" placeholder="Buscar personaje"/>
      </div>
    </Form>
  </div>
)
};

SearchComponent.propTypes = {};

SearchComponent.defaultProps = {};

export default SearchComponent;
