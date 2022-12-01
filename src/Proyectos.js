import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
//Datos importados
import Data from "./Data,"; 
import { useState } from 'react';

export const Proyectos = () => {
    
  const [query, setQuery] = useState ("")
    console.log(query)
  
  //const keys = ["category", "año"];
  
  //const search = (Data) => {
      //   return data.filter((item) =>
       // keys.some((key) => item[key].toLowerCase().includes(query))
      //  );
     //};

    return (
      <div>
            <h1>Proyectos Recientes</h1>
            <input className="mb-3" onChange={e => setQuery(e.target.value.toLocaleLowerCase())}/>
            <Container>
    <div className='row'>
    {Data.map ((data) => (
    <Card  style={{ width: '25rem', margin:'1rem' }}>
       <Card.Img  variant="top" style={{ padding:'1rem' }} src={data.img} />
         <Card.Body  key={data.id} >
           <Card.Title>{data.title}</Card.Title>
           <Card.Text> {data.desc}</Card.Text>
         </Card.Body >
          <ListGroup  className="list-group-flush">
          {data.category.map (category => 
             <ListGroup.Item>{category}</ListGroup.Item>
          )}
          </ListGroup>
          <div class="card-body">
          <a href={data.enlace} className="card-link">Ver Página</a>
          <a href={data.github} className="card-link">GitHUb</a>
          </div>
      </Card>
         ))}
   </div>
   </Container>
      </div>
     
    )
}
  
  export default Proyectos
