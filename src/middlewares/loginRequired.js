import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login obrigatório'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    // Validando que a cada requisição o id e mail permanecem os mesmos do token
    const userCurrent = await User.findOne({
      where: { id, email },
    });

    if (!userCurrent) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (err) {
    return res.status(401).json({
      errors: ['Token inválido ou expirado'],
    });
  }
};
