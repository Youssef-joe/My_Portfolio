/**
 * Vercel Serverless Function to check client IP authorization status.
 */

export default function handler(req, res) {
  const forwarded = req.headers['x-forwarded-for'];
  const clientIp = (forwarded 
    ? forwarded.split(',')[0].trim() 
    : req.headers['x-real-ip'] || req.socket?.remoteAddress || '127.0.0.1'
  ).replace(/^::ffff:/, '');

  const allowedIpsStr = process.env.ALLOWED_IPS || process.env.ADMIN_IP || '';
  let isAllowed = false;
  let hasIpRestriction = Boolean(allowedIpsStr);

  if (hasIpRestriction) {
    const list = allowedIpsStr.split(',').map(s => s.trim().replace(/^::ffff:/, ''));
    isAllowed = list.some(ip => clientIp === ip || clientIp.startsWith(ip));
  } else {
    // If no ALLOWED_IPS is configured yet in Vercel, allow via password fallback
    isAllowed = true;
  }

  return res.status(200).json({
    ip: clientIp,
    hasIpRestriction,
    isAllowed,
    message: hasIpRestriction
      ? (isAllowed ? 'IP authorized for editing' : 'IP not in allowed list')
      : 'No ALLOWED_IPS configured. Set ALLOWED_IPS in Vercel to restrict exclusively to your IP.'
  });
}
