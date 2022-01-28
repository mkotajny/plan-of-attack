import { useState } from 'react';
import { TextField } from 'mui-rff';
import { TextFieldProps } from 'mui-rff';
import { get } from 'lodash';

const TextFieldPowered = (originalProps: TextFieldProps) => {
  const maxLength = get(originalProps, 'inputProps.maxLength');
  const [textLength, setTextLength] = useState(0);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextLength(event.target.value.length);
  };

  return (
    <TextField
      {...originalProps}
      onChangeCapture={onChangeHandler}
      helperText={maxLength ? `${textLength}/${maxLength}` : undefined}
    />
  );
};

export default TextFieldPowered;
