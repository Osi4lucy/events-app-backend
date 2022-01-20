module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e6e116a114eff7b04e23fef9aa57ca63'),
  },
});
