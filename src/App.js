import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Kachra Seth",
    image:
      "data:image/jpeg;base64,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",
    balance: 150,
  },
];

function Button({ onClickHandler, children }) {
  return (
    <button className="button" onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);

    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));

    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    //console.log(value);

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClickHandler={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}₹
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}₹
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClickHandler={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id: id,
    };

    //console.log(newFriend);
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌇Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) =>
          setBill(
            !isNaN(Number(e.target.value)) ? Number(e.target.value) : bill
          )
        }
      />

      <label>🧍 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
