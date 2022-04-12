let mock = [
  {
    id: 1,
    name: "Dry Bar Comedy",
    subCount: "1.93M",
    countryOfOrigin: "US",
    yearCreated: "2017",
    genre: "Comedy",
    image: 'https://gersh.com/comedy/wp-content/uploads/2018/09/Dry-Bar-Comedy-Pic-USE.jpg',
    grade: "B+",
    bio: "VidAngel began creating its own original content in 2017 with Dry Bar Comedy, which began as a series of 52 original stand-up comedy sets filmed in Utah that are generally clean and performed by local and upcoming comedians. Dry Bar Comedy has attracted a large social media following, particularly on YouTube, and a live tour is scheduled for cities across the United States."
  },
  {
    id: 2,
    name: "Lindsey Stirling",
    subCount: "13.3M",
    countryOfOrigin: "US",
    yearCreated: "2007",
    genre: "Music",
    image: 'https://admin.musiconline.co/uploads/images/blog/header/lindsey-stirling-kimdir.jpg',
    grade: "B+",
    bio: "Lindsey Stirling (born September 21, 1986) is an American violinist, songwriter, and dancer. She presents choreographed violin performances, both live and in music videos"
  },
  {
    id: 3,
    name: "Special Books by Special Kids",
    subCount: "3.22M",
    countryOfOrigin: "US",
    yearCreated: "2015",
    genre: "People",
    image: 'https://miro.medium.com/max/1004/1*OF76hmawuLf2ZuP7hOS_Cg.png',
    grade: "B",
    bio: "A channel founded by Chris Ulmer and Alyssa Porter, highlighting special needs children. One of their goals is to help people hear the special messages that kids with special needs want to share with us. When you hear someones story and see from their perspective, you grow as a person."
  },
  {
    id: 4,
    name: "Karolina Protsenko Violin",
    subCount: "6.77M",
    countryOfOrigin: "US",
    yearCreated: "2018",
    genre: "Music",
    image: 'https://www.musicnotes.com/images2/signature_artist/SA_KarolinaProtsenko-min.jpg',
    grade: "A-",
    bio: "Karolina Protsenko is 13 years old performing violinist, who was born on October 3rd, 2008 in Ukraine to a musical family. Her parents play guitar and piano."
  },
  {
    id: 5,
    name: "The Crosbys",
    subCount: "4M",
    countryOfOrigin: "US",
    yearCreated: "2016",
    genre: "People",
    image: 'http://www.uxricks.com/nativity/wp-content/uploads/2019/11/The-Crosby-Family.jpg',
    grade: "B+",
    bio: "For the past three years, Claire Crosby and her father, Dave, have been melting hearts around the world. The Crosbys live in Seattle and post a new video on their YouTube channel every Friday. Some are musical, and others show everyday life, but all of them are watched repeatedly by more than millions of subscribers"
  },
  {
    id: 6,
    name: "MrBeast",
    subCount: "93.4M",
    countryOfOrigin: "US",
    yearCreated: "2012",
    genre: "Entertainment",
    image: 'https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e.jpg',
    grade: "A",
    bio: "Jimmy Donaldson, better known as MrBeast, is an American YouTuber, Internet personality, businessman, and philanthropist. He has been credited with pioneering a genre of YouTube videos that centers on expensive stunts."
  },
  {
    id: 7,
    name: "PewDiePie",
    subCount: "111M",
    countryOfOrigin: "Swederland",
    yearCreated: "2010",
    genre: "Entertainment",
    image: 'https://variety.com/wp-content/uploads/2021/01/PewDiePie-Facebook.png?w=1024',
    grade: "A-",
    bio: "Felix Arvid Ulf Kjellberg, better known as PewDiePie, is a Swedish YouTuber known for his Let's Play videos and comedic formatted videos and shows. Kjellberg's popularity on YouTube and extensive media coverage have made him one of the most noted online personalities and content creators."
  },
  {
    id: 8,
    name: "Technoblade",
    subCount: "10.3M",
    countryOfOrigin: "US",
    yearCreated: "2013",
    genre: "Games",
    image: 'https://yt3.ggpht.com/ytc/AKedOLQZM8dCR59c2a7Iu_yP_6a1hqwPOVvxytXg9yEIOQ=s900-c-k-c0x00ffffff-no-rj',
    grade: "B-",
    bio: "A well known Minecraft Youtuber who goes by the name Technoblade and rarely shows his face in videos. Known as the best player vs player combat master after having won $1,000,000 from MrBeast beating Dream (the second best combat strategist in the game). In his early 20's, Technoblade got cancer, but continued making YouTube content throughout the whole process. Now he uses his money from his videos to donate to cancer patients around the world. Catchphrase: Technoblade never dies"
  },
  {
    id: 9,
    name: "Charles Cornell",
    subCount: "1.16M",
    countryOfOrigin: "US",
    yearCreated: "2014",
    genre: "Education",
    image: 'https://images.nintendolife.com/d674dc47caa6c/1280x720.jpg',
    grade: "B",
    bio: "Music Theorist who graduated from the Purchase College Conservatory of Music with a bachelor's degree in Jazz Studies. He makes videos explaining basic music theory topics at a simple beginner level"
  },
  {
    id: 10,
    name: "Ben Shapiro",
    subCount: "4.42M",
    countryOfOrigin: "US",
    yearCreated: "2016",
    genre: "News",
    image: 'https://media.npr.org/assets/img/2021/07/07/ben-shapiro_wide-86b70dce94000ab6d6efeff9c0ac8ff7173e3591.jpg',
    grade: "B+",
    bio: "Benjamin Aaron Shapiro is an American conservative political commentator, media host, attorney, and columnist. At age 17, he became the youngest nationally syndicated columnist in the United States."
  },
  {
    id: 11,
    name: "Cocomelon - Nursery Rhymes",
    subCount: "133M",
    countryOfOrigin: "US",
    yearCreated: "2016",
    genre: "Education",
    image: 'https://i.ytimg.com/vi/BEJLI_y6OHE/maxresdefault.jpg',
    grade: "A++",
    bio: ""
  },
  {
    id: 12,
    name: "Ryukahr",
    subCount: "721K",
    countryOfOrigin: "US",
    yearCreated: "2006",
    genre: "Games",
    image: 'https://everipedia-storage.s3.amazonaws.com/ProfilePics/ryukahr__18290.jpeg',
    grade: "B",
    bio: "Ryukahr is a gaming creator, live streamer and musician from the San Francisco Bay Area. He started his YouTube career with music videos and rose into Mario playthroughs."
  },
  {
    id: 13,
    name: "T90Official - Age of Empires 2",
    subCount: "297K",
    countryOfOrigin: "US",
    yearCreated: "2015",
    genre: "Games",
    image: 'https://yt3.ggpht.com/ytc/AKedOLRM1hfxaKXH76zBYXYEIPMgaEJ6ZOMDjtJLIAg_=s900-c-k-c0x00ffffff-no-rj',
    grade: "B",
    bio: "Tristan 'T90Official' (short form: T90) was born April 9, 1993 and is an American 'Age of Empires II' caster and host. He is best known for organizing the Hidden Cup series besides several Show Matches. He is the most well known Age of Empires commentator and one of the top 100 competitors in the AOE community."
  },
  {
    id: 14,
    name: "General Conference",
    subCount: "369K",
    countryOfOrigin: "US",
    yearCreated: "2011",
    genre: "Nonprofit",
    image: 'https://ogden_images.s3.amazonaws.com/www.standard.net/images/2021/10/02124237/General-Conference-2-840x473.jpeg',
    grade: "B",
    bio: "A channel dedicated to sharing the messages of the bi-annual global broadcast of leaders of the Church of Jesus Christ of Latter Day Saints. Although mostly directed to members, the messages hold universal truths and can be uplifting for all faiths"
  },
]

export default mock;
