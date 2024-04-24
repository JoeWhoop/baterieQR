document.getElementById("goButton").addEventListener("click", function () {
    var selectedMechanic = document.getElementById("mechanicDropdown").value;
    selectedMechanic = selectedMechanic.toUpperCase().replace(" ", "_");

    var baseRedirectURL = "https://web.miniextensions.com/jnXiLi9iClv53yJm94W8?prefill_Mechanic=" + selectedMechanic;

    window.location.href = baseRedirectURL;
});
