import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <>
      {[
        'success',
        'danger',
        'warning',
    
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} 
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;