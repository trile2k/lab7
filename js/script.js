function init(){
  // add your javascrip between these two lines of code
  function click_alert() {
    // Get user input.
    var user_input = document.getElementById("entryinput").value;
    // Get my name from h2 center class.
    var name =  document.querySelector("h2.center").innerHTML;
    // Put the message together for alert.
    var msg = name + ": " + user_input;
    alert(msg); // Show alert box pops up.
    // Overwrite h2 textoutput content with user's input
    document.getElementById("textoutput").innerHTML = user_input;
  }

  // Get element with ID attribute "entrybutton".
  var alert_me = document.getElementById('entrybutton');
  // Call click_alert function when user clicks Alert Me button.
  alert_me.addEventListener('click', click_alert);
}

// Load init function.
window.addEventListener('load', init);
