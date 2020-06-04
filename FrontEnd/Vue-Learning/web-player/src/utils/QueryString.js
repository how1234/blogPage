let searchURL = function (keyword){
    return "https://autumnfish.cn/search?keywords=" + keyword
}

let songsURL = function (id){
    return "https://autumnfish.cn/song/url?id=" + id
}

let detailsURL = function (id){
    return "https://autumnfish.cn/song/detail?ids=" + id
}
let commentsURL = function(id){
    return "https://autumnfish.cn/comment/hot?type=0&id=" + id
}

export {
    searchURL,
    songsURL,
    detailsURL,
    commentsURL
}