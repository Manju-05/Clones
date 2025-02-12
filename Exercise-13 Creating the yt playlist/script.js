console.log("welcome to the js")
function thumbnailGen(thumbnail, timespan, title, chname, views, duration) {
    if(views<1000)    {
        views=views
    }
    else if(views>1000 && views<100000){
        views=views/1000 +"K"
    }
    else {
        views=views/100000 +"M"

    }

    let html = `
        <div class="image">
            <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBenW1M30gqWfrb8bLNydwUJiebEA" alt="Thumbnail">
         <span class="timespan">${timespan}</span>
        </div>
        
     <div class="text">
        <h2>${title}</h2>
        <p> ${chname} .${views} views .${duration}months ago</p>
    </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
thumbnailGen("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBenW1M30gqWfrb8bLNydwUJiebEA", "32:00", "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithManju", 90000, 2)
thumbnailGen("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBenW1M30gqWfrb8bLNydwUJiebEA", "32:00", "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithManju", 9000000, 2)
