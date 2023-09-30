const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(25).required()
});

const userValidator = (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    res.status(400).json({ error: error.details.map(e => e.message) });
  } else {
    next();
  }
};

module.exports = { userValidator };
