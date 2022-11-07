import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';

const TotalCompleteItems = () => {

const completedTodos =useSelector((state)=> 
	{ 
		 return state.todos.filter((todo)=>  todo.completed===true )
	
	}
	
)

console.log("newwwwwwww",completedTodos)

	return( 
	<>
	
	 <h4 style={{padding:15}} className='mt-3'>Total Complete Items: {completedTodos.length} </h4>


<Card >

<h3 style={{padding:15}}  > Completed Items : </h3>
	{ completedTodos.map((obj)=>

   <h4  style={{padding:15, color:"#B39B27"}} className='mt-3'>{obj.title} </h4>

	
)
	}
	</Card>

	 </>

)};

export default TotalCompleteItems;
