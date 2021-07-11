import React, { useState, useEffect } from "react";
import firebase from './firebase'

const VoteButtons = ({ fuck, q}) => {
  const [isVoting, setVoting] = useState(false);
  const [votedPosts, setVotedPosts] = useState([]);
  const questions = ["sou2al r9am wahd", "isou2al ithani", "thalth sou2al", "hatha rab3 sou2al"]
  
  useEffect(() => {
    // Fetch the previously voted items from localStorage. See https://stackoverflow.com/a/52607524/1928724 on why we need "JSON.parse" and update the item on localStorage. Return "true" if the user has already voted the post.
    const votesFromLocalStorage = localStorage.getItem("votes") || [];
    let previousVotes = [];

    try {
      // Parse the value of the item from localStorage. If the value of the
      // items isn't an array, then JS will throw an error.
      previousVotes = JSON.parse(votesFromLocalStorage);
    } catch (error) {
      console.error(error);
    }

    setVotedPosts(previousVotes);
  }, []);

  const handleDisablingOfVoting = (postId) => {
    // This function is responsible for disabling the voting button after a
    // user has voted. Fetch the previously voted items from localStorage. See
    // https://stackoverflow.com/a/52607524/1928724 on why we need "JSON.parse"
    // and update the item on localStorage.
    const previousVotes = votedPosts;
    previousVotes.push(postId);

    setVotedPosts(previousVotes);

    // Update the voted items from localStorage. See https://stackoverflow.com/a/52607524/1928724 on why we need "JSON.stringify" and update the item on localStorage.
    localStorage.setItem("votes", JSON.stringify(votedPosts));
  };



  
  




  const handleClick = async (type) => {
    setVoting(true);
    // Do calculation to save the vote.
    let upVotesCount = fuck.upVotesCount;
    let downVotesCount = fuck.downVotesCount;
    let funnyvote = fuck.funnyvote;

    const date = new Date();


    if (type === "upvote") {
      upVotesCount = upVotesCount + 1;
    } else if (type === "downvote" ) {
      downVotesCount = downVotesCount + 1
    } else {
      funnyvote = funnyvote + 1;
    }
    
    
    // if the user clicked on the downvote button then change the color to red for 4 seconds
  
    // how to let the user add add a vote if only there is no vote yet?
    // if (upVotesCount === 0 && downVotesCount === 0) {
    //   upVotesCount = 1;
    // calculate the sum of all votes
    
    await firebase.database().ref(JSON.stringify(localStorage.getItem('data')).slice(0, JSON.stringify(localStorage.getItem('data')).length - 1).substring(1) + "/").child(fuck.id).set({
      saythefuck: fuck.saythefuck,
      question: questions[q],
      answer:fuck.answer,
      name: fuck.name,
      roastthefuck: fuck.roastthefuck,
      upVotesCount,
      downVotesCount,
      funnyvote,
      createdAt: date.toUTCString(),
      updatedAt: date.toUTCString()
  })
  handleDisablingOfVoting(fuck.id);

    setVoting(false);
  };
  const checkIfPostIsAlreadyVoted = () => {
    if (votedPosts.indexOf(fuck.id) > -1) {
      return true;
    } else {
      return false;
    }
  };
  return (
    (JSON.stringify(localStorage.getItem('lang')).slice(0, JSON.stringify(localStorage.getItem('lang')).length - 1).substring(1) == "false") ?
    


    <div>
    <div className="interaction_buttons">

<div className="interaction_buttons_icons" style={{marginLeft:"5px"}}>
<div>
   {fuck.upVotesCount}
  </div>
  <div>
    <button disabled={checkIfPostIsAlreadyVoted()} onClick={() => handleClick("upvote")} className="interaction_buttons_icons_emoji">❤️</button>
  </div>
  
</div>
<div className="interaction_buttons_icons">

  <div>
     {fuck.downVotesCount}
  </div>
  <div>
   <button disabled={checkIfPostIsAlreadyVoted()} onClick={() => handleClick("downvote")} className="interaction_buttons_icons_emoji">🍅</button>
  </div>
 </div>
 <div className="interaction_buttons_icons"  style={{marginRight:"5px"}}>
 <div>
      {fuck.funnyvote}
   </div>
   <div>
     <button disabled={checkIfPostIsAlreadyVoted()} onClick={() => handleClick("funnyvote")} className="interaction_buttons_icons_emoji">😂</button>
   </div>
 </div>


 </div>
    </div>

      :
      
      <div>
      <div className="interaction_buttons">
  
  <div className="interaction_buttons_icons" style={{marginLeft:"5px"}}>
    <div>
      <button disabled={checkIfPostIsAlreadyVoted()} onClick={() => handleClick("upvote")} className="interaction_buttons_icons_emoji">❤️</button>
    </div>
    <div>
     {fuck.upVotesCount}
    </div>
  </div>
  <div className="interaction_buttons_icons">
    <div>
     <button disabled={checkIfPostIsAlreadyVoted()} onClick={() => handleClick("downvote")} className="interaction_buttons_icons_emoji">🍅</button>
    </div>
    <div>
       {fuck.downVotesCount}
    </div>
   </div>
   <div className="interaction_buttons_icons"  style={{marginRight:"5px"}}>
     <div>
       <button disabled={checkIfPostIsAlreadyVoted()} onClick={() => handleClick("funnyvote")} className="interaction_buttons_icons_emoji">😂</button>
     </div>
     <div>
        {fuck.funnyvote}
     </div>
   </div>
  
  
   </div>
      </div>
    
      
      
   
  );
}

export default VoteButtons;
