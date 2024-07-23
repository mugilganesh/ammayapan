function on_faq_expanded(faq_num) {
    var selected_faq = document.getElementById(`faq_${faq_num}`)
    var selected_btn = document.getElementById(`expand_btn_${faq_num}`)

    items = selected_faq.classList["value"].split(" ")

    console.log("selected_faq.classList")

    if (items.includes("faq_selected")) {
        selected_faq.classList.remove("faq_selected")
        selected_btn.innerHTML = '+'
    }
    else {
        selected_faq.classList.add("faq_selected")
        selected_btn.innerHTML = '-'
    }

    console.log(selected_faq.classList)
}