const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const values = Array.from(checkboxes).map(checkbox => checkbox.value);

const shuffleValues = () => {
    values.sort(() => Math.random() - 0.5);
    checkboxes.forEach((checkbox, index) => checkbox.value = values[index]);
};

const changeValues = () => checkboxes.forEach((checkbox, index) => checkbox.value = "NewValue" + (index + 1));

const showSelectedValues = () => {
    const selectedValues = [...checkboxes].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    alert("Selected Values: " + (selectedValues.length > 0 ? selectedValues.join(', ') : "None"));
};