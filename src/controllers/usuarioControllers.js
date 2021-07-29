const Usuario = require("../models/usuario");
const status = require("http-status");

exports.Insert = (req, res, next) => {
  const nome = req.body.nome;
  const salario = req.body.salario;
  const dataNascimento = req.body.dataNascimento;
  const ativo = req.body.ativo;

  Usuario.create({
    nome,
    salario,
    dataNascimento,
    ativo,
  })
    .then((usuario) =>
      usuario
        ? res.status(status.OK).send(usuario)
        : res.status(status.NOT_FOUND).send()
    )
    .catch((error) => next(error));
};

exports.SearchAll = (req, res, next) => {
  Usuario.findAll()
    .then((usuario) => {
      if (usuario) res.status(status.OK).send(usuario);
    })
    .catch((error) => next(error));
};

exports.SearchOne = (req, res, next) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then((usuario) =>
      usuario
        ? res.status(status.OK).send(usuario)
        : res.status(status.NOT_FOUND).send()
    )
    .catch((error) => next(error));
};

exports.Update = (req, res, next) => {
  const id = req.params.id;
  const nome = req.body.nome;
  const salario = req.body.salario;
  const dataNascimento = req.body.dataNascimento;
  const ativo = req.body.ativo;

  Usuario.findByPk(id)
    .then((usuario) => {
      if (usuario) {
        usuario
          .update(
            {
              nome,
              salario,
              dataNascimento,
              ativo,
            },
            {
              where: { id },
            }
          )
          .then(() => res.status(status.OK).send())
          .catch((error) => next(error));
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};

exports.Delete = (req, res, next) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then((usuario) => {
      if (usuario) {
        usuario
          .destroy({
            where: { id },
          })
          .then(() => res.status(status.OK).send())
          .catch((error) => next(error));
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};
