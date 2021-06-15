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
                iconClass: "",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us." 
            },
            {
                name: "Health & Diet",
                iconClass: "fa-heartbeat",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us." 
            }
        ]
    },

    methods: {}
});