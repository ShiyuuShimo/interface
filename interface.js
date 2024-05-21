function addInputField(term) {
    const inputFields = document.getElementById('inputFields');
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.name = term;
    inputField.placeholder = term;
    inputFields.appendChild(inputField);
}

function removeInputField() {
    const inputFields = document.getElementById('inputFields');
    inputFields.removeChild(inputFields.lastChild);
}

function saveJSONLocally() {
    const inputFields = document.querySelectorAll('#inputFields input');
    const formData = {};

    // create tab indent JSON
    inputFields.forEach((input) => {
        formData[input.name] = input.value;
    });
    const jsonData = JSON.stringify(formData, null, '\t');
    document.getElementById('output').textContent = jsonData;

    // save jsonData as blob escape blowser
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // create dummy URL to download JSON
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meta.json' || 'data.json';

    a.click();

    // remove dummy URL
    URL.revokeObjectURL(url);
}
