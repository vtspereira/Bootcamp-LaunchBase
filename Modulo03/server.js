const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/62264055?s=460&u=7384969db151362a49e9ec4d1b93c65096624788&v=4",
        name: "Vitor Soares",
        role: "Student - Rocketseat Bootcamp LaunchBase",
        description: 'Student FullStack - <a href="https://github.com/vtspereira" target="blank">Vtspereira</a>',
        links: [
            { name: "Github", url: "https://github.com/vtspereira" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/vtspereira" },
        ]
    }


    return res.render("about", { about })
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos })
})

server.get("/video", function (req, res) {
    const id = req.query.id
    
    const video = videos.find(function (video){
        return video.id == id
    })

    if(!video){
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })

    res.send(id)
})

server.listen(5000, function () {
    console.log("server is running")
})
