import MovieList from "../MovieList/MovieList";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import MovieDetails from "../MovieDetails/MovieDetails.jsx";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';


function AddMovie(props) {

    const dispatch = useDispatch();
    const [movie, setMovie] = useState('');



    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_MOVIE', payload: movie})    
        clearMovieFields();
    }
      // Clear fields of the form by reseting the user
      const clearMovieFields = () => {
        setMovie('');
    }


return (
<div>
    <h3>Add Movie</h3>
    <form onSubmit={handleSubmit}>
    <input onChange={(event) => setStudent(event.target.value)} 
            placeholder="GitHub username" 
            value={movie}
            />
    <input type="submit" value="Add Student" />
</form>

</div>

  )

}

export default AddMovie;



// import {useDispatch} from 'react-redux';
// /*
// YOU SHOULDNT NEED TO MODIFY ANYTHING IN THIS FILE
// */

// function StudentForm(props) {
//     const dispatch = useDispatch();
//     const [student, setStudent] = useState('');


//     // Called when the submit button is pressed
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         dispatch({type: 'ADD_STUDENT', payload: student})    
//         clearStudentFields();
//     }

//     // Clear fields of the form by reseting the user
//     const clearStudentFields = () => {
//         setStudent('');
//     }


//     return (
//         <form onSubmit={handleSubmit}>
//             <input onChange={(event) => setStudent(event.target.value)} 
//                     placeholder="GitHub username" 
//                     value={student}
//                     />
//             <input type="submit" value="Add Student" />
//         </form>
//     );
    
// }


// export default StudentForm;