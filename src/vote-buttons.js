import React, { useState } from "react";
import firebase from './firebase'

const VoteButtons = ({ fuck }) => {
  const handleClick = async (type) => {
    // Do calculation to save the vote.
    let upVotesCount = fuck.upVotesCount;
    let downVotesCount = fuck.downVotesCount;
    let funnyvote = fuck.funnyvote;

    const date = new Date();

    if (type === "upvote") {
      upVotesCount = upVotesCount + 1;
    } else if (type === "downvote" ) {
      downVotesCount = downVotesCount + 1;
    } else {
      funnyvote = funnyvote + 1;
    }
  };

  return (
    <>
    <div className="interaction_buttons">

<div className="interaction_buttons_icons" style={{marginLeft:"5px"}}>
  <div>
    <button  onClick={() => handleClick("upvote")} className="interaction_buttons_icons_emoji">❤️</button>
  </div>
  <div>
   {fuck.upVotesCount}
  </div>
</div>
<div className="interaction_buttons_icons">
  <div>
   <button onClick={() => handleClick("downvote")} className="interaction_buttons_icons_emoji">🍅</button>
  </div>
  <div>
     {fuck.downVotesCount}
  </div>
 </div>
 <div className="interaction_buttons_icons"  style={{marginRight:"5px"}}>
   <div>
     <button onClick={() => handleClick("funnyvote")} className="interaction_buttons_icons_emoji">😂</button>
   </div>
   <div>
      {fuck.funnyvote}
   </div>
 </div>


 </div>
    </>
  );
};

export default VoteButtons;