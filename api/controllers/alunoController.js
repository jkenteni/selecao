import alunoService from '../services/alunoService.js'; // Use 'import' se estiver em ES modules

const controllerAluno = {
  Inserir: async (req, res) => {
    try {
      const resultado = await alunoService.criarAluno(req.body);
      res.status(201).json(resultado);
    } catch (error) {
      console.error('Erro ao cadastrar aluno:', error);
      res.status(500).json({ error: 'Erro ao cadastrar aluno' });
    }
  },

  Listar: async (req, res) => {
    // exemplo:
    try {
      const alunos = await alunoService.listarAlunos();
      res.status(200).json(alunos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar alunos' });
    }
  },

  Editar: async (req, res) => {
    // exemplo:
    const { id } = req.params;
    try {
      const resultado = await alunoService.editarAluno(id, req.body);
      res.status(200).json(resultado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao editar aluno' });
    }
  },

  Excluir: async (req, res) => {
    const { id } = req.params;
    try {
      await alunoService.excluirAluno(id);
      res.status(200).json({ mensagem: 'Aluno excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir aluno' });
    }
  }
};

export default controllerAluno;
