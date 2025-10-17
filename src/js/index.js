function searchInput() {
    const input = document.getElementById('J_input')
    const keyword = document.getElementById('J_keyword')

    input.addEventListener('focus', () => {
        keyword.classList.add('show')
    })
    input.addEventListener('blur', () => {
        keyword.classList.remove('show')
    })
}
function cardItemActive(){
    const cardList = document.querySelectorAll('#J_card li')
        const contentList = document.querySelectorAll('#J_music-content .music-content-item')
        for (let i = 0; i < cardList.length; i++) {
            cardList[i].addEventListener('mouseover', function () {
                for (let j = 0; j < cardList.length; j++) {
                    cardList[j].classList.remove('active')
                    contentList[j].style.display = 'none'
                }
                contentList[i].style.display = 'block'
                cardList[i].classList.add('active')
            })  
        }      
        // cardList.forEach((item, index) => { 
        //     item.addEventListener('mouseenter', () => { 
        //         cardList.forEach((item, index) => { 
        //             item.classList.remove('active')
        //             contentList[index].style.display = 'none'
        //         })
        //         item.classList.add('active')
        //         contentList[index].style.display = 'block'
        //     })
        // }) 
}
searchInput()
cardItemActive()