# Projeto de Geoprocessamento com MongoDB

Este projeto é baseado no curso **"Bancos de Dados SQL e NoSQL do básico ao avançado"**, da Geek University na Udemy. Ele demonstra o uso do MongoDB para armazenar e consultar dados de geolocalização. O foco principal é a realização de consultas de proximidade (`$geoNear`) para encontrar documentos com base em sua localização geográfica.

## Ferramentas Utilizadas
* **MongoDB:** Banco de dados NoSQL utilizado para armazenamento.
* **MongoDB Compass:** Ferramenta visual utilizada para a criação da base de dados, inserção de documentos e criação de índices.

## Conteúdo do Projeto
O projeto consiste em uma coleção de dados (`inscricoes`) com informações de alunos, incluindo seu nome e localização.

## Etapas Concluídas
1.  **Criação da Base de Dados:** A base de dados `meubanco` e a coleção `inscricoes` foram criadas.
2.  **Inserção de Dados:** Foram inseridos documentos contendo informações de alunos e suas coordenadas geográficas.
3.  **Criação de Índices:** Um índice `2dsphere` foi criado na coleção para otimizar as consultas de geolocalização.
4.  **Consulta de Proximidade:** Uma consulta de agregação com `$geoNear` foi executada para encontrar documentos próximos a um ponto de referência.
