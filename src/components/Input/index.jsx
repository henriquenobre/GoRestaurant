import { useState } from 'react';
import { Container } from './styles';

const Input = ({ name, icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Container 
    isFocused={isFocused} 
    >
      {Icon && <Icon size={20} />}

      <input
      onFocus={()=>setIsFocused(true)}
        {...rest}
      />
    </Container>
  );
};

export default Input;
