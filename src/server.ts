//stage 3 #NewSkills
import cors from 'cors';
import express from 'express';
import { routes } from './routes';//routes = express.Router();


const app = express();
// GET,POST,PUT,PATCH,DELETE

// GET = BUSCAR INF'S
// POST = CADASTRAR INF'S
// PUT = ATUALIZAR INF'S
// PATCH = ATUALIZAR INF UNICA
// DELETE = DELETAR

app.use(cors())
app.use(express.json());// usa json no body
app.use(routes);// usa "grupo" de rotas

app.listen(process.env.PORT || 3337, () => {//porta e retorno
    console.log('rodando')
})