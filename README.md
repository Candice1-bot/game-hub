# Overview

This is a responsive React app that fetches game data from the RAWG API and display the data in an organized way.

It extended and updated Mosh Hamedani’s original tutorial.

## 1. Project Structure

```
src
├── assets                # resources
├── components/  # Reusable UI components
├── data  # static data collected from api
├── entities   # data models for extracting data from api
├── hooks      # cutom hooks using react query
├── pages      # Summary cards
			├── ErrorPage      # error page
			├── GameDetailPage  #subpage
			├── HomePage # home page
			├── Layout # root layout

├──services #
		├── api-client # fetch data from api
		├── image-url # utility function
├── store # state management using zustand
├── routes # react route file
...

```

## 2. Features

- full-text search
- genre/platform filtering
- sort options
- and dark/light theme switching.
- modular component architecture,
- reusable data-fetching hooks

## 3. Tech Stack

#### Frontend

- React
- Chakra UI
- TypeScript
- Axio
- Tanstack/react-query
- RAWG Video Games API
- React route

#### Data

- Data Fetching & Caching by React Query

## 4. Local Setup

#### 1. Clone the repository

```bash
git clone <repo-url>
cd game-hub
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Configure environment variables

Create a `.env` file based on `.env.example`:

#### 4. Start the development server

```bash
npm run dev
```

## 5. About the project

#### Possible Improvements

Add register part for user logging and access some priviledged contents.
