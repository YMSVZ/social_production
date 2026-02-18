// Base date: Feb 17 2026 at noon UTC
const now = new Date("2026-02-17T12:00:00Z");
const h  = (n) => new Date(now - n * 3600000).toISOString();  // n hours ago
const d  = (n) => new Date(now - n * 86400000).toISOString(); // n days ago
const w  = (n) => new Date(now - n * 604800000).toISOString();// n weeks ago

export const mockThreads = [
  { 
    id:1, type:"project", status:"Active", 
    title:"Community Garden on Vacant Lot — East Village", 
    channels:["New York","Food & Agriculture"], 
    author:"Rosa_M", 
    time:"3h ago", 
    date:h(3), 
    updatedDate:h(2),
    upvotes:247, comments:43, rsvps:18, 
    description:"We've identified a vacant city-owned lot and are organising to petition for community use. Join us to plan, build and grow.", 
    body:"We've been watching this lot sit empty for three years. The city owns it and has no current plans. We've drafted a petition and need 200 signatures before we can present to the council.\n\nWhat we need right now:\n- People to collect signatures in the neighbourhood\n- Anyone with knowledge of city planning processes\n- Gardeners who can help design the space\n\nWe have an initial meetup planned for Saturday. Come along even if you're just curious.", 
    members:["Rosa_M","buildtogether","teach_bk","urbanwatch_k","commonist"], 
    meetups:[
      { title:"Initial Planning Meetup", date:"Sat Feb 21", time:"2:00 PM", location:"East Village Community Hall, 5th St", going:18 },
      { title:"Council Presentation Prep", date:"Sat Mar 7", time:"11:00 AM", location:"Online", going:12 }
    ], 
    updates:[
      { type:"status", text:"Project status changed from Proposed to Active", author:"Rosa_M", time:"3d ago", date:d(3) },
      { type:"meetup", text:"New meetup scheduled: Initial Planning Meetup on Feb 21", author:"Rosa_M", time:"1d ago", date:d(1) },
      { type:"text", text:"Great news! The parks department contact came through. We have a meeting scheduled for next week to discuss the petition process.", author:"Rosa_M", time:"2h ago", date:h(2) }
    ],
    image:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=400&fit=crop" 
  },
  { 
    id:2, type:"thread", 
    title:"What does 'productive' actually mean for a platform like this?", 
    channels:["Meta","Philosophy"], 
    author:"commonist", 
    time:"5h ago", 
    date:h(5), 
    upvotes:189, comments:67, 
    description:"Genuinely curious how others define productivity in a civic context. Is organising a protest productive? Is a book club?", 
    body:"Been thinking about this a lot since joining. The platform is called Social Production but what counts as production?\n\nMy instinct is that anything which builds capacity — social, material, or intellectual — counts. A book club builds intellectual capacity. A protest builds political capacity. A garden builds food capacity.\n\nBut I wonder if others have a narrower or broader definition. Would love to hear thoughts." 
  },
  { 
    id:3, type:"project", status:"Proposed", 
    title:"Tool Library — Brooklyn: Share drills, saws & equipment collectively", 
    channels:["Brooklyn","Housing & Construction"], 
    author:"buildtogether", 
    time:"1d ago", 
    date:d(1),
    updatedDate:h(5),
    upvotes:134, comments:29, rsvps:7, 
    description:"A collectively owned library of tools available to all members. Looking for a storage space and initial donors.", 
    body:"The idea is simple: instead of everyone buying their own drill that gets used twice a year, we pool resources and share.\n\nWe need:\n- A storage space (garage, basement, shed — anything works to start)\n- An initial set of tools (donations or collective purchase)\n- A simple booking system\n\nThis is in the Proposed stage — join to help figure out if it's viable.", 
    members:["buildtogether","Rosa_M"], 
    meetups:[
      { title:"Feasibility Discussion", date:"Sun Feb 22", time:"3:00 PM", location:"Brooklyn Public Library, Meeting Room 2", going:7 }
    ], 
    fund:{
      goal:12500,
      raised:4820,
      contributors:[
        {name:"Rosa_M",amount:250,public:true},
        {name:"commonist",amount:100,public:true},
        {name:"buildtogether",amount:500,public:true},
        {name:"teach_bk",amount:50,public:true},
        {name:"urbanwatch_k",amount:75,public:true},
        {name:"Anonymous",amount:3845,public:false}
      ],
      deadline:"Mar 15, 2026"
    },
    updates:[
      { type:"fund", text:"We hit 25% funding! $3,125 raised from 12 contributors.", author:"buildtogether", time:"2d ago", date:d(2) },
      { type:"text", text:"Rosa offered her building's storage room! This could be our first location. Meeting with the super this week.", author:"buildtogether", time:"5h ago", date:h(5) }
    ],
    image:"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=400&fit=crop" 
  },
  { 
    id:4, type:"thread", 
    title:"Local council ignoring planning applications from community groups — pattern?", 
    channels:["New York","Politics"], 
    author:"urbanwatch_k", 
    time:"2d ago", 
    date:d(2), 
    upvotes:98, comments:51, 
    description:"Third time in six months a community proposal has been quietly shelved. Anyone else noticing this?", 
    body:"This is the third time in six months that a community-led planning proposal has been submitted and then quietly shelved with no explanation. The latest was a proposal for a pedestrian plaza on Bedford Ave.\n\nI've been tracking these and there seems to be a pattern — proposals that come from community groups without legal representation consistently get deprioritised.\n\nHas anyone else noticed this? Is anyone keeping a record?" 
  },
  { 
    id:5, type:"project", status:"Completed", 
    title:"Mural on Dekalb Ave — fundraised & painted", 
    channels:["Brooklyn","Arts & Culture"], 
    author:"dekalb_arts", 
    time:"1w ago", 
    date:w(1), 
    upvotes:312, comments:88, rsvps:34, 
    description:"We did it. The mural is up. Thanks to all 34 volunteers and everyone who donated. Photos inside.", 
    body:"Six months ago this was just an idea on this platform. Today the mural is finished and it's beautiful.\n\nWe raised $3,200 from 89 donors, recruited 34 volunteers, negotiated with the building owner, got the permits, and painted over three weekends.\n\nPhotos are linked below. Thank you to everyone who made this happen. This is exactly what this platform is for.", 
    members:["dekalb_arts","Rosa_M","commonist","teach_bk","buildtogether","urbanwatch_k"], 
    meetups:[], 
    fund:{
      goal:3200,
      raised:3200,
      contributors:[
        {name:"Rosa_M",amount:200,public:true},
        {name:"commonist",amount:150,public:true},
        {name:"Anonymous",amount:2850,public:false}
      ]
    },
    updates:[
      { type:"fund", text:"100% funded! We hit our $3,200 goal. Thank you to all 89 donors!", author:"dekalb_arts", time:"3w ago", date:d(21) },
      { type:"status", text:"Project status changed from Active to Completed", author:"dekalb_arts", time:"1w ago", date:w(1) },
      { type:"text", text:"The mural is complete! Photos are up. Thank you everyone who made this possible.", author:"dekalb_arts", time:"1w ago", date:w(1) }
    ],
    image:"https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&h=400&fit=crop" 
  },
  { 
    id:6, type:"thread", 
    title:"Should the platform have a verification system for local organisers?", 
    channels:["Meta"], 
    author:"platform_q", 
    time:"2d ago", 
    date:d(2), 
    upvotes:76, comments:22, 
    description:"Thinking about trust and accountability. Would a verified badge for community orgs help or create hierarchy?", 
    body:"Thinking out loud here. One issue with open platforms is that anyone can claim to represent a community group or organisation. A verification system could help — but it also risks creating a two-tier system where verified accounts get more visibility.\n\nWhat do others think? Is trust something that should be earned through reputation on the platform, or verified externally?" 
  },
  { 
    id:7, type:"project", status:"Active", 
    title:"Free English Classes — Bushwick Community Centre", 
    channels:["Brooklyn","Education"], 
    author:"teach_bk", 
    time:"3d ago", 
    date:d(3), 
    upvotes:211, comments:38, rsvps:29, 
    description:"Weekly English classes for recent arrivals. We need volunteer teachers and a permanent space. Come help or come learn.", 
    body:"Every Tuesday evening we run free English classes for recent arrivals at a temporary space in Bushwick. We currently have 3 volunteer teachers and around 20 regular students.\n\nWe need:\n- More volunteer teachers (any level of experience welcome)\n- A permanent space (we keep having to move)\n- Donations for materials\n\nCome along any Tuesday at 6pm, or join this project to get involved in organising.", 
    members:["teach_bk","Rosa_M","commonist"], 
    meetups:[
      { title:"Weekly English Class", date:"Tue Feb 18", time:"6:00 PM", location:"Bushwick Community Centre, Maria Hernandez Room", going:29 },
      { title:"Weekly English Class", date:"Tue Feb 25", time:"6:00 PM", location:"Bushwick Community Centre, Maria Hernandez Room", going:23 }
    ],
    updates:[
      { type:"status", text:"Project status changed from Proposed to Active", author:"teach_bk", time:"3d ago", date:d(3) }
    ]
  },
  { 
    id:8, type:"thread", 
    title:"Is pooling money for land purchases realistic at small scale?", 
    channels:["Meta","Philosophy"], 
    author:"land_common", 
    time:"4d ago", 
    date:d(4), 
    upvotes:143, comments:55, 
    description:"Thinking through the legal and practical challenges of collective land ownership at the neighbourhood level.", 
    body:"The collective fund feature is exciting but I want to think through the legal realities. When a group of individuals pool money to buy land, who actually owns it legally?\n\nOptions I've been researching:\n- LLC with equal shares\n- Community Land Trust\n- Cooperative corporation\n- Informal trust arrangement\n\nEach has different tax, liability and governance implications. Has anyone done this before at a small scale? Would love to connect with people who have practical experience." 
  },
];

export const mockComments = [
  { id:1, postId:1, author:"buildtogether", time:"2h ago", upvotes:34, text:"I know someone at the parks department who might be able to help navigate the city process. I'll reach out and report back.", replies:[
      { id:9, postId:1, author:"Rosa_M", time:"1h ago", upvotes:12, text:"That would be amazing — the main blocker has been knowing who to actually talk to inside the department.", replies:[
          { id:10, postId:1, author:"buildtogether", time:"45m ago", upvotes:8, text:"I'll set up a call this week and loop you in. Watch this space.", replies:[] }
        ]
      },
      { id:11, postId:1, author:"urbanwatch_k", time:"50m ago", upvotes:6, text:"Would be good to document whatever you find out — this kind of insider knowledge is useful for other projects too.", replies:[] }
    ]
  },
  { id:2, postId:1, author:"commonist", time:"1h ago", upvotes:21, text:"Just signed the petition. Also happy to help with signature collection on weekends — I'm in the area most Saturdays.", replies:[
      { id:12, postId:1, author:"Rosa_M", time:"40m ago", upvotes:9, text:"Brilliant! I'll add you to the volunteer list. We're targeting the farmers market on Saturday mornings — great foot traffic.", replies:[] }
    ]
  },
  { id:3, postId:1, author:"urbanwatch_k", time:"45m ago", upvotes:18, text:"Worth cross-posting to the Politics channel — this is exactly the kind of thing that needs political pressure alongside community organising.", replies:[] },
  { id:4, postId:2, author:"buildtogether", time:"4h ago", upvotes:45, text:"I'd say productive means it results in something that exists after the activity ends. A conversation is productive if it produces a plan. A plan is productive if it produces action.", replies:[
      { id:13, postId:2, author:"commonist", time:"3h ago", upvotes:31, text:"I like that framing but it risks excluding maintenance work — things that keep existing things going rather than creating new ones. Is maintaining a community space not productive?", replies:[
          { id:14, postId:2, author:"buildtogether", time:"2h ago", upvotes:19, text:"Fair point. Maybe production includes maintenance then — anything that keeps the social fabric intact or improves it.", replies:[
              { id:15, postId:2, author:"Rosa_M", time:"1h ago", upvotes:11, text:"This is getting at something important — the difference between productive and generative. Maintenance is productive. Creation is generative. Both matter.", replies:[] }
            ]
          }
        ]
      }
    ]
  },
  { id:5, postId:2, author:"urbanwatch_k", time:"3h ago", upvotes:29, text:"That definition would exclude a lot of things that feel important though — mutual support, solidarity, shared experience. Not everything valuable leaves a physical trace.", replies:[] },
  { id:6, postId:2, author:"Rosa_M", time:"2h ago", upvotes:37, text:"I think the key word is 'social' production. It's not just about making things, it's about making things together. The togetherness is part of the product.", replies:[] },
  { id:7, postId:3, author:"Rosa_M", time:"20h ago", upvotes:22, text:"My building has a large storage room that might work. Let me check with the super and get back to you this week.", replies:[
      { id:16, postId:3, author:"buildtogether", time:"18h ago", upvotes:14, text:"That would be perfect — even a small space to start would let us prove the concept. Keep us posted!", replies:[] }
    ]
  },
  { id:8, postId:3, author:"commonist", time:"18h ago", upvotes:15, text:"There are tool library models in other cities that have good documentation. Happy to share research on what's worked elsewhere.", replies:[] },
];

export const channels = [
  { name:"Meta",                  system:true,  icon:"⚙️", subscribers:1247 },
  { name:"Politics",              system:true,  icon:"🏛️", subscribers:892  },
  { name:"Philosophy",            system:true,  icon:"💬", subscribers:634  },
  { name:"New York",              system:false, icon:"🏙️", subscribers:2103 },
  { name:"Brooklyn",              system:false, icon:"🌉", subscribers:1456 },
  { name:"Housing & Construction",system:false, icon:"🏠", subscribers:723  },
  { name:"Food & Agriculture",    system:false, icon:"🌱", subscribers:891  },
  { name:"Arts & Culture",        system:false, icon:"🎨", subscribers:1034 },
  { name:"Education",             system:false, icon:"📚", subscribers:567  },
];

export const STATUS = {
  Active:    { bg:"#dcfce7", text:"#166534", dot:"#22c55e" },
  Proposed:  { bg:"#fef9c3", text:"#854d0e", dot:"#eab308" },
  Completed: { bg:"#f1f5f9", text:"#475569", dot:"#94a3b8" },
};

export const CARD = {
  project: { bg:"#f0faf3", border:"#c8e6d0", hoverBorder:"#52b788", bar:"#2d6a4f" },
  thread:  { bg:"#ffffff", border:"#e5e7eb", hoverBorder:"#9ca3af", bar:"#e5e7eb" },
};
