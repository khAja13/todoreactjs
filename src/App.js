import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import { db } from "./firebase_config";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import ForTodos from "./ForTodos";
import Footer from "./Footer";

function App() {
	const [todoInput, setTodo] = useState("");
	const [allTodos, setAllTodos] = useState([]);

	useEffect(() => {
		getAllTodos();
	}, []);

	function getAllTodos() {
		db.collection("todo").onSnapshot(function (query) {
			setAllTodos(
				query.docs.map((doc) => ({
					id: doc.id,
					todo: doc.data().todo,
					inprogress: doc.data().inprogress,
				}))
			);
		});
	}

	const go = (e) => {
		e.preventDefault();
		setTodo(e.target.value);
		setTodo("");
		db.collection("todo").add({
			inprogress: true,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			todo: todoInput,
		});
	};

	return (
		<div className="App">
			<div className="top">
				<h3>khAjA ShAik's ToDo app 🔥🔥</h3>
				<form onSubmit={go}>
					<TextField
						style={{ width: "250px" }}
						id="standard-basic"
						className="forInput"
						label="Enter your todo"
						value={todoInput || ""}
						onChange={(e) => setTodo(e.target.value)}
					/>
				</form>
			</div>
			{/* {console.log(allTodos)} */}
			<div className="middle">
				{allTodos.map((singleTodo) => {
					return <ForTodos one={singleTodo} key={singleTodo.id} />;
				})}
			</div>
			<Footer />
		</div>
	);
}

export default App;
