import { createHash } from 'crypto';

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  const { challenge_code } = req.query;

  if (challenge_code) {
    const verificationToken = 'DropEngine2024SecureToken';
    const endpoint = 'https://ebay-endpoint-6ku7vtnn4-saveproducecardiff-3217s-projects.vercel.app/api/ebay-compliance';

    const hash = createHash('sha256');
    hash.update(challenge_code);
    hash.update(verificationToken);
    hash.update(endpoint);
    const responseHash = hash.digest('hex');

    return res.status(200).json({ challengeResponse: responseHash });
  }

  return res.status(200).json({ status: 'ok' });
}
