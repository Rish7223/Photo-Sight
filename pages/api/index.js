export default function handler(req, res) {
  res.status(500).send({
    message: 'no server is configured'
  });
}
