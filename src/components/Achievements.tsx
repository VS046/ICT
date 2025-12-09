interface PlayerProps {
  name: string;
  points: string[];
}

const PlayerCard = ({ name, points }: PlayerProps) => (
  <div className="bg-blue-100 p-4 rounded-lg shadow">
    <h2 className="text-xl text-black-900  mb-3 text-center">{name}</h2>
    <ul className="list-disc ml-5 space-y-2">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
);

const Achievements = () => {
  const players = [
    {
      name: "Virat Kohli",
      points: [
        "Fastest to 8,000–11,000 ODI runs",
        "ICC Cricketer of the Year 2017, 2018",
        "Most centuries in run-chases in ODIs",
        "First player to score 20,000 international runs in a decade",
        "Most double centuries as a captain in Tests",
        "Most runs in a single IPL season (973 runs in 2016)",
        "Most ODI centuries in chases (14)",
        "Most ODI centuries in one-day internationals (51)",
      ],
    },
    {
      name: "Rohit Sharma",
      points: [
        "Only player with 3 ODI double centuries",
        "Highest ODI score (264*)",
        "Most T20I centuries (4)",
        "Most centuries in a single World Cup (5 in 2019)",
        "Won five IPL titles as Mumbai Indians captain",
        "Fastest to 2000 runs in T20Is",
        "Most sixes in a single IPL season (45 in 2013)",
        "First player to score 150+ in three consecutive ODIs",
        
        
      ],
    },
    {name : "MS Dhoni",
    points: [
      "Only captain to win all ICC trophies",
      "Most wins as captain in ODIs (110)",
      "Fastest wicket-keeper to 400 dismissals in ODIs",
      "Most stumpings in international cricket (195)",
      "Highest score by a wicket-keeper in ODIs (183*)",
      "Most T20I wins as captain (41)",
      "Most sixes by an Indian wicket-keeper in ODIs (213)",
      " 0.08 seconds by MS Dhoni against Keemo Paul of the West Indies in an ODI match in 2018"
    ]},
    {
      name: "Jasprit Bumrah",
      points: [
        "Fastest Indian to 100 ODI wickets",
        "Most wickets in debut World Cup match (6)",
        "First bowler to take 5 wickets in a T20 World Cup match",
        "Best bowling figures by an Indian in T20Is (4/14)",
        "Fastest to 50 wickets in T20Is for India",
        "Most wickets by an Indian bowler in IPL history",
        "First Indian bowler to take a hat-trick in IPL",
        "Only bowler to take a five-wicket haul in all three formats within a year"
     ]},
     {
      name: "Hardik Pandya",
      points: [
        "First Indian to score a century and take a five-wicket haul in ODIs",
        "Fastest Indian all-rounder to 1000 runs and 100 wickets in ODIs",
        "Most sixes in a single IPL season by an Indian all-rounder",
        "Only Indian all-rounder to score a century in T20Is",
        "Best bowling figures by an Indian all-rounder in T20Is (4/17)",
        "Fastest to 50 wickets in IPL history among all-rounders",
        "First Indian all-rounder to take a hat-trick in IPL",
        "Highest strike rate in T20Is among Indian all-rounders (min 250 runs)"

      ]},
      {
      name: "KL Rahul",
      points: [
        "Fastest Indian to 2000 T20I runs",
        "Most runs in a single IPL season by an Indian (670 in 2020)",  
        "First Indian to score centuries in all three formats in the same year",
        "Most fifties in T20Is for India (20)",
        "Highest individual score by an Indian in T20Is (110*)",
        "Fastest to 1000 runs in IPL history among Indian batsmen",
        "Only Indian batsman to score a century in IPL final",
        "Most sixes by an Indian batsman in T20Is (85)",
        
      ]},
      {
      name: "Shikhar Dhawan",
      points:[
        "Most runs by an Indian in ICC Champions Trophy history",
        "First Indian to score back-to-back centuries in ICC Champions Trophy",
        "Most fifties in ICC Champions Trophy (5)",
        "Fastest Indian to 5000 ODI runs",
        "Highest partnership for any wicket by an Indian in ODIs (248 with Virat Kohli)",
        "Most runs in a single IPL season by an Indian opener (618 in 2013)",
        "First Indian to score a century in all three formats of international cricket",
        "Most sixes by an Indian opener in ODIs (120)",

      ]},
      {
        name: "Rising stars of Indian Cricket",
        points: [
          "Yashasvi Jaiswal: Youngest Indian to score a century in international cricket",
          "Shubman Gill: Fastest Indian to 1000 Test runs in terms of innings (14 innings)",
          "Avesh Khan: Fastest Indian bowler to reach 50 T20I wickets",
          "Ruturaj Gaikwad: Most runs by an Indian in a single IPL season (635 in 2021)",
          "Arshdeep Singh: Best bowling figures by an Indian debutant in T20Is (3/15)",
          "Tilak Varma: Youngest Indian to score a fifty in IPL (18 years, 353 days)",
          "Venkatesh Iyer: First Indian to score a fifty and take a wicket on IPL debut",
          "Harshal Patel: Most wickets in a single IPL season (32 in 2021)",
          
        ]
      },
      {
        name:"Rising cricketers",
        points:[
          "Devdutt Padikkal: Fastest Indian to 5000 IPL runs",
          "Prasidh Krishna: Fastest Indian bowler to 100 IPL wickets",
          "Rishabh Pant: Youngest Indian wicket-keeper to score a Test century",
          "Ishan Kishan: First Indian wicket-keeper to score a double century in Tests",
          "Washington Sundar: Best bowling figures by an Indian spinner on Test debut (5/59)",
          "Shreyas Iyer: Fastest Indian to 2000 ODI runs in terms of innings (45 innings)",
          "Mohammed Siraj: Fastest Indian bowler to 50 Test wickets",
          "Arshdeep Singh: Youngest Indian bowler to take a five-wicket haul in T20Is",
          "Axar Patel: Most runs by an Indian all-rounder in a single IPL season (522 in 2020)",

        ]}
      
  ];

  return (
  <section id="achievements" className="max-w-6xl mx-auto p-6">
    <h2 className="text-3xl text-black-600 text-center mb-8">Player Achievements</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((p, i) => (
        <PlayerCard
          key={i}
          name={p.name}
          points={p.points}
        />
      ))}
    </div>
  </section>
);
};

export default Achievements;
