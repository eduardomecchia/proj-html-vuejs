const app = new Vue({
    el: "#app",

    data: {
        navigationLinks: [
            "home",
            "about us",
            "facilities",
            "membership",
            "testimonials",
            "blog"
        ],

        thirdSectionFeatures: [
            {
                name: "Strength & Conditioning",
                iconClass: "fa-unlink",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us." 
            },
            {
                name: "Fitness & Cardio",
                iconClass: "fa-bicycle",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us." 
            },
            {
                name: "Flexibility & Rest",
                iconClass: "fa-cloud",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us." 
            },
            {
                name: "Health & Diet",
                iconClass: "fa-heartbeat",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us." 
            }
        ],

        fourthSectionFeedbacks: [
            {
                author: "Tara Smith",
                feedback: "The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!",
                image: "review_1-compressor.jpg"
            },
            {
                author: "Simon Chel",
                feedback: "The atmosphere at Avada Gym is amazing, the people are even better. All in all, it is a great place to work out.",
                image: "review_3-compressor-2.jpg"
            },
            {
                author: "Jen Wirth",
                feedback: "The facilities at Avada Gym stood out to me the most. They are well maintained and have high quality equipment.",
                image: "review_2-compressor.jpg"
            },
            {
                author: "Jeff Glum",
                feedback: "No bad things to say about Avada Gym, they are top notch at every corner and truly take care of their customers.",
                image: "review_4-compressor-2.jpg"
            }
        ],

        fourthSectionImages: [
            "home-image1.jpg",
            "home-image2.jpg",
            "home-image3.jpg",
            "home-image4.jpg",
            "home-image5.jpg",
            "home-image6.jpg"
        ],

        personalTrainers: [
            {
                name: "Ann Baker",
                title: "Personal Trainer",
                photo: "trainer1.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.",
                facebook: "https://www.facebook.com/", // Placeholder for profile link
                twitter: "https://twitter.com/home", // Placeholder for profile link
                instagram: "https://www.instagram.com/" // Placeholder for profile link
            },
            {
                name: "Anne Warren",
                title: "Personal Trainer",
                photo: "trainer3.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.",
                facebook: "https://www.facebook.com/", // Placeholder for profile link
                twitter: "https://twitter.com/home", // Placeholder for profile link
                instagram: "https://www.instagram.com/" // Placeholder for profile link
            },
            {
                name: "Peter Rice",
                title: "Personal Trainer",
                photo: "trainer4.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.",
                facebook: "https://www.facebook.com/", // Placeholder for profile link
                twitter: "https://twitter.com/home", // Placeholder for profile link
                instagram: "https://www.instagram.com/" // Placeholder for profile link
            },
        ]
    },

    methods: {}
});