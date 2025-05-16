import { Card } from "react-bootstrap";

const MyCardItem = function (props) {
  return (
    <>
      <Card className="rounded-0 border-0 ">
        <Card.Img variant="top" src={props.img} style={{ height: "210px", width: "100%" }} className="background-cover rounded-0" />
      </Card>
    </>
  );
};

export default MyCardItem;
