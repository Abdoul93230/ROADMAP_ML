import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Clock, Lightbulb,CheckCircle,Rocket  } from 'lucide-react';





const RoadmapDescription = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Pourquoi cette Roadmap ?</h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Cette roadmap vise à fournir une base solide en <span className="font-semibold">machine learning</span> aux étudiants du cycle de licence en IA, tout en intégrant des compétences techniques essentielles comme la gestion de version avec <span className="text-blue-500">Git</span>/<span className="text-blue-500">GitHub</span> et le développement d'<span className="text-green-500">API REST</span> avec Flask. 
          <br /><br />
          Elle suit une approche progressive, adaptée aux étudiants de licence, en commençant par les bases de Python et en évoluant vers des compétences plus avancées en analyse de données, modélisation machine learning, et déploiement de modèles.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          L’objectif principal de cette roadmap est de permettre aux étudiants de non seulement comprendre les concepts fondamentaux du machine learning, mais aussi d’acquérir les compétences pratiques nécessaires pour développer et déployer des modèles dans des environnements réels. En outre, l'intégration de projets pratiques à chaque étape renforce l'apprentissage et assure une mise en application concrète des concepts théoriques.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Les étudiants auront également l'opportunité de se familiariser avec des outils utilisés dans le monde professionnel comme <span className="text-green-500">Docker</span>, <span className="text-green-500">Github</span>, et <span className="text-green-500">Render</span>, qui sont essentiels pour la mise en production des modèles de machine learning.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Points forts de la Roadmap :</h3>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li className="mb-2 flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Progression logique et structurée : Les sujets sont abordés dans un ordre qui permet aux étudiants de construire leurs connaissances de manière cohérente.</span>
          </li>
          <li className="mb-2 flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Projets pratiques à chaque étape : L'intégration de projets concrets aide à renforcer l'apprentissage théorique.</span>
          </li>
          <li className="mb-2 flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Équilibre entre théorie et pratique : La roadmap inclut également des exercices pratiques pour appliquer les techniques apprises.</span>
          </li>
          <li className="mb-2 flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Introduction à des outils professionnels : L’utilisation de Git, GitHub, Docker et le déploiement sur des services cloud.</span>
          </li>
        </ul>
      </div>
    );
  };



const roadmapData = [
  {
    title: "Introduction à Python pour la Data Science",
    duration: "1-2 semaines",
    description: "Maîtriser les bases de Python pour la manipulation de données et l'analyse.",
    content: [
      {
        subtitle: "Concepts de Base de Python",
        details: [
          "Variables et types de données",
          "Structures de contrôle (if, for, while)",
          "Fonctions et modules",
          "Structures de données (listes, dictionnaires, tuples)",
          "Programmation orientée objet"
        ]
      },
      {
        subtitle: "Exercices Pratiques",
        details: [
          "Création d'une application de gestion de tâches",
          "Manipulation de données avec les structures Python",
          "Implémentation d'algorithmes simples"
        ]
      }
    ]
  },
  {
    title: "Gestion de Version avec Git et GitHub",
    duration: "1 semaine",
    description: "Apprendre à utiliser Git pour le contrôle de version et collaborer sur GitHub.",
    content: [
      {
        subtitle: "Introduction à Git",
        details: [
          "Initialisation de dépôts (git init)",
          "Suivi des modifications (git add, git commit)",
          "Branches et fusions (git branch, git merge)",
          "Résolution des conflits"
        ]
      },
      {
        subtitle: "Collaboration avec GitHub",
        details: [
          "Création et gestion de dépôts distants",
          "Pull requests et revue de code",
          "Issues et gestion de projet",
          "Bonnes pratiques de collaboration"
        ]
      },
      {
        subtitle: "Automatisation avec GitHub Actions",
        details: [
          "Configuration de workflows CI/CD",
          "Automatisation des tests",
          "Déploiement continu"
        ]
      }
    ]
  },
  {
    title: "Analyse de Données avec Python",
    duration: "2-3 semaines",
    description: "Utilisation de bibliothèques scientifiques pour manipuler et visualiser les données.",
    content: [
      {
        subtitle: "Manipulation Numérique avec Numpy",
        details: [
          "Création de tableaux",
          "Opérations mathématiques",
          "Manipulation de matrices"
        ]
      },
      {
        subtitle: "Visualisation avec Matplotlib et Seaborn",
        details: [
          "Graphiques simples et complexes",
          "Corrélations et distributions"
        ]
      }
    ]
  },
  {
    title: "Machine Learning avec Scikit-learn",
    duration: "4-6 semaines",
    description: "Apprendre les concepts fondamentaux du Machine Learning et implémenter des modèles.",
    content: [
      {
        subtitle: "Prétraitement des Données",
        details: [
          "Encodage des variables",
          "Normalisation/Standardisation",
          "Imputation des valeurs manquantes"
        ]
      },
      {
        subtitle: "Apprentissage Supervisé",
        details: [
          "Régression linéaire, régression Ridge/Lasso",
          "KNN, SVM, Arbres de décision, Forêts aléatoires",
          "Évaluation des modèles"
        ]
      },
      {
        subtitle: "Apprentissage Non Supervisé",
        details: [
          "K-means clustering, Hierarchical clustering, DBSCAN ",
          "Analyse en Composantes Principales (PCA) , t-SNE ",
          "segmention des groupes"
        ]
      },
      {
        subtitle: "Validation Croisée et Tuning des Hyperparamètres",
        details: [
          "K-fold cross-validation , GridSearchCV, RandomizedSearchCV  ",
          "Sauvegarde et Chargement des Modèles , pickle ,joblib ",
          
        ]
      },
    ]
  },
  {
    title: "Création d'API REST avec Flask",
    duration: "2-3 semaines",
    description: "Créer des API REST pour exposer des modèles de Machine Learning.",
    content: [
      {
        subtitle: "Introduction à Flask",
        details: [
          "Création de routes, gestion des requêtes GET/POST",
          "Gestion des erreurs"
        ]
      },
      {
        subtitle: "Création d'API pour les modèles ML",
        details: [
          "Exposer un modèle de machine learning via une API",
          "Retourner des prédictions à partir des données utilisateurs"
        ]
      }
    ]
  },
  {
    title: "Déploiement sur Render",
    duration: "1-2 semaines",
    description: "Apprendre à déployer les modèles et les API sur des serveurs cloud.",
    content: [
      {
        subtitle: "Déploiement avec Gunicorn et Heroku",
        details: [
          "Déployer Flask ",
          "Héberger l'API sur Render"
        ]
      },
      {
        subtitle: "Utilisation de Docker (Optionnel)",
        details: [
          "Conteneuriser l'application pour faciliter le déploiement",
          "Création de Dockerfile"
        ]
      }
    ]
  },
  {
    title: "Projet Final",
    duration: "2-4 semaines",
    description: "Appliquer tout ce qui a été appris pour développer une application complète.",
    content: [
      {
        subtitle: "Développement d'une Application Complète",
        details: [
          "Préparation des données, modélisation, API Flask",
          "Déploiement sur le cloud, création d'une interface utilisateur"
        ]
      }
    ]
  }
];

const StepContent = ({ content }) => {
    const [openIndex, setOpenIndex] = useState(null);
  
    return (
      <div className="w-full">
        {content.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center w-full text-left p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-all duration-300"
            >
              <div className="flex items-center">
                <Lightbulb className="mr-2 h-4 w-4 text-yellow-500 animate-pulse" />
                <span className="font-medium">{item.subtitle}</span>
              </div>
              {openIndex === index ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
            {openIndex === index && (
              <ul className="pl-6 mt-2 ml-6">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="mb-1 flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  const RoadmapStep = ({ step, index }) => (
    <div className="mb-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500 transform hover:scale-105 transition-transform duration-500 ease-out">
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 text-white rounded-t-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="px-3 py-1 bg-white text-blue-600 text-xs font-bold rounded-full">Étape {index + 1}</span>
          <div className="flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            <span className="text-sm">{step.duration}</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold tracking-wide">{step.title}</h3>
      </div>
      <div className="p-6 bg-gray-50 rounded-b-lg">
        <p className="mb-4 text-gray-700">{step.description}</p>
        <StepContent content={step.content} />
      </div>
    </div>
  );
  
  const MachineLearningRoadmap = () => {
    return (
      <div className="max-w-6xl mx-auto p-8 bg-gray-100 min-h-screen">
        <header className="text-center mb-12 px-6 animate-fadeIn">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 animate-bounce">
            <Rocket className="inline-block h-10 w-10 text-pink-600 mr-2" /> 
            Machine Learning Roadmap
          </h1>
  
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-gray-800">Embarquez dans un voyage captivant</span> à travers le monde du <span className="text-indigo-600 font-semibold">Machine Learning</span> ! Cette roadmap vous guide étape par étape, des bases de Python aux déploiements de modèles en production, avec des outils essentiels comme <span className="text-blue-500 font-semibold">Git</span>, <span className="text-blue-500 font-semibold">GitHub</span>, et <span className="text-green-500 font-semibold">Flask</span>.
            <br /><br />
            Grâce à des projets concrets, vous acquerrez des compétences pratiques pour créer des solutions intelligentes. <span className="text-purple-600 font-semibold">Plongez dans l'avenir</span> et transformez vos idées en réalité grâce à cette roadmap complète et enrichissante !
          </p>
        </header>
  
        <div className="space-y-12 animate-fadeIn">
          {roadmapData.map((step, index) => (
            <RoadmapStep key={index} step={step} index={index} />
          ))}
        </div>


        <RoadmapDescription />
      </div>
    );
  };
  
  export default MachineLearningRoadmap;