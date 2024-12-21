import React from 'react'
import './AddChild.css'
const AddChild = () => {
  return (
    <div className="addChild">
    <form action="">
     <img src="../null.png" alt="profile-pic" className="profile-pic" />
     <div>
       <label htmlFor="name">Child's Name</label>
       <input
         type="text"
         name="name"
         placeholder="Enter your child's name"
         id="name"
       />
     </div>
     <div class="form-group">
  <label for="gender" class="form-label">Child's Gender</label>
  <div id="gender" class="d-flex align-items-center">
    <div class="form-check me-3">
      <input
        class="form-check-input"
        type="radio"
        name="gender"
        id="male"
        value="male"
        required
      />
      <label class="form-check-label" for="male">Male</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="gender"
        id="female"
        value="female"
      />
      <label class="form-check-label" for="female">Female</label>
    </div>
  </div>
</div>
     <div>
     <label for="date" class="form-label">Child's Birth Date</label>
<input
  type="date"
  name="date"
  id="date"
  class="form-control"
  placeholder="Enter your child's birth date"
/>

     </div>
     <button type="submit" className='AddChildBtn'>Add</button>
   </form>
   
      </div>
  )
}

export default AddChild