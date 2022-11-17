

let team = [
    {name: 'Wayne Barnett', ruolo: 'Founder & CEO', foto: " wayne-barnett-founder-ceo.jpg" },
    {name: 'Angela Caroll', ruolo: 'Chief Editor',foto: "angela-caroll-chief-editor.jpg"},
    {name: 'Walter Gordon',ruolo: 'Office Manager',foto: "walter-gordon-office-manager.jpg"},
    {name: 'Angela Lopez',ruolo: 'Social Media Manager',foto: "angela-lopez-social-media-manager.jpg" },
    {name: 'Scott Estrada',ruolo: 'Developer',foto: " scott-estrada-developer.jpg" },
    {name: 'Barbara Ramos',ruolo: 'Graphic Designer',foto: "barbara-ramos-graphic-designer.jpg" }

    ];

    for (element of team) {
        console.log(`
    nome: ${element.name} ruolo: ${element.ruolo} foto: ${element.foto}`);

    document.getElementById("teams").innerHTML += `<p> nome: ${element.name} </p>
     <p>ruolo: ${element.ruolo}</p>
      <p class="mb-5"> foto: ${element.foto} </p>`

};
    
    