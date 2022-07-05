document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".subtitle").textContent = generatePersonRandom();
});
function generatePersonRandom() {
  let person = [
    {
      name: "maria",
      lastName: "rodriguez"
    },
    {
      name: "pedro",
      lastName: "perez"
    },
    {
      name: "juan jose",
      lastName: "ruiz"
    }
  ];
  let address = [
    {
      cp: 2080,
      dir: {
        city: "madrid",
        avenida: "alcalá"
      }
    },
    {
      cp: 2085,
      dir: {
        city: "barcelona",
        avenida: "rua"
      }
    },
    {
      cp: 2087,
      dir: {
        city: "murcia",
        avenida: "atocha"
      }
    }
  ];
  let job = [
    {
      company: "Google",
      position: {
        job: "fullstack developer",
        level: "junior"
      },
      antiquity: 5
    },
    {
      company: "Amazon",
      position: {
        job: "back-end developer ",
        level: "senior"
      },
      antiquity: 5
    },
    {
      company: "Google",
      position: {
        job: "front-end developer ",
        level: "senior"
      },
      antiquity: 5
    }
  ];

  let personRandom = Math.floor(Math.random() * person.length);
  let addressRandom = Math.floor(Math.random() * address.length);
  let jobRandom = Math.floor(Math.random() * job.length);

  let elements = ` ${person[personRandom].name} ${address[addressRandom].dir.city} 
  ${job[jobRandom].position.job}`;

  return elements;
}
