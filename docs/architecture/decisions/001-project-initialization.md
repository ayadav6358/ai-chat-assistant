# ADR 001: Project Initialization

## Status
Accepted

## Context
The repository needed a production-oriented starting point for an AI chat assistant with separate client and server concerns, strong typing, and a scalable folder structure.

## Decision
We will initialize the project with:
- a Vite + React + TypeScript frontend
- a Node.js + Express + TypeScript backend scaffold
- feature-based folders and shared configuration
- environment-based configuration for API and secrets

## Consequences
- The project can evolve into a multi-feature application without reorganizing the foundation.
- Future features can follow a consistent architecture and testing approach.
