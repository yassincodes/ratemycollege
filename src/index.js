import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// first we should know that you clicked on change the fuck
// second we wii set a function if (user clicked on change the rating && share button ) then
// we will now delet that the user clicked on change the rating because we will use that info again and its mission is completed
// store prev rating in a state
/////// now if the user clicked on share and the info that he clicked on change the rating exists then
// change the rating
// send to database the new rating - the previous rating

///////////// how i will let users change the rating //////////////
// so let us put it more clear :
// if the user clicked on share and you have the info that he clicked on change the rating then
// delete that info first (so the process can be repeated again) 
// and send to database the new rating ( witch is stored in database ) - the previous rating (witch I will stored in a state)

////// How i will calculate the rating of every university //////
//every rating of a university should be stored in an array
// calculate the array and send the result to firebase with update
////// the formula to calculate the rating of any university 
/// (some of firstratings+ some of ratings -I will just map them-) / firstrating.length
//bug
// rated the fuck is showed when we do not rate first then refresh
//noyr
//change color when select the text
