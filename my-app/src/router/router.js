import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Index from './../common/home/home'

function AppRoute(){
    return(
        <Router>
            <div>
                <Route exact path='/' component={Index}/> 
                {/* <Route exact path='/about' component={About}/> 
                <Route exact path='/topics' component={Topics}/>  */}
            </div>
        </Router>
    );
}



// function About(){
//     return(
//         <div>
//             <h2>About</h2>
//         </div>
//     )
// }

// function Topics({match}){
//     return(
//        <div>
//            <h2>Topics</h2>
//            <ul>
//                <li>
//                    <Link to={`${match.url}/rendering`}>Rendering with</Link>
//                </li>
//                <li>
//                    <Link to={`${match.url}/components`}>Components</Link>
//                </li>
//                <li>
//                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//                 </li>
//            </ul>

//            <Route path={`${match.path}/:topicId`} component={Topic} />
//            <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//        </div> 
//     )
// }

// function Topic({ match }) {
//     return (
//       <div>
//         <h3>{match.params.topicId}</h3>
//       </div>
//     );
//   }

  export default AppRoute;