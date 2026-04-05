export default function handler(req, res) {
  const { challenge_code } = req.query;
  
  if (challenge_code) {
    const crypto = require('crypto');
    const verification_token = 'DropEngine2024SecureToken';
    const endpoint = 'https://webhook.site/16374740-f48a-43bc-98d9-7dc96417c255';
    
    const hash = crypto
      .createHash('sha256')
      .update(challenge_code + verification_token + endpoint)
      .digest('hex');
    
    return res.status(200).json({ challengeResponse: hash });
  }
  
  return res.status(200).json({ status: 'ok' });
}
