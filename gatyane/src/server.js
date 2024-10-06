import { createServer, Model } from "miragejs"

createServer({
    models: {
        vans: Model,
    },
    seeds(server) {
        server.create("van", { id: "1", name: "Modest Explore", price: 80, description: "Modest Explore . This a van designed to get you out of the house and into nature. This is equiped with solar panels, a composting toilet, a water tank and kitchenettee idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://cdn.openart.ai/stable_diffusion/7e58139c1dce024b8452530b2b14bb9734dc4405_2000x2000.webp", type: "simple", hostId: "123" })
        server.create("van", { id: "2", name: "Beach Bum", price: 100, description: "Beach BumThis a van designed to get you out of the house and into nature. This is equiped with solar panels, a composting toilet, a water tank and kitchenettee idea is that you can pack up your home and escape for a weekend ", imageUrl: "https://img.fruugo.com/product/1/51/1583465511_0340_0340.jpg", type: "simple", hostId: "123" })
        server.create("van", { id: "3", name: "Reliable Red", price: 100, description: "Reliable redThis a van designed to get you out of the house and into nature. This is equiped with solar panels, a composting toilet, a water tank and kitchenettee idea is that you can pack up your home and escape for a wee ", imageUrl: "https://i.ebayimg.com/images/g/nvMAAOSwlPlkMRjn/s-l1600.webp", type: "luxury", hostId: "456" })
        server.create("van", { id: "4", name: "Dreamfinder", price: 65, description: "DreamfinderThis a van designed to get you out of the house and into nature. This is equiped with solar panels, a composting toilet, a water tank and kitchenettee idea is that you can pack up your home and escape for a wee ", imageUrl: "https://pics.craiyon.com/2023-11-20/HhZrajdBQwyCHrXOP4WXFw.webp", type: "simple", hostId: "789" })
        server.create("van", { id: "5", name: "The cruiser", price: 120, description: "The cruiser This a van designed to get you out of the house and into nature. This is equiped with solar panels, a composting toilet, a water tank and kitchenettee idea is that you can pack up your home and escape for a wee ", imageUrl: "https://cdn.bmwblog.com/wp-content/uploads/2023/11/BMW-Electric-Minivan-1-scaled.jpg", type: "simple", hostId: "789" })
        server.create("van", { id: "6", name: "Green Wonder", price: 70, description: "Green Wonder This a van designed to get you out of the house and into nature. This is equiped with solar panels, a composting toilet, a water tank and kitchenettee idea is that you can pack up your home and escape for a week  ", imageUrl: "https://cdn.openart.ai/stable_diffusion/8034c1235ab858de2a1f08b1f48eab683c868c76_2000x2000.webp", type: "rugged", hostId: "123" })
    },

    routes() {
        this.namespace = "api"

        this.get("/vans", (schema, request) => {
            return schema.vans.all()
        })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })

        this.get("/host/vans", (schema, request) => {
            //Hard-code the hostId forn now
            return schema.vans.where({ hostId: "123" })
        })

        this.get("/host/vans/:id", (schema, request) => {
            // Hard-code th
            const id = request.params.id
            return schema.vans.where({ id, hostId: "123" })
        })
    }
})