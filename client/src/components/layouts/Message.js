import { Alert } from 'react-bootstrap';

const Message = ({ variant, title, msg }) => (
  <Alert variant={variant}>
    <Alert.Heading>{title}</Alert.Heading>
    <p>{msg}</p>
  </Alert>
);

Message.defaultProps = {
  variant: 'danger',
  title: 'Error',
};

export default Message;
