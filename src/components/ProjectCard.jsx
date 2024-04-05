import Card from "react-bootstrap/Card";

const ProjectCard = ({ title, description, image, site, gitHub }) => {
  console.log(title, description, image, site, gitHub);

  return (
    <Card style={{ width: "25rem" }} className="">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="fs-6"> {description}</Card.Text>
      </Card.Body>

      <Card.Body>
        <a href={site} target="_blank" rel="noopener noreferrer" className="card-link mx-2">
          visiter le site
        </a>
       
        <a href={gitHub} target="_blank" rel="noopener noreferrer" className="card-link mx-2">
          lien gitHub
        </a>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
