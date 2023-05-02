import { Card } from "react-bootstrap";
import careers from "./data";
import image from "../../images/tech.jpg"

// function createCard(career) {
//     return (
//         <Card
//             key={career.id}
//             img={image}
//             title={career.title}
//             details={career.details}
//             location={career.location}
//         />
//     )
// }

export default function Careers(career) {
    return (
        <div className="careers">
            {careers.map((career) => {
                return (
                    <div key={career.id}>
                <Card className="mb-3" style={{ color: "#000" }}>
                <Card.Img src={image}/>
                <Card.Body>
                    <Card.Title>
                        {career.title}
                    </Card.Title>
                    <Card.Text>Requirements: {career.details}</Card.Text>
                    <Card.Text>Location: {career.location}</Card.Text>
                </Card.Body>
            </Card>
            </div>
            )
            })}

        </div>
    );
}
