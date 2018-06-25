const InstaFeed= require("instafeed");

    let feed = new InstaFeed({
    userId: "6312841675",
    clientID: "c4dc1832e4ea4f4a9f2fe01b7a88dcbe",
    accessToken: "6312841675.1677ed0.4fe2a42c6bf7405bbc04c953f7ecd7dd",
    limit: 15,
    sort: "most-liked",
    template: '<div class="card__wrapper"><img src="{{image}}"/></div>'
});
feed.run();
