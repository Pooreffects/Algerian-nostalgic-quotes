import express from 'express';

const router = express.Router();

const quotes = [
  {
    quote: 'I will for life stay true to myself',
    quotee: 'Dede',
  },
  {
    quote: `Once you leave, ain't no coming back`,
    quotee: 'Houda',
  },
  {
    quote: 'Give it to me baby',
    quotee: 'Next GF',
  },
];

router.get('/', (req, res) => {
  res.send(quotes);
});

router.post('/', (req, res) => {
  const quote = req.body;
  res.send(
    `Quotee with the name ${quote.quotee} added a quote to the collection!!`
  );
});

export default router;
