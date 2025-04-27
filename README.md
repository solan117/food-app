# 🍽️ Food Recipe App

A sleek and modern web app to explore delicious recipes with beautiful images, ingredient details, and cooking instructions. Built using **React**, styled with **CSS Modules**, and powered by the **Spoonacular API**.

---

## 🚀 Features

- 🧠 **Search and display food recipes** based on ingredients, name, or categories
- 📷 **High-quality food images** for every recipe
- 🍳 **View ingredients** and detailed cooking instructions
- 🔁 **Flip card animation** to toggle between recipe details
- 🔄 **Refresh button** to refetch recipe data
- 🧰 Uses **Spoonacular API** for enhanced flexibility
- 📱 **Responsive design** to work seamlessly on all screen sizes

---

## 🛠️ Tech Stack

| Tech                       | Purpose                                          |
|----------------------------|--------------------------------------------------|
| **Frontend**: React, JavaScript | Core web framework and static typing            |
| **CSS Modules**            | Scoped and modular styling                       |
| **Spoonacular API**        | Food recipe data source                          |
| **React Router**           | Client-side routing                             |

---

## 🔑 API Key Setup

> You'll need an API key from Spoonacular to fetch recipes.

1. Sign up at [spoonacular.com](https://spoonacular.com/food-api)
2. Get your free API key
3. In your project, create a `.env` file:

---

## 🌐 Environment Setup

This app uses the **Spoonacular API** to retrieve food data.

### 📦 Run Locally

1. **Clone the repo**

```bash
git clone https://github.com/solan117/food-app.git
cd food-app
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env` file in the root:

```env
REACT_APP_SPOONACULAR_API_KEY=your_api_key_here
```

> 🔐 Your API key is kept safe and out of version control via `.gitignore`.

4. **Start development server**

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app.

---

---

## 📁 Folder Structure

```
src/
├── components/       # UI components (RecipeCard, FavoriteList, etc.)
├── hooks/            # Custom hooks (useFetchRecipes, useLocalStorage)
├── utils/            # Utility functions
├── pages/            # Page views (e.g., Home.tsx)
├── services/         # API services (spoonacularAPI.ts)
├── App.tsx
└── index.tsx

```

---
## 📜 Available Scripts
```
npm run start    # Start development server
npm run build    # Create a production build
npm run lint     # Run ESLint for code quality checks
```

---

## 📄 License

MIT — Free to use, fork, and contribute.

---

## 👨‍💻 Author

**Karan Solanki**  
Full-Stack Developer | ReactJS · Java · Spring Boot · AWS
- 🐙 [GitHub](https://github.com/solan117)
- 🔗 [LinkedIn](https://www.linkedin.com/in/solan117/)

---

> “Built with ❤️ to blend beautiful design with reliable weather insights.”
