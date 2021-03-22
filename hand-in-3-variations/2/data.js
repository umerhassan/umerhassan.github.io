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
        "Name": "Divine Soul Mind Body Healing and Transmission System: The Divine Way to Heal You, Humanity, Mother Earth, and Allâ¦",
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
    }
]