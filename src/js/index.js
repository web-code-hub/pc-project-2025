const input = document.getElementById('J_input')
const keyword = document.getElementById('J_keyword')
console.log(input, keyword);


input.addEventListener('focus', () => {
    keyword.classList.add('show')
})
input.addEventListener('blur', () => {
    keyword.classList.remove('show')
})