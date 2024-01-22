import Card from "react-bootstrap/Card";

function FoodCard({ menu, img, price, description, href }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="oswald nb-color-accent-primary">
          {menu}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <a
          href={href}
          target="_blank"
          className="nb-bg-accent-primary text-decoration-none text-light px-4 py-2 border-0 rounded-3"
        >
          <i className="bi bi-cart"></i> {price}/porsi
        </a>
      </Card.Body>
    </Card>
  );
}

export default FoodCard;
