import React from 'react';
import PropTypes from 'prop-types';
import { Form, form, InputGroup,} from 'react-bootstrap';
import styles from './SearchComponent.module.css';



const SearchComponent = () => (
  <div className={styles.SearchComponent}>
    <Form>
      <div class="form-group">
        <input type="text" placeholder="Buscar ..."/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </Form>
  </div>
);

SearchComponent.propTypes = {};

SearchComponent.defaultProps = {};

export default SearchComponent;
