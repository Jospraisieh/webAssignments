// Function to validate the form
function validateForm() {
    // Get the value of the 'name' input field
    let name = document.forms["myForm"]["fname"].value;
    
    // Check if the 'name' field is empty
    if (name == "") {
      alert("Name must be filled out");
      return false; // Prevent the form from being submitted
    }
    
    // Add more validation checks as needed
  }
  
  // Example HTML form with validation on submit
  // The 'onsubmit' event calls the 'validateForm' function
  <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
    Name: <input type="text" name="fname">
    <input type="submit" value="Submit">
  </form>
  