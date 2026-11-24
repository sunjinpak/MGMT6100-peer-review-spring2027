// Team roster data for MGMT 6100 Human Resource Management (Spring 2027, Section 01)
// Students (14) from the Canvas roster, course 48546, checked 2026-11-24. Fill `teams` when teams are announced.
const SURVEY_CONFIG = {
  course: "MGMT 6100 Human Resource Management (Spring 2027)",
  apiUrl: "https://script.google.com/macros/s/AKfycbyG0Av6QKboyT0CRDKev0MEWV5N5ktkCvLziyhD5oWspklPtoubkxwfMUsLx6EtniXZ8g/exec",

  // Labels carry the class date so students do not read "Team meeting 5"
  // as "Team 5's meeting" and pick by their own team number.
  activities: [
    "Team Meeting 1 (1/25)",
    "Team Meeting 2 (1/27)",
    "Team Meeting 3 (2/3)",
    "Team Meeting 4 (2/10)",
    "Team Meeting 5 (2/17)",
    "Team Meeting 6 (3/3)",
    "Team Meeting 7 (3/17)",
    "Team Meeting 8 (4/5)",
    "Team Meeting 9 (4/12)",
    "Team Meeting 10 (5/5)",
    "Team Meeting 11 (5/10)",
    "Team Presentation: Ch 2 Case (presenting team only, 2/1)",
    "Team Presentation: Ch 3 Case (presenting team only, 2/8)",
    "Team Presentation: Ch 4 Case (presenting team only, 2/15)",
    "Team Presentation: Ch 6 Case (presenting team only, 3/1)",
    "Team Presentation: Ch 7 Case (presenting team only, 3/15)",
    "Team Presentation: Ch 8 Case (presenting team only, 3/29)",
    "Team Presentation: Ch 9 Case (presenting team only, 4/7)",
    "Team Presentation: Ch 11 Case (presenting team only, 5/5)"
  ],

  teams: [
    // { number: 1, members: ["First Last", "First Last", "First Last"] },
  ],

  ratingScale: [
    { value: 1, label: "Little or weak effort", description: "Detrimental to team" },
    { value: 2, label: "Insufficient effort", description: "Met minimal standards of team" },
    { value: 3, label: "Sufficient effort", description: "Contributed adequately to team" },
    { value: 4, label: "Very strong work", description: "Contributed significantly to team" },
    { value: 5, label: "Excellent work", description: "Was crucial component to team's success" }
  ],

  emails: {
    "Andrew Banda": "abanda1@csub.edu",
    "Husain Cassim": "hcassim@csub.edu",
    "Jonathan Chandler": "jchandler1@csub.edu",
    "Loren Hall": "lhall@csub.edu",
    "Yen Nhi Hoang": "yhoang2@csub.edu",
    "Alejandro Martinez": "amartinez354@csub.edu",
    "Daniel Meyer": "dmeyer8@csub.edu",
    "Cory Morse": "cmorse1@csub.edu",
    "Lindsay Nicks": "lnicks@csub.edu",
    "Elias Pedraza": "jpedraza3@csub.edu",
    "Crystalyna Rodriguez": "crodriguez75@csub.edu",
    "Almendra Valenzuela Aparicio": "avalenzuela-aparic1@csub.edu",
    "Grace Wingle": "gwingle@csub.edu",
    "Derek Zhang": "dzhang7@csub.edu",
  }
};
