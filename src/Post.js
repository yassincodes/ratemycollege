import React from "react";
import VoteButtons from "./vote-buttons";
const Post = ({ fuck, q }) => {
  return (
    <div className="the_fucking_post">
    <div className="post">
      {fuck.saythefuck === "" || !fuck.saythefuck ? "" : <div>
      <p className="post_text">{fuck.saythefuck}</p>
      <VoteButtons fuck={fuck} q={q} />
      </div>}
     </div>
     <div className="post">
      {fuck.name === "" || fuck.roastthefuck === "" || !fuck.name || !fuck.roastthefuck ? "" :  <div className="post">
      <p className="the_name_post">{fuck.name}</p>
      <p>{fuck.roastthefuck}</p>
      <VoteButtons fuck={fuck} q={q} />
      </div>}
     </div>
     <div className="post">
      {fuck.answer === "" || !fuck.answer ? "" :  <div className="post">
      <p className="the_question_post">{fuck.question}</p>
      <p>{fuck.answer}</p>
      <VoteButtons fuck={fuck} q={q} className="the_bottom_thing" />
      </div>}
     </div>
    </div>
  );
};

export default Post;
