const data = [
    {
        "Name": "The Twilight Saga Collection",
        "Author": "Stephenie Meyer",
        "User Rating": "4.7",
        "Reviews": "3801",
        "Price": "82",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "The Book of Basketball: The NBA According to The Sports Guy",
        "Author": "Bill Simmons",
        "User Rating": "4.7",
        "Reviews": "858",
        "Price": "53",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Publication Manual of the American Psychological Association, 6th Edition",
        "Author": "American Psychological Association",
        "User Rating": "4.5",
        "Reviews": "1233",
        "Price": "46",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Watchmen",
        "Author": "Alan Moore",
        "User Rating": "4.8",
        "Reviews": "3829",
        "Price": "42",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "The Girl with the Dragon Tattoo (Millennium Series Book 1)",
        "Author": "Stieg Larsson",
        "User Rating": "4.5",
        "Reviews": "6802",
        "Price": "40",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "Eat This Not That! Supermarket Survival Guide: The No-Diet Weight Loss Solution",
        "Author": "David Zinczenko",
        "User Rating": "4.5",
        "Reviews": "720",
        "Price": "32",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Mastering the Art of French Cooking, Vol. 2",
        "Author": "Julia Child",
        "User Rating": "4.8",
        "Reviews": "2926",
        "Price": "27",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Sookie Stackhouse",
        "Author": "Charlaine Harris",
        "User Rating": "4.7",
        "Reviews": "973",
        "Price": "25",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        "Author": "Stephen R. Covey",
        "User Rating": "4.6",
        "Reviews": "9325",
        "Price": "24",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Outliers: The Story of Success",
        "Author": "Malcolm Gladwell",
        "User Rating": "4.6",
        "Reviews": "10426",
        "Price": "20",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Under the Dome: A Novel",
        "Author": "Stephen King",
        "User Rating": "4.3",
        "Reviews": "6740",
        "Price": "20",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "The Lost Symbol",
        "Author": "Dan Brown",
        "User Rating": "4.2",
        "Reviews": "8747",
        "Price": "19",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "Eclipse (Twilight)",
        "Author": "Stephenie Meyer",
        "User Rating": "4.7",
        "Reviews": "5505",
        "Price": "18",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "Super Freakonomics: Global Cooling, Patriotic Prostitutes, and Why Suicide Bombers Should Buy Life Insurance",
        "Author": "Steven D. Levitt",
        "User Rating": "4.5",
        "Reviews": "1583",
        "Price": "18",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Act Like a Lady, Think Like a Man: What Men Really Think About Love, Relationships, Intimacy, and Commitment",
        "Author": "Steve Harvey",
        "User Rating": "4.6",
        "Reviews": "5013",
        "Price": "17",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "StrengthsFinder 2.0",
        "Author": "Gallup",
        "User Rating": "4",
        "Reviews": "1034",
        "Price": "17",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Girl Who Played with Fire (Millennium)",
        "Author": "Stieg Larsson",
        "User Rating": "4.7",
        "Reviews": "7251",
        "Price": "16",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "Diary of a Wimpy Kid: The Last Straw (Book 3)",
        "Author": "Jeff Kinney",
        "User Rating": "4.8",
        "Reviews": "3837",
        "Price": "15",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "Liberty and Tyranny: A Conservative Manifesto",
        "Author": "Mark R. Levin",
        "User Rating": "4.8",
        "Reviews": "3828",
        "Price": "15",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "True Compass: A Memoir",
        "Author": "Edward M. Kennedy",
        "User Rating": "4.5",
        "Reviews": "438",
        "Price": "15",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Good to Great: Why Some Companies Make the Leap and Others Don't",
        "Author": "Jim Collins",
        "User Rating": "4.5",
        "Reviews": "3457",
        "Price": "14",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Crazy Love: Overwhelmed by a Relentless God",
        "Author": "Francis Chan",
        "User Rating": "4.7",
        "Reviews": "1542",
        "Price": "14",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Eat This, Not That! Thousands of Simple Food Swaps that Can Save You 10, 20, 30 Pounds--or More!",
        "Author": "David Zinczenko",
        "User Rating": "4.3",
        "Reviews": "956",
        "Price": "14",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Where the Wild Things Are",
        "Author": "Maurice Sendak",
        "User Rating": "4.8",
        "Reviews": "9967",
        "Price": "13",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "Breaking Dawn (The Twilight Saga, Book 4)",
        "Author": "Stephenie Meyer",
        "User Rating": "4.6",
        "Reviews": "9769",
        "Price": "13",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "The Love Dare",
        "Author": "Stephen Kendrick",
        "User Rating": "4.8",
        "Reviews": "1655",
        "Price": "13",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Olive Kitteridge",
        "Author": "Elizabeth Strout",
        "User Rating": "4.2",
        "Reviews": "4519",
        "Price": "12",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "Dog Days (Diary of a Wimpy Kid, Book 4) (Volume 4)",
        "Author": "Jeff Kinney",
        "User Rating": "4.8",
        "Reviews": "3181",
        "Price": "12",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "The 5000 Year Leap",
        "Author": "W. Cleon Skousen",
        "User Rating": "4.8",
        "Reviews": "1680",
        "Price": "12",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Three Cups of Tea: One Man's Mission to Promote Peace - One School at a Time",
        "Author": "Greg Mortenson",
        "User Rating": "4.3",
        "Reviews": "3319",
        "Price": "11",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Elegance of the Hedgehog",
        "Author": "Muriel Barbery",
        "User Rating": "4",
        "Reviews": "1859",
        "Price": "11",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "Glenn Beck's Common Sense: The Case Against an Out-of-Control Government, Inspired by Thomas Paine",
        "Author": "Glenn Beck",
        "User Rating": "4.6",
        "Reviews": "1365",
        "Price": "11",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Guernsey Literary and Potato Peel Pie Society",
        "Author": "Mary Ann Shaffer",
        "User Rating": "4.7",
        "Reviews": "8587",
        "Price": "10",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "New Moon (The Twilight Saga)",
        "Author": "Stephenie Meyer",
        "User Rating": "4.6",
        "Reviews": "5680",
        "Price": "10",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "Twilight (The Twilight Saga, Book 1)",
        "Author": "Stephenie Meyer",
        "User Rating": "4.7",
        "Reviews": "11676",
        "Price": "9",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "The Last Lecture",
        "Author": "Randy Pausch",
        "User Rating": "4.7",
        "Reviews": "4028",
        "Price": "9",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Tipping Point: How Little Things Can Make a Big Difference",
        "Author": "Malcolm Gladwell",
        "User Rating": "4.4",
        "Reviews": "3503",
        "Price": "9",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Five Love Languages: How to Express Heartfelt Commitment to Your Mate",
        "Author": "Gary Chapman",
        "User Rating": "4.6",
        "Reviews": "803",
        "Price": "9",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Shack: Where Tragedy Confronts Eternity",
        "Author": "William P. Young",
        "User Rating": "4.6",
        "Reviews": "17213",
        "Price": "8",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "The Last Olympian (Percy Jackson and the Olympians, Book 5)",
        "Author": "Rick Riordan",
        "User Rating": "4.8",
        "Reviews": "4628",
        "Price": "7",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "Eclipse (Twilight Sagas)",
        "Author": "Stephenie Meyer",
        "User Rating": "4.7",
        "Reviews": "2344",
        "Price": "7",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "I, Alex Cross",
        "Author": "James Patterson",
        "User Rating": "4.6",
        "Reviews": "1320",
        "Price": "7",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "The Help",
        "Author": "Kathryn Stockett",
        "User Rating": "4.8",
        "Reviews": "13871",
        "Price": "6",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "The Time Traveler's Wife",
        "Author": "Audrey Niffenegger",
        "User Rating": "4.4",
        "Reviews": "3759",
        "Price": "6",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "Going Rogue: An American Life",
        "Author": "Sarah Palin",
        "User Rating": "4.6",
        "Reviews": "1636",
        "Price": "6",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Five Dysfunctions of a Team: A Leadership Fable",
        "Author": "Patrick Lencioni",
        "User Rating": "4.6",
        "Reviews": "1234",
        "Price": "6",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Divine Soul Mind Body Healing and Transmission System: The Divine Way to Heal You, Humanity, Mother Earth, and Allâ¦",
        "Author": "Zhi Gang Sha",
        "User Rating": "4.6",
        "Reviews": "37",
        "Price": "6",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Arguing with Idiots: How to Stop Small Minds and Big Government",
        "Author": "Glenn Beck",
        "User Rating": "4.6",
        "Reviews": "798",
        "Price": "5",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Have a Little Faith: A True Story",
        "Author": "Mitch Albom",
        "User Rating": "4.8",
        "Reviews": "1930",
        "Price": "4",
        "Year": "2009",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Dead And Gone: A Sookie Stackhouse Novel (Sookie Stackhouse/True Blood)",
        "Author": "Charlaine Harris",
        "User Rating": "4.6",
        "Reviews": "1541",
        "Price": "4",
        "Year": "2009",
        "Genre": "Fiction"
    },
    {
        "Name": "Publication Manual of the American Psychological Association, 6th Edition",
        "Author": "American Psychological Association",
        "User Rating": "4.5",
        "Reviews": "1605",
        "Price": "46",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Official SAT Study Guide",
        "Author": "The College Board",
        "User Rating": "4.4",
        "Reviews": "503",
        "Price": "40",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Girl with the Dragon Tattoo (Millennium Series Book 2)",
        "Author": "Stieg Larsson",
        "User Rating": "4.4",
        "Reviews": "5003",
        "Price": "30",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "The 5 Love Languages: The Secret to Love That Lasts",
        "Author": "Gary Chapman",
        "User Rating": "4.7",
        "Reviews": "1235",
        "Price": "28",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "A Patriot's History of the United States: From Columbus's Great Discovery to the War on Terror",
        "Author": "Larry Schweikart",
        "User Rating": "4.7",
        "Reviews": "460",
        "Price": "24",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Towers of Midnight (Wheel of Time, Book Thirteen)",
        "Author": "Robert Jordan",
        "User Rating": "4.8",
        "Reviews": "2282",
        "Price": "21",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Barefoot Contessa, How Easy Is That?: Fabulous Recipes & Easy Tips",
        "Author": "Ina Garten",
        "User Rating": "4.7",
        "Reviews": "615",
        "Price": "21",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Outliers: The Story of Success",
        "Author": "Malcolm Gladwell",
        "User Rating": "4.6",
        "Reviews": "10426",
        "Price": "20",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Teach Like a Champion: 49 Techniques that Put Students on the Path to College",
        "Author": "Doug Lemov",
        "User Rating": "4.4",
        "Reviews": "637",
        "Price": "20",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "George Washington's Sacred Fire",
        "Author": "Peter A. Lillback",
        "User Rating": "4.5",
        "Reviews": "408",
        "Price": "20",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Life",
        "Author": "Keith Richards",
        "User Rating": "4.5",
        "Reviews": "2752",
        "Price": "18",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Big Short: Inside the Doomsday Machine",
        "Author": "Michael Lewis",
        "User Rating": "4.7",
        "Reviews": "3536",
        "Price": "17",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Decision Points",
        "Author": "George W. Bush",
        "User Rating": "4.6",
        "Reviews": "2137",
        "Price": "17",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "StrengthsFinder 2.0",
        "Author": "Gallup",
        "User Rating": "4",
        "Reviews": "1687",
        "Price": "17",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        "Author": "Laura Hillenbrand",
        "User Rating": "4.7",
        "Reviews": "5003",
        "Price": "16",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Drive: The Surprising Truth About What Motivates Us",
        "Author": "Daniel H. Pink",
        "User Rating": "4.5",
        "Reviews": "2525",
        "Price": "16",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Delivering Happiness: A Path to Profits, Passion, and Purpose",
        "Author": "Tony Hsieh",
        "User Rating": "4.6",
        "Reviews": "1651",
        "Price": "15",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Hunger Games",
        "Author": "Suzanne Collins",
        "User Rating": "4.7",
        "Reviews": "32122",
        "Price": "14",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "The Lost Hero (Heroes of Olympus, Book 1)",
        "Author": "Rick Riordan",
        "User Rating": "4.8",
        "Reviews": "4506",
        "Price": "14",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Good to Great: Why Some Companies Make the Leap and Others Don't",
        "Author": "Jim Collins",
        "User Rating": "4.5",
        "Reviews": "3457",
        "Price": "14",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Girl Who Kicked the Hornet's Nest (Millennium Trilogy)",
        "Author": "Stieg Larsson",
        "User Rating": "4.7",
        "Reviews": "2344",
        "Price": "14",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Crazy Love: Overwhelmed by a Relentless God",
        "Author": "Francis Chan",
        "User Rating": "4.7",
        "Reviews": "1542",
        "Price": "14",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Road to Serfdom: Text and Documents--The Definitive Edition (The Collected Works of F. A. Hayek, Volume 2)",
        "Author": "F. A. Hayek",
        "User Rating": "4.6",
        "Reviews": "1204",
        "Price": "14",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Autobiography of Mark Twain, Vol. 1",
        "Author": "Mark Twain",
        "User Rating": "4.2",
        "Reviews": "491",
        "Price": "14",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Immortal Life of Henrietta Lacks",
        "Author": "Rebecca Skloot",
        "User Rating": "4.7",
        "Reviews": "9289",
        "Price": "13",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Confession: A Novel",
        "Author": "John Grisham",
        "User Rating": "4.3",
        "Reviews": "3523",
        "Price": "13",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Switch: How to Change Things When Change Is Hard",
        "Author": "Chip Heath",
        "User Rating": "4.6",
        "Reviews": "1907",
        "Price": "13",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Ugly Truth (Diary of a Wimpy Kid, Book 5)",
        "Author": "Jeff Kinney",
        "User Rating": "4.8",
        "Reviews": "3796",
        "Price": "12",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "The Red Pyramid (The Kane Chronicles, Book 1)",
        "Author": "Rick Riordan",
        "User Rating": "4.6",
        "Reviews": "2186",
        "Price": "12",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Catching Fire (The Hunger Games)",
        "Author": "Suzanne Collins",
        "User Rating": "4.7",
        "Reviews": "22614",
        "Price": "11",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Percy Jackson and the Olympians Paperback Boxed Set (Books 1-3)",
        "Author": "Rick Riordan",
        "User Rating": "4.8",
        "Reviews": "6456",
        "Price": "11",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Cutting for Stone",
        "Author": "Abraham Verghese",
        "User Rating": "4.6",
        "Reviews": "4866",
        "Price": "11",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Three Cups of Tea: One Man's Mission to Promote Peace - One School at a Time",
        "Author": "Greg Mortenson",
        "User Rating": "4.3",
        "Reviews": "4534",
        "Price": "11",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Short Second Life of Bree Tanner: An Eclipse Novella (The Twilight Saga)",
        "Author": "Stephenie Meyer",
        "User Rating": "4.6",
        "Reviews": "2122",
        "Price": "11",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Women Food and God: An Unexpected Path to Almost Everything",
        "Author": "Geneen Roth",
        "User Rating": "4.2",
        "Reviews": "1302",
        "Price": "11",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Sh*t My Dad Says",
        "Author": "Justin Halpern",
        "User Rating": "4.7",
        "Reviews": "1265",
        "Price": "11",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Daily Show with Jon Stewart Presents Earth (The Book): A Visitor's Guide to the Human Race",
        "Author": "Jon Stewart",
        "User Rating": "4.4",
        "Reviews": "440",
        "Price": "11",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Art of Racing in the Rain: A Novel",
        "Author": "Garth Stein",
        "User Rating": "4.7",
        "Reviews": "11813",
        "Price": "10",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Sarah's Key",
        "Author": "Tatiana de Rosnay",
        "User Rating": "4.6",
        "Reviews": "3619",
        "Price": "10",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Little Bee: A Novel",
        "Author": "Chris Cleave",
        "User Rating": "4.1",
        "Reviews": "1467",
        "Price": "10",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "The Girl Who Played with Fire (Millennium Series)",
        "Author": "Stieg Larsson",
        "User Rating": "4.7",
        "Reviews": "7251",
        "Price": "9",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Radical: Taking Back Your Faith from the American Dream",
        "Author": "David Platt",
        "User Rating": "4.7",
        "Reviews": "1985",
        "Price": "9",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Food Rules: An Eater's Manual",
        "Author": "Michael Pollan",
        "User Rating": "4.4",
        "Reviews": "1555",
        "Price": "9",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Game Change: Obama and the Clintons, McCain and Palin, and the Race of a Lifetime",
        "Author": "John Heilemann",
        "User Rating": "4.4",
        "Reviews": "1215",
        "Price": "9",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Mockingjay (The Hunger Games)",
        "Author": "Suzanne Collins",
        "User Rating": "4.5",
        "Reviews": "26741",
        "Price": "8",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Dead in the Family (Sookie Stackhouse/True Blood, Book 10)",
        "Author": "Charlaine Harris",
        "User Rating": "4.3",
        "Reviews": "1924",
        "Price": "8",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "Broke: The Plan to Restore Our Trust, Truth and Treasure",
        "Author": "Glenn Beck",
        "User Rating": "4.5",
        "Reviews": "471",
        "Price": "8",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Last Olympian (Percy Jackson and the Olympians, Book 5)",
        "Author": "Rick Riordan",
        "User Rating": "4.8",
        "Reviews": "4628",
        "Price": "7",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "The Help",
        "Author": "Kathryn Stockett",
        "User Rating": "4.8",
        "Reviews": "13871",
        "Price": "6",
        "Year": "2010",
        "Genre": "Fiction"
    },
    {
        "Name": "The Five Dysfunctions of a Team: A Leadership Fable",
        "Author": "Patrick Lencioni",
        "User Rating": "4.6",
        "Reviews": "1578",
        "Price": "6",
        "Year": "2010",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Publication Manual of the American Psychological Association, 6th Edition",
        "Author": "American Psychological Association",
        "User Rating": "4.5",
        "Reviews": "3000",
        "Price": "46",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Official SAT Study Guide",
        "Author": "The College Board",
        "User Rating": "4.4",
        "Reviews": "705",
        "Price": "40",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "A Stolen Life: A Memoir",
        "Author": "Jaycee Dugard",
        "User Rating": "4.6",
        "Reviews": "4149",
        "Price": "32",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Hunger Games Trilogy Boxed Set (1)",
        "Author": "Suzanne Collins",
        "User Rating": "4.8",
        "Reviews": "16949",
        "Price": "30",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "The 5 Love Languages: The Secret to Love That Lasts",
        "Author": "Gary Chapman",
        "User Rating": "4.7",
        "Reviews": "2304",
        "Price": "28",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        "Author": "Stephen R. Covey",
        "User Rating": "4.6",
        "Reviews": "9325",
        "Price": "24",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The 17 Day Diet: A Doctor's Plan Designed for Rapid Results",
        "Author": "Mike Moreno",
        "User Rating": "4.3",
        "Reviews": "2314",
        "Price": "22",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "11/22/63: A Novel",
        "Author": "Stephen King",
        "User Rating": "4.6",
        "Reviews": "2052",
        "Price": "22",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "The China Study: The Most Comprehensive Study of Nutrition Ever Conducted And the Startling Implications for Dietâ¦",
        "Author": "Thomas Campbell",
        "User Rating": "4.7",
        "Reviews": "4633",
        "Price": "21",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The 4 Hour Body: An Uncommon Guide to Rapid Fat Loss, Incredible Sex and Becoming Superhuman",
        "Author": "Timothy Ferriss",
        "User Rating": "4.3",
        "Reviews": "4587",
        "Price": "21",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "In the Garden of Beasts: Love, Terror, and an American Family in Hitler's Berlin",
        "Author": "Eric Larson",
        "User Rating": "4.4",
        "Reviews": "4571",
        "Price": "21",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Steve Jobs",
        "Author": "Walter Isaacson",
        "User Rating": "4.6",
        "Reviews": "7827",
        "Price": "20",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Inheritance: Book IV (Inheritance Cycle)",
        "Author": "Christopher Paolini",
        "User Rating": "4.6",
        "Reviews": "5299",
        "Price": "20",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "Teach Like a Champion: 49 Techniques that Put Students on the Path to College",
        "Author": "Doug Lemov",
        "User Rating": "4.4",
        "Reviews": "637",
        "Price": "20",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Thinking, Fast and Slow",
        "Author": "Daniel Kahneman",
        "User Rating": "4.6",
        "Reviews": "11034",
        "Price": "19",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Litigators",
        "Author": "John Grisham",
        "User Rating": "4.4",
        "Reviews": "6222",
        "Price": "18",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "StrengthsFinder 2.0",
        "Author": "Gallup",
        "User Rating": "4",
        "Reviews": "2056",
        "Price": "17",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        "Author": "Laura Hillenbrand",
        "User Rating": "4.7",
        "Reviews": "7034",
        "Price": "16",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Paris Wife: A Novel",
        "Author": "Paula McLain",
        "User Rating": "4.3",
        "Reviews": "3759",
        "Price": "16",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "The Dukan Diet: 2 Steps to Lose the Weight, 2 Steps to Keep It Off Forever",
        "Author": "Pierre Dukan",
        "User Rating": "4.1",
        "Reviews": "2023",
        "Price": "15",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Girl Who Kicked the Hornet's Nest (Millennium Trilogy)",
        "Author": "Stieg Larsson",
        "User Rating": "4.7",
        "Reviews": "7747",
        "Price": "14",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "Good to Great: Why Some Companies Make the Leap and Others Don't",
        "Author": "Jim Collins",
        "User Rating": "4.5",
        "Reviews": "3457",
        "Price": "14",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Crazy Love: Overwhelmed by a Relentless God",
        "Author": "Francis Chan",
        "User Rating": "4.7",
        "Reviews": "1542",
        "Price": "14",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Lego Ideas Book: Unlock Your Imagination",
        "Author": "Daniel Lipkowitz",
        "User Rating": "4.4",
        "Reviews": "4247",
        "Price": "13",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "One Thousand Gifts: A Dare to Live Fully Right Where You Are",
        "Author": "Ann Voskamp",
        "User Rating": "4.6",
        "Reviews": "3163",
        "Price": "13",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Love Wins: A Book About Heaven, Hell, and the Fate of Every Person Who Ever Lived",
        "Author": "Rob Bell",
        "User Rating": "4.2",
        "Reviews": "1649",
        "Price": "13",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Water for Elephants: A Novel",
        "Author": "Sara Gruen",
        "User Rating": "4.5",
        "Reviews": "8958",
        "Price": "12",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "Tina Fey: Bossypants",
        "Author": "Tina Fey",
        "User Rating": "4.3",
        "Reviews": "5977",
        "Price": "12",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Catching Fire (The Hunger Games)",
        "Author": "Suzanne Collins",
        "User Rating": "4.7",
        "Reviews": "22614",
        "Price": "11",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "A Dance with Dragons (A Song of Ice and Fire)",
        "Author": "George R. R. Martin",
        "User Rating": "4.4",
        "Reviews": "12643",
        "Price": "11",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "Cutting for Stone",
        "Author": "Abraham Verghese",
        "User Rating": "4.6",
        "Reviews": "4866",
        "Price": "11",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "Heaven is for Real: A Little Boy's Astounding Story of His Trip to Heaven and Back",
        "Author": "Todd Burpo",
        "User Rating": "4.7",
        "Reviews": "15779",
        "Price": "10",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Art of Racing in the Rain: A Novel",
        "Author": "Garth Stein",
        "User Rating": "4.7",
        "Reviews": "11813",
        "Price": "10",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "Killing Lincoln: The Shocking Assassination that Changed America Forever (Bill O'Reilly's Killing Series)",
        "Author": "Bill O'Reilly",
        "User Rating": "4.7",
        "Reviews": "9342",
        "Price": "10",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Son of Neptune (Heroes of Olympus, Book 2)",
        "Author": "Rick Riordan",
        "User Rating": "4.8",
        "Reviews": "4290",
        "Price": "10",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "The Throne of Fire (The Kane Chronicles, Book 2)",
        "Author": "Rick Riordan",
        "User Rating": "4.7",
        "Reviews": "1463",
        "Price": "10",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "Go the F**k to Sleep",
        "Author": "Adam Mansbach",
        "User Rating": "4.8",
        "Reviews": "9568",
        "Price": "9",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "The Immortal Life of Henrietta Lacks",
        "Author": "Rebecca Skloot",
        "User Rating": "4.7",
        "Reviews": "9289",
        "Price": "9",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "What to Expect When You're Expecting",
        "Author": "Heidi Murkoff",
        "User Rating": "4.4",
        "Reviews": "3341",
        "Price": "9",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Eat to Live: The Amazing Nutrient-Rich Program for Fast and Sustained Weight Loss, Revised Edition",
        "Author": "Joel Fuhrman MD",
        "User Rating": "4.5",
        "Reviews": "3244",
        "Price": "9",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Radical: Taking Back Your Faith from the American Dream",
        "Author": "David Platt",
        "User Rating": "4.7",
        "Reviews": "1985",
        "Price": "9",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Hunger Games (Book 1)",
        "Author": "Suzanne Collins",
        "User Rating": "4.7",
        "Reviews": "32122",
        "Price": "8",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "Mockingjay (The Hunger Games)",
        "Author": "Suzanne Collins",
        "User Rating": "4.5",
        "Reviews": "26741",
        "Price": "8",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "Jesus Calling: Enjoying Peace in His Presence (with Scripture References)",
        "Author": "Sarah Young",
        "User Rating": "4.9",
        "Reviews": "19576",
        "Price": "8",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Help",
        "Author": "Kathryn Stockett",
        "User Rating": "4.8",
        "Reviews": "13871",
        "Price": "8",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "Cabin Fever (Diary of a Wimpy Kid, Book 6)",
        "Author": "Jeff Kinney",
        "User Rating": "4.8",
        "Reviews": "6607",
        "Price": "8",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "The Help",
        "Author": "Kathryn Stockett",
        "User Rating": "4.8",
        "Reviews": "13871",
        "Price": "7",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "The Five Dysfunctions of a Team: A Leadership Fable",
        "Author": "Patrick Lencioni",
        "User Rating": "4.6",
        "Reviews": "1845",
        "Price": "6",
        "Year": "2011",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Game of Thrones Boxed Set: A Game of Thrones/A Clash of Kings/A Storm of Swords/A Feast for Crows",
        "Author": "George R.R. Martin",
        "User Rating": "4.6",
        "Reviews": "1235",
        "Price": "5",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "Dead Reckoning (Sookie Stackhouse/True Blood, Book 11)",
        "Author": "Charlaine Harris",
        "User Rating": "4.2",
        "Reviews": "2094",
        "Price": "4",
        "Year": "2011",
        "Genre": "Fiction"
    },
    {
        "Name": "Publication Manual of the American Psychological Association, 6th Edition",
        "Author": "American Psychological Association",
        "User Rating": "4.5",
        "Reviews": "4056",
        "Price": "46",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Official SAT Study Guide",
        "Author": "The College Board",
        "User Rating": "4.4",
        "Reviews": "803",
        "Price": "40",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Fifty Shades Trilogy (Fifty Shades of Grey / Fifty Shades Darker / Fifty Shades Freed)",
        "Author": "E L James",
        "User Rating": "4.5",
        "Reviews": "13964",
        "Price": "32",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "The Hunger Games Trilogy Boxed Set (1)",
        "Author": "Suzanne Collins",
        "User Rating": "4.8",
        "Reviews": "16949",
        "Price": "30",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "The 5 Love Languages: The Secret to Love That Lasts",
        "Author": "Gary Chapman",
        "User Rating": "4.7",
        "Reviews": "2500",
        "Price": "28",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Killing Kennedy: The End of Camelot",
        "Author": "Bill O'Reilly",
        "User Rating": "4.6",
        "Reviews": "8634",
        "Price": "25",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        "Author": "Stephen R. Covey",
        "User Rating": "4.6",
        "Reviews": "9325",
        "Price": "24",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Barefoot Contessa Foolproof: Recipes You Can Trust: A Cookbook",
        "Author": "Ina Garten",
        "User Rating": "4.8",
        "Reviews": "1296",
        "Price": "24",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Thomas Jefferson: The Art of Power",
        "Author": "Jon Meacham",
        "User Rating": "4.5",
        "Reviews": "1904",
        "Price": "23",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Power of Habit: Why We Do What We Do in Life and Business",
        "Author": "Charles Duhigg",
        "User Rating": "4.6",
        "Reviews": "10795",
        "Price": "21",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Pioneer Woman Cooks: Food from My Frontier",
        "Author": "Ree Drummond",
        "User Rating": "4.8",
        "Reviews": "2876",
        "Price": "21",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Quiet: The Power of Introverts in a World That Can't Stop Talking",
        "Author": "Susan Cain",
        "User Rating": "4.6",
        "Reviews": "9343",
        "Price": "20",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Steve Jobs",
        "Author": "Walter Isaacson",
        "User Rating": "4.6",
        "Reviews": "7827",
        "Price": "20",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Thinking, Fast and Slow",
        "Author": "Daniel Kahneman",
        "User Rating": "4.6",
        "Reviews": "11034",
        "Price": "19",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Wild: From Lost to Found on the Pacific Crest Trail",
        "Author": "Cheryl Strayed",
        "User Rating": "4.4",
        "Reviews": "17044",
        "Price": "18",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Racketeer",
        "Author": "John Grisham",
        "User Rating": "4.3",
        "Reviews": "14493",
        "Price": "18",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "StrengthsFinder 2.0",
        "Author": "Gallup",
        "User Rating": "4",
        "Reviews": "2235",
        "Price": "17",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        "Author": "Laura Hillenbrand",
        "User Rating": "4.8",
        "Reviews": "9944",
        "Price": "16",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Winter of the World: Book Two of the Century Trilogy",
        "Author": "Ken Follett",
        "User Rating": "4.5",
        "Reviews": "10760",
        "Price": "15",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "Fifty Shades of Grey: Book One of the Fifty Shades Trilogy (Fifty Shades of Grey Series)",
        "Author": "E L James",
        "User Rating": "3.8",
        "Reviews": "47265",
        "Price": "14",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "No Easy Day: The Autobiography of a Navy Seal: The Firsthand Account of the Mission That Killed Osama Bin Laden",
        "Author": "Mark Owen",
        "User Rating": "4.6",
        "Reviews": "8093",
        "Price": "14",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Good to Great: Why Some Companies Make the Leap and Others Don't",
        "Author": "Jim Collins",
        "User Rating": "4.5",
        "Reviews": "3457",
        "Price": "14",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Blood Sugar Solution: The UltraHealthy Program for Losing Weight, Preventing Disease, and Feeling Great Now!",
        "Author": "Mark Hyman M.D.",
        "User Rating": "4.2",
        "Reviews": "1789",
        "Price": "14",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Fault in Our Stars",
        "Author": "John Green",
        "User Rating": "4.7",
        "Reviews": "50482",
        "Price": "13",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "The Harbinger: The Ancient Mystery that Holds the Secret of America's Future",
        "Author": "Jonathan Cahn",
        "User Rating": "4.6",
        "Reviews": "11098",
        "Price": "13",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "The Lego Ideas Book: Unlock Your Imagination",
        "Author": "Daniel Lipkowitz",
        "User Rating": "4.4",
        "Reviews": "4247",
        "Price": "13",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "One Thousand Gifts: A Dare to Live Fully Right Where You Are",
        "Author": "Ann Voskamp",
        "User Rating": "4.6",
        "Reviews": "3163",
        "Price": "13",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Casual Vacancy",
        "Author": "J.K. Rowling",
        "User Rating": "3.3",
        "Reviews": "9372",
        "Price": "12",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "The Serpent's Shadow (The Kane Chronicles, Book 3)",
        "Author": "Rick Riordan",
        "User Rating": "4.8",
        "Reviews": "2091",
        "Price": "12",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "Catching Fire (The Hunger Games)",
        "Author": "Suzanne Collins",
        "User Rating": "4.7",
        "Reviews": "22614",
        "Price": "11",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "Fifty Shades Freed: Book Three of the Fifty Shades Trilogy (Fifty Shades of Grey Series) (English Edition)",
        "Author": "E L James",
        "User Rating": "4.5",
        "Reviews": "20262",
        "Price": "11",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "Gone Girl",
        "Author": "Gillian Flynn",
        "User Rating": "4",
        "Reviews": "57271",
        "Price": "10",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "Heaven is for Real: A Little Boy's Astounding Story of His Trip to Heaven and Back",
        "Author": "Todd Burpo",
        "User Rating": "4.7",
        "Reviews": "15779",
        "Price": "10",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Proof of Heaven: A Neurosurgeon's Journey into the Afterlife",
        "Author": "Eben Alexander",
        "User Rating": "4.3",
        "Reviews": "13616",
        "Price": "10",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Killing Lincoln: The Shocking Assassination that Changed America Forever (Bill O'Reilly's Killing Series)",
        "Author": "Bill O'Reilly",
        "User Rating": "4.7",
        "Reviews": "9342",
        "Price": "10",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Mark of Athena (Heroes of Olympus, Book 3)",
        "Author": "Rick Riordan",
        "User Rating": "4.8",
        "Reviews": "6247",
        "Price": "10",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "The Immortal Life of Henrietta Lacks",
        "Author": "Rebecca Skloot",
        "User Rating": "4.7",
        "Reviews": "9289",
        "Price": "9",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Eat to Live: The Amazing Nutrient-Rich Program for Fast and Sustained Weight Loss, Revised Edition",
        "Author": "Joel Fuhrman MD",
        "User Rating": "4.5",
        "Reviews": "6346",
        "Price": "9",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Amateur",
        "Author": "Edward Klein",
        "User Rating": "4.6",
        "Reviews": "2580",
        "Price": "9",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Hunger Games (Book 1)",
        "Author": "Suzanne Collins",
        "User Rating": "4.7",
        "Reviews": "32122",
        "Price": "8",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "Mockingjay (The Hunger Games)",
        "Author": "Suzanne Collins",
        "User Rating": "4.5",
        "Reviews": "26741",
        "Price": "8",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "Oh, the Places You'll Go!",
        "Author": "Dr. Seuss",
        "User Rating": "4.9",
        "Reviews": "21834",
        "Price": "8",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "Jesus Calling: Enjoying Peace in His Presence (with Scripture References)",
        "Author": "Sarah Young",
        "User Rating": "4.9",
        "Reviews": "19576",
        "Price": "8",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Fifty Shades Darker",
        "Author": "E L James",
        "User Rating": "4.4",
        "Reviews": "23631",
        "Price": "7",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "The Great Gatsby",
        "Author": "F. Scott Fitzgerald",
        "User Rating": "4.4",
        "Reviews": "11616",
        "Price": "7",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "Goodnight, Goodnight Construction Site (Hardcover Books for Toddlers, Preschool Books for Kids)",
        "Author": "Sherri Duskey Rinker",
        "User Rating": "4.9",
        "Reviews": "7038",
        "Price": "7",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "The Third Wheel (Diary of a Wimpy Kid, Book 7)",
        "Author": "Jeff Kinney",
        "User Rating": "4.7",
        "Reviews": "6377",
        "Price": "7",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "Wheat Belly: Lose the Wheat, Lose the Weight, and Find Your Path Back to Health",
        "Author": "William Davis",
        "User Rating": "4.6",
        "Reviews": "7497",
        "Price": "6",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Five Dysfunctions of a Team: A Leadership Fable",
        "Author": "Patrick Lencioni",
        "User Rating": "4.6",
        "Reviews": "2466",
        "Price": "6",
        "Year": "2012",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Game of Thrones Boxed Set: A Game of Thrones/A Clash of Kings/A Storm of Swords/A Feast for Crows",
        "Author": "George R.R. Martin",
        "User Rating": "4.6",
        "Reviews": "3444",
        "Price": "5",
        "Year": "2012",
        "Genre": "Fiction"
    },
    {
        "Name": "Diagnostic and Statistical Manual of Mental Disorders, 5th Edition: DSM-5",
        "Author": "American Psychiatric Association",
        "User Rating": "4.5",
        "Reviews": "6679",
        "Price": "105",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Publication Manual of the American Psychological Association, 6th Edition",
        "Author": "American Psychological Association",
        "User Rating": "4.5",
        "Reviews": "4577",
        "Price": "46",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Official SAT Study Guide",
        "Author": "The College Board",
        "User Rating": "4.4",
        "Reviews": "900",
        "Price": "40",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The 5 Love Languages: The Secret to Love That Lasts",
        "Author": "Gary Chapman",
        "User Rating": "4.7",
        "Reviews": "2705",
        "Price": "28",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        "Author": "Stephen R. Covey",
        "User Rating": "4.6",
        "Reviews": "9325",
        "Price": "24",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Wonder",
        "Author": "R. J. Palacio",
        "User Rating": "4.7",
        "Reviews": "21625",
        "Price": "21",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "The Goldfinch: A Novel (Pulitzer Prize for Fiction)",
        "Author": "Donna Tartt",
        "User Rating": "3.9",
        "Reviews": "33844",
        "Price": "20",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "The Legend of Zelda: Hyrule Historia",
        "Author": "Patrick Thorpe",
        "User Rating": "4.9",
        "Reviews": "5396",
        "Price": "20",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Sycamore Row (Jake Brigance)",
        "Author": "John Grisham",
        "User Rating": "4.5",
        "Reviews": "23114",
        "Price": "18",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Diary of a Wimpy Kid: Hard Luck, Book 8",
        "Author": "Jeff Kinney",
        "User Rating": "4.8",
        "Reviews": "6812",
        "Price": "17",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Hyperbole and a Half: Unfortunate Situations, Flawed Coping Mechanisms, Mayhem, and Other Things That Happened",
        "Author": "Allie Brosh",
        "User Rating": "4.7",
        "Reviews": "4896",
        "Price": "17",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Pioneer Woman Cooks: A Year of Holidays: 140 Step-by-Step Recipes for Simple, Scrumptious Celebrations",
        "Author": "Ree Drummond",
        "User Rating": "4.8",
        "Reviews": "2663",
        "Price": "17",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "StrengthsFinder 2.0",
        "Author": "Gallup",
        "User Rating": "4",
        "Reviews": "2464",
        "Price": "17",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Soul Healing Miracles: Ancient and New Sacred Wisdom, Knowledge, and Practical Techniques for Healing the Spiritualâ¦",
        "Author": "Zhi Gang Sha",
        "User Rating": "4.6",
        "Reviews": "220",
        "Price": "17",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "George Washington's Secret Six: The Spy Ring That Saved the American Revolution",
        "Author": "Brian Kilmeade",
        "User Rating": "4.6",
        "Reviews": "4799",
        "Price": "16",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Divergent",
        "Author": "Veronica Roth",
        "User Rating": "4.6",
        "Reviews": "27098",
        "Price": "15",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Things That Matter: Three Decades of Passions, Pastimes and Politics [Deckled Edge]",
        "Author": "Charles Krauthammer",
        "User Rating": "4.7",
        "Reviews": "7034",
        "Price": "15",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Humans of New York",
        "Author": "Brandon Stanton",
        "User Rating": "4.8",
        "Reviews": "3490",
        "Price": "15",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Fifty Shades of Grey: Book One of the Fifty Shades Trilogy (Fifty Shades of Grey Series)",
        "Author": "E L James",
        "User Rating": "3.8",
        "Reviews": "47265",
        "Price": "14",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Inferno",
        "Author": "Dan Brown",
        "User Rating": "4.1",
        "Reviews": "29651",
        "Price": "14",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "The House of Hades (Heroes of Olympus, Book 4)",
        "Author": "Rick Riordan",
        "User Rating": "4.8",
        "Reviews": "6982",
        "Price": "14",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "The Fault in Our Stars",
        "Author": "John Green",
        "User Rating": "4.7",
        "Reviews": "50482",
        "Price": "13",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "To Kill a Mockingbird Mass Market Paperback",
        "Author": "Harper Lee",
        "User Rating": "4.7",
        "Reviews": "39606",
        "Price": "13",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Doctor Sleep: A Novel",
        "Author": "Stephen King",
        "User Rating": "4.7",
        "Reviews": "15845",
        "Price": "13",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "And the Mountains Echoed",
        "Author": "Khaled Hosseini",
        "User Rating": "4.3",
        "Reviews": "12159",
        "Price": "13",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Allegiant",
        "Author": "Veronica Roth",
        "User Rating": "3.9",
        "Reviews": "6310",
        "Price": "13",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Lean In: Women, Work, and the Will to Lead",
        "Author": "Sheryl Sandberg",
        "User Rating": "4.5",
        "Reviews": "6132",
        "Price": "13",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "David and Goliath: Underdogs, Misfits, and the Art of Battling Giants",
        "Author": "Malcolm Gladwell",
        "User Rating": "4.4",
        "Reviews": "4642",
        "Price": "13",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Killing Jesus (Bill O'Reilly's Killing Series)",
        "Author": "Bill O'Reilly",
        "User Rating": "4.5",
        "Reviews": "11391",
        "Price": "12",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Rush Revere and the Brave Pilgrims: Time-Travel Adventures with Exceptional Americans (1)",
        "Author": "Rush Limbaugh",
        "User Rating": "4.9",
        "Reviews": "7150",
        "Price": "12",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Joyland (Hard Case Crime)",
        "Author": "Stephen King",
        "User Rating": "4.5",
        "Reviews": "4748",
        "Price": "12",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Happy, Happy, Happy: My Life and Legacy as the Duck Commander",
        "Author": "Phil Robertson",
        "User Rating": "4.8",
        "Reviews": "4148",
        "Price": "11",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Gone Girl",
        "Author": "Gillian Flynn",
        "User Rating": "4",
        "Reviews": "57271",
        "Price": "10",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Proof of Heaven: A Neurosurgeon's Journey into the Afterlife",
        "Author": "Eben Alexander",
        "User Rating": "4.3",
        "Reviews": "13616",
        "Price": "10",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead",
        "Author": "BreneÌ Brown",
        "User Rating": "4.8",
        "Reviews": "1329",
        "Price": "10",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Day the Crayons Quit",
        "Author": "Drew Daywalt",
        "User Rating": "4.8",
        "Reviews": "8922",
        "Price": "9",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Oh, the Places You'll Go!",
        "Author": "Dr. Seuss",
        "User Rating": "4.9",
        "Reviews": "21834",
        "Price": "8",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Jesus Calling: Enjoying Peace in His Presence (with Scripture References)",
        "Author": "Sarah Young",
        "User Rating": "4.9",
        "Reviews": "19576",
        "Price": "8",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Great Gatsby",
        "Author": "F. Scott Fitzgerald",
        "User Rating": "4.4",
        "Reviews": "11616",
        "Price": "7",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Wheat Belly: Lose the Wheat, Lose the Weight, and Find Your Path Back to Health",
        "Author": "William Davis",
        "User Rating": "4.8",
        "Reviews": "10124",
        "Price": "7",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Quiet: The Power of Introverts in a World That Can't Stop Talking",
        "Author": "Susan Cain",
        "User Rating": "4.6",
        "Reviews": "10009",
        "Price": "7",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Goodnight, Goodnight Construction Site (Hardcover Books for Toddlers, Preschool Books for Kids)",
        "Author": "Sherri Duskey Rinker",
        "User Rating": "4.9",
        "Reviews": "7038",
        "Price": "7",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "The Book Thief",
        "Author": "Markus Zusak",
        "User Rating": "4.6",
        "Reviews": "23148",
        "Price": "6",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)",
        "Author": "Don Miguel Ruiz",
        "User Rating": "4.7",
        "Reviews": "12345",
        "Price": "6",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Five Dysfunctions of a Team: A Leadership Fable",
        "Author": "Patrick Lencioni",
        "User Rating": "4.6",
        "Reviews": "3207",
        "Price": "6",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Shred: The Revolutionary Diet: 6 Weeks 4 Inches 2 Sizes",
        "Author": "Ian K. Smith M.D.",
        "User Rating": "4.1",
        "Reviews": "2272",
        "Price": "6",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Game of Thrones Boxed Set: A Game of Thrones/A Clash of Kings/A Storm of Swords/A Feast for Crows",
        "Author": "George R.R. Martin",
        "User Rating": "4.6",
        "Reviews": "5594",
        "Price": "5",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "The Very Hungry Caterpillar",
        "Author": "Eric Carle",
        "User Rating": "4.9",
        "Reviews": "5034",
        "Price": "5",
        "Year": "2013",
        "Genre": "Fiction"
    },
    {
        "Name": "Laugh-Out-Loud Jokes for Kids",
        "Author": "Rob Elliott",
        "User Rating": "4.6",
        "Reviews": "6990",
        "Price": "4",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Knock-Knock Jokes for Kids",
        "Author": "Rob Elliott",
        "User Rating": "4.5",
        "Reviews": "3673",
        "Price": "4",
        "Year": "2013",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Diagnostic and Statistical Manual of Mental Disorders, 5th Edition: DSM-5",
        "Author": "American Psychiatric Association",
        "User Rating": "4.5",
        "Reviews": "6679",
        "Price": "105",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Publication Manual of the American Psychological Association, 6th Edition",
        "Author": "American Psychological Association",
        "User Rating": "4.5",
        "Reviews": "5545",
        "Price": "46",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Official SAT Study Guide",
        "Author": "The College Board",
        "User Rating": "4.4",
        "Reviews": "1201",
        "Price": "40",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Alchemist",
        "Author": "Paulo Coelho",
        "User Rating": "4.7",
        "Reviews": "35799",
        "Price": "39",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "A Game of Thrones / A Clash of Kings / A Storm of Swords / A Feast of Crows / A Dance with Dragons",
        "Author": "George R. R. Martin",
        "User Rating": "4.7",
        "Reviews": "19735",
        "Price": "30",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "The 5 Love Languages: The Secret to Love That Lasts",
        "Author": "Gary Chapman",
        "User Rating": "4.7",
        "Reviews": "3477",
        "Price": "28",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Capital in the Twenty First Century",
        "Author": "Thomas Piketty",
        "User Rating": "4.5",
        "Reviews": "2884",
        "Price": "28",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Thug Kitchen: The Official Cookbook: Eat Like You Give a F*ck (Thug Kitchen Cookbooks)",
        "Author": "Thug Kitchen",
        "User Rating": "4.6",
        "Reviews": "9023",
        "Price": "23",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Diary of a Wimpy Kid: The Long Haul",
        "Author": "Jeff Kinney",
        "User Rating": "4.8",
        "Reviews": "6540",
        "Price": "22",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "The Goldfinch: A Novel (Pulitzer Prize for Fiction)",
        "Author": "Donna Tartt",
        "User Rating": "3.9",
        "Reviews": "33844",
        "Price": "20",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Make It Ahead: A Barefoot Contessa Cookbook",
        "Author": "Ina Garten",
        "User Rating": "4.5",
        "Reviews": "1386",
        "Price": "20",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "What If?: Serious Scientific Answers to Absurd Hypothetical Questions",
        "Author": "Randall Munroe",
        "User Rating": "4.7",
        "Reviews": "9292",
        "Price": "17",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "StrengthsFinder 2.0",
        "Author": "Gallup",
        "User Rating": "4",
        "Reviews": "2674",
        "Price": "17",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        "Author": "Laura Hillenbrand",
        "User Rating": "4.8",
        "Reviews": "29673",
        "Price": "16",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Divergent",
        "Author": "Veronica Roth",
        "User Rating": "4.6",
        "Reviews": "27098",
        "Price": "15",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Humans of New York",
        "Author": "Brandon Stanton",
        "User Rating": "4.8",
        "Reviews": "3490",
        "Price": "15",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "All the Light We Cannot See",
        "Author": "Anthony Doerr",
        "User Rating": "4.6",
        "Reviews": "20454",
        "Price": "14",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "The Fault in Our Stars",
        "Author": "John Green",
        "User Rating": "4.7",
        "Reviews": "50482",
        "Price": "13",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        "Author": "Laura Hillenbrand",
        "User Rating": "4.8",
        "Reviews": "10133",
        "Price": "13",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "To Kill a Mockingbird (Harperperennial Modern Classics)",
        "Author": "Harper Lee",
        "User Rating": "4.8",
        "Reviews": "39234",
        "Price": "12",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics",
        "Author": "Daniel James Brown",
        "User Rating": "4.8",
        "Reviews": "23358",
        "Price": "12",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Rush Revere and the First Patriots: Time-Travel Adventures With Exceptional Americans (2)",
        "Author": "Rush Limbaugh",
        "User Rating": "4.9",
        "Reviews": "3836",
        "Price": "12",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Little Blue Truck",
        "Author": "Alice Schertle",
        "User Rating": "4.9",
        "Reviews": "1884",
        "Price": "12",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Wonder (French Edition)",
        "Author": "R. J. Palacio",
        "User Rating": "4.8",
        "Reviews": "350",
        "Price": "12",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Orphan Train",
        "Author": "Christina Baker Kline",
        "User Rating": "4.6",
        "Reviews": "21930",
        "Price": "11",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "The Blood of Olympus (The Heroes of Olympus (5))",
        "Author": "Rick Riordan",
        "User Rating": "4.8",
        "Reviews": "6600",
        "Price": "11",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "How to Win Friends & Influence People",
        "Author": "Dale Carnegie",
        "User Rating": "4.7",
        "Reviews": "5013",
        "Price": "11",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Grain Brain: The Surprising Truth about Wheat, Carbs, and Sugar--Your Brain's Silent Killers",
        "Author": "David Perlmutter MD",
        "User Rating": "4.6",
        "Reviews": "5972",
        "Price": "10",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Mindset: The New Psychology of Success",
        "Author": "Carol S. Dweck",
        "User Rating": "4.6",
        "Reviews": "5542",
        "Price": "10",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Gone Girl",
        "Author": "Gillian Flynn",
        "User Rating": "4",
        "Reviews": "57271",
        "Price": "9",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "The Day the Crayons Quit",
        "Author": "Drew Daywalt",
        "User Rating": "4.8",
        "Reviews": "8922",
        "Price": "9",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "If I Stay",
        "Author": "Gayle Forman",
        "User Rating": "4.3",
        "Reviews": "7153",
        "Price": "9",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Oh, the Places You'll Go!",
        "Author": "Dr. Seuss",
        "User Rating": "4.9",
        "Reviews": "21834",
        "Price": "8",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Jesus Calling: Enjoying Peace in His Presence (with Scripture References)",
        "Author": "Sarah Young",
        "User Rating": "4.9",
        "Reviews": "19576",
        "Price": "8",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Maze Runner (Book 1)",
        "Author": "James Dashner",
        "User Rating": "4.5",
        "Reviews": "10101",
        "Price": "8",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "The Book with No Pictures",
        "Author": "B. J. Novak",
        "User Rating": "4.8",
        "Reviews": "8081",
        "Price": "8",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "The Fault in Our Stars",
        "Author": "John Green",
        "User Rating": "4.7",
        "Reviews": "50482",
        "Price": "7",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "The Great Gatsby",
        "Author": "F. Scott Fitzgerald",
        "User Rating": "4.4",
        "Reviews": "11616",
        "Price": "7",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Looking for Alaska",
        "Author": "John Green",
        "User Rating": "4.5",
        "Reviews": "8491",
        "Price": "7",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "The Book Thief",
        "Author": "Markus Zusak",
        "User Rating": "4.6",
        "Reviews": "23148",
        "Price": "6",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Divergent / Insurgent",
        "Author": "Veronica Roth",
        "User Rating": "4.5",
        "Reviews": "17684",
        "Price": "6",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Killing Patton: The Strange Death of World War II's Most Audacious General (Bill O'Reilly's Killing Series)",
        "Author": "Bill O'Reilly",
        "User Rating": "4.6",
        "Reviews": "10927",
        "Price": "6",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "JOURNEY TO THE ICE PALACE",
        "Author": "RH Disney",
        "User Rating": "4.6",
        "Reviews": "978",
        "Price": "6",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Love You Forever",
        "Author": "Robert Munsch",
        "User Rating": "4.8",
        "Reviews": "18613",
        "Price": "5",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "The Very Hungry Caterpillar",
        "Author": "Eric Carle",
        "User Rating": "4.9",
        "Reviews": "8034",
        "Price": "5",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Frozen (Little Golden Book)",
        "Author": "RH Disney",
        "User Rating": "4.7",
        "Reviews": "3642",
        "Price": "5",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Ultimate Sticker Book: Frozen: More Than 60 Reusable Full-Color Stickers",
        "Author": "DK",
        "User Rating": "4.5",
        "Reviews": "2586",
        "Price": "5",
        "Year": "2014",
        "Genre": "Fiction"
    },
    {
        "Name": "Laugh-Out-Loud Jokes for Kids",
        "Author": "Rob Elliott",
        "User Rating": "4.6",
        "Reviews": "6990",
        "Price": "4",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Knock-Knock Jokes for Kids",
        "Author": "Rob Elliott",
        "User Rating": "4.5",
        "Reviews": "3673",
        "Price": "4",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "First 100 Words",
        "Author": "Roger Priddy",
        "User Rating": "4.7",
        "Reviews": "3465",
        "Price": "4",
        "Year": "2014",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Publication Manual of the American Psychological Association, 6th Edition",
        "Author": "American Psychological Association",
        "User Rating": "4.5",
        "Reviews": "7003",
        "Price": "46",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Thug Kitchen: The Official Cookbook: Eat Like You Give a F*ck (Thug Kitchen Cookbooks)",
        "Author": "Thug Kitchen",
        "User Rating": "4.6",
        "Reviews": "10233",
        "Price": "23",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Go Set a Watchman: A Novel",
        "Author": "Harper Lee",
        "User Rating": "3.6",
        "Reviews": "14982",
        "Price": "19",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "The Girl on the Train",
        "Author": "Paula Hawkins",
        "User Rating": "4.1",
        "Reviews": "79446",
        "Price": "18",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "StrengthsFinder 2.0",
        "Author": "Gallup",
        "User Rating": "4",
        "Reviews": "2834",
        "Price": "17",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Humans of New York : Stories",
        "Author": "Brandon Stanton",
        "User Rating": "4.9",
        "Reviews": "2812",
        "Price": "17",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Whole30: The 30-Day Guide to Total Health and Food Freedom",
        "Author": "Melissa Hartwig Urban",
        "User Rating": "4.6",
        "Reviews": "7508",
        "Price": "16",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Wright Brothers",
        "Author": "David McCullough",
        "User Rating": "4.7",
        "Reviews": "6169",
        "Price": "16",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        "Author": "Stephen R. Covey",
        "User Rating": "4.7",
        "Reviews": "4725",
        "Price": "16",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Being Mortal: Medicine and What Matters in the End",
        "Author": "Atul Gawande",
        "User Rating": "4.8",
        "Reviews": "11113",
        "Price": "15",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "All the Light We Cannot See",
        "Author": "Anthony Doerr",
        "User Rating": "4.6",
        "Reviews": "36348",
        "Price": "14",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "Grey: Fifty Shades of Grey as Told by Christian (Fifty Shades of Grey Series)",
        "Author": "E L James",
        "User Rating": "4.4",
        "Reviews": "25624",
        "Price": "14",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "The Pioneer Woman Cooks: Dinnertime - Comfort Classics, Freezer Food, 16-minute Meals, and Other Delicious Ways to Solveâ¦",
        "Author": "Ree Drummond",
        "User Rating": "4.8",
        "Reviews": "3428",
        "Price": "14",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "What Pet Should I Get? (Classic Seuss)",
        "Author": "Dr. Seuss",
        "User Rating": "4.7",
        "Reviews": "1873",
        "Price": "14",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "Between the World and Me",
        "Author": "Ta-Nehisi Coates",
        "User Rating": "4.7",
        "Reviews": "10070",
        "Price": "13",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics",
        "Author": "Daniel James Brown",
        "User Rating": "4.8",
        "Reviews": "23358",
        "Price": "12",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Nightingale: A Novel",
        "Author": "Kristin Hannah",
        "User Rating": "4.8",
        "Reviews": "49288",
        "Price": "11",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing",
        "Author": "Marie KondÅ",
        "User Rating": "4.5",
        "Reviews": "22641",
        "Price": "11",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "How to Win Friends & Influence People",
        "Author": "Dale Carnegie",
        "User Rating": "4.7",
        "Reviews": "13455",
        "Price": "11",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Balance (Angie's Extreme Stress Menders)",
        "Author": "Angie Grace",
        "User Rating": "4.6",
        "Reviews": "1909",
        "Price": "11",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "To Kill a Mockingbird",
        "Author": "Harper Lee",
        "User Rating": "4.8",
        "Reviews": "26234",
        "Price": "10",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "Mindset: The New Psychology of Success",
        "Author": "Carol S. Dweck",
        "User Rating": "4.6",
        "Reviews": "5542",
        "Price": "10",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Martian",
        "Author": "Andy Weir",
        "User Rating": "4.7",
        "Reviews": "39459",
        "Price": "9",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "American Sniper: The Autobiography of the Most Lethal Sniper in U.S. Military History",
        "Author": "Chris Kyle",
        "User Rating": "4.6",
        "Reviews": "15921",
        "Price": "9",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Secret Garden: An Inky Treasure Hunt and Coloring Book (For Adults, mindfulness coloring)",
        "Author": "Johanna Basford",
        "User Rating": "4.7",
        "Reviews": "9366",
        "Price": "9",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Day the Crayons Quit",
        "Author": "Drew Daywalt",
        "User Rating": "4.8",
        "Reviews": "8922",
        "Price": "9",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "Enchanted Forest: An Inky Quest and Coloring book (Activity Books, Mindfulness and Meditation, Illustrated Floral Printsâ¦",
        "Author": "Johanna Basford",
        "User Rating": "4.7",
        "Reviews": "5413",
        "Price": "9",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Harry Potter Coloring Book",
        "Author": "Scholastic",
        "User Rating": "4.7",
        "Reviews": "3564",
        "Price": "9",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Oh, the Places You'll Go!",
        "Author": "Dr. Seuss",
        "User Rating": "4.9",
        "Reviews": "21834",
        "Price": "8",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "Jesus Calling: Enjoying Peace in His Presence (with Scripture References)",
        "Author": "Sarah Young",
        "User Rating": "4.9",
        "Reviews": "19576",
        "Price": "8",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The 5 Love Languages: The Secret to Love that Lasts",
        "Author": "Gary Chapman",
        "User Rating": "4.8",
        "Reviews": "12035",
        "Price": "8",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Book with No Pictures",
        "Author": "B. J. Novak",
        "User Rating": "4.8",
        "Reviews": "8081",
        "Price": "8",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "Adult Coloring Books: A Coloring Book for Adults Featuring Mandalas and Henna Inspired Flowers, Animals, and Paisleyâ¦",
        "Author": "Coloring Books for Adults",
        "User Rating": "4.5",
        "Reviews": "2426",
        "Price": "8",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Old School (Diary of a Wimpy Kid #10)",
        "Author": "Jeff Kinney",
        "User Rating": "4.8",
        "Reviews": "6169",
        "Price": "7",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "Wonder. Todos somos únicos (Spanish Edition)",
        "Author": "R. J. Palacio",
        "User Rating": "4.8",
        "Reviews": "67",
        "Price": "7",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)",
        "Author": "Don Miguel Ruiz",
        "User Rating": "4.7",
        "Reviews": "16453",
        "Price": "6",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Adult Coloring Book: Stress Relieving Patterns",
        "Author": "Blue Star Coloring",
        "User Rating": "4.4",
        "Reviews": "2951",
        "Price": "6",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Adult Coloring Book: Stress Relieving Animal Designs",
        "Author": "Blue Star Coloring",
        "User Rating": "4.6",
        "Reviews": "2925",
        "Price": "6",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Love You Forever",
        "Author": "Robert Munsch",
        "User Rating": "4.8",
        "Reviews": "18613",
        "Price": "5",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "Dear Zoo: A Lift-the-Flap Book",
        "Author": "Rod Campbell",
        "User Rating": "4.8",
        "Reviews": "10922",
        "Price": "5",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "The Very Hungry Caterpillar",
        "Author": "Eric Carle",
        "User Rating": "4.9",
        "Reviews": "10435",
        "Price": "5",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "Baby Touch and Feel: Animals",
        "Author": "DK",
        "User Rating": "4.6",
        "Reviews": "5360",
        "Price": "5",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Killing Reagan: The Violent Assault That Changed a Presidency (Bill O'Reilly's Killing Series)",
        "Author": "Bill O'Reilly",
        "User Rating": "4.6",
        "Reviews": "5235",
        "Price": "5",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Creative Haven Owls Coloring Book (Adult Coloring)",
        "Author": "Marjorie Sarnat",
        "User Rating": "4.8",
        "Reviews": "3871",
        "Price": "5",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Dover Creative Haven Art Nouveau Animal Designs Coloring Book (Creative Haven Coloring Books)",
        "Author": "Marty Noble",
        "User Rating": "4.6",
        "Reviews": "2134",
        "Price": "5",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Giraffes Can't Dance",
        "Author": "Giles Andreae",
        "User Rating": "4.8",
        "Reviews": "14038",
        "Price": "4",
        "Year": "2015",
        "Genre": "Fiction"
    },
    {
        "Name": "Laugh-Out-Loud Jokes for Kids",
        "Author": "Rob Elliott",
        "User Rating": "4.6",
        "Reviews": "6990",
        "Price": "4",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "First 100 Words",
        "Author": "Roger Priddy",
        "User Rating": "4.7",
        "Reviews": "4330",
        "Price": "4",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Creative Haven Creative Cats Coloring Book (Adult Coloring)",
        "Author": "Marjorie Sarnat",
        "User Rating": "4.8",
        "Reviews": "4022",
        "Price": "4",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Knock-Knock Jokes for Kids",
        "Author": "Rob Elliott",
        "User Rating": "4.5",
        "Reviews": "3673",
        "Price": "4",
        "Year": "2015",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Hamilton: The Revolution",
        "Author": "Lin-Manuel Miranda",
        "User Rating": "4.9",
        "Reviews": "5867",
        "Price": "54",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Harry Potter Paperback Box Set (Books 1-7)",
        "Author": "J. K. Rowling",
        "User Rating": "4.8",
        "Reviews": "13471",
        "Price": "52",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "Publication Manual of the American Psychological Association, 6th Edition",
        "Author": "American Psychological Association",
        "User Rating": "4.5",
        "Reviews": "7530",
        "Price": "46",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Official SAT Study Guide, 2016 Edition (Official Study Guide for the New Sat)",
        "Author": "The College Board",
        "User Rating": "4.3",
        "Reviews": "807",
        "Price": "36",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Harry Potter and the Chamber of Secrets: The Illustrated Edition (Harry Potter, Book 2)",
        "Author": "J.K. Rowling",
        "User Rating": "4.9",
        "Reviews": "19622",
        "Price": "30",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "Thug Kitchen: The Official Cookbook: Eat Like You Give a F*ck (Thug Kitchen Cookbooks)",
        "Author": "Thug Kitchen",
        "User Rating": "4.6",
        "Reviews": "11133",
        "Price": "23",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Harry Potter and the Sorcerer's Stone: The Illustrated Edition (Harry Potter, Book 1)",
        "Author": "J.K. Rowling",
        "User Rating": "4.9",
        "Reviews": "10052",
        "Price": "22",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "Double Down (Diary of a Wimpy Kid #11)",
        "Author": "Jeff Kinney",
        "User Rating": "4.8",
        "Reviews": "5118",
        "Price": "20",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "Born to Run",
        "Author": "Bruce Springsteen",
        "User Rating": "4.7",
        "Reviews": "3729",
        "Price": "18",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "StrengthsFinder 2.0",
        "Author": "Gallup",
        "User Rating": "4",
        "Reviews": "3045",
        "Price": "17",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Whole30: The 30-Day Guide to Total Health and Food Freedom",
        "Author": "Melissa Hartwig Urban",
        "User Rating": "4.6",
        "Reviews": "7508",
        "Price": "16",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Cravings: Recipes for All the Food You Want to Eat: A Cookbook",
        "Author": "Chrissy Teigen",
        "User Rating": "4.7",
        "Reviews": "4761",
        "Price": "16",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        "Author": "Stephen R. Covey",
        "User Rating": "4.7",
        "Reviews": "4725",
        "Price": "16",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "To Kill a Mockingbird: A Graphic Novel",
        "Author": "Harper Lee",
        "User Rating": "4.7",
        "Reviews": "1021",
        "Price": "16",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "Fantastic Beasts and Where to Find Them: The Original Screenplay (Harry Potter)",
        "Author": "J.K. Rowling",
        "User Rating": "4.7",
        "Reviews": "4370",
        "Price": "15",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "Hillbilly Elegy: A Memoir of a Family and Culture in Crisis",
        "Author": "J. D. Vance",
        "User Rating": "4.4",
        "Reviews": "15526",
        "Price": "14",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "When Breath Becomes Air",
        "Author": "Paul Kalanithi",
        "User Rating": "4.8",
        "Reviews": "13779",
        "Price": "14",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Between the World and Me",
        "Author": "Ta-Nehisi Coates",
        "User Rating": "4.7",
        "Reviews": "10070",
        "Price": "13",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Alexander Hamilton",
        "Author": "Ron Chernow",
        "User Rating": "4.8",
        "Reviews": "9198",
        "Price": "13",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Harry Potter and the Cursed Child, Parts 1 & 2, Special Rehearsal Edition Script",
        "Author": "J.K. Rowling",
        "User Rating": "4",
        "Reviews": "23973",
        "Price": "12",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "The Constitution of the United States",
        "Author": "Delegates of the ConstitutionalÂ",
        "User Rating": "4.8",
        "Reviews": "2774",
        "Price": "12",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Wonder. El juego de Christopher (Spanish Edition)",
        "Author": "R. J. Palacio",
        "User Rating": "4.8",
        "Reviews": "32",
        "Price": "12",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "The Nightingale: A Novel",
        "Author": "Kristin Hannah",
        "User Rating": "4.8",
        "Reviews": "49288",
        "Price": "11",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing",
        "Author": "Marie KondÅ",
        "User Rating": "4.5",
        "Reviews": "22641",
        "Price": "11",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "How to Win Friends & Influence People",
        "Author": "Dale Carnegie",
        "User Rating": "4.7",
        "Reviews": "16345",
        "Price": "11",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Mindset: The New Psychology of Success",
        "Author": "Carol S. Dweck",
        "User Rating": "4.6",
        "Reviews": "5542",
        "Price": "10",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Wonderful Things You Will Be",
        "Author": "Emily Winfield Martin",
        "User Rating": "4.9",
        "Reviews": "1245",
        "Price": "10",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "Night (Night)",
        "Author": "Elie Wiesel",
        "User Rating": "4.7",
        "Reviews": "5178",
        "Price": "9",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Uninvited: Living Loved When You Feel Less Than, Left Out, and Lonely",
        "Author": "Lysa TerKeurst",
        "User Rating": "4.7",
        "Reviews": "4585",
        "Price": "9",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "PokÃ©mon Deluxe Essential Handbook: The Need-to-Know Stats and Facts on Over 700 PokÃ©mon",
        "Author": "Scholastic",
        "User Rating": "4.7",
        "Reviews": "3503",
        "Price": "9",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "Oh, the Places You'll Go!",
        "Author": "Dr. Seuss",
        "User Rating": "4.9",
        "Reviews": "21834",
        "Price": "8",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "Jesus Calling: Enjoying Peace in His Presence (with Scripture References)",
        "Author": "Sarah Young",
        "User Rating": "4.9",
        "Reviews": "19576",
        "Price": "8",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Milk and Honey",
        "Author": "Rupi Kaur",
        "User Rating": "4.7",
        "Reviews": "17739",
        "Price": "8",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "10-Day Green Smoothie Cleanse",
        "Author": "JJ Smith",
        "User Rating": "4.7",
        "Reviews": "17350",
        "Price": "8",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The 5 Love Languages: The Secret to Love that Lasts",
        "Author": "Gary Chapman",
        "User Rating": "4.8",
        "Reviews": "16678",
        "Price": "8",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "A Man Called Ove: A Novel",
        "Author": "Fredrik Backman",
        "User Rating": "4.6",
        "Reviews": "12345",
        "Price": "8",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "Fahrenheit 451",
        "Author": "Ray Bradbury",
        "User Rating": "4.6",
        "Reviews": "5234",
        "Price": "8",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        "Author": "Jen Sincero",
        "User Rating": "4.6",
        "Reviews": "3000",
        "Price": "8",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Girl on the Train",
        "Author": "Paula Hawkins",
        "User Rating": "4.1",
        "Reviews": "79446",
        "Price": "7",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)",
        "Author": "Don Miguel Ruiz",
        "User Rating": "4.7",
        "Reviews": "17456",
        "Price": "6",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Killing the Rising Sun: How America Vanquished World War II Japan (Bill O'Reilly's Killing Series)",
        "Author": "Bill O'Reilly",
        "User Rating": "4.8",
        "Reviews": "8916",
        "Price": "6",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Very Hungry Caterpillar",
        "Author": "Eric Carle",
        "User Rating": "4.9",
        "Reviews": "12353",
        "Price": "5",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "Dear Zoo: A Lift-the-Flap Book",
        "Author": "Rod Campbell",
        "User Rating": "4.8",
        "Reviews": "10922",
        "Price": "5",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "The Magnolia Story",
        "Author": "Chip Gaines",
        "User Rating": "4.9",
        "Reviews": "7861",
        "Price": "5",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Going-To-Bed Book",
        "Author": "Sandra Boynton",
        "User Rating": "4.8",
        "Reviews": "5249",
        "Price": "5",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "Giraffes Can't Dance",
        "Author": "Giles Andreae",
        "User Rating": "4.8",
        "Reviews": "14038",
        "Price": "4",
        "Year": "2016",
        "Genre": "Fiction"
    },
    {
        "Name": "Calm the F*ck Down: An Irreverent Adult Coloring Book (Irreverent Book Series)",
        "Author": "Sasha O'Hara",
        "User Rating": "4.6",
        "Reviews": "10369",
        "Price": "4",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Laugh-Out-Loud Jokes for Kids",
        "Author": "Rob Elliott",
        "User Rating": "4.6",
        "Reviews": "6990",
        "Price": "4",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "First 100 Words",
        "Author": "Roger Priddy",
        "User Rating": "4.7",
        "Reviews": "5774",
        "Price": "4",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Adult Coloring Book Designs: Stress Relief Coloring Book: Garden Designs, Mandalas, Animals, and Paisley Patterns",
        "Author": "Adult Coloring Book Designs",
        "User Rating": "4.5",
        "Reviews": "2313",
        "Price": "4",
        "Year": "2016",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Publication Manual of the American Psychological Association, 6th Edition",
        "Author": "American Psychological Association",
        "User Rating": "4.5",
        "Reviews": "7934",
        "Price": "46",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Harry Potter and the Prisoner of Azkaban: The Illustrated Edition (Harry Potter, Book 3)",
        "Author": "J.K. Rowling",
        "User Rating": "4.9",
        "Reviews": "3146",
        "Price": "30",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "Player's Handbook (Dungeons & Dragons)",
        "Author": "Wizards RPG Team",
        "User Rating": "4.8",
        "Reviews": "16990",
        "Price": "27",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "Thug Kitchen: The Official Cookbook: Eat Like You Give a F*ck (Thug Kitchen Cookbooks)",
        "Author": "Thug Kitchen",
        "User Rating": "4.6",
        "Reviews": "12012",
        "Price": "23",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Obama: An Intimate Portrait",
        "Author": "Pete Souza",
        "User Rating": "4.9",
        "Reviews": "3192",
        "Price": "22",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers",
        "Author": "Timothy Ferriss",
        "User Rating": "4.6",
        "Reviews": "4360",
        "Price": "21",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Leonardo da Vinci",
        "Author": "Walter Isaacson",
        "User Rating": "4.5",
        "Reviews": "3014",
        "Price": "21",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "What Happened",
        "Author": "Hillary Rodham Clinton",
        "User Rating": "4.6",
        "Reviews": "5492",
        "Price": "18",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Killers of the Flower Moon: The Osage Murders and the Birth of the FBI",
        "Author": "David Grann",
        "User Rating": "4.6",
        "Reviews": "8393",
        "Price": "17",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Getaway",
        "Author": "Jeff Kinney",
        "User Rating": "4.8",
        "Reviews": "5836",
        "Price": "17",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "StrengthsFinder 2.0",
        "Author": "Gallup",
        "User Rating": "4",
        "Reviews": "5069",
        "Price": "17",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Whole30: The 30-Day Guide to Total Health and Food Freedom",
        "Author": "Melissa Hartwig Urban",
        "User Rating": "4.6",
        "Reviews": "7508",
        "Price": "16",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        "Author": "Stephen R. Covey",
        "User Rating": "4.7",
        "Reviews": "4725",
        "Price": "16",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "A Gentleman in Moscow: A Novel",
        "Author": "Amor Towles",
        "User Rating": "4.7",
        "Reviews": "19699",
        "Price": "15",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
        "Author": "Mark Manson",
        "User Rating": "4.6",
        "Reviews": "12932",
        "Price": "15",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Hillbilly Elegy: A Memoir of a Family and Culture in Crisis",
        "Author": "J. D. Vance",
        "User Rating": "4.4",
        "Reviews": "15526",
        "Price": "14",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Origin: A Novel (Robert Langdon)",
        "Author": "Dan Brown",
        "User Rating": "4.3",
        "Reviews": "18904",
        "Price": "13",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "Ready Player One: A Novel",
        "Author": "Ernest Cline",
        "User Rating": "4.6",
        "Reviews": "22536",
        "Price": "12",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing",
        "Author": "Marie KondÅ",
        "User Rating": "4.5",
        "Reviews": "22641",
        "Price": "11",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "How to Win Friends & Influence People",
        "Author": "Dale Carnegie",
        "User Rating": "4.7",
        "Reviews": "20567",
        "Price": "11",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Make Your Bed: Little Things That Can Change Your Life...And Maybe the World",
        "Author": "Admiral William H. McRaven",
        "User Rating": "4.7",
        "Reviews": "10199",
        "Price": "11",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Wonderful Things You Will Be",
        "Author": "Emily Winfield Martin",
        "User Rating": "4.9",
        "Reviews": "3054",
        "Price": "10",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "Astrophysics for People in a Hurry",
        "Author": "Neil deGrasse Tyson",
        "User Rating": "4.7",
        "Reviews": "9374",
        "Price": "9",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Thirteen Reasons Why",
        "Author": "Jay Asher",
        "User Rating": "4.5",
        "Reviews": "7932",
        "Price": "9",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "The Sun and Her Flowers",
        "Author": "Rupi Kaur",
        "User Rating": "4.7",
        "Reviews": "5487",
        "Price": "9",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Option B: Facing Adversity, Building Resilience, and Finding Joy",
        "Author": "Sheryl Sandberg",
        "User Rating": "4.5",
        "Reviews": "1831",
        "Price": "9",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Wonder",
        "Author": "R. J. Palacio",
        "User Rating": "4.8",
        "Reviews": "124",
        "Price": "9",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "A Man Called Ove: A Novel",
        "Author": "Fredrik Backman",
        "User Rating": "4.6",
        "Reviews": "23848",
        "Price": "8",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "Oh, the Places You'll Go!",
        "Author": "Dr. Seuss",
        "User Rating": "4.9",
        "Reviews": "21834",
        "Price": "8",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "The Shack: Where Tragedy Confronts Eternity",
        "Author": "William P. Young",
        "User Rating": "4.6",
        "Reviews": "19720",
        "Price": "8",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "The 5 Love Languages: The Secret to Love that Lasts",
        "Author": "Gary Chapman",
        "User Rating": "4.8",
        "Reviews": "19355",
        "Price": "8",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Milk and Honey",
        "Author": "Rupi Kaur",
        "User Rating": "4.7",
        "Reviews": "17739",
        "Price": "8",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Dog Man: A Tale of Two Kitties: From the Creator of Captain Underpants (Dog Man #3)",
        "Author": "Dav Pilkey",
        "User Rating": "4.9",
        "Reviews": "4786",
        "Price": "8",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        "Author": "Jen Sincero",
        "User Rating": "4.7",
        "Reviews": "3433",
        "Price": "8",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Handmaid's Tale",
        "Author": "Margaret Atwood",
        "User Rating": "4.3",
        "Reviews": "29442",
        "Price": "7",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "The Instant Pot Electric Pressure Cooker Cookbook: Easy Recipes for Fast & Healthy Meals",
        "Author": "Laurel Randolph",
        "User Rating": "4.3",
        "Reviews": "7368",
        "Price": "7",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "1984 (Signet Classics)",
        "Author": "George Orwell",
        "User Rating": "4.7",
        "Reviews": "21424",
        "Price": "6",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)",
        "Author": "Don Miguel Ruiz",
        "User Rating": "4.7",
        "Reviews": "19675",
        "Price": "6",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Milk and Vine: Inspirational Quotes From Classic Vines",
        "Author": "Adam Gasiewski",
        "User Rating": "4.4",
        "Reviews": "3113",
        "Price": "6",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Very Hungry Caterpillar",
        "Author": "Eric Carle",
        "User Rating": "4.9",
        "Reviews": "16435",
        "Price": "5",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "Brown Bear, Brown Bear, What Do You See?",
        "Author": "Bill Martin Jr.",
        "User Rating": "4.9",
        "Reviews": "14344",
        "Price": "5",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "Dear Zoo: A Lift-the-Flap Book",
        "Author": "Rod Campbell",
        "User Rating": "4.8",
        "Reviews": "10922",
        "Price": "5",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "The Pout-Pout Fish",
        "Author": "Deborah Diesen",
        "User Rating": "4.8",
        "Reviews": "9784",
        "Price": "5",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "Goodnight Moon",
        "Author": "Margaret Wise Brown",
        "User Rating": "4.8",
        "Reviews": "8837",
        "Price": "5",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "The Going-To-Bed Book",
        "Author": "Sandra Boynton",
        "User Rating": "4.8",
        "Reviews": "5249",
        "Price": "5",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "Giraffes Can't Dance",
        "Author": "Giles Andreae",
        "User Rating": "4.8",
        "Reviews": "14038",
        "Price": "4",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "First 100 Words",
        "Author": "Roger Priddy",
        "User Rating": "4.7",
        "Reviews": "8661",
        "Price": "4",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "If Animals Kissed Good Night",
        "Author": "Ann Whitford Paul",
        "User Rating": "4.8",
        "Reviews": "8345",
        "Price": "4",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "Laugh-Out-Loud Jokes for Kids",
        "Author": "Rob Elliott",
        "User Rating": "4.6",
        "Reviews": "6990",
        "Price": "4",
        "Year": "2017",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Puppy Birthday to You! (Paw Patrol) (Little Golden Book)",
        "Author": "Golden Books",
        "User Rating": "4.8",
        "Reviews": "4757",
        "Price": "4",
        "Year": "2017",
        "Genre": "Fiction"
    },
    {
        "Name": "Publication Manual of the American Psychological Association, 6th Edition",
        "Author": "American Psychological Association",
        "User Rating": "4.5",
        "Reviews": "8580",
        "Price": "46",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Player's Handbook (Dungeons & Dragons)",
        "Author": "Wizards RPG Team",
        "User Rating": "4.8",
        "Reviews": "16990",
        "Price": "27",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "Fear: Trump in the White House",
        "Author": "Bob Woodward",
        "User Rating": "4.4",
        "Reviews": "6042",
        "Price": "23",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Homebody: A Guide to Creating Spaces You Never Want to Leave",
        "Author": "Joanna Gaines",
        "User Rating": "4.8",
        "Reviews": "3776",
        "Price": "22",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking",
        "Author": "Samin Nosrat",
        "User Rating": "4.8",
        "Reviews": "7802",
        "Price": "20",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The President Is Missing: A Novel",
        "Author": "James Patterson",
        "User Rating": "4.3",
        "Reviews": "10191",
        "Price": "18",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "The Plant Paradox Cookbook: 100 Delicious Recipes to Help You Lose Weight, Heal Your Gut, and Live Lectin-Free",
        "Author": "Dr. Steven R Gundry MD",
        "User Rating": "4.5",
        "Reviews": "3601",
        "Price": "18",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Plant Paradox: The Hidden Dangers in \"Healthy\" Foods That Cause Disease and Weight Gain",
        "Author": "Dr. Steven R Gundry MD",
        "User Rating": "4.4",
        "Reviews": "7058",
        "Price": "17",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Magnolia Table: A Collection of Recipes for Gathering",
        "Author": "Joanna Gaines",
        "User Rating": "4.8",
        "Reviews": "9867",
        "Price": "16",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Ship of Fools: How a Selfish Ruling Class Is Bringing America to the Brink of Revolution",
        "Author": "Tucker Carlson",
        "User Rating": "4.8",
        "Reviews": "3923",
        "Price": "16",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "12 Rules for Life: An Antidote to Chaos",
        "Author": "Jordan B. Peterson",
        "User Rating": "4.7",
        "Reviews": "18979",
        "Price": "15",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
        "Author": "Mark Manson",
        "User Rating": "4.6",
        "Reviews": "15923",
        "Price": "15",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Educated: A Memoir",
        "Author": "Tara Westover",
        "User Rating": "4.7",
        "Reviews": "12343",
        "Price": "15",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Last Week Tonight with John Oliver Presents A Day in the Life of Marlon Bundo (Better Bundo Book, LGBT ChildrenÂs Book)",
        "Author": "Jill Twiss",
        "User Rating": "4.9",
        "Reviews": "11881",
        "Price": "13",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "Instant Pot Pressure Cooker Cookbook: 500 Everyday Recipes for Beginners and Advanced Users. Try Easy and Healthyâ¦",
        "Author": "Jennifer Smith",
        "User Rating": "4.4",
        "Reviews": "7396",
        "Price": "13",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Little Fires Everywhere",
        "Author": "Celeste Ng",
        "User Rating": "4.5",
        "Reviews": "25706",
        "Price": "12",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "Ready Player One: A Novel",
        "Author": "Ernest Cline",
        "User Rating": "4.6",
        "Reviews": "22536",
        "Price": "12",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "Girl, Wash Your Face: Stop Believing the Lies About Who You Are So You Can Become Who You Were Meant to Be",
        "Author": "Rachel Hollis",
        "User Rating": "4.6",
        "Reviews": "22288",
        "Price": "12",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Whose Boat Is This Boat?: Comments That Don't Help in the Aftermath of a Hurricane",
        "Author": "The Staff of The Late Show withÂ",
        "User Rating": "4.6",
        "Reviews": "6669",
        "Price": "12",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Becoming",
        "Author": "Michelle Obama",
        "User Rating": "4.8",
        "Reviews": "61133",
        "Price": "11",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "How to Win Friends & Influence People",
        "Author": "Dale Carnegie",
        "User Rating": "4.7",
        "Reviews": "25001",
        "Price": "11",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Hate U Give",
        "Author": "Angie Thomas",
        "User Rating": "4.8",
        "Reviews": "9947",
        "Price": "11",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "The Wonderful Things You Will Be",
        "Author": "Emily Winfield Martin",
        "User Rating": "4.9",
        "Reviews": "7345",
        "Price": "10",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "Oh, the Places You'll Go!",
        "Author": "Dr. Seuss",
        "User Rating": "4.9",
        "Reviews": "21834",
        "Price": "8",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "The 5 Love Languages: The Secret to Love that Lasts",
        "Author": "Gary Chapman",
        "User Rating": "4.8",
        "Reviews": "21345",
        "Price": "8",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Milk and Honey",
        "Author": "Rupi Kaur",
        "User Rating": "4.7",
        "Reviews": "17739",
        "Price": "8",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Fahrenheit 451",
        "Author": "Ray Bradbury",
        "User Rating": "4.6",
        "Reviews": "10721",
        "Price": "8",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "Crazy Rich Asians (Crazy Rich Asians Trilogy)",
        "Author": "Kevin Kwan",
        "User Rating": "4.3",
        "Reviews": "6143",
        "Price": "8",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "The Meltdown (Diary of a Wimpy Kid Book 13)",
        "Author": "Jeff Kinney",
        "User Rating": "4.8",
        "Reviews": "5898",
        "Price": "8",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        "Author": "Jen Sincero",
        "User Rating": "4.8",
        "Reviews": "5023",
        "Price": "8",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Kitchen Confidential Updated Edition: Adventures in the Culinary Underbelly (P.S.)",
        "Author": "Anthony Bourdain",
        "User Rating": "4.8",
        "Reviews": "2507",
        "Price": "8",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Instant Pot Electric Pressure Cooker Cookbook: Easy Recipes for Fast & Healthy Meals",
        "Author": "Laurel Randolph",
        "User Rating": "4.3",
        "Reviews": "7368",
        "Price": "7",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "School Zone - Big Preschool Workbook - Ages 4 and Up, Colors, Shapes, Numbers 1-10, Alphabet, Pre-Writing, Pre-Readingâ¦",
        "Author": "School Zone",
        "User Rating": "4.8",
        "Reviews": "23047",
        "Price": "6",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)",
        "Author": "Don Miguel Ruiz",
        "User Rating": "4.7",
        "Reviews": "20764",
        "Price": "6",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Fire and Fury: Inside the Trump White House",
        "Author": "Michael Wolff",
        "User Rating": "4.2",
        "Reviews": "13677",
        "Price": "6",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Complete Ketogenic Diet for Beginners: Your Essential Guide to Living the Keto Lifestyle",
        "Author": "Amy Ramos",
        "User Rating": "4.3",
        "Reviews": "13061",
        "Price": "6",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Lettering and Modern Calligraphy: A Beginner's Guide: Learn Hand Lettering and Brush Lettering",
        "Author": "Paper Peony Press",
        "User Rating": "4.4",
        "Reviews": "7550",
        "Price": "6",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Dog Man: Lord of the Fleas: From the Creator of Captain Underpants (Dog Man #5)",
        "Author": "Dav Pilkey",
        "User Rating": "4.9",
        "Reviews": "5470",
        "Price": "6",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "Dog Man and Cat Kid: From the Creator of Captain Underpants (Dog Man #4)",
        "Author": "Dav Pilkey",
        "User Rating": "4.9",
        "Reviews": "5062",
        "Price": "6",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "The Very Hungry Caterpillar",
        "Author": "Eric Carle",
        "User Rating": "4.9",
        "Reviews": "18234",
        "Price": "5",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "Dear Zoo: A Lift-the-Flap Book",
        "Author": "Rod Campbell",
        "User Rating": "4.8",
        "Reviews": "10922",
        "Price": "5",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "P is for Potty! (Sesame Street) (Lift-the-Flap)",
        "Author": "Naomi Kleinberg",
        "User Rating": "4.7",
        "Reviews": "10820",
        "Price": "5",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Pout-Pout Fish",
        "Author": "Deborah Diesen",
        "User Rating": "4.8",
        "Reviews": "9784",
        "Price": "5",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "Goodnight Moon",
        "Author": "Margaret Wise Brown",
        "User Rating": "4.8",
        "Reviews": "8837",
        "Price": "5",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "A Wrinkle in Time (Time Quintet)",
        "Author": "Madeleine L'Engle",
        "User Rating": "4.5",
        "Reviews": "5153",
        "Price": "5",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "First 100 Words",
        "Author": "Roger Priddy",
        "User Rating": "4.7",
        "Reviews": "17323",
        "Price": "4",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Wonky Donkey",
        "Author": "Craig Smith",
        "User Rating": "4.8",
        "Reviews": "15435",
        "Price": "4",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "Giraffes Can't Dance",
        "Author": "Giles Andreae",
        "User Rating": "4.8",
        "Reviews": "14038",
        "Price": "4",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "Dog Man: Brawl of the Wild: From the Creator of Captain Underpants (Dog Man #6)",
        "Author": "Dav Pilkey",
        "User Rating": "4.9",
        "Reviews": "7235",
        "Price": "4",
        "Year": "2018",
        "Genre": "Fiction"
    },
    {
        "Name": "A Higher Loyalty: Truth, Lies, and Leadership",
        "Author": "James Comey",
        "User Rating": "4.7",
        "Reviews": "5983",
        "Price": "3",
        "Year": "2018",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Player's Handbook (Dungeons & Dragons)",
        "Author": "Wizards RPG Team",
        "User Rating": "4.8",
        "Reviews": "16990",
        "Price": "27",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking",
        "Author": "Samin Nosrat",
        "User Rating": "4.8",
        "Reviews": "7802",
        "Price": "20",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Can't Hurt Me: Master Your Mind and Defy the Odds",
        "Author": "David Goggins",
        "User Rating": "4.8",
        "Reviews": "16244",
        "Price": "18",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Harry Potter and the Goblet of Fire: The Illustrated Edition (Harry Potter, Book 4) (4)",
        "Author": "J. K. Rowling",
        "User Rating": "4.9",
        "Reviews": "7758",
        "Price": "18",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "National Geographic Kids Why?: Over 1,111 Answers to Everything",
        "Author": "Crispin Boyer",
        "User Rating": "4.8",
        "Reviews": "5347",
        "Price": "16",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Howard Stern Comes Again",
        "Author": "Howard Stern",
        "User Rating": "4.3",
        "Reviews": "5272",
        "Price": "16",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Where the Crawdads Sing",
        "Author": "Delia Owens",
        "User Rating": "4.8",
        "Reviews": "87841",
        "Price": "15",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "Educated: A Memoir",
        "Author": "Tara Westover",
        "User Rating": "4.7",
        "Reviews": "28729",
        "Price": "15",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
        "Author": "Mark Manson",
        "User Rating": "4.6",
        "Reviews": "26490",
        "Price": "15",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Silent Patient",
        "Author": "Alex Michaelides",
        "User Rating": "4.5",
        "Reviews": "27536",
        "Price": "14",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "The Guardians: A Novel",
        "Author": "John Grisham",
        "User Rating": "4.5",
        "Reviews": "13609",
        "Price": "14",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "What Should Danny Do? (The Power to Choose Series)",
        "Author": "Adir Levy",
        "User Rating": "4.8",
        "Reviews": "8170",
        "Price": "13",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "Instant Pot Pressure Cooker Cookbook: 500 Everyday Recipes for Beginners and Advanced Users. Try Easy and Healthyâ¦",
        "Author": "Jennifer Smith",
        "User Rating": "4.4",
        "Reviews": "4850",
        "Price": "13",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Girl, Wash Your Face: Stop Believing the Lies About Who You Are So You Can Become Who You Were Meant to Be",
        "Author": "Rachel Hollis",
        "User Rating": "4.6",
        "Reviews": "22288",
        "Price": "12",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
        "Author": "Bessel van der Kolk M.D.",
        "User Rating": "4.8",
        "Reviews": "12361",
        "Price": "12",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "5,000 Awesome Facts (About Everything!) (National Geographic Kids)",
        "Author": "National Geographic Kids",
        "User Rating": "4.8",
        "Reviews": "7665",
        "Price": "12",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Girl, Stop Apologizing: A Shame-Free Plan for Embracing and Achieving Your Goals",
        "Author": "Rachel Hollis",
        "User Rating": "4.6",
        "Reviews": "7660",
        "Price": "12",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "It's Not Supposed to Be This Way: Finding Unexpected Strength When Disappointments Leave You Shattered",
        "Author": "Lysa TerKeurst",
        "User Rating": "4.8",
        "Reviews": "7062",
        "Price": "12",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Mueller Report",
        "Author": "The Washington Post",
        "User Rating": "4.6",
        "Reviews": "2744",
        "Price": "12",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Becoming",
        "Author": "Michelle Obama",
        "User Rating": "4.8",
        "Reviews": "61133",
        "Price": "11",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing",
        "Author": "Marie KondÅ",
        "User Rating": "4.5",
        "Reviews": "22641",
        "Price": "11",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "National Geographic Little Kids First Big Book of Why (National Geographic Little Kids First Big Books)",
        "Author": "Amy Shields",
        "User Rating": "4.8",
        "Reviews": "7866",
        "Price": "11",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Unfreedom of the Press",
        "Author": "Mark R. Levin",
        "User Rating": "4.9",
        "Reviews": "5956",
        "Price": "11",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Total Money Makeover: Classic Edition: A Proven Plan for Financial Fitness",
        "Author": "Dave Ramsey",
        "User Rating": "4.7",
        "Reviews": "11550",
        "Price": "10",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Unofficial Harry Potter Cookbook: From Cauldron Cakes to Knickerbocker Glory--More Than 150 Magical Recipes forâ¦",
        "Author": "Dinah Bucholz",
        "User Rating": "4.7",
        "Reviews": "9030",
        "Price": "10",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Wonderful Things You Will Be",
        "Author": "Emily Winfield Martin",
        "User Rating": "4.9",
        "Reviews": "8842",
        "Price": "10",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        "Author": "Jen Sincero",
        "User Rating": "4.8",
        "Reviews": "12234",
        "Price": "9",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The 5 Love Languages: The Secret to Love that Lasts",
        "Author": "Gary Chapman",
        "User Rating": "4.8",
        "Reviews": "25554",
        "Price": "8",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Oh, the Places You'll Go!",
        "Author": "Dr. Seuss",
        "User Rating": "4.9",
        "Reviews": "21834",
        "Price": "8",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "Dog Man: Fetch-22: From the Creator of Captain Underpants (Dog Man #8)",
        "Author": "Dav Pilkey",
        "User Rating": "4.9",
        "Reviews": "12619",
        "Price": "8",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "Wrecking Ball (Diary of a Wimpy Kid Book 14)",
        "Author": "Jeff Kinney",
        "User Rating": "4.9",
        "Reviews": "9413",
        "Price": "8",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "Dog Man: For Whom the Ball Rolls: From the Creator of Captain Underpants (Dog Man #7)",
        "Author": "Dav Pilkey",
        "User Rating": "4.9",
        "Reviews": "9089",
        "Price": "8",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "To Kill a Mockingbird",
        "Author": "Harper Lee",
        "User Rating": "4.8",
        "Reviews": "29234",
        "Price": "7",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "I Am Confident, Brave & Beautiful: A Coloring Book for Girls",
        "Author": "Hopscotch Girls",
        "User Rating": "4.8",
        "Reviews": "9737",
        "Price": "7",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Guts",
        "Author": "Raina Telgemeier",
        "User Rating": "4.8",
        "Reviews": "5476",
        "Price": "7",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)",
        "Author": "Don Miguel Ruiz",
        "User Rating": "4.7",
        "Reviews": "23308",
        "Price": "6",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "School Zone - Big Preschool Workbook - Ages 4 and Up, Colors, Shapes, Numbers 1-10, Alphabet, Pre-Writing, Pre-Readingâ¦",
        "Author": "School Zone",
        "User Rating": "4.8",
        "Reviews": "23047",
        "Price": "6",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Complete Ketogenic Diet for Beginners: Your Essential Guide to Living the Keto Lifestyle",
        "Author": "Amy Ramos",
        "User Rating": "4.3",
        "Reviews": "13061",
        "Price": "6",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Good Days Start With Gratitude: A 52 Week Guide To Cultivate An Attitude Of Gratitude: Gratitude Journal",
        "Author": "Pretty Simple Press",
        "User Rating": "4.6",
        "Reviews": "10141",
        "Price": "6",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Strange Planet (Strange Planet Series)",
        "Author": "Nathan W. Pyle",
        "User Rating": "4.9",
        "Reviews": "9382",
        "Price": "6",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "The Very Hungry Caterpillar",
        "Author": "Eric Carle",
        "User Rating": "4.9",
        "Reviews": "19546",
        "Price": "5",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "Brown Bear, Brown Bear, What Do You See?",
        "Author": "Bill Martin Jr.",
        "User Rating": "4.9",
        "Reviews": "14344",
        "Price": "5",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "P is for Potty! (Sesame Street) (Lift-the-Flap)",
        "Author": "Naomi Kleinberg",
        "User Rating": "4.7",
        "Reviews": "10820",
        "Price": "5",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "Goodnight Moon",
        "Author": "Margaret Wise Brown",
        "User Rating": "4.8",
        "Reviews": "8837",
        "Price": "5",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "Difficult Riddles For Smart Kids: 300 Difficult Riddles And Brain Teasers Families Will Love (Books for Smart Kids)",
        "Author": "M Prefontaine",
        "User Rating": "4.6",
        "Reviews": "7955",
        "Price": "5",
        "Year": "2019",
        "Genre": "Non Fiction"
    },
    {
        "Name": "The Wonky Donkey",
        "Author": "Craig Smith",
        "User Rating": "4.8",
        "Reviews": "30183",
        "Price": "4",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "If Animals Kissed Good Night",
        "Author": "Ann Whitford Paul",
        "User Rating": "4.8",
        "Reviews": "16643",
        "Price": "4",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "Giraffes Can't Dance",
        "Author": "Giles Andreae",
        "User Rating": "4.8",
        "Reviews": "14038",
        "Price": "4",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "Dog Man: Brawl of the Wild: From the Creator of Captain Underpants (Dog Man #6)",
        "Author": "Dav Pilkey",
        "User Rating": "4.9",
        "Reviews": "7235",
        "Price": "4",
        "Year": "2019",
        "Genre": "Fiction"
    },
    {
        "Name": "Unicorn Coloring Book: For Kids Ages 4-8 (US Edition) (Silly Bear Coloring Books)",
        "Author": "Silly Bear",
        "User Rating": "4.8",
        "Reviews": "6108",
        "Price": "4",
        "Year": "2019",
        "Genre": "Non Fiction"
    }
]