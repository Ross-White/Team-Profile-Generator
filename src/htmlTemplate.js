// // const cardHTML = require('lib/engineer.js', 'lib/intern.js', 'lib/manager.js');

// function renderHTML() {
//     const cardHTML = [];
//     cardHTML.push(teamMembers
//         .filter(teamMember => teamMember.getRole() === 'Manager')
//         .map(manager => manager.createManagerCard()));
//     cardHTML.push(teamMembers
//         .filter(teamMember => teamMember.getRole() === 'Engineer')
//         .map(engineer => engineer.createEngineerCard()));
//     cardHTML.push(teamMembers
//         .filter(teamMember => teamMember.getRole() === 'Intern')
//         .map(intern => intern.createInternCard()));
//     return `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Team Generator</title>
//             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">    <link rel="stylesheet" href="styles.css">
//         </head>
//         <body>
//             <header class="jumbotron text-center">
//             <h1>Team Profiles</h1>
//             </header>
//             <main class="grid-container">
//                 <div class="col-md-6 col-lg-4">
//                     ${cardHTML.join('')}
//                 </div>
//             </main>
            
//         </body>
//         </html>`
//     };

// module.exports = renderHTML();