export const AddProducts = () =>{
    return(
        <div class="container">
        <h2>ADD PRODUCT!!!</h2>

        <div class="field">
        <label>Product Name:</label>
        <input type="text" name="name" required />
      </div>

      <div class="field">
        <label>Category:</label>
        <select name="category"  required>
          <option value="">Select Category</option>
          
         
        </select>
      </div>
        </div>
        
    ) 
};

