import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
    return (
      <div  >
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.V0zHBzuvrdVukfC8DmNNNAHaEK?w=272&h=180&c=7&r=0&o=7&pid=1.7&rm=3" />
      <Card.Body>
        <Card.Title>Macbook Air 2018</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>    
        <Button variant="primary">Xem chi tiết</Button>  <p>30.000đ</p>
      </Card.Body>
            </Card>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.V0zHBzuvrdVukfC8DmNNNAHaEK?w=272&h=180&c=7&r=0&o=7&pid=1.7&rm=3" />
      <Card.Body>
        <Card.Title>Macbook Air 2019</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Xem chi tiết</Button>  <p>30.000đ</p>

      </Card.Body>
    </Card>
      </div>

  );
}

export default BasicExample;    