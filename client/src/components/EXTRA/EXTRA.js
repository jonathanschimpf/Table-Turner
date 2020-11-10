// const [items, setItems] = useState([])


// Load all order items and store them with setOrderObj
// useEffect(() => {
//   loadItems()
// }, [])

// Loads all menu items and sets the menu items
// function loadItems() {
//   API.getOrders()
//     .then(res => 
//       setItems(res.data)
//     )
//     .catch(err => console.log(err));
// };

// Deletes a menu item from the database with a given id, then reloads menu items from the db

// function deleteItem(id) {
//   API.deleteOrders(id)
//     .then(res => loadItems())
//     .catch(err => console.log(err));
// }


// Handles updating component state when the user types into the input field
// function handleInputChange(event) {
//   const { name, value } = event.target;
//   setOrderObj({...orderObj, [name]: value})
// };
