const InstaFeed= require("instafeed");

    let feed = new InstaFeed({
    get: "user",
    userId: "344919110",
    clientID: "87b69683000a43009903ef1751723ec6",
    accessToken: "344919110.87b6968.1690446024e2403ea56bc212c5b18b68",
    resolution: "standard_resolution",
    limit: 10,
    template: "<a href=\"{{link}}\" class=\"instafeed__image\"><img src=\"{{image}}\" class=\"insta\"></a>",
});
feed.run();
