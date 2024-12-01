function ButtonClick() {
    let confirmed = confirm("Вы уверены что хотите продолжить?");
    if (confirmed) {
        document.getElementById("text").value = "Вы выбрали 'Да' ";
        document.getElementById("checkbox").checked = true;
    } else {
        document.getElementById("MyForm").reset();
    }
}