const { events } = require('./data.json');

export default function handler(req, res) {
    const event = events.filter((event) => event.slug === req.query.slug);

    res.status(200).json(event)
}
