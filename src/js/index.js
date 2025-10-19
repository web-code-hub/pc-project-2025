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
function cardItemActive() {
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

function videoPlay() {
    const videoList = document.querySelectorAll('.video-list li');
    const videoMask = document.querySelector('.video-mask');
    const video = document.querySelector('video');
    const videoButton = document.querySelector('.video-button');
    videoList.forEach(item => {
        item.addEventListener('click', () => {
            videoMask.style.display = 'block';
            video.src = item.dataset.videoUrl
            video.play()
        })
    })
    videoButton.addEventListener('click', () => {
        videoMask.style.display = 'none';
        video.pause()
    })
}
function backTop() {
    const backBtn = document.getElementById('J_back_top');
    document.addEventListener('scroll', function () {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
            backBtn.style.display = 'block';
        } else {
            backBtn.style.display = 'none';
        }
    });
    backBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}

searchInput()
cardItemActive()
videoPlay()
backTop()