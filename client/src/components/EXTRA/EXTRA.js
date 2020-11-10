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

function MyVerticallyCenteredModal(props) {

    const [items, setItems] = useState([])
    const [modalObj, setModalObj] = useState({

        course: 0,
        allergies: {gluten: false, nuts: false, eggs: false, pork: false, dairy: false, lily: false, shellfish: false, alcohol: false},
        extra_notes: "",
        label: ""
    })

    const plates = items.map(item => {
        return [item.item, item.price, item.ingredients, item._id];
    })
    const smallPlates = items.filter(item => {
        return item.section === "Small Plates"
    }).map(item => {
        return [item.item, item.price, item.ingredients, item._id];
    })

    const sharedPlates = items.filter(item => {
        return item.section === "Shared Plates"
    }).map(item => {
        return [item.item, item.price, item.ingredients, item._id];
    })
    const mainCourse = items.filter(item => {
        return item.section === "Main Course"
    }).map(item => {
        return [item.item, item.price, item.ingredients, item._id];
    })
 
    const dessert = items.map(item => {
        return [item.item, item.price, item.ingredients, item._id];
    })
    
    

    // Load all menu items and store them with setMenuObj
    useEffect(() => {
        loadItems()
    }, [])

    // Loads all menu items and sets the menu items
    function loadItems() {
        API.getMenus()
            .then(res =>
                setItems(res.data)
            )
            .catch(err => console.log(err));
    };

    const [orderObj, setOrderObj] = useState({})

    const [value, setValue] = React.useState(
        localStorage.getItem('TableNumber')
    );

    React.useEffect(() => {
        localStorage.setItem('TableNumber', value)
    }, [value]);

    const [labelValue, setLabelValue] = React.useState(
        localStorage.getItem('Label')
    );

    React.useEffect(() => {
        localStorage.setItem('Label', labelValue)
    }, [labelValue]);


    function handleInputChange(event) {
        const { name, value } = event.target;
        setModalObj({...modalObj, [name]: value})
      };

    function handleRadioBtn(event){
        const { name, value } = event.target;

        console.log(name)
        console.log(value)
        setModalObj({...modalObj, course: parseInt(value)})
    }
    
    function handleCheckbox(event){
        let checked = false;
        const { name, value } = event.target;
        console.log(name)
        console.log(value)
        console.log(modalObj.allergies[name])
       
        if(modalObj.allergies[name] === false){
            checked = true
        }
        
        setModalObj({...modalObj, allergies: {...modalObj.allergies, [name]: checked}})
    }

    // When the form is submitted, use the API.saveOrders method to save the guest data
    // Then reload order from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(value)
        console.log(labelValue)
        console.log(modalObj)
        console.log("this is MODAL")
        API.saveOrders(modalObj
            


            // table: value,
            // label: labelValue,
            // order: "chicken",
            // allergies: Array,
            // course: "1",
            // extra_notes: "diddlydoo"

        ).then(res => console.log(res.data))
        .catch(err => console.log(err));

    };


    const [menuItem, setMenuItem] = useState({});
    const { id, item, price } = useParams()
    useEffect(() => {
        API.getMenu(id, item, price)

            .then(res => setMenuItem(res.data))
            .catch(err => console.log(err));

    }, [])




    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    +Add Item
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h3>{}</h3>
                <br></br>
                <p>
                    {"Button clicked === id"}</p>

                <hr></hr>

                <p className="card-text"><small className="text-muted"><strong>Course Number (If Applicable):</strong></small></p>

                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="course" id="inlineRadio1" onChange={handleRadioBtn} value ={1}  />
                        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="course" id="inlineRadio2" onChange={handleRadioBtn} value ={2}/>
                        <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="course" id="inlineRadio1" onChange={handleRadioBtn}  value ={3}/>
                        <label className="form-check-label" htmlFor="inlineRadio1">3</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="course" id="inlineRadio2" onChange={handleRadioBtn}  value ={4}/>
                        <label className="form-check-label" htmlFor="inlineRadio2">4</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="course" id="inlineRadio1" onChange={handleRadioBtn}  value ={5}/>
                        <label className="form-check-label" htmlFor="inlineRadio1">5</label>
                    </div>
                </div>

                <br />

                <p className="card-text"><small className="text-muted"><strong>Allergy Category (If Applicable):</strong></small></p>
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={handleCheckbox} variant="dark" name="gluten" defaultChecked={modalObj.allergies.gluten} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Gluten</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={handleCheckbox} name="dairy" defaultChecked={modalObj.allergies.dairy}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Dairy </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" onChange={handleCheckbox} name="shellfish" defaultChecked={modalObj.allergies.shellfish} />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Shellfish</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" onChange={handleCheckbox}name="nuts" defaultChecked={modalObj.allergies.nuts} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Nuts</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" onChange={handleCheckbox} name="egg" defaultChecked={modalObj.allergies.eggs}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Egg</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox6" onChange={handleCheckbox} name="lily" defaultChecked={modalObj.allergies.lily}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Lily</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox7" onChange={handleCheckbox} name="alcohol" defaultChecked={modalObj.allergies.alcohol}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Alcohol</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox8" onChange={handleCheckbox} name="pork" defaultChecked={modalObj.allergies.pork}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Pork</label>
                    </div>
                </div>

                <br />

                <p className="card-text"><small className="text-muted"><strong>Specific Allergy / Special Request:</strong></small></p>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        
                    </div>
                    <input 
                    onChange={handleInputChange}
                    name = "extra_notes"
                    placeholder="allergies/requests"
                    type="text" 
                    className="formControlSizing" 
                    placeholder="Allergy/Requests" 
                    // aria-label="Text input with checkbox"
                     />
                </div>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark"
                 className="modalButtons" 
                 onClick={props.onHide, handleFormSubmit}>
                +Add Item </Button>
            </Modal.Footer>
        </Modal>
    );
}
