// import React, { useState } from "react";
// import { Grid, Card, Image, Button } from "tailwindcss";

// const CardSection = ({cards}) => {
//     const [activeCard, setActiveCard] = useState(0);
//     return (
//         <Grid container spacing={4}>
//             {cards.map((card, index) => (
//                 <Card key={card.id}>
//                     <Image src={card.imageUrl} alt={card.title} />
//                     <h3>{card.title}</h3>
//                     <p>{card.description}</p>
//                     <Button
//                         onClick={() => setActiveCard(index)}
//                         className={activeCard === index ? "bg-blue-500 text-white" : "text-gray-600"}
//                     >
//                         Preview
//                     </Button>
//                 </Card>
//             ))}
//             {activeCard !== null && (
//                 <Card
//                     key={cards[activeCard].id}
//                     className="bg-white border border-gray-200 rounded-lg shadow"
//                 >
//                     <Image src={cards[activeCard].imageUrl} alt={cards[activeCard].title} />
//                     <h3>{cards[activeCard].title}</h3>
//                     <p>{cards[activeCard].description}</p>
//                 </Card>
//             )}
//         </Grid>
//     )
// }

// export default CardSection