import React, { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleClick = () => {
    const randomInt = getRandomInt(anecdotes.length);
    console.log(randomInt);
    setSelected(randomInt);
  };

  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const popularAnecdote = () => {
    let popular = 0;
    let index = 0;
    votes.forEach((element, i) => {
      if (element > popular) {
        popular = element;
        index = i;
      }
    });

    return index;
  };
  const i = popularAnecdote();
  console.log(i);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button text="next anecdote" handleClick={handleClick} />
      <Button text="vote" handleClick={handleVoteClick} />

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[i]}</p>
    </div>
  );
};

export default App;
