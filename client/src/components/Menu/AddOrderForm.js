import React from 'react'

export default function AddOrderForm() {
    return (
        <div>
            <div>AddOrderForm</div>



            <div>


                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="course" id="inlineRadio1" onChange={handleRadioBtn} value={1} />
                        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="course" id="inlineRadio2" onChange={handleRadioBtn} value={2} />
                        <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="course" id="inlineRadio1" onChange={handleRadioBtn} value={3} />
                        <label className="form-check-label" htmlFor="inlineRadio1">3</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="course" id="inlineRadio2" onChange={handleRadioBtn} value={4} />
                        <label className="form-check-label" htmlFor="inlineRadio2">4</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="course" id="inlineRadio1" onChange={handleRadioBtn} value={5} />
                        <label className="form-check-label" htmlFor="inlineRadio1">5</label>
                    </div>
                </div>

                <br />

                <p className="card-text"><small className="text-muted"><strong>Allergy Category (If Applicable):</strong></small></p>
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={handleCheckbox} variant="dark" name="gluten" value={"Gluten"} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Gluten</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={handleCheckbox} name="dairy" value={"Dairy"} />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Dairy </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" onChange={handleCheckbox} name="shellfish" value={"Shellfish"} />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Shellfish</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" onChange={handleCheckbox} name="nuts" value={"Nuts"} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Nuts</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" onChange={handleCheckbox} name="egg" value={"Egg"} />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Egg</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox6" onChange={handleCheckbox} name="lily" value={"Lily"} />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Lily</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox7" onChange={handleCheckbox} name="alcohol" value={"Alcohol"} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Alcohol</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox8" onChange={handleCheckbox} name="pork" value={"Pork"} />
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
                        name="extra_notes"
                        placeholder="allergies/requests"
                        type="text"
                        className="formControlSizing"
                        autocomplete="off"
                    // aria-label="Text input with checkbox"
                    />
                </div>




            </div>
        </div>
    )
}
