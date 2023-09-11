function main(input) {
    let users = []
    let article = {}
    for (const iterator of input) {
        if (iterator.split(" ")[0] === 'user') {
            users.push(iterator.split("user ")[1])
        }
        if (iterator.split(" ")[0] === 'article') {
            article[iterator.split("article ")[1]] = []
        }
        if (iterator.includes("posts on")) {
            if (users.includes(iterator.split(" posts on ")[0])) {
                if (article.hasOwnProperty(iterator.split(":")[0].split(" posts on ")[1])) {
                    let comment = iterator.split(":")[1]
                    while (comment.includes(",")) {
                        comment = comment.replace(",", ' -')
                    }
                    comment = `${iterator.split(" posts on ")[0]}:` + comment
                    article[iterator.split(":")[0].split(" posts on ")[1]].push(comment)
                }
            };
        }
    }
    let articleSorted = [...Object.entries(article)]
    articleSorted.sort((a, b) => {
        return b[1].length - a[1].length
    })
    for (const key in article) {
        article[key].sort((a, b) => {
            return a.split(":")[0].localeCompare(b.split(":")[0])
        })
    }
    for (const iterator of articleSorted) {
        console.log(`Comments on ${iterator[0]}`);
        article[iterator[0]].forEach(element => {
            console.log(`--- From user ${element.split(":")[0]}:${element.split(":")[1]}`);
        });
    }
    //console.log(articleSorted);
    //console.log(article);
    //console.log(users);
}