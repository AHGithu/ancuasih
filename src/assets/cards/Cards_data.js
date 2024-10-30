const cards_data = [
    {
        id: 1,
        image: "https://image.tmdb.org/t/p/original/lGHAJ05dfX7ecy735WGNPLg8uLG.jpg",
        name: "Demon Slayer",
        trailer: "VQGCKyvzIM4",
        category: "series",
        description: "In a world where demons threaten humanity's existence, young Tanjiro Kamado becomes a demon slayer after his family is slaughtered and his sister turned into a demon.",
        isFavorite: true,
        episodes: 26,
        episodeLinks: [
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=QwNWY6z93O4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4",
            "https://www.youtube.com/watch?v=VQGCKyvzIM4","https://www.youtube.com/watch?v=VQGCKyvzIM4"
        ]
    },
    {
        id: 2,
        image: "https://image.tmdb.org/t/p/original/91z5IHcqGWmh8odTnKcMzWDrsZK.jpg",
        name: "Black Clover",
        trailer: "QwNWY6z93O4",
        category: "series",
        description: "In a world where magic is everything, Asta is born without any magic power. However, he never gives up and aims to become the Wizard King through physical training and anti-magic abilities.",
        isFavorite: true,
        episodes: 170
    },
    {
        id: 3,
        image: "https://m.media-amazon.com/images/M/MV5BZGY2ZTM2MWMtNzA2OS00ZjJlLWIwZTMtMDBhN2EwYjZjZjEyXkEyXkFqcGc@._V1_.jpg",
        name: "Chainsaw Man",
        trailer: "v4yLeNt-kCU",
        category: "series",
        description: "Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left, he has been living a rock-bottom life while repaying his debt by harvesting devil corpses with Pochita.",
        isFavorite: true,
        episodes: 12
    },
    {
        id: 4,
        image: "https://external-preview.redd.it/riZoN9c_q3T3E5WOQ7WhQt94LwRtXvi-kcUc3S31HJY.jpg?auto=webp&s=42debaa5e1d9527a79a88ee7dacd7c34b385ed33",
        name: "Kaiju No.8",
        trailer: "V0OZWzTAqHg",
        category: "series",
        description: "In a world plagued by monsters called 'Kaiju', Kafka Hibino works as a kaiju corpse cleanup man until a mysterious creature enters his body, giving him the ability to transform into Kaiju No. 8.",
        isFavorite: true,
        episodes: 12
    },
    {
        id: 5,
        image: "https://upload.wikimedia.org/wikipedia/id/5/53/Spy_x_Family_key_visual.jpg",
        name: "Spy x Family",
        trailer: "CCXLUQzuigw",
        category: "series",
        description: "A spy, an assassin, and a telepath come together to form a family while each conceals their true identity from the others. However, their adopted daughter Anya knows everyone's secrets.",
        isFavorite: true,
        episodes: 12
    },
    {
        id: 6,
        image: "https://cdn.myanimelist.net/s/common/uploaded_files/1727479545-5521cc3281b1a2a4d3a50c4b643786ca.jpeg",
        name: "Tensei Shitara Slime Datta Ken",
        trailer: "HaI4kX5gkPU",
        category: "series",
        description: "After being killed by a passing robber, a middle-aged businessman is reincarnated as a slime in a fantasy world. As he adapts to his new life, he begins gathering allies and building a nation of monsters.",
        isFavorite: true,
        episodes: 12
    },
    {
        id: 7,
        image: "https://resizing.flixster.com/aDi4fDTWv9jxD3OqC2TqXKkUUYg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
        name: "Attack on Titan",
        trailer: "LHtdKWJdif4",
        category: "series",
        description: "In a world where humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans seemingly without reason.",
        isFavorite: true,
        episodes: 75
    },
    {
        id: 8,
        image: "https://image.tmdb.org/t/p/original/uiIB9ctqZFbfRXXimtpmZb5dusi.jpg",
        name: "One Piece",
        trailer: "S8_YwFLCh4U",
        category: "series",
        description: "Follow Monkey D. Luffy and his pirate crew in their grand adventure to find the legendary treasure 'One Piece' and become the King of the Pirates.",
        isFavorite: true,
        episodes: 1000
    },
    {
        id: 9,
        image: "https://media.themoviedb.org/t/p/w500/kV27j3Nz4d5z8u6mN3EJw9RiLg2.jpg",
        name: "Naruto Shippuden",
        trailer: "22R0j8UKRzY",
        category: "series",
        description: "Follow Naruto Uzumaki, a young ninja with sealed powers of a nine-tailed fox demon, as he seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
        isFavorite: true,
        episodes: 500
    },
    {
        id: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzso-i7r3HHOmb1uqtVNeHq5Q3f3fj-uarA&s",
        name: "Spirited Away",
        trailer: "ByXuk9QqQkk",
        category: "movies",
        description: "A young girl stumbles upon a spirit world and must use her courage and wit to free her parents and return home.",
        isFavorite: true,
        episodes: 1
    },
    {
        id: 11,
        image: "https://image.tmdb.org/t/p/original/8GJsy7w7frGquw1cy9jasOGNNI1.jpg",
        name: "Your Name.",
        description: "A boy and a girl from different worlds switch bodies and form a unique bond.",
        trailer: "xU47nhruN-Q",
        category: "movies",
        isFavorite: true,
        episodes: 1
    },
    {
        id: 12,
        image: "https://image.tmdb.org/t/p/original/ztM2L3f3yEBIg2nnwfAl8bT94WG.jpg",
        name: "Violet Evergarden",
        trailer: "BUfSen2rYQs",
        category: "movies",
        description: "A young woman finds solace and healing through her relationship with a mysterious talking cat.",
        isFavorite: true,
        episodes: 1
    },
    {
        id: 13,
        image: "https://image.tmdb.org/t/p/original/z8UIs6TkRwbGhqYeNureapyp1h7.jpg",
        name: "My Hero Academia: Two Heroes",
        trailer: "iHF2y0fXOZo",
        category: "movies",
        description: "Heroes from the past and present join forces to save the world.",
        isFavorite: true,
        episodes: 1
    },
    {
        id: 14,
        image: "https://image.tmdb.org/t/p/original/1ZZeSetDwQ0jhnCsN11afAo2LRP.jpg",
        name: "A Silent Voice",
        trailer: "nfK6UgLra7g",
        category: "movies",
        description: "a boy and a girl who are both deaf meet and fall in love.",
        isFavorite: true,
        episodes: 1
    },
    {
        id: 15,
        image: "https://media.themoviedb.org/t/p/w500/6inkRM1XGBG5vRhclCPWfMenp7N.jpg",
        name: "A Whisker Away",
        trailer: "aXc9DVfLTGo",
        category: "movies",
        description: "A girl disguises herself as a boy to live with her crush.",
        isFavorite: true,
        episodes: 1
    },
    {
        id: 16,
        image: "https://image.tmdb.org/t/p/original/5PyCIjZZvQOnNKPgoMgjFmdePrR.jpg",
        name: "Demon Slayer: The Movie: Mugen Train",
        trailer: "ATJYac_dORw",
        category: "movies",
        description: "Tanjiro Kamado and his friends board the Infinity Train on a new mission.",
        isFavorite: true,
        episodes: 1
    },
    {
        id: 17,
        image: "https://image.tmdb.org/t/p/original/uyyMrkDgjnpGFM9dnJEYlUya7O0.jpg",
        name: "Jujutsu Kaisen",
        trailer: "YKJyP8L6QEs",
        category: "series",
        description: "Yuji Itadori, a high school student with extraordinary physical abilities, gets involved in the world of Cursed Spirits after swallowing a powerful cursed object to save his friends.",
        isFavorite: true,
        episodes: 24
    },
    {
        id: 18,
        image: "https://image.tmdb.org/t/p/original/mt6ForyKh4JS0v5ho8xhauISidF.jpg",
        name: "Tokyo Ghoul",
        trailer: "vGuQeQsoRgU",
        category: "series",
        description: "Ken Kaneki, a college student turned half-ghoul after a tragic encounter, must learn to survive in a world where humans and flesh-eating ghouls live among each other.",
        isFavorite: true,
        episodes: 12
    },
    {
        id: 19,
        image: "https://image.tmdb.org/t/p/original/u878Dny3e6ajNGLeJJcYq9c60SP.jpg",
        name: "Death Note",
        trailer: "NlJZ-YgAt-c",
        category: "series",
        description: "A high school student discovers a supernatural notebook that allows him to kill anyone by writing the victim's name while picturing their face.",
        isFavorite: true,
        episodes: 37
    },
    {
        id: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5MtiZ2EpoNSfDyfbiB2ARzRTkXdbJ4tZKQ&s",
        name: "Sword Art Online",
        trailer: "6ohYYtxfDCg",
        category: "series",
        description: "Players of a virtual reality MMORPG find themselves trapped in the game where death in-game means death in real life.",
        isFavorite: true,
        episodes: 25
    },
    {
        id: 21,
        image: "https://image.tmdb.org/t/p/original/8CmeBJNUzOFk29diWfJf8de332i.jpg",
        name: "One Punch Man",
        trailer: "Poo5lqoWSGw",
        category: "series",
        description: "Saitama is a hero who only became a hero for fun. After three years of 'special' training, he's become so strong that he's practically invincible.",
        isFavorite: true,
        episodes: 24
    },
    {
        id: 22,
        image: "https://i.pinimg.com/originals/7b/4d/fa/7b4dfadca0e599d98bef3f3dda7b48b9.png",
        name: "",
        trailer: "",
        category: "comics",
        description: "",
        isFavorite: false,
        episodes: 0
    }


]

export default cards_data;