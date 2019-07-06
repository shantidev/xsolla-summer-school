import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from './styles.module.scss';
import clearIcon from '../../icons/baseline-clear-24px.svg';

const TextInput = React.forwardRef((props, ref) => {
  const { value, name, invalid, label, onChange, onClear } = props;

  const [focus, setFocus] = useState({
    content: value.length > 0,
    default: false
  });

  function onFocus() {
    setFocus({
      content: true,
      default: true
    });
  }

  function onBlur() {
    setFocus({
      content: value.length > 0,
      default: false
    });
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} ${focus.default && styles.wrapper__focus} ${invalid.status && styles.wrapper__invalid}`}>
        <label className={`${styles.label} ${focus.content && styles.label__focus} ${invalid.status && styles.label__invalid}`}>
          {label}
        </label>
        <input
          className={styles.input}
          ref={ref}
          value={value}
          name={name}
          type="text"
          autoComplete="off"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {onClear &&
          <img
            className={`${styles.icon} ${focus.default && styles.icon__focus}`}
            src={clearIcon}
            alt="clear"
            onClick={onClear}
          />
        }
      </div>
      {invalid.status &&
        <div
          className={`${styles.error}`}>
          {invalid.description || `${name} is invalid, please correct`}
        </div>
      }
    </div>
  );
});

TextInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  required: PropTypes.bool,
  invalid: PropTypes.shape({
    status: PropTypes.bool,
    description: PropTypes.string,
  }),
};

TextInput.defaultProps = {
  required: false,
  invalid: {
    status: false,
    description: null,
  },
};

export default TextInput;
