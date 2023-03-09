
    const form = document.getElementById("github-form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
    event.target[0].value
    fetch(`https://api.github.com/search/users?q=octocat${event.target[0].value}`)
    .then(response => response.json())
    .then(response => {
        const userList = document.querySelector("#user-list")
        const repoList = document.getElementById("repos-list")
        userList.innerHTML = ""
        repoList.innerHTML = ""
        response.items.map(item => {
            const h2 = document.createElement("h2")
            h2.textContent = item.login
            h2.addEventListener("click", e => showuserRepos(item.login , e))
            const img = document.createElement("img")
            img.src = item.avatar_url
            const li = document.createElement("li")
li.append(h2, img)
userList.append(li)

})


})
form.reset()
})
    

function showuserRepos(username , e) {
    e.preventDefault()
    fetch(`https://api.github.com/search/users/${username}/repos`)
    .then(response => response.json())
    .then(response => response.map(repo => {
        h1.textContent = repo.name
        const li = document.createElement("li")
        const h1 = document.createElement("h1")
        li.append(h1)
        repoList.append(li)
    })

    )}

