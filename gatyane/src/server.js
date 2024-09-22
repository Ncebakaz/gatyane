import { createServer, Model } from "miragejs"

createServer({
    models: {
        vans: Model,
    },
    seeds(server) {
        server.create("van", { id: "1", name: "Modest Explore", price: 80, description: "Modest Explore is a van designed to get you out of the house and into nature. This is equiped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "", type: "simple", hostId: "123" })
        server.create("van", { id: "2", name: "Beach Bum", price: 100, description: "Beach Bum", imageUrl: "", type: "simple", hostId: "123" })
        server.create("van", { id: "3", name: "Reliable Red", price: 100, description: "Reliable red", imageUrl: "", type: "luxury", hostId: "456" })
        server.create("van", { id: "4", name: "Dreamfinder", price: 65, description: "Dreamfinder", imageUrl: "", type: "simple", hostId: "789" })
        server.create("van", { id: "5", name: "The cruiser", price: 120, description: "The cruiser", imageUrl: "", type: "simple", hostId: "789" })
        server.create("van", { id: "6", name: "Green Wonder", price: 70, description: "Green Wonder", imageUrl: "", type: "rugged", hostId: "123" })
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