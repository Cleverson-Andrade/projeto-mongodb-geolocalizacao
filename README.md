# 🌍 Geoprocessamento com MongoDB | Geospatial Analytics with MongoDB

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

[English](#english) • [Português](#portugues)

---

<a name="english"></a>
## 🇺🇸 English

### 📝 Project Overview
This project demonstrates the implementation of geospatial intelligence using **MongoDB**. Based on the "SQL & NoSQL Databases" course by Geek University, the goal is to manage and query location-based data using the **GeoJSON** standard and the **Aggregation Framework**.

### 🛠 Technical Highlights
* **Geospatial Indexing:** Implementation of `2dsphere` indexes to enable high-performance proximity searches.
* **Proximity Queries:** Utilizing the `$geoNear` operator to calculate spherical distances between points.
* **Data Structure:** Managing flexible schemas that store both academic records and spatial coordinates in the same collection.

### 🚀 Key Stages
1. **Data Ingestion:** Importing `inscricoes.json` with student profiles and coordinates.
2. **Indexing:** Creating the spatial index to allow coordinate-based calculations.
3. **Geo-Aggregation:** Executing scripts to find the nearest points to a specific reference in Campo Grande/MS.

---

<a name="portugues"></a>
## 🇧🇷 Português

### 📝 Visão Geral do Projeto
Este projeto demonstra a implementação de inteligência geoespacial utilizando o **MongoDB**. Baseado no curso "Bancos de Dados SQL e NoSQL" da Geek University, o objetivo é gerenciar e consultar dados baseados em localização utilizando o padrão **GeoJSON** e o **Aggregation Framework**.

### 🛠 Destaques Técnicos
* **Indexação Geoespacial:** Implementação de índices `2dsphere` para permitir buscas de proximidade de alta performance.
* **Consultas de Proximidade:** Utilização do operador `$geoNear` para calcular distâncias esféricas entre pontos.
* **Estrutura de Dados:** Gerenciamento de schemas flexíveis que armazenam registros acadêmicos e coordenadas espaciais na mesma coleção.

### 🚀 Etapas Principais
1. **Ingestão de Dados:** Importação do arquivo `inscricoes.json` com perfis de alunos e coordenadas.
2. **Indexação:** Criação do índice espacial para permitir cálculos baseados em coordenadas.
3. **Geo-Agregação:** Execução de scripts para encontrar os pontos mais próximos a uma referência específica em Campo Grande/MS.

---

## ⚙️ Setup & Commands / Comandos

### 1. Data Import / Importação de Dados

```bash 
mongoimport --db meubanco --collection inscricoes --file inscricoes.json --jsonArray

### 2. Create Spatial Index / Criar Índice Espacial

// Execute no MongoDB Shell ou Compass | Run this in MongoDB Shell or Compass 
db.inscricoes.createIndex({ "localizacao": "2dsphere" })

### 3. Run Aggregation / Executar Agregação

node 04_geoprocessamento.js
---

## 🛠 Tech Stack
Database: MongoDB (NoSQL)

GUI: MongoDB Compass

Runtime: Node.js (MongoDB Native Driver)

---

👤 Author / Autor: Cleverson Moura Andrade
