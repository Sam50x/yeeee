const albumCover = 'cyan'
const secondAlbumCover = 'indigo'

const containers = document.querySelectorAll('.album-container')

for (let i = 0; i < containers.length; i++){
    if (i % 2 == 0){
        containers[i].style.backgroundColor = albumCover
        containers[i].style.borderColor = secondAlbumCover
    }
    else{
        containers[i].style.backgroundColor = secondAlbumCover
        containers[i].style.borderColor = albumCover
        containers[i].classList.add('inverted')
    }
}
