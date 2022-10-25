const manager = mdata => {
    return `
    <div class="card" id="manager-card" style="width: 18rem;">
    <div class="card-body">
        <!-- Name of employee -->
        <h5 class="card-title">${mdata.getName()}</h5>
        <!-- Role of employee w/ icon if possible -->
        <p class="card-text">ROLE: ${mdata.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${mdata.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${mdata.getEmail()}">${mdata.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${mdata.getOfficeNumber()}</li>
    </ul>
</div>`
}

const engineer = edata => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <!-- Name of employee -->
        <h5 class="card-title">${edata.getName()}</h5>
        <!-- Role of employee w/ icon if possible -->
        <p class="card-text">ROLE: ${edata.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${edata.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${edata.getEmail()}">${edata.getEmail()}</a></li>
        <li class="list-group-item">Github: <a href="https://www.github.com/${edata.getGithub()}" class="card-link">https://www.github.com/${edata.getGithub()}</a></li>
    </ul>
</div>`
}

const intern = idata => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <!-- Name of employee -->
        <h5 class="card-title">${idata.getName()}</h5>
        <!-- Role of employee w/ icon if possible -->
        <p class="card-text">ROLE: ${idata.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${idata.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${idata.getEmail()}">${idata.getEmail()}</a></li>
        <li class="list-group-item">School: ${idata.getSchool()}</li>
    </ul>
</div>`
}

const allAnswers = allAnswersArray => {
    let html = ``;

    for (let i = 0; i < allAnswersArray.length; i++) {
        if (allAnswersArray[i].getRole() === "Manager") {
            html += manager(allAnswersArray[i])
        }
        if (allAnswersArray[i].getRole() === "Engineer") {
            html += engineer(allAnswersArray[i])
        }
        if (allAnswersArray[i].getRole() === "Intern") {
            html += intern(allAnswersArray[i])
        }
    } return html;
}

const template = answers => {
    return `
    <!-- this is a sample html file that will be generated when running index.js or npm start -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Meet Our Team!</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
    <!-- container where cards will be generated into -->
    <div class="container">
        <!-- card hmtl that will go into js and then be pulled here -->
        ${allAnswers(answers)}
    </div>
</body>

</html>`
}

module.exports = template;