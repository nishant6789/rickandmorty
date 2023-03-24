import { FilterBtn } from "../FilterBtn";

export const Gender = ({setGender, setPageNumber}) => {
    let gender = ['male', 'female', 'genderless', 'unknown'];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Gender</button>
            </h2>

            <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {gender.map((item,index) => (
                        <FilterBtn key={index} index={index} name="gender" task={setGender} setPageNumber={setPageNumber} input={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}