# GEM Access

> **Visibilidade para suas conexões.**

## Sobre o projeto

O **GEM Access** é um protótipo de interface web voltado ao monitoramento e à visualização de conexões VPN em uma rede de computadores.

O nome **GEM** corresponde às iniciais dos integrantes da equipe, enquanto **Access** representa o contexto de acesso e gerenciamento das conexões.

Este repositório corresponde à etapa inicial do projeto, desenvolvida para a disciplina de Redes de Computadores.

## Objetivo

Criar uma interface centralizada que apresente, de forma organizada e visual, informações relacionadas a conexões VPN, usuários, tráfego, alertas e relatórios.

Nesta etapa, o sistema é **exclusivamente um protótipo estático**. Não existe backend, banco de dados, autenticação real ou monitoramento efetivo de uma VPN.

## Principais telas

- **Login:** entrada visual para o sistema.
- **Dashboard:** visão geral com indicadores, gráfico e conexões recentes.
- **Conexões:** tabela com sessões VPN fictícias.
- **Usuários:** usuários fictícios e seus respectivos status.
- **Alertas:** eventos simulados para demonstração da interface.
- **Relatórios:** indicadores históricos e gráficos fictícios.

## Funcionalidades previstas

As funcionalidades abaixo fazem parte da proposta futura do projeto:

- monitoramento de conexões VPN;
- visualização de usuários conectados;
- acompanhamento de tráfego;
- visualização de status da infraestrutura;
- apresentação de alertas;
- geração de relatórios.

## Tecnologias

Nesta etapa foram utilizadas somente:

- HTML5
- CSS3

Não há JavaScript, backend ou banco de dados no protótipo.

## Dados

Todos os usuários, endereços IP, volumes de tráfego, horários, alertas e demais informações exibidas nas telas são **fictícios** e servem exclusivamente para avaliação da interface.

## Estrutura

```text
gem-access/
├── index.html
├── dashboard.html
├── connections.html
├── users.html
├── alerts.html
├── reports.html
├── css/
│   └── style.css
└── README.md
```

## Benchmarking

O projeto foi inspirado na análise de soluções existentes de gerenciamento e monitoramento de VPN e redes, incluindo OpenVPN Access Server, Pritunl, Netmaker e Zabbix.

A análise serviu como referência para elementos como:

- dashboards;
- gerenciamento de usuários;
- visualização de conexões;
- métricas de tráfego;
- alertas;
- gráficos;
- relatórios.

O objetivo não é reproduzir essas ferramentas, mas utilizar suas características como referência para construir uma interface própria e simplificada.

## Equipe

**GEM Access** — GEM corresponde às iniciais dos integrantes do projeto.

## Status

**Protótipo estático — Aula 5**

As funcionalidades serão implementadas em etapas posteriores.
